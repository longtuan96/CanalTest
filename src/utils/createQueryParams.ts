export default (
  queryParams: Record<string, string | number | null | undefined> = {},
) => ({
  ...queryParams,
  api_key: import.meta.env.VITE_THEMOVIEDB_KEY,
});
