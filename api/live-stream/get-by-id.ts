import { NowRequest, NowResponse } from '@vercel/node';
import videoService from '../service/video-service';

export default async(req: NowRequest, res: NowResponse) => {
  try {
    const { id } = req.query;
    if (id) {
      const data = await videoService.getLiveStreamById(id as string);
      res.json(data);
    } else {
      res.status(401).json({
        msg: 'Id param is required'
      })
    }
  } catch (error) {
    res.status(400).json({
      msg: 'NOT FOUND'
    })
  }
}