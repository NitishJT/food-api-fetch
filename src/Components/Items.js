import React from "react";

import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button
} from "reactstrap"

const Items = ({addInCart, playerData}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={playerData.strCategoryThumb}/>
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{playerData.strCategory}</CardTitle>
                <CardTitle className="font-weight-bold">₹{playerData.strPrice}</CardTitle>
                {/* <CardText className="secondary">
                    Price: Rs {playerData.playerDataPrice}
                </CardText> */}

                <Button className="btn-success" onClick={() => addInCart(playerData)}>
                    Add to cart
                </Button>
            </CardBody>
        </Card>
    )
}

export default Items;