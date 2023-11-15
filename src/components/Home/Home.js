import React from "react";
import { CardWrapper, HeaderSection, HeaderText } from "./Home.styled";
import CardItem from "../CardItem/CardItem";
import PrinterCanon from "../Icons/Printer-Canon.png";
import PrinterHP from "../Icons/Printer-HP.png";
import PrinterEpson from "../Icons/Printer-Epson.png";
import ImgPrinter from '../Icons/printer-black.jpg';


const dataCard = [
    {
        title: "Canon imageRUNNER 2425",
        text: "The Canon imageRUNNER 2425 is a versatile monochrome laser multifunction printer designed for office use, offering printing," +
            "copying, and scanning capabilities at a maximum speed of 25 pages per minute. "+
            "It's suitable for medium to large workgroups, providing efficient document processing.",
        image: PrinterCanon,
        price: 1000,
    },
    {
        title: "HP Laser 107a",
        text: "The HP Laser 107a is a monochrome laser printer designed for small office and personal use," +
        "offering a maximum print speed of 20 pages per minute and a resolution of up to 1200 x 1200 dpi. " +
            "With its compact design and affordability, it's a suitable choice for basic black and white printing needs.",
        image: PrinterHP,
        price: 150,
    },
    {
        title: "Epson L11160 A3",
        text: "The Epson L11160 A3 is a multifunction inkjet printer designed to handle A3-sized printing and scanning."+
        " It features a high-capacity ink tank system, which is known for its cost-effective printing." +
            "This printer can handle various media sizes and offers features like borderless printing and wireless connectivity. " ,
        image: PrinterEpson,
        price: 500,
    },
];

const Home = () => {
    return (
        <div>
            <HeaderSection>
            <img src={ImgPrinter} alt="#"></img>
            <HeaderText>
                <h>Welcome to our Printer Shop – Your Ultimate Printing Solution!</h>
                <p>Explore our Printer Store for an array of top-notch printers that guarantee exceptional performance and quality.
                From trusted brands like HP, Canon, Epson, Brother, and more, our collection offers a diverse selection to meet your home,
                office, or professional printing needs. With cutting-edge technology, versatile functionality, and expert guidance,
                we provide the perfect printing solution. Elevate your printing experience with our reliable
                and high-resolution printers – visit us today and discover hassle-free, superior printing at your fingertips.</p>
            </HeaderText>
        </HeaderSection>
            <CardWrapper>
        {dataCard.map(({ title, text, image, price }, idx) => (
            <CardItem
                title={title}
                text={text}
                imageSrc={image}
                price={price}
                id={idx}
            />
        ))}
        </CardWrapper>
        
    </div>
        
        
    );
    };

    export default Home;