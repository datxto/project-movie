import {Card, Col} from "react-bootstrap";
import {getImage} from "@Common/helper";
import "@Views/home/assets/main-home.scss";
import moment from "moment";
import AsyncImage from "@View/layout/AsyncImage";

const MainHome = ({...props}) => {
  const {listMovie} = props;

  const convertImg = (item) => {
    return getImage("w500", item.poster_path);
  };

  const convertDate = (item) => {
    return moment(item.release_date).format("ll");
  };

  return (
    <>
      {listMovie.map((item) => {
        return (
          <Col xs={6} sm={4} lg={3} key={item.id} className="mb-3">
            <Card className='h-100 card_custom'>
              <AsyncImage
                title={item.title}
                alt={item.title}
                variant="top"
                loading="lazy"
                src={convertImg(item)}
              />
              <Card.Body className="body_custom">
                <Card.Title>
                  {item.title ? item.title : item.name}
                </Card.Title>
                <Card.Text>
                  {convertDate(item)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </>
  )
}

export default MainHome;
