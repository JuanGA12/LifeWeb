import { S3 } from '@aws-sdk/client-s3';

export const s3Client = new S3({
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.DIGITAL_OCEAN_ACCESS_KEY,
    secretAccessKey: process.env.DIGITAL_OCEAN_SECRET_KEY,
  },
});
