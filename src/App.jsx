import FeaturedCard from "./components/FeaturedCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Approutes } from "./routes/Approutes";
import Home from "./views/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <>
        {/* <div className="bg-red-500">
        <p>HEllo world</p>
      </div>
      <FeaturedCard />
      <p>Hello men</p> */}
        <Navbar />
        <Approutes />
      </>
    </Router>
  );
}

export default App;
