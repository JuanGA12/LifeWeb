import { connectDB } from '@/libs/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import Project from '@/models/project';
import mongoose from 'mongoose';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in.' },
      { status: 402 }
    );
  }
  try {
    await connectDB();
    const data = await request.json();
    console.log('data', data);
    const projectFound = await Project.findOne({ titulo: data.titulo });

    if (projectFound)
      return NextResponse.json(
        {
          message: 'Titulo already exists',
          exists: true,
        },
        {
          status: 409,
        }
      );

    return NextResponse.json({ exists: false }, { status: 201 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
