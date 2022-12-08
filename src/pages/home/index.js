import Header from "@Views/layout/Header";
import {useEffect, useState} from "react";
import {fetchMovies} from "@Services/home/homeService";
import MainHome from "@Views/home/MainHome";
import MainPagination from "@Views/layout/MainPagination";
import { Container } from "react-bootstrap";
import MainSelect from "@Views/layout/MainSelect";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [type, setType] = useState({
    label: 'Now Playing',
    value: 'now_playing',
  });

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        let data = await fetchMovies(currentPage, type.value);
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
  }, [currentPage, type])

  return (
    <>
      <Header />
      <Container className="d-flex flex-wrap mt-4">
        <MainSelect type={type} setCurrentPage={setCurrentPage} setType={setType} />
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
