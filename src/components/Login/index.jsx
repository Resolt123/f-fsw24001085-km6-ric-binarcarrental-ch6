import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) =>{
        e.preventDefault();//prevendefault berfungsi untuk menjalankan fungsi namun tidak melakukan refresh page sehingga dapat berjalan dibelakang layar

        dispatch(login(navigate,email,password,setIsLoading))

    };
    return (
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Submit"}
        </Button>
      </Form>
    );
}

export default Login;
