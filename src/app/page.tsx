import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pattern-bg relative overflow-hidden">
      {/* Artistic blob shapes */}
      <div className="blob-shape blob-1"></div>
      <div className="blob-shape blob-2"></div>
      <div className="blob-shape blob-3"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl gradient-text mb-6">
            Find Your Perfect Therapist
          </h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Discover therapists in London who understand your unique needs and background
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="card card-hover p-10 relative">
            <div className="absolute top-0 left-0 w-full h-2 gradient-bg rounded-t-2xl"></div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Search for Therapists
            </h2>
            <p className="text-text-light mb-8">
              Find therapists based on location, specialties, background, and more. Our unique search helps you find someone who truly understands your needs.
            </p>
            <Link 
              href="/search" 
              className="block w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Start Searching
            </Link>
          </div>

          <div className="card card-hover p-10 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary rounded-t-2xl"></div>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Guided Questionnaire
            </h2>
            <p className="text-text-light mb-8">
              Not sure where to start? Our guided questionnaire will help you articulate your needs and match you with the right therapist.
            </p>
            <Link 
              href="/questionnaire" 
              className="block w-full py-4 px-6 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl text-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Take Questionnaire
            </Link>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Why Choose Our Directory?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Identity Matching</h4>
              <p className="text-text-light">Find therapists who share or understand your cultural background, age group, or gender identity</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Specialized Support</h4>
              <p className="text-text-light">Search by specific symptoms or challenges you're experiencing</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-accent mb-3">Personalized Matching</h4>
              <p className="text-text-light">Our questionnaire helps you articulate your needs and find the right match</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
