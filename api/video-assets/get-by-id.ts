import { NowRequest, NowResponse } from '@vercel/node';
import VideoService from '../service/video-service';

export default async (req: NowRequest, res: NowResponse) => {
  const { id = '' } = req.query;
  let response;
  if (id !== '') {
    try {
      response = await VideoService.getVideoAssetById(id as string);  
    } catch (error) {
      res.status(404).json({ msg: 'NOT FOUND' })
    }
    
  }
  res.json(response)
}