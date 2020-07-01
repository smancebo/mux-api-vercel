import { NowRequest, NowResponse } from '@vercel/node';
import videoService from '../service/video-service';
import Config from '../config';

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const { id } = req.query;
    if (!id) throw new Error('\'id\' param is required')
    const video = await videoService.getLiveStreamById(id as string);
    res.json(video.playback_ids.map((item) => {
      return {
       thumbnail: `${Config.MUX_IMAGE}/${item.id}/thumbnail.png?width=214&height=121&fit_mode=pad`,
       url: `${Config.MUX_STREAM}/${item.id}`
      }
    }))
  } catch (e) {
    res.status(401).json({
      code: e.code,
      msg: e.message,
    })
  }
  

}