import React, { useState, useEffect } from "react";
import axios from "axios";
// import Product from "../products";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

function ProductDetails({ match }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i>
        &nbsp; GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <h4>{product.name}</h4>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In stock" : "Out of stock"}
              </Col>
            </Row>
          </ListGroupItem>
          {product.countInStock > 0 ? (
            <ListGroupItem>
              <Button className="btn-block" type="button">
                Add to cart
              </Button>
            </ListGroupItem>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
