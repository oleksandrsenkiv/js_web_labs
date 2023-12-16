import React from "react";
import { CardWrapper, HeaderSection, HeaderText, ShowButton } from "./Home.styled";
import CardItem from "../../CardItem/CardItem";
import { useState } from "react";
import ImgPrinter from '../../Icons/printer-black.jpg';
import dataCard from "../../CardData/CardData";

const Home = () => {
    const [showAllPrinters, setShowAllPrinters] = useState(false);
    const PrintersToDisplay = showAllPrinters ? dataCard : dataCard.slice(0, 3);
    const buttonText = showAllPrinters ? "Show less" : "Show more";
    const handleButtonClick = () => {
        setShowAllPrinters(!showAllPrinters);
    };
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
        {PrintersToDisplay.map(({ title, text, image, price }, idx) => (
            <CardItem
                title={title}
                text={text}
                imageSrc={image}
                price={price}
                id={idx}
            />
        ))}
        </CardWrapper>
        <ShowButton size="large" onClick={() => handleButtonClick()}>{buttonText}</ShowButton>
    </div>
        
        
    );
    };

    export default Home;