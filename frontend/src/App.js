import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import AddToCartScreen from "./screens/AddToCartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:id" component={ProductDetails} exact />
          <Route path="/cart/:id?" component={AddToCartScreen} exact />
        </Container>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
