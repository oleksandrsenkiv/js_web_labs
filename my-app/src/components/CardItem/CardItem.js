import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CardItem = (props) => (
    <Card
        hoverable
        style={{ width: 400, borderRadius: "20px", marginBottom:"30px" }}
        cover={
            <img className="CardImage" style={{ borderRadius: "20px", height: "261px" }} alt="example" src={props.imageSrc} />
        }
    >
        <Meta title={props.title} description={props.text} />
        <Footer>
            <p>${props.price}</p>
            <Link to={`/itempage/${props.id}`} style={{textDecoration: "none"}}>
                <Button>View more</Button>
            </Link>
        </Footer>
    </Card>
);

export default CardItem;