import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CarCard from "../../components/Card";
import { getCars } from "../../redux/actions/cars";

const Home = () => {
  const dispatch = useDispatch();

  const { Cars } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Row>
      {Cars.length > 0 &&
        Cars.map((car) => (
          <CarCard key={car?.id} car={car} />
        ))}
    </Row>
  );
};

export default Home;
