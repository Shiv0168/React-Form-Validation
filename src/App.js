import { Alert, Button, Form } from "react-bootstrap";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit(formSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("name", {
              required: "name required",
              minLength: { value: 5, message: "min 5 length" },
            })}
          />
        </Form.Group>
        {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: "password required" })}
          />
        </Form.Group>
        {errors.password && (
          <Alert variant="danger">{errors.password.message}</Alert>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
