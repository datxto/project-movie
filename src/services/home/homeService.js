import baseRequest from "@Services/baseRequest";

export const fetchMovies = async (page) => {
  let data;
  let params = {
    page: page
  };

  await baseRequest.get(`/movie/now_playing`, {
    params: params
  }).then(res => {
    data = res.data;
  })

  return data;
};
