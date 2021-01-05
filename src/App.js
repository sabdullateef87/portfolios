import "./App.css";
import { Homepage, Aboutpage, Navbar } from "./Pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {/* <Aboutpage /> */}
    </div>
  );
}

export default App;
