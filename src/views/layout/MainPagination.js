import {useEffect, useState} from "react";
import {Pagination} from "react-bootstrap";
import "@Views/layout/assets/main-pagination.scss"
import Container from "react-bootstrap/Container";

const MainPagination = ({...props}) => {
  const {
    handlerCurrentPage,
    currentPage,
    totalPages,
    isLoading,
  } = props;

  const [listPagination, setListPagination] = useState([]);

  useEffect(() => {
    var list = [];
    for (var i = currentPage; i < currentPage + 5; i++) {
      if (i === currentPage && currentPage > 2) {
        list.push(currentPage - 2);
      }
      if (i === currentPage && currentPage > 1) {
        list.push(currentPage - 1);
      }

      if (i <= totalPages) {
        list.push(i);
      }
    }

    setListPagination(list);
  }, [isLoading]);

  return (
    <Container className="custom_pagination">
      <Pagination>
        {currentPage > 1 && (
          <Pagination.First
            onClick={() => handlerCurrentPage(1)}
          />
        )}
        {listPagination.map((item) => {
          return (
            <Pagination.Item
              key={item}
              active={currentPage === item}
              onClick={() => handlerCurrentPage(item)}
            >
              {item}
            </Pagination.Item>
          );
        })}
        {currentPage < totalPages && (
          <Pagination.Last
            onClick={() => handlerCurrentPage(totalPages)}
          />
        )}
      </Pagination>
    </Container>
  );
};

export default MainPagination;
