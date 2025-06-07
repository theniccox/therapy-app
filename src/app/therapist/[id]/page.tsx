'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Therapist } from '@/lib/therapists';

export default function TherapistProfile() {
  const { id } = useParams();
  const [therapist, setTherapist] = useState<Therapist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTherapist = async () => {
      try {
        const response = await fetch(`/api/therapists/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch therapist details');
        }
        
        const data = await response.json();
        setTherapist(data);
      } catch (err) {
        setError('Could not load therapist details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapist();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !therapist) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/search" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
            &larr; Back to Search
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Error</h1>
            <p className="text-gray-600 mb-6">{error || 'Therapist not found'}</p>
            <Link 
              href="/search" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg"
            >
              Return to Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const experienceYears = new Date().getFullYear() - therapist.experience_start;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/search" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
          &larr; Back to Search
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 px-6 py-12 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="bg-white h-40 w-40 rounded-full mx-auto overflow-hidden border-4 border-white">
                  {/* Placeholder for profile image */}
                  <div className="h-full w-full flex items-center justify-center text-gray-500 text-4xl font-bold bg-gray-100">
                    {therapist.therapist_name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left md:pl-8">
                <h1 className="text-3xl font-bold mb-2">{therapist.therapist_name}</h1>
                <p className="text-blue-100 text-lg mb-4">{therapist.therapy_type}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                  <span className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                    £{therapist.hourly_rate_gbp}/hour
                  </span>
                  <span className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                    {therapist.location}
                  </span>
                  {therapist.online && (
                    <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                      Online Sessions
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
                <p className="text-gray-700">{experienceYears} years (since {therapist.experience_start})</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
                <p className="text-gray-700">{therapist.language}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Faith Background</h3>
                <p className="text-gray-700">{therapist.faith || 'None specified'}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{therapist.bio}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Specialties</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Areas of Focus</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>{therapist.reason || 'General counseling'}</li>
                    {therapist.sub_reason && <li>{therapist.sub_reason}</li>}
                    <li>Personal development</li>
                    <li>Mental wellbeing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Demographic Experience</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Age: {therapist.is_age}</li>
                    <li>Supports ages: {therapist.supports_age}</li>
                    <li>Background: {therapist.is_race}</li>
                    <li>Supports backgrounds: {therapist.supports_race}</li>
                    <li>Gender: {therapist.is_gender}</li>
                    <li>Supports genders: {therapist.supports_gender}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                To book a session with {therapist.therapist_name.split(' ')[0]}, please use the button below.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Request Appointment
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>Source: {therapist.source_id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
