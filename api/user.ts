import { NowRequest, NowResponse } from '@vercel/node';
import VideoService from 'service/video-service';

export default async (req: NowRequest, res: NowResponse) => {
  const { name, age } = req.query;
  res.json({
    on: {
      name,
      age
    }
  })
}