import React, { useState, useEffect } from "react";
import '../Css/BuyPage.css';
import { Container, Row, Col } from "reactstrap"
import Items from "./Items";

const BuyPage = ({ addInCart }) => {
const [playerData, setPlayerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://my-receipe-api1.herokuapp.com/categories')
            const nbaData = await response.json()
            setPlayerData(nbaData.slice(0, 14))
        }
        fetchData()
    }, []);

    return (
        <Container fluid>
            <h1 className="text-dark text-center">BROWSE CATALOGUE</h1>
            <Row>
                {
                   playerData.map((playerData) => (
                    
                        <Col md={4} key={playerData.strCategory}>
                        
                            <Items playerData={playerData} addInCart={addInCart} />
                        </Col>
                        
                    ))
                }
            </Row>
        </Container>
    );
            }

export default BuyPage;