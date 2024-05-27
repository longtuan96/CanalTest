/**
 * Process Query Params
 * @param queryParams - the queries
 * @returns queryParams with api_key
 */
export default (queryParams: Record<string, string | number>) => ({
  ...queryParams,
  api_key: import.meta.env.VITE_THEMOVIEDB_KEY,
});
