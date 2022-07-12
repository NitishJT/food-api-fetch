import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Menu from './Components/Menu.js';
import { toast, ToastContainer } from "react-toastify";
import {Container, Row, Col} from "reactstrap";
import Upper from './Components/Upper.js';
import BuyPage from './Components/BuyPage';
import Footer from './Components/Footer.js';
import Cart from './Components/Cart';



const App = () => {

  const [cartItem, setCartItem] = useState([]);


  const addInCart = (item) => {
    // findIndex Returns the index of the first element in the array where predicate is true, and -1 otherwise
    const isAlreadyAdded = cartItem.findIndex((arr) => {
      return arr.idCategory === item.idCategory;
    })

    // If item is already present in cart 
    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      })
    }
    else {                               // If item is not present in cart
      setCartItem([...cartItem, item]);
    }
  }

  const buyNow = () => {
    // After clicking buy now, All cart items should be empty
    setCartItem([])

    toast("Purchase Completed", {
      type: "success"
    })
  }

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => (singleItem.idCategory !== item.idCategory)))
  }

  return (
<div>
          <Menu></Menu>
      <Upper></Upper> 
      <Container>
      <ToastContainer />
         <Row>
         <Col md="12">   {/*8 grids are given to items */}
          <BuyPage addInCart={addInCart} />
        </Col>

        <Col md="0">    {/* remaining 4 grids are given to cart */}
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
       
      </Row>
     
      </Container>

      <Footer></Footer>
      </div>
  );
}

export default App;
