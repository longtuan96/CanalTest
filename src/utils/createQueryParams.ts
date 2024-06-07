export default function createQueryParams(
  queryParams: Record<string, string | number | null | undefined> = {},
) {
  return {
    ...queryParams,
    api_key: import.meta.env.VITE_THEMOVIEDB_KEY,
  };
}
