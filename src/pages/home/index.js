import Header from "@Views/layout/Header";
import {useEffect, useState} from "react";
import {fetchMovies} from "@Services/home/homeService";
import MainHome from "@Views/home/MainHome";
import Container from "react-bootstrap/Container";
import MainPagination from "@Views/layout/MainPagination";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        let data = await fetchMovies(currentPage);
        setListMovie(data.results);
        setTotalPages(data.total_pages);
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
        {listMovie.length && (
          <MainPagination
            handlerCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            isLoading={isLoading}
          />
        )}
      </Container>
    </>
  )
}

export default Home;
