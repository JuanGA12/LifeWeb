import { connectDB } from '@/libs/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Manager_life_web_prd from '@/models/manager_life_web_prd';

export async function POST(request) {
  try {
    await connectDB();

    const { newPassword, UserId, _id, managerPassword } = await request.json();

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
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const editedUser = await User.updateOne(
      { _id: UserId },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );
    console.log(editedUser);
    return NextResponse.json(
      {
        edited: true,
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
