import "./App.css";
import {
  Homepage,
  About,
  Navbar,
  Services,
  MyWork,
  Resume,
  Contact,
  Footer,
} from "./Pages";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Homepage />
      <About />
      <Services />
      <MyWork />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
