import baseRequest from "@Services/baseRequest";

export const fetchMovies = async (page, type) => {
  let data;
  let params = {
    page: page
  };

  await baseRequest.get(`/movie/${type}`, {
    params: params
  }).then(res => {
    data = res.data;
  })

  return data;
};
