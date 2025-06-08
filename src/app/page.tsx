'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { FaUserFriends, FaComments, FaHeart } from 'react-icons/fa'

export default function Home() {
  useEffect(() => {
    // Optional entry animation logic if needed
  }, [])

  return (
    <main className="min-h-screen bg-background p-6 font-sans text-black">
      <header className="text-center py-12 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-serif text-darkGreen mb-4">Find the Right Therapist</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover therapists that truly understand you – for your mind, your culture, and your life.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        <Tile
          icon={<FaUserFriends size={36} />}
          title="Accessible Therapy"
          description="Browse a wide range of affordable and culturally sensitive therapists."
          bg="bg-tile-green"
        />
        <Tile
          icon={<FaComments size={36} />}
          title="No Stigma"
          description="Your mental health journey is valid. Find someone who gets it."
          bg="bg-accent-green"
        />
        <Tile
          icon={<FaHeart size={36} />}
          title="Care That Connects"
          description="Therapists who see the full you – not just a list of symptoms."
          bg="bg-dark-green"
        />
      </section>

      <div className="text-center mt-12">
        <Link href="/browse" passHref>
          <button className="button-accent animate-pulseSlow">
            Start Exploring
          </button>
        </Link>
      </div>
    </main>
  )
}

function Tile({ icon, title, description, bg }: { icon: JSX.Element; title: string; description: string; bg: string }) {
  return (
    <div className={`tile ${bg}`}>
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-serif mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  )
}
