import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/ServicesComponent/Services";
import Experience from "./Components/Experience/Ecperience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
