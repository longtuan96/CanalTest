import { useQuery } from "@tanstack/react-query";
import validateAndParse from "../../utils/validateAndParse";
import { api } from "../api";
import {
  GetVideoReponseSchema,
  GetVideoRequest,
  GetVideoResponse,
} from "./video.type";
import { QUERY_KEYS } from "../../constants/keys";
import createQueryParams from "../../utils/createQueryParams";

const { VIDEOS } = QUERY_KEYS;
const getVideo = async (payload: GetVideoRequest) => {
  const response = await api.get<GetVideoResponse>(
    `/movie/${payload.movieId}/videos`,
    { params: createQueryParams() },
  );
  return validateAndParse(GetVideoReponseSchema, response.data);
};

export const useGetVideo = (payload: GetVideoRequest) =>
  useQuery({
    queryKey: [VIDEOS, payload],
    queryFn: () => getVideo(payload),
  });
