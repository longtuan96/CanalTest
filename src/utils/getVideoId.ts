import { VideoItem } from "../services/video/video.type";

export default function (data: VideoItem[] | undefined) {
  if (data) {
    return data.find((item) => item.name === "Official Trailer")?.key;
  } else return undefined;
}
