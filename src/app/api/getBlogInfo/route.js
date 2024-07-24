import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Blog from '@/models/blog';

import mongoose from 'mongoose';

export async function POST(request) {
  try {
    await connectDB();
    const { validation } = await request.json();
    if (validation != 'x07v') {
      return NextResponse.json(
        { message: 'Error de validación' },
        { status: 409 }
      );
    }
    const blog = await Blog.findOne();
    if (!blog)
      return NextResponse.json(
        { message: 'No hay info del blog' },
        { status: 409 }
      );
    return NextResponse.json(blog, { status: 201 });
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
