import baseRequest from "@Services/baseRequest";

export const fetchMoviePlaying = async (page) => {
  let results = [];
  let totalPages = 0;
  let totalResults = 0;
  let params = {
    page: page
  };

  await baseRequest.get(`/movie/now_playing`, {
    params: params
  }).then(res => {
    results = res.data.results;
    totalPages = res.data.total_pages;
    totalResults = res.data.total_results;
  })

  return {
    results: results,
    totalPages: totalPages,
    totalResults: totalResults,
  }
};
