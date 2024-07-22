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

    const projectDeleted = await Project.deleteOne({ titulo: data.titulo });

    if (projectDeleted.deletedCount == 1) {
      return NextResponse.json(
        {
          message: 'Projecto eliminado',
        },
        { status: 201 }
      );
    }
    return NextResponse.json(
      {
        message: 'Error al eliminar projecto',
      },
      {
        status: 400,
      }
    );
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
