import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/cloudflare';

export async function POST(request: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const data = await request.json();
    
    // In a real app, this would save the questionnaire data to the database
    // For the prototype, we'll just return success
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error saving questionnaire:', error);
    return NextResponse.json(
      { error: 'Failed to save questionnaire' },
      { status: 500 }
    );
  }
}
