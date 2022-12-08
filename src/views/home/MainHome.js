import {Card, Col} from "react-bootstrap";
import {getImage} from "@Common/helper";
import "@Views/home/assets/main-home.scss";
import moment from "moment";
import AsyncImage from "@Views/layout/AsyncImage.js";
import { Link } from "react-router-dom";
import Skeleton from "@Views/layout/Skeleton";

const MainHome = ({...props}) => {
  const {listMovie, isLoading, viewType} = props;

  const convertDate = (item) => {
    return moment(item.release_date).format("ll");
  };

  return (
    <>
      {isLoading ? (
        Array.from(Array(4).keys()).map((_, index) => (
          <Col xs={6} sm={4} lg={3} key={index} style={{padding: '0 10px'}}>
            <Skeleton style={{width: '100%', height: '300px', background: '#1f2734'}} />
          </Col>
        ))
      ) : listMovie.length ? (
        listMovie.map((item) => {
          return (
            <Col xs={6} sm={4} lg={3} key={item.id} className={`mb-3 ${viewType === 'list' ? 'list_custom' : ''}`}>
              <Card className='h-100 card_custom'>
                <Link to={`/details/${item.id}`}>
                  <AsyncImage
                    title={item.title}
                    alt={item.title}
                    variant="top"
                    loading="lazy"
                    width="100%"
                    src={getImage("w500", item.poster_path)}
                  />
                  <Card.Body className="body_custom">
                    <Card.Title>
                      {item.title ? item.title : item.name}
                    </Card.Title>
                    <Card.Text>
                      {convertDate(item)}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          )
        }
      )): (
        <div className='text_center'>Empty Data</div>
      )}
    </>
  )
}

export default MainHome;
