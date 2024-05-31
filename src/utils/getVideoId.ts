import { VideoItem } from "../services/video/video.type";

export default function (data: VideoItem[]) {
  return data.find((item) => item.name === "Official Trailer")?.key;
}
