import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEarning,
  updateEarning,
  removeEarning,
  addDeduction,
  updateDeduction,
  removeDeduction,
} from "../../app/salarySlice";
import remove from "../../assets/remove.png";
import { Button, Card, Col, Row, Form } from "react-bootstrap";

const SalaryType = ({ type }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.salary[type]);

  const handleAdd = () => {
    const newItem = { name: "", amount: 0, epfApplicable: false };
    dispatch(type === "earnings" ? addEarning(newItem) : addDeduction(newItem));
  };

  const handleChange = (index, field, value) => {
    const updatedItem = { ...items[index], [field]: value };
    dispatch(
      type === "earnings"
        ? updateEarning({ index, earning: updatedItem })
        : updateDeduction({ index, deduction: updatedItem })
    );
  };

  const handleRemove = (index) => {
    dispatch(
      type === "earnings" ? removeEarning(index) : removeDeduction(index)
    );
  };

  return (
    <div>
      <Card.Title>{type === "earnings" ? "Earnings" : "Deductions"}</Card.Title>
      <small className="text-muted">
        {type === "earnings"
          ? "Allowance, Fixed Allowance, Bonus and etc."
          : "Deductions like taxes, loan repayments etc."}
      </small>
      {items.map((item, index) => (
        <Form.Group as={Row} controlId={`${type}${index}`} key={index}>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Amount"
              value={item.amount}
              onChange={(e) =>
                handleChange(index, "amount", Number(e.target.value))
              }
            />
          </Col>
          <Col md={1}>
            <Button
              size="sm"
              variant="none"
              onClick={() => handleRemove(index)}
            >
              <img src={remove} alt="remove" />
            </Button>
          </Col>
          {type === "earnings" && (
            <Col>
              <Form.Check
                type="checkbox"
                label="EPF/ETF"
                checked={item.epfApplicable}
                onChange={(e) =>
                  handleChange(index, "epfApplicable", e.target.checked)
                }
              />
            </Col>
          )}
        </Form.Group>
      ))}
      <p>
        <Button variant="link" onClick={handleAdd}>
          + Add {type === "earnings" ? "New Allowance" : "New Deduction"}
        </Button>
      </p>
    </div>
  );
};

export default SalaryType;
