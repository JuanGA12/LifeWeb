import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Project from '@/models/project';
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    await connectDB();
    const projects = await Project.find({}, 'titulo portada');
    if (projects.length == 0) {
      return NextResponse.json(
        { message: 'No projects founds' },
        { status: 409 }
      );
    } else {
      return NextResponse.json(projects, { status: 201 });
    }
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
