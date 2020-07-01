import { NowRequest, NowResponse } from '@vercel/node';
import VideoService from '../service/video-service';

export default async (req: NowRequest, res: NowResponse) => {
 try {
   const videosAssets = await VideoService.getAllVideoAssets();
   res.json(videosAssets);
 } catch (e) {
    res.status(401).json({ code: e.code, msg: e.message })
 }
}