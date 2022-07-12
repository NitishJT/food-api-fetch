import React from "react";
import { FaCartPlus } from 'react-icons/fa';

import '../Css/Cart.css';
import {
    Container,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap"



const Cart = ({ cartItem, buyNow, removeItem }) => {
    let amount = 0;

    // We can use map also
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.strPrice)
    });


    return (
        <Container-fluid>
            <div className="cart">
            <h1 className="text-cart text-center">Your Cart<FaCartPlus></FaCartPlus></h1>
            <ListGroup className="mt-3">
                {cartItem.map(item => (
                    <ListGroupItem key={item.idCategory}>
                        <Row>
                            <Col>
                                <img height="100" src={item.strCategoryThumb} />
                            </Col>

                            <Col className="text-center">
                                <div className="text-primary font-weight-bold">{item.strCategory}</div>
                                <div className="mt-2">
                                    <span className="mr-3 text-center">Price :- {item.strPrice}</span>
                                    <Button color="danger" onClick={() => removeItem(item)}>
                                        Remove
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* If everything is empty */}
            {cartItem.length >= 1 ? (
                <Card className="text-center mt-3">
                    <CardHeader className="font-weight-bold">Grand Total</CardHeader>
                    <CardBody>
                        Your amount for {cartItem.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow}>
                            Pay here
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <h1 className="text-warning mt-2 text-center"></h1>
            )}
            </div>
        </Container-fluid>
    )
}

export default Cart;