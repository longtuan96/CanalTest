import { ZodObject, ZodRawShape } from "zod";

export default function validateAndParse<T>(
  schema: ZodObject<ZodRawShape>,
  data: T,
) {
  const parseResult = schema.safeParse(data);
  if (!parseResult.success) {
    throw Error("Validation Failed!");
  }
  return parseResult.data as T;
}
