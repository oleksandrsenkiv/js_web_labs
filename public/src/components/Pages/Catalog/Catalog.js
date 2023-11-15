import React from "react";
import {CardWrapper, SearchSection} from "./Catalog.styled";
import CardItem from "../../CardItem/CardItem";
import PrinterCanon from "../../Icons/Printer-Canon.png";
import PrinterHP from "../../Icons/Printer-HP.png";
import PrinterEpson from "../../Icons/Printer-Epson.png";
import PrinterCanon2 from "../../Icons/Printer-Canon2.png"
import PrinterHP2 from "../../Icons/Printer-HP2.jpg"
import PrinterEpson2 from "../../Icons/Printer-Epson2.png"
import {SectionGroup, Section} from "../../Buttons/SectionButton"

import {Input} from "antd";
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);


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
    {
        title: "CANON i-SENSYS MF3010",
        text: "The Canon i-SENSYS MF3010 is a compact monochrome laser all-in-one printer designed for home and small office use. It offers printing, "+
        "scanning, and copying functions and features a space-saving design. With a print speed of up to 19 pages per minute" +
            "and a user-friendly interface, it's a practical choice for basic document tasks." ,
        image: PrinterCanon2,
        price: 900,
    },
    {
        title: "EPSON L805",
        text: "The HP Smart Tank 515 is an all-in-one inkjet printer designed for home and small office use. It features a refillable ink tank system,"+
        " It's designed for home and small office use and supports borderless photo printing, making it an excellent choice for users who" +
            "want to print high-resolution photos. The printer uses a six-color ink tank system, ensuring vibrant and detailed photo prints." ,
        image: PrinterEpson2,
        price: 800,
    },
    {
        title: "HP Smart Tank 515",
        text: "The Epson L11160 A3 is a multifunction inkjet printer designed to handle A3-sized printing and scanning."+
        "  providing a cost-effective solution for high-volume printing. This printer offers printing, scanning, and copying functions" +
            "and supports wireless connectivity, making it a versatile choice for various document tasks and easy network integration. " ,
        image: PrinterHP2,
        price: 1200,
    },
];

const Catalog = () => {
    return (
        <div>
            <SearchSection>
                <div className="Sort">
                    <h>Sort by</h>
                    <SectionGroup size = "large" >
                        <Section  value="Name">Name</Section>
                        <Section value="Increase">Increase</Section>
                        <Section value="Decrease">Decrease</Section>
                    </SectionGroup>
                </div>
                    
                <div className="Input">
                
                <Search
                        placeholder="Input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch = {onSearch}
                    />
                </div>
                
            </SearchSection>
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
export default Catalog;