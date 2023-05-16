import ReactDOM from "react-dom";

import NavBar from "./components/Header";
import Footer from "./components/Footer";
import ProjectCarousel from "./components/Carousel";
import { Container } from "react-bootstrap";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <NavBar />
    <Container className="vh-100 d-flex flex-column ">
      <ProjectCarousel />
    </Container>
    <Footer />
  </div>
  ,
  rootElement
);
