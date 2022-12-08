import Header from "@Views/layout/Header";
import {useEffect, useState} from "react";
import MainHome from "@Views/home/MainHome";
import MainPagination from "@Views/layout/MainPagination";
import { Container } from "react-bootstrap";
import {fetchSearchMovies} from "@Services/search/searchService";
import {useParams} from "react-router-dom";

const Search = () => {
  const [listMovie, setListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let {query} = useParams();

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        let data = await fetchSearchMovies(currentPage, query);
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
        <p style={{width: '100%', color: '#000', fontWeight: '400', textAlign: 'left', fontSize: '20px', padding: '0 10px'}}>
          Results returned with the keyword: <b>{query}</b>
        </p>
        <MainHome listMovie={listMovie} isLoading={isLoading} viewType="grid" />
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

export default Search;
