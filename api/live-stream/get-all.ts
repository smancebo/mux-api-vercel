import { NowRequest, NowResponse } from '@vercel/node';
import videoService from '../service/video-service';

export default async (req: NowRequest, res: NowResponse) => {
  const data = await videoService.getAllLiveStreams();
  res.json(data)
}