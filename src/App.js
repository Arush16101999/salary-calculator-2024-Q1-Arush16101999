import { Container } from "react-bootstrap";
import "./App.css";
import CalculateSalary from "./components/CalculateSalary";
import SalaryCard from "./components/SalaryCard";

function App() {
  return (
    <Container>
      <div className="App">
        <CalculateSalary />

        <SalaryCard />
      </div>
    </Container>
  );
}

export default App;
