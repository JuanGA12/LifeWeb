import { connectDB } from '@/libs/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import Blog from '@/models/blog';
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

    const blog = {
      _id: data._id,
      parrafoEN: data.parrafoEN,
      parrafoES: data.parrafoES,
    };
    const updateBlog = await Blog.findOneAndUpdate(
      { _id: blog._id },
      { $set: blog },
      { new: true }
    );
    return NextResponse.json(updateBlog, { status: 201 });
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
