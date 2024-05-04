import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Col
      md={4}
      className="mb-3"
      as={Link}
      to={`/cars/${car?.id}`}
      style={{ textDecoration: "none" }}
    >
      <Card>
        <Card.Img variant="top" src={car?.image} />
        <Card.Body>
          <Card.Title>{car?.manufacture + car?.model}</Card.Title>
          <Card.Text>
            Plate : {car?.plate}
            <br></br>
            Rent/Day : {car?.rentPerDay}
            <br></br>
            desc : {car?.description}
            <br></br>
            {car?.available ? "available" : "not available"}
          </Card.Text>
        </Card.Body>
      </Card>
      
    </Col>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
