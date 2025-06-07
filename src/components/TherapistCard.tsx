import { Therapist } from '@/lib/therapists';

interface TherapistCardProps {
  therapist: Therapist;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <div className="card-hover bg-white rounded-xl shadow-lg border border-sage-200 p-6 mb-6 pattern-bg">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-sage-500 rounded-full flex items-center justify-center text-white font-display font-semibold text-xl">
            {therapist.therapist_name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">
                {therapist.therapist_name}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <svg className="icon-sm text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-sage-600">{therapist.location}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">
                £{therapist.hourly_rate_gbp}
              </div>
              <div className="text-sm text-sage-600">per hour</div>
            </div>
          </div>
          
          {/* Specialties */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {therapist.therapy_type && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {therapist.therapy_type}
                </span>
              )}
              {therapist.language && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-earth-100 text-earth-800">
                  <svg className="icon-sm mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                  </svg>
                  {therapist.language}
                </span>
              )}
              {therapist.online && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-terracotta-100 text-terracotta-800">
                  <svg className="icon-sm mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-5L9 15.5 7 13H4a1 1 0 01-1-1V4zm2 3a1 1 0 000 2h8a1 1 0 100-2H5zm0 3a1 1 0 000 2h3a1 1 0 100-2H5z" clipRule="evenodd" />
                  </svg>
                  Online Sessions
                </span>
              )}
            </div>
          </div>
          
          {/* Demographics */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            {therapist.is_age && (
              <div className="flex items-center space-x-2">
                <svg className="icon-sm text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-sage-700">Age: {therapist.is_age}</span>
              </div>
            )}
            {therapist.is_gender && (
              <div className="flex items-center space-x-2">
                <svg className="icon-sm text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sage-700">{therapist.is_gender}</span>
              </div>
            )}
          </div>
          
          {/* Experience */}
          {therapist.experience_start && (
            <div className="flex items-center space-x-2 mb-4">
              <svg className="icon-sm text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM8 8a1 1 0 012 0v2a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v2a1 1 0 11-2 0V8z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-sage-700">
                {new Date().getFullYear() - therapist.experience_start} years of experience
              </span>
            </div>
          )}
          
          {/* Action Button */}
          <div className="flex items-center justify-between">
            <button className="btn-primary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              View Profile
            </button>
            
            {therapist.faith && (
              <div className="flex items-center space-x-1 text-sm text-sage-600">
                <svg className="icon-sm" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>{therapist.faith}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
