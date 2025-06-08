// src/components/Card.tsx
import React from 'react'

type Props = {
  icon?: React.ReactNode
  title: string
  description: string
}

export default function Card({ icon, title, description }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all animate-fadeIn">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="p-2 bg-brand-light rounded-full">{icon}</div>}
        <h3 className="text-xl font-semibold text-brand">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
