import { useState, useEffect } from "react";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCar } from "../../redux/actions/cars";
import { getOption } from "../../redux/actions/option";
import { getSpec } from "../../redux/actions/spec";
import { editCar } from "../../redux/actions/cars";

const Editcar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { Car } = useSelector((state) => state.cars);
  const { Options } = useSelector((state) => state.option);
  const { Specs } = useSelector((state) => state.spec);

  const [plate, setPlate] = useState(`${Car?.plate}`);
  const [manufacture, setManufacture] = useState(`${Car?.manufacture}`);
  const [model, setModel] = useState(`${Car?.model}`);
  const [rentPerDay, setRentPerDay] = useState(`${Car?.rentPerDay}`);
  const [capacity, setCapacity] = useState(`${Car?.capacity}`);
  const [description, setDescription] = useState(`${Car?.description}`);
  const [availableAt, setAvailableAt] = useState(``);
  const [transmission, setTransmission] = useState(`${Car?.transmission}`);
  const [available, setAvailable] = useState(``);
  const [type, setType] = useState(`${Car?.type}`);
  const [year, setYear] = useState(`${Car?.year}`);
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selected_Option, setSelectedOptions] = useState({});
  const [selected_Spec, setSelectedSpec] = useState({});


  useEffect(() => {
    // get car details by params id
    dispatch(getCar(navigate, id));
  }, [id, navigate]);

  useEffect(() => {
    // get car details by params id
    dispatch(getOption());
    dispatch(getSpec());
  }, [dispatch]);

  const handleSelectChange = (event, tipe) => {
    const { name, value } = event.target;
    const numericValue = parseInt(value);
    if (tipe == "option") {
      setSelectedOptions({
        ...selected_Option,
        [name]: numericValue,
      });
    } else if (tipe == "spec") {
      setSelectedSpec({
        ...selected_Spec,
        [name]: numericValue,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // dispatch the register action
    dispatch(
    editCar(
        navigate,
        id,
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
        selected_Option,
        selected_Spec,
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
      <div>
        <Row>
          <Col>
            <Form.Group controlId="dropdown1">
              <Form.Label>Option</Form.Label>
              {Car?.car_options?.map((e) => (
                <Form.Control
                  key={e?.id_option}
                  as="select"
                  name={e?.id_option}
                  value={selected_Option[`${e?.id_option}`] || ""}
                  onChange={(el) => handleSelectChange(el, "option")}
                >
                  <option value={e?.id_option} selected hidden>
                    {e?.option.type_option}
                  </option>
                  {Options?.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.type_option}
                    </option>
                  ))}
                </Form.Control>
              ))}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dropdown2">
              <Form.Label>Spec</Form.Label>
              {Car?.car_specs?.map((e) => (
                <Form.Control
                  key={e?.id_spec}
                  as="select"
                  name={e?.id_spec}
                  value={selected_Spec[`${e?.id_spec}`] || ""}
                  onChange={(el) => handleSelectChange(el, "spec")}
                >
                  <option value={e?.id_spec} selected hidden>
                    {e?.spec.type_spec}
                  </option>
                  {Specs?.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.type_spec}
                    </option>
                  ))}
                </Form.Control>
              ))}
            </Form.Group>
          </Col>
        </Row>
      </div>
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
};

export default Editcar;
