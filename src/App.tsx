import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button>hello</Button>} />
        <Button>click me</Button>
      </Routes>
    </Router>
  );
}

export default App;
