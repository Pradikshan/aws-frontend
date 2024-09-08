import FeaturedCard from "./components/FeaturedCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Approutes } from "./routes/Approutes";
import Home from "./views/Home";
import { Button } from "./components/ui/moving-border";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <div className="fixed top-0 right-0 mt-5 mx-5">
          <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
            Sign Up
          </button>

          <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
            Log In
          </button>
          {/* <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Borders are cool
          </Button> */}
        </div>
        <Navbar />
        <Approutes />
        <Footer />
      </>
    </Router>
  );
}

export default App;
