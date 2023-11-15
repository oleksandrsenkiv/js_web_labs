import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title='No title', text, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 400, borderRadius: "20px", marginBottom:"30px" }}
        cover={
            <img className="CardImage" style={{ borderRadius: "20px", height: "261px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={text} />
        <Footer>
            <p>${price}</p>
            <Button>View more</Button>
        </Footer>
    </Card>
);

export default CardItem;