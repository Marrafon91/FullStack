import { Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <nav style={{
      border: "solid 1px",
      padding: "1rem",
    }}>
      <Link to="/invoices">Invoice</Link><br></br>
      <Link to="/expenses">Expenses</Link>
    </nav>
  )
}

export default App
