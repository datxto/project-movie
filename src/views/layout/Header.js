import Container from "react-bootstrap/Container";
import "@Views/layout/assets/header.scss";
import {Button, Form, Navbar, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

const Header = () => {
  let {query} = useParams();
  const navigate = useNavigate();
  const [word, setWord] = useState(query ? query : '');
  const goToSearch = (word) => {
    if (!word.length) return;

    navigate({
      pathname: `/search/${word}`,
    });
  }

  useEffect(() => {
    if (!word.length) {
      navigate({
        pathname: `/`,
      });
    }
  }, [word]);


  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header_custom">
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Nav className="block_search">
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              goToSearch(word);
            }}>
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
              value={word}
              onChange={(e) => {
                setWord(e.currentTarget.value);
              }}
            />
            <Button variant="success outline-success" onClick={() => goToSearch(word)}>Search</Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
