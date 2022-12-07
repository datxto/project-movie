import Header from "@Views/layout/Header";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchMovieDetail} from "@Services/details/detailService";
import MainDetail from "@Views/detail/MainDetail";

const Details = () => {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        let data = await fetchMovieDetail(id);
        setDetails(data);
      } catch (err) {
        console.log("Movie detail error " + err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    if (id) {
      init();
    }
  }, [id])

  return (
    <>
      <Header />
      <MainDetail details={details} isLoading={isLoading} />
    </>
  )
};

export default Details;
