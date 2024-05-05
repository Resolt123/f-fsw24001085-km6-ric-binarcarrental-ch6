import { useEffect } from "react";
import { Row, Col, Card, Form, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCar, deleteCar } from "../../redux/actions/cars";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";


const Detailscar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { Car } = useSelector((state) => state.cars);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get car details by params id
    dispatch(getCar(navigate, id));
  }, [id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Body>
            <Form>
              {!Car ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {Car?.image && (
                    <Image src={Car?.image} className="img-fluid" rounded />
                  )}

                  <div className={Car?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="plate">
                      <Form.Label>Plate</Form.Label>
                      <Form.Control type="text" value={Car?.plate} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="manufacture">
                      <Form.Label>Manufacture</Form.Label>
                      <Form.Control
                        type="text"
                        value={Car?.manufacture}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="model">
                      <Form.Label>Model</Form.Label>
                      <Form.Control type="text" value={Car?.model} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rentPerDay">
                      <Form.Label>rentPerDay</Form.Label>
                      <Form.Control
                        type="text"
                        value={"Rp " + Car?.rentPerDay}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="capacity">
                      <Form.Label>capacity</Form.Label>
                      <Form.Control
                        type="text"
                        value={Car?.capacity}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>description</Form.Label>
                      <Form.Control
                        type="text"
                        value={Car?.description}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="availableAt">
                      <Form.Label>availableAt</Form.Label>
                      <Form.Control
                        type="text"
                        value={new Date(Car?.alevailabAt).toLocaleDateString()}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="type">
                      <Form.Label>type</Form.Label>
                      <Form.Control type="text" value={Car?.type} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Year">
                      <Form.Label>Year</Form.Label>
                      <Form.Control type="text" value={Car?.year} disabled />
                    </Form.Group>
                    <ListGroup as="ol" numbered>
                      Option
                      {Car?.car_options?.length > 0 ? (
                        Car?.car_options?.map((car) => (
                          <ListGroup.Item as="li">
                            {car.option.type_option}
                          </ListGroup.Item>
                        ))
                      ) : (
                        <ListGroup.Item as="li">
                          tidak ada option tertulis
                        </ListGroup.Item>
                      )}
                    </ListGroup>
                    <ListGroup as="ol" numbered>
                      Spec
                      {Car?.car_specs?.length > 0 ? (
                        Car?.car_specs?.map((car) => (
                          <ListGroup.Item as="li">
                            {car.spec.type_spec}
                          </ListGroup.Item>
                        ))
                      ) : (
                        <ListGroup.Item as="li">
                          tidak ada spec tertulis
                        </ListGroup.Item>
                      )}
                    </ListGroup>
                  </div>
                </>
              )}
            </Form>
            {(user?.role == "super-admin" || user?.role == "admin") && (
              <>
                <Button
                  variant="danger"
                  className="mt-4"
                  onClick={() => dispatch(deleteCar(navigate, id))}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  className="mt-4 mx-4"
                  as={Link}
                  to={`/edit_mobil/${id}`}
                  style={{ textDecoration: "none" }}
                  // onClick={() => navigate(`/edit_mobil/:${id}`)}
                >
                  edit
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Detailscar;
