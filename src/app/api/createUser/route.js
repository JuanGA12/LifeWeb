import { connectDB } from '@/libs/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Manager_life_web_prd from '@/models/manager_life_web_prd';

export async function POST(request) {
  try {
    await connectDB();

    const { email, password, _id, managerPassword } = await request.json();

    const managerFound = await Manager_life_web_prd.findOne({
      _id,
    }).select('+password');

    if (!managerFound)
      return NextResponse.json(
        { message: 'Invalid user made request' },
        { status: 409 }
      );

    const passwordMatch = await bcrypt.compare(
      managerPassword,
      managerFound.password
    );
    if (!passwordMatch)
      return NextResponse.json(
        { message: 'Invalid user made request' },
        { status: 409 }
      );
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: 'Email already exists',
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json(
      {
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
        valid: true,
      },
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
