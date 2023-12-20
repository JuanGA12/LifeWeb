import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Manager_life_web_prd from '@/models/manager_life_web_prd';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    await connectDB();
    const { username, password } = await request.json();
    const managerFound = await Manager_life_web_prd.findOne({
      username,
    }).select('+password');

    if (!managerFound)
      return NextResponse.json({ message: 'No user found' }, { status: 409 });

    const passwordMatch = await bcrypt.compare(password, managerFound.password);

    if (!passwordMatch)
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 409 }
      );

    return NextResponse.json(
      { managerFoundId: managerFound._id, valid: true },
      { status: 201 }
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
