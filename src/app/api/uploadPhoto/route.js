import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in.' },
      { status: 402 }
    );
  }
  const data = await request.formData();
  const valuesArray = [];
  for (const [key, value] of data) {
    valuesArray.push(value);
  }
  console.log(valuesArray);
  return NextResponse.json({
    message: 'Success',
  });
}
