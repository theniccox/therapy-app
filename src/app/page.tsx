// src/app/page.tsx
'use client'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-brand-light to-brand px-6 py-12 text-foreground font-sans">
      {/* Floating background shape */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-brand-light rounded-full opacity-20 blur-3xl animate-pulseIn z-0" />

      <header className="relative z-10 mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-brand-dark mb-4">
          SENS APP
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 font-sans">
          Our mission: Create a world where accessible, affordable, and stigma-free mental health support is the norm.
        </p>
      </header>

      <section className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-16">
        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          {/* Heart Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand animate-pulseIn mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Track Your Mood</h3>
          <p className="text-sm text-foreground/80">
            Keep a log to understand and reflect on your emotions.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          {/* User Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand animate-pulseIn mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Find a Therapist</h3>
          <p className="text-sm text-foreground/80">
            Search by therapy type, location, or personal preferences.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          {/* Chat Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand animate-pulseIn mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Learn and Grow</h3>
          <p className="text-sm text-foreground/80">
            Read resources to better understand mental wellbeing.
          </p>
        </div>
      </section>

      <div className="relative z-10 flex justify-center gap-4 flex-wrap">
        <a
          href="/search"
          className="px-6 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition animate-pulseIn"
        >
          Browse Therapists
        </a>
        <a
          href="/questionnaire"
          className="px-6 py-3 rounded-full border border-brand text-brand font-medium hover:bg-brand-light transition"
        >
          Take Our Questionnaire
        </a>
      </div>
    </main>
   )
}
