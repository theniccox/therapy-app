import { D1Database } from '@cloudflare/workers-types';

export interface Therapist {
  therapist_id: number;
  therapist_name: string;
  location: string;
  hourly_rate_gbp: number;
  is_age: string;
  supports_age: string;
  is_race: string;
  supports_race: string;
  is_gender: string;
  supports_gender: string;
  reason: string;
  sub_reason: string;
  experience_start: number;
  therapy_type: string;
  language: string;
  faith: string;
  source_id: string;
  online: boolean;
  profile_image: string;
  bio: string;
}

export interface SearchParams {
  location?: string;
  hourly_rate_min?: number;
  hourly_rate_max?: number;
  is_age?: string;
  supports_age?: string;
  is_race?: string;
  supports_race?: string;
  is_gender?: string;
  supports_gender?: string;
  reason?: string;
  sub_reason?: string;
  therapy_type?: string;
  language?: string;
  faith?: string;
  online?: boolean;
}

// Mock data for development purposes
const mockTherapists: Therapist[] = [
  {
    therapist_id: 1,
    therapist_name: 'Dr. Sarah Johnson',
    location: 'Wembley, London',
    hourly_rate_gbp: 85,
    is_age: '35-45',
    supports_age: '18-65',
    is_race: 'White British',
    supports_race: 'All backgrounds',
    is_gender: 'Female',
    supports_gender: 'All genders',
    reason: 'Anxiety',
    sub_reason: 'Social anxiety',
    experience_start: 2010,
    therapy_type: 'CBT',
    language: 'English',
    faith: 'None',
    source_id: 'counselling-directory',
    online: true,
    profile_image: '/images/therapist1.jpg',
    bio: 'Specializing in anxiety and depression with 13 years of experience.'
  },
  {
    therapist_id: 2,
    therapist_name: 'Michael Chen',
    location: 'Wembley, London',
    hourly_rate_gbp: 70,
    is_age: '30-40',
    supports_age: '16-70',
    is_race: 'Asian',
    supports_race: 'Asian, Black, Mixed',
    is_gender: 'Male',
    supports_gender: 'Male, Non-binary',
    reason: 'Depression',
    sub_reason: 'Clinical depression',
    experience_start: 2015,
    therapy_type: 'Psychodynamic',
    language: 'English, Mandarin',
    faith: 'Buddhist',
    source_id: 'psychology-today',
    online: true,
    profile_image: '/images/therapist2.jpg',
    bio: 'Helping clients explore their inner world through psychodynamic therapy.'
  },
  {
    therapist_id: 3,
    therapist_name: 'Amara Okafor',
    location: 'Wembley, London',
    hourly_rate_gbp: 90,
    is_age: '40-50',
    supports_age: 'All ages',
    is_race: 'Black African',
    supports_race: 'Black, Mixed race',
    is_gender: 'Female',
    supports_gender: 'Female, LGBTQ+',
    reason: 'Trauma',
    sub_reason: 'PTSD',
    experience_start: 2008,
    therapy_type: 'EMDR',
    language: 'English, Yoruba',
    faith: 'Christian',
    source_id: 'therapist-directory',
    online: false,
    profile_image: '/images/therapist3.jpg',
    bio: 'Trauma specialist with expertise in EMDR and somatic experiencing.'
  },
  {
    therapist_id: 4,
    therapist_name: 'James Wilson',
    location: 'Wembley, London',
    hourly_rate_gbp: 65,
    is_age: '50-60',
    supports_age: '25-75',
    is_race: 'White British',
    supports_race: 'All backgrounds',
    is_gender: 'Male',
    supports_gender: 'All genders',
    reason: 'Relationships',
    sub_reason: 'Couples therapy',
    experience_start: 2005,
    therapy_type: 'Systemic',
    language: 'English',
    faith: 'None',
    source_id: 'counselling-directory',
    online: true,
    profile_image: '/images/therapist4.jpg',
    bio: 'Relationship counselor with over 20 years of experience helping couples.'
  },
  {
    therapist_id: 5,
    therapist_name: 'Priya Patel',
    location: 'Wembley, London',
    hourly_rate_gbp: 75,
    is_age: '35-45',
    supports_age: '18-60',
    is_race: 'South Asian',
    supports_race: 'South Asian, Middle Eastern',
    is_gender: 'Female',
    supports_gender: 'Female',
    reason: 'Identity',
    sub_reason: 'Cultural identity',
    experience_start: 2012,
    therapy_type: 'Integrative',
    language: 'English, Hindi, Gujarati',
    faith: 'Hindu',
    source_id: 'psychology-today',
    online: true,
    profile_image: '/images/therapist5.jpg',
    bio: 'Specializing in cultural identity issues and intergenerational trauma.'
  },
  {
    therapist_id: 6,
    therapist_name: 'David Thompson',
    location: 'Wembley, London',
    hourly_rate_gbp: 80,
    is_age: '45-55',
    supports_age: 'All ages',
    is_race: 'White British',
    supports_race: 'All backgrounds',
    is_gender: 'Male',
    supports_gender: 'Male, LGBTQ+',
    reason: 'Addiction',
    sub_reason: 'Substance abuse',
    experience_start: 2007,
    therapy_type: 'CBT, Motivational Interviewing',
    language: 'English',
    faith: 'None',
    source_id: 'therapist-directory',
    online: false,
    profile_image: '/images/therapist6.jpg',
    bio: 'Addiction specialist with experience in substance abuse and behavioral addictions.'
  },
  {
    therapist_id: 7,
    therapist_name: 'Fatima Ahmed',
    location: 'Wembley, London',
    hourly_rate_gbp: 70,
    is_age: '30-40',
    supports_age: '16-65',
    is_race: 'Middle Eastern',
    supports_race: 'Middle Eastern, South Asian',
    is_gender: 'Female',
    supports_gender: 'Female',
    reason: 'Anxiety',
    sub_reason: 'Religious/cultural conflict',
    experience_start: 2014,
    therapy_type: 'Person-centered',
    language: 'English, Arabic',
    faith: 'Muslim',
    source_id: 'counselling-directory',
    online: true,
    profile_image: '/images/therapist7.jpg',
    bio: 'Helping clients navigate cultural and religious identity conflicts.'
  },
  {
    therapist_id: 8,
    therapist_name: 'Robert Kim',
    location: 'Wembley, London',
    hourly_rate_gbp: 95,
    is_age: '40-50',
    supports_age: '18-70',
    is_race: 'East Asian',
    supports_race: 'All backgrounds',
    is_gender: 'Male',
    supports_gender: 'All genders',
    reason: 'Work stress',
    sub_reason: 'Burnout',
    experience_start: 2006,
    therapy_type: 'ACT',
    language: 'English, Korean',
    faith: 'None',
    source_id: 'psychology-today',
    online: true,
    profile_image: '/images/therapist8.jpg',
    bio: 'Executive coach and therapist specializing in workplace stress and burnout.'
  },
  {
    therapist_id: 9,
    therapist_name: 'Olivia Martinez',
    location: 'Wembley, London',
    hourly_rate_gbp: 85,
    is_age: '35-45',
    supports_age: 'All ages',
    is_race: 'Hispanic',
    supports_race: 'All backgrounds',
    is_gender: 'Female',
    supports_gender: 'All genders',
    reason: 'Family issues',
    sub_reason: 'Parenting',
    experience_start: 2011,
    therapy_type: 'Family Systems',
    language: 'English, Spanish',
    faith: 'Catholic',
    source_id: 'therapist-directory',
    online: false,
    profile_image: '/images/therapist9.jpg',
    bio: 'Family therapist helping parents and children build healthier relationships.'
  },
  {
    therapist_id: 10,
    therapist_name: 'Kwame Osei',
    location: 'Wembley, London',
    hourly_rate_gbp: 75,
    is_age: '30-40',
    supports_age: '16-60',
    is_race: 'Black African',
    supports_race: 'Black, Mixed race',
    is_gender: 'Male',
    supports_gender: 'Male',
    reason: 'Self-esteem',
    sub_reason: 'Racial identity',
    experience_start: 2013,
    therapy_type: 'Narrative Therapy',
    language: 'English',
    faith: 'Christian',
    source_id: 'counselling-directory',
    online: true,
    profile_image: '/images/therapist10.jpg',
    bio: 'Helping clients rewrite their personal narratives and build confidence.'
  }
];

