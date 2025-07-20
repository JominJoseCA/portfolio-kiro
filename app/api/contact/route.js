import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // In production, this will be handled by Firebase Functions
    // For local development, you can use the Firebase emulator
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? '/api/contact'  // Firebase Functions will handle this
      : 'http://localhost:5001/jomin-portfolio/us-central1/api/contact'  // Firebase emulator
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}