import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCar } from "../../redux/actions/cars";
import { getOption } from "../../redux/actions/option";
import { getSpec } from "../../redux/actions/spec";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { Options } = useSelector((state) => state.option);
    const { Specs } = useSelector((state) => state.spec);

    useEffect(() => {
      // get car details by params id
      dispatch(getOption());
      dispatch(getSpec());
    }, [dispatch]);


  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [transmission, setTransmission] = useState("");
  const [available, setAvailable] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    // dispatch the register action
    dispatch(
      addCar(
        navigate,
        plate,
        manufacture,
        model,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        photo,
        setIsLoading
      )
    );
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Plate</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter plate"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="manufacture">
        <Form.Label>Manufacture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter manufacture"
          value={manufacture}
          onChange={(e) => setManufacture(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rentPerday">
        <Form.Label>RentPerDay</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter RentPerDay"
          value={rentPerDay}
          onChange={(e) => setRentPerDay(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="capacity">
        <Form.Label>Capacity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="alevailabAt">
        <Form.Label>avelaibleAt</Form.Label>
        <Form.Control
          type="datetime-local"
          placeholder="Enter AvailableAt"
          value={availableAt}
          onChange={(e) => setAvailableAt(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="transmission">
        <Form.Label>Transmission</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter transmission"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label as="legend" column sm={2}>
          available
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="True"
            name="available"
            id="1"
            value={true}
            onChange={(e) => setAvailable(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="False"
            name="available"
            id="2"
            value={false}
            onChange={(e) => setAvailable(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="year">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label as="legend" column sm={2}>
          option
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="True"
            name="option"
            id="1"
            value={true}
            onChange={(e) => setAvailable(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="False"
            name="option"
            id="2"
            value={false}
            onChange={(e) => setAvailable(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group controlId="photo" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Register"}
      </Button>
    </Form>
  );
}

export default Login;
