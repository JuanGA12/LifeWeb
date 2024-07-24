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
      parrafo1ES: data.parrafo1ES,
      parrafo1EN: data.parrafo1EN,
      parrafo2ES: data.parrafo2ES,
      parrafo2EN: data.parrafo2EN,
      parrafo3ES: data.parrafo3ES,
      parrafo3EN: data.parrafo3EN,
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