export async function getTherapists(db: D1Database): Promise<Therapist[]> {
  // For development, return mock data
  return mockTherapists;
}

export async function searchTherapists(db: D1Database, params: SearchParams): Promise<Therapist[]> {
  // For development, filter mock data based on search parameters
  let results = [...mockTherapists];
  
  if (params.location) {
    results = results.filter(t => 
      t.location.toLowerCase().includes(params.location!.toLowerCase())
    );
  }
  
  if (params.hourly_rate_min !== undefined) {
    results = results.filter(t => t.hourly_rate_gbp >= params.hourly_rate_min!);
  }
  
  if (params.hourly_rate_max !== undefined) {
    results = results.filter(t => t.hourly_rate_gbp <= params.hourly_rate_max!);
  }
  
  if (params.is_age) {
    results = results.filter(t => t.is_age === params.is_age);
  }
  
  if (params.supports_age) {
    results = results.filter(t => 
      t.supports_age.toLowerCase().includes(params.supports_age!.toLowerCase())
    );
  }
  
  if (params.is_race) {
    results = results.filter(t => t.is_race === params.is_race);
  }
  
  if (params.supports_race) {
    results = results.filter(t => 
      t.supports_race.toLowerCase().includes(params.supports_race!.toLowerCase())
    );
  }
  
  if (params.is_gender) {
    results = results.filter(t => t.is_gender === params.is_gender);
  }
  
  if (params.supports_gender) {
    results = results.filter(t => 
      t.supports_gender.toLowerCase().includes(params.supports_gender!.toLowerCase())
    );
  }
  
  if (params.reason) {
    results = results.filter(t => 
      t.reason.toLowerCase().includes(params.reason!.toLowerCase())
    );
  }
  
  if (params.sub_reason) {
    results = results.filter(t => 
      t.sub_reason && t.sub_reason.toLowerCase().includes(params.sub_reason!.toLowerCase())
    );
  }
  
  if (params.therapy_type) {
    results = results.filter(t => 
      t.therapy_type.toLowerCase().includes(params.therapy_type!.toLowerCase())
    );
  }
  
  if (params.language) {
    results = results.filter(t => 
      t.language.toLowerCase().includes(params.language!.toLowerCase())
    );
  }
  
  if (params.faith) {
    results = results.filter(t => 
      t.faith.toLowerCase().includes(params.faith!.toLowerCase())
    );
  }
  
  if (params.online !== undefined) {
    results = results.filter(t => t.online === params.online);
  }
  
  return results;
}

export async function getTherapistById(db: D1Database, id: number): Promise<Therapist | null> {
  // For development, find therapist by ID in mock data
  const therapist = mockTherapists.find(t => t.therapist_id === id);
  return therapist || null;
}
