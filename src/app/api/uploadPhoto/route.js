import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { s3Client } from '@/libs/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuid } from 'uuid';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in.' },
      { status: 402 }
    );
  }
  const data = await request.formData();
  const files = [];
  for (const [key, value] of data) {
    files.push({ key, value });
  }

  const bytes = await files[0].value.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileExtension = files[0].value.name.split('.').pop();

  const bucketParams = {
    Bucket: 'lifewebucket',
    Key: `${uuid()}-${files[0].key}.${fileExtension}`,
    Body: buffer,
    ACL: 'public-read',
  };

  try {
    const image = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      'Successfully uploaded object: ' +
        bucketParams.Bucket +
        '/' +
        bucketParams.Key
    );
    return NextResponse.json(
      {
        url: `https://lifewebucket.nyc3.cdn.digitaloceanspaces.com/${bucketParams.Key}`,
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
