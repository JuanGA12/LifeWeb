import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/user';
import Manager_life_web_prd from '@/models/manager_life_web_prd';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
export async function POST(request) {
  try {
    await connectDB();
    const { _id } = await request.json();
    const managerFound = await Manager_life_web_prd.findOne({
      _id,
    });

    if (!managerFound)
      return NextResponse.json(
        { message: 'Invalid user made request' },
        { status: 409 }
      );

    const users = await User.find({}, 'email');
    if (users.length == 0) {
      return NextResponse.json({ message: 'No users founds' }, { status: 409 });
    } else {
      return NextResponse.json({ users, valid: true }, { status: 201 });
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
