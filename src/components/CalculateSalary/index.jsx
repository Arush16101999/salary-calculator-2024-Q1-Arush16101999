import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary, reset } from "../../app/salarySlice";
import resetImg from "../../assets/resetImg.png";

import "./CalculateSalary.css";
import SalaryType from "../SalaryType";
const CalculateSalary = () => {
  //     const [earnings, setEarnings] = useState([{ name: "", amount: 0, epfApplicable: false }]);
  //   const [deductions, setDeductions] = useState([{ name: "", amount: 0 }]);
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);
  //   const earnings = useSelector((state) => state.salary.earnings);
  //   const deductions = useSelector((state) => state.salary.deductions);

  const handleBasicSalaryChange = (e) => {
    dispatch(setBasicSalary(Number(e.target.value)));
  };

  return (
    <Container>
      <Card body>
        <Card.Body>
          <div className="header-card">
            <div>
              <Card.Title>
                <h4>
                  <b>Calculate Your Salary</b>
                </h4>
              </Card.Title>
            </div>
            <div className="blue-link">
              <Button
                variant="none"
                size="sm"
                onClick={() => dispatch(reset())}
              >
                <img src={resetImg} alt="reset" /> Reset
              </Button>
            </div>
          </div>
          <br />
          <ListGroup className="list-group-flush">
            <Card.Title>Basic Salary</Card.Title>
            <Row>
              <Col md={7}>
                <Form.Control
                  type="number"
                  placeholder="Basic Salary"
                  value={basicSalary}
                  onChange={handleBasicSalaryChange}
                />
              </Col>
            </Row>
            <br />
            <SalaryType type="earnings" />

            <hr />
            <SalaryType type="deductions" />
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CalculateSalary;
