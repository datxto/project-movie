import baseRequest from "@Services/baseRequest";

export const fetchMovieDetail = async (id) => {
  let details = {};
  let params = {
    append_to_response:
      "videos,external_ids,recommendations,keywords,credits",
  };

  await baseRequest.get(`/movie/${id}`, {
    params: params
  }).then(res => {
    details = res.data;
  })

  return details
};
