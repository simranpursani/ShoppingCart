import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Success } from "./Pages/Success";
import { Store } from "./Pages/Store";
import { Cancel } from "./Pages/Cancel";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
