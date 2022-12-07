import Container from "react-bootstrap/Container";
import {Col} from "react-bootstrap";
import AsyncImage from "@Views/layout/AsyncImage.js";
import {getImage, convertRuntime} from "@Common/helper";
import moment from "moment";
import "@Views/detail/assets/main-detail.scss";
import Skeleton from "@Views/layout/Skeleton";

const MainDetail = ({details, isLoading}) => {


  const convertYear = () => {
    if (!details.release_date) return '';

    return `(${moment(details.release_date).format("YYYY")})`;
  }

  const convertDate = () => {
    if (!details.release_date) return '';

    return moment(details.release_date).format("LL");
  }

  const getGenres = (genres) => {
    if (!genres) return '';
    var list = ' ';
    genres.map((item, index) => {
      list += ' ' + item.name + ',';
    })

    return list;
  }

  return (
    <Container className="main_detail">
      {isLoading ? (
        <Col xs={12} sm={12} lg={12} style={{padding: '0 10px'}}>
          <Skeleton style={{width: '100%', height: '500px', background: '#1f2734'}} />
        </Col>
      ) : details.id ? (
        <div className="d-flex flex-wrap py-4">
          <Col xs={12} md={4}>
            <div className="details_left">
              <AsyncImage
                title={details.title ? details.title : details.name}
                alt={details.title ? details.title : details.name}
                variant="top"
                loading="lazy"
                width="100%"
                className="img-fluid"
                src={getImage("w500", details.poster_path)}
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="details_right">
              <h1 className="details_title">
                {details.title ? details.title : details.name}
                <span>{convertYear()}</span>
              </h1>
              <div className="d-flex flex-column flex-md-row details_info">
                <p className="details-date">{convertDate()} - </p>
                <div className="d-flex justify-content-center align-items-center details_genres">
                  <p>{getGenres(details.genres)}</p>
                </div>
                <p className="details_runtime">
                  - {convertRuntime(details.runtime)}
                </p>
              </div>
              <div className="mt-4 details_overview">
                <h2>Synopsis</h2>
                <p>{details.overview}</p>
              </div>
            </div>
          </Col>
        </div>
      ) : (
        <div className="empty_data">Empty data</div>
      )}
    </Container>
  )
}

export default MainDetail;
