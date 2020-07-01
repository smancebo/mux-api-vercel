import BaseMuxService from './base-mux-service';
import { VideoAsset } from '../dto/video-asset';
import { LiveStream } from '../dto/live-stream';
import { MuxResponse } from '../dto/mux-response';

class VideoAssetsService extends BaseMuxService {
  async getAllVideoAssets(): Promise<VideoAsset[]> {
   try {

    const { data } = await this.get<MuxResponse>('assets');
    const { data: assets } = data;
    return assets;

   } catch (e) {
    throw e;
   }
  }

  async getVideoAssetById(id: string): Promise<VideoAsset> {
    try {
      const { data } = await this.get<MuxResponse>(`assets/${id}`);
      const { data: asset } = data;
      return asset;
    } catch(e) {
      throw e;     
    }
  }

  async getAllLiveStreams(): Promise<LiveStream[]> {
    try {
      const { data } = await this.get<MuxResponse>('live-streams');
      const { data: liveStreams } = data;
      return liveStreams;
    } catch (e) {
      throw e;
    }
  }

  async getLiveStreamById(id: string): Promise<LiveStream> {
    try {
      const { data } = await this.get<MuxResponse>(`live-streams/${id}`)
      const { data: liveStream } = data;
      return liveStream;
    } catch (e) {
      throw e;
    }
  }
}

export default new VideoAssetsService('video/v1')