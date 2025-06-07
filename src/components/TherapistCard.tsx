import { Therapist } from '@/lib/therapists';
import Link from 'next/link';

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <div className="border-0 rounded-2xl p-6 hover:shadow-lg transition-all bg-surface card-hover">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <div className="gradient-bg h-32 w-32 rounded-full mx-auto overflow-hidden flex items-center justify-center text-white font-bold text-2xl shadow-md">
            {therapist.therapist_name.split(' ').map((n: string) => n[0]).join('')}
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-primary mb-1">{therapist.therapist_name}</h3>
          <p className="text-text-light mb-3 flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {therapist.location} 
            <span className="mx-2">•</span>
            <svg className="w-4 h-4 mr-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            £{therapist.hourly_rate_gbp}/hour
          </p>
          <p className="text-text mb-4">{therapist.bio}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {therapist.therapy_type.split(',').map((type: string, i: number) => (
              <span key={i} className="tag">
                {type.trim()}
              </span>
            ))}
            {therapist.online && (
              <span className="tag-online">
                Online Sessions
              </span>
            )}
          </div>
          <Link 
            href={`/therapist/${therapist.therapist_id}`}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
