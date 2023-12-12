import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { s3Client } from '@/libs/s3Client';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in.' },
      { status: 402 }
    );
  }
  const { imageLink } = await request.json();
  const fileKey = imageLink.split('/')[3];
  const bucketParams = {
    Bucket: 'lifewebucket',
    Key: fileKey,
  };
  try {
    const response = await s3Client.send(new DeleteObjectCommand(bucketParams));
    console.log('Successfully deleted object: ' + bucketParams.Key);
    return NextResponse.json(
      {
        message: 'Successfully deleted object',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 400,
      }
    );
  }
}
