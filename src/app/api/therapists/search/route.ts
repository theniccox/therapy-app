import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/cloudflare';
import { searchTherapists, SearchParams } from '@/lib/therapists';

export async function POST(request: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const searchParams: SearchParams = await request.json();
    
    const therapists = await searchTherapists(env.DB, searchParams);
    
    return NextResponse.json(therapists);
  } catch (error) {
    console.error('Error searching therapists:', error);
    return NextResponse.json(
      { error: 'Failed to search therapists' },
      { status: 500 }
    );
  }
}
