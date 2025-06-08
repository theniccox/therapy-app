// src/app/page.tsx
'use client'

import { HeartIcon, UserIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-brand-light to-brand px-6 py-12 text-foreground font-sans">
      {/* Floating background shape */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-brand-light rounded-full opacity-20 blur-3xl animate-pulseIn z-0" />

      <header className="relative z-10 mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-brand-dark mb-4">
          Find the Right Therapist for You
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 font-sans">
          Accessible, affordable, and stigma-free mental health support.
        </p>
      </header>

      <section className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-16">
        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          <HeartIcon className="w-8 h-8 text-brand animate-pulseIn mb-4" />
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Track Your Mood</h3>
          <p className="text-sm text-foreground/80">
            Keep a log to understand and reflect on your emotions.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          <UserIcon className="w-8 h-8 text-brand animate-pulseIn mb-4" />
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Find a Therapist</h3>
          <p className="text-sm text-foreground/80">
            Search by therapy type, location, or personal preferences.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white shadow-card hover:shadow-glow transition duration-300">
          <ChatBubbleOvalLeftIcon className="w-8 h-8 text-brand animate-pulseIn mb-4" />
          <h3 className="text-xl font-semibold text-brand-dark mb-1">Learn and Grow</h3>
          <p className="text-sm text-foreground/80">
            Read resources to better understand mental wellbeing.
          </p>
        </div>
      </section>

      <div className="relative z-10 flex justify-center gap-4 flex-wrap">
        <a
          href="/therapists"
          className="px-6 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition animate-pulseIn"
        >
          Browse Therapists
        </a>
        <a
          href="/resources"
          className="px-6 py-3 rounded-full border border-brand text-brand font-medium hover:bg-brand-light transition"
        >
          View Resources
        </a>
      </div>
    </main>
  )
}
