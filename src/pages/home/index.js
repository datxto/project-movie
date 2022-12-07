import Header from "@Views/layout/Header";
import {useEffect, useState} from "react";
import {fetchMovies} from "@Services/home/homeService";
import MainHome from "@Views/home/MainHome";
import Container from "react-bootstrap/Container";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPages] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        let data = await fetchMovies(currentPage);
        setListMovie(data.results);
        setTotalPages(data.totalPages);
        setTotalResults(data.totalResults);
      } catch (err) {
        console.log("LoadMovies error " + err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }

    init();
  }, [currentPage])

  return (
    <>
      <Header />
      <Container className="d-flex flex-wrap mt-4">
        <MainHome listMovie={listMovie} isLoading={isLoading} />
      </Container>
    </>
  )
}

export default Home;
