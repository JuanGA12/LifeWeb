import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Project from '@/models/project';
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    await connectDB();
    const projects = await Project.find(
      {},
      '_id titulo portada url galeria orden'
    );
    console.log(projects);
    if (projects.length == 0) {
      return NextResponse.json(
        { message: 'No projects founds' },
        { status: 403 }
      );
    } else {
      const sortedProjects = projects.slice().sort((a, b) => {
        return Number(a.orden) - Number(b.orden);
      });

      console.log(sortedProjects);
      return NextResponse.json(sortedProjects, { status: 201 });
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
