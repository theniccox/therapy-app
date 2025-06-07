import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/cloudflare';
import { getTherapistById } from '@/lib/therapists';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { env } = getCloudflareContext();
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid therapist ID' },
        { status: 400 }
      );
    }
    
    const therapist = await getTherapistById(env.DB, id);
    
    if (!therapist) {
      return NextResponse.json(
        { error: 'Therapist not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(therapist);
  } catch (error) {
    console.error('Error fetching therapist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch therapist' },
      { status: 500 }
    );
  }
}
