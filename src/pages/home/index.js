import Header from "@Views/layout/Header";
import {useEffect, useState} from "react";
import {fetchMoviePlaying} from "@Services/home/homeService";
import MainHome from "@Views/home/MainHome";
import Container from "react-bootstrap/Container";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPages] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        let data = await fetchMoviePlaying(currentPage);
        setListMovie(data.results);
        setTotalPages(data.totalPages);
        setTotalResults(data.totalResults);
      } catch (err) {
        console.log("LoadMovies error " + err);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [currentPage])

  return (
    <div>
      <Header />
      <Container className="d-flex flex-wrap mt-4">
        <MainHome listMovie={listMovie} />
      </Container>
    </div>
  )
}

export default Home;
