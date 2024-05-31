import { z } from "zod";

export const CreditCastSchema = z.union([
  z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
  }),
  z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.null(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
  }),
]);
export type CreditCast = z.infer<typeof CreditCastSchema>;

export const CreditCrewSchema = z.union([
  z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string(),
    credit_id: z.string(),
    department: z.string(),
    job: z.string(),
  }),
  z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.null(),
    credit_id: z.string(),
    department: z.string(),
    job: z.string(),
  }),
]);
export type CreditCrew = z.infer<typeof CreditCrewSchema>;

export const GetCreditsResponseSchema = z.object({
  id: z.number(),
  cast: z.array(CreditCastSchema),
  crew: z.array(CreditCrewSchema),
});

export type GetCreditResponse = z.infer<typeof GetCreditsResponseSchema>;

export const GetCreditRequestSchema = z.object({
  movieId: z.string().optional(),
});
export type GetCreditRequest = z.infer<typeof GetCreditRequestSchema>;
