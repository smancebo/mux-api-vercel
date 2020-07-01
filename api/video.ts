import { NowRequest, NowResponse } from '@vercel/node';
import VideoService from './service/video-service';

export default async (req: NowRequest, res: NowResponse) => {

  const response = await VideoService.getAllVideoAssets()

  res.json(response)
}