import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {name, email, message} = body;

    if (!name || !email || !message) {
      return NextResponse.json({error: 'Missing required fields'}, {status: 400});
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    return NextResponse.json({message: 'Email sent successfully!'}, {status: 200});
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({error: error.message || 'Internal Server Error'}, {status: 500});
  }
}
