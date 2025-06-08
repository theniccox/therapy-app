// src/app/page.tsx
import Card from '@/components/Card'
import { Sparkles, Heart, User, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-gray-800">
      <header className="text-center py-16 bg-gradient-to-br from-brand-light to-brand">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark animate-fadeIn">
          Find the Right Therapist for You
        </h1>
        <p className="mt-4 text-lg md:text-xl text-brand-dark animate-fadeIn delay-200">
          Accessible, affordable, and stigma-free mental health support.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 py-12">
        <Card
          icon={<User className="w-6 h-6 text-brand" />}
          title="Browse Therapists"
          description="Explore a curated list of professionals tailored to your needs."
        />

        <Card
          icon={<Heart className="w-6 h-6 text-brand" />}
          title="Track Your Mood"
          description="Keep a personal log to understand your emotional patterns."
        />

        <Card
          icon={<BookOpen className="w-6 h-6 text-brand" />}
          title="Resources"
          description="Helpful guides, articles, and practices for your journey."
        />

        <Card
          icon={<Sparkles className="w-6 h-6 text-brand" />}
          title="Safe & Secure"
          description="We prioritise privacy. Your data stays yours."
        />
      </section>
    </main>
  )
}
