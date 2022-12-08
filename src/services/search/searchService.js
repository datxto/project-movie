import baseRequest from "@Services/baseRequest";

export const fetchSearchMovies = async (page, query) => {
  let data;
  let params = {
    page: page
  };

  await baseRequest.get(`/search/movie/?query=${query}`, {
    params: params
  }).then(res => {
    data = res.data;
  })

  return data;
};
