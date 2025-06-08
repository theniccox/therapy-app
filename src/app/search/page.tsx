'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchParams } from '@/lib/therapists';
import TherapistCard from '@/components/TherapistCard';


export default function Search() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: 'Wembley, London',
    hourly_rate_min: undefined,
    hourly_rate_max: undefined,
    is_age: '',
    supports_age: '',
    is_race: '',
    supports_race: '',
    is_gender: '',
    supports_gender: '',
    reason: '',
    sub_reason: '',
    therapy_type: '',
    language: '',
    faith: '',
    online: undefined
  });
  
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setSearchParams(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'hourly_rate_min' || name === 'hourly_rate_max') {
      setSearchParams(prev => ({ ...prev, [name]: value ? Number(value) : undefined }));
    } else {
      setSearchParams(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/therapists/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams),
      });
      
      if (!response.ok) {
        throw new Error('Search failed');
      }
      
      const data = await response.json();
      setTherapists(data);
    } catch (error) {
      console.error('Error searching therapists:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial search on page load
  useEffect(() => {
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  }, []);

  return (
    <div className="min-h-screen pattern-bg relative overflow-hidden">
      {/* Artistic blob shapes */}
      <div className="blob-shape blob-1"></div>
      <div className="blob-shape blob-2"></div>
      <div className="blob-shape blob-3"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/" className="inline-flex items-center mb-8 text-primary hover:text-primary-dark font-medium transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl gradient-text mb-8">Find Your Therapist</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="card p-8 sticky top-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={searchParams.location}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. Wembley, London"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2">
                    Price Range (£)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      id="hourly_rate_min"
                      name="hourly_rate_min"
                      value={searchParams.hourly_rate_min || ''}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      id="hourly_rate_max"
                      name="hourly_rate_max"
                      value={searchParams.hourly_rate_max || ''}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Max"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2" htmlFor="reason">
                    Reason for Therapy
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={searchParams.reason}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="">Any reason</option>
                    <option value="Anxiety">Anxiety</option>
                    <option value="Depression">Depression</option>
                    <option value="Trauma">Trauma</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Identity">Identity</option>
                    <option value="Addiction">Addiction</option>
                    <option value="Work stress">Work stress</option>
                    <option value="Family issues">Family issues</option>
                    <option value="Self-esteem">Self-esteem</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-text font-medium mb-2" htmlFor="therapy_type">
                    Therapy Type
                  </label>
                  <select
                    id="therapy_type"
                    name="therapy_type"
                    value={searchParams.therapy_type}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="">Any type</option>
                    <option value="CBT">CBT</option>
                    <option value="Psychodynamic">Psychodynamic</option>
                    <option value="EMDR">EMDR</option>
                    <option value="Systemic">Systemic</option>
                    <option value="Integrative">Integrative</option>
                    <option value="Person-centered">Person-centered</option>
                    <option value="ACT">ACT</option>
                    <option value="Family Systems">Family Systems</option>
                    <option value="Narrative Therapy">Narrative Therapy</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="online"
                      name="online"
                      checked={searchParams.online === true}
                      onChange={handleChange}
                      className="checkbox-field"
                    />
                    <label className="ml-2 block text-text font-medium" htmlFor="online">
                      Online Sessions Available
                    </label>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center text-primary hover:text-primary-dark text-sm font-medium mb-6"
                >
                  {expanded ? (
                    <>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                      </svg>
                      Hide advanced filters
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                      Show advanced filters
                    </>
                  )}
                </button>
                
                {expanded && (
                  <div className="space-y-6 border-t border-gray-200 pt-6 mb-6">
                    <div>
                      <label className="block text-text font-medium mb-2" htmlFor="is_gender">
                        Therapist Gender
                      </label>
                      <select
                        id="is_gender"
                        name="is_gender"
                        value={searchParams.is_gender}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Any gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Non-binary">Non-binary</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-text font-medium mb-2" htmlFor="is_race">
                        Therapist Background
                      </label>
                      <select
                        id="is_race"
                        name="is_race"
                        value={searchParams.is_race}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Any background</option>
                        <option value="White British">White British</option>
                        <option value="Black African">Black African</option>
                        <option value="South Asian">South Asian</option>
                        <option value="East Asian">East Asian</option>
                        <option value="Middle Eastern">Middle Eastern</option>
                        <option value="Hispanic">Hispanic</option>
                        <option value="Asian">Asian</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-text font-medium mb-2" htmlFor="language">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={searchParams.language}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Any language</option>
                        <option value="English">English</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Yoruba">Yoruba</option>
                        <option value="Korean">Korean</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-text font-medium mb-2" htmlFor="faith">
                        Faith Background
                      </label>
                      <select
                        id="faith"
                        name="faith"
                        value={searchParams.faith}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Any faith</option>
                        <option value="None">None</option>
                        <option value="Christian">Christian</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddhist">Buddhist</option>
                        <option value="Jewish">Jewish</option>
                        <option value="Sikh">Sikh</option>
                        <option value="Catholic">Catholic</option>
                      </select>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </div>
                  ) : 'Search Therapists'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </span>
                ) : (
                  <>
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      {therapists.length}
                    </span>
                    Therapists Found
                  </>
                )}
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
                </div>
              ) : therapists.length === 0 ? (
                <div className="text-center py-16 bg-primary-light/10 rounded-2xl">
                  <svg className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-text-light text-lg">No therapists found matching your criteria. Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {therapists.map((therapist: any) => (
                    <TherapistCard key={therapist.therapist_id} therapist={therapist} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
