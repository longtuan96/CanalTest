import { useQuery } from "@tanstack/react-query";
import validateAndParse from "../../utils/validateAndParse";
import { api } from "../api";
import {
  GetCreditRequest,
  GetCreditResponse,
  GetCreditsResponseSchema,
} from "./credit.type";
import { QUERY_KEYS } from "../../constants/keys";
import createQueryParams from "../../utils/createQueryParams";

const { CREDITS } = QUERY_KEYS;
const getCredit = async (payload: GetCreditRequest) => {
  const response = await api.get<GetCreditResponse>(
    `/movie/${payload.movieId}/credits`,
    { params: createQueryParams() },
  );
  return validateAndParse(GetCreditsResponseSchema, response.data);
};

export const useGetCredit = (payload: GetCreditRequest) =>
  useQuery({
    queryKey: [CREDITS, payload],
    queryFn: () => getCredit(payload),
  });
