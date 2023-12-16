import React from "react";
import { CardWrapper, HeaderSection, HeaderText, ShowButton, LoadingWrapper } from "./Home.styled";
import CardItem from "../../CardItem/CardItem";
import { useState, useEffect } from "react";
import ImgPrinter from '../../Icons/printer-black.jpg';
import dataCard from "../../CardData/CardData";
import { Spin } from "antd";
import { getDefaultPrintersList } from "../../../fetching";

const Home = () => {
    const [visiblePrinters, setVisiblePrinters] = useState(3);
    const [loading, setLoading] = useState(true);
    const [showHideButton, setShowHideButton] = useState(false);
    const [printerList, setBackendData] = useState([]);

    useEffect(() => {
        setLoading(true);
        getDefaultPrintersList()
            .then((response) => {
                setBackendData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка під час отримання даних:', error);
                setLoading(false);
            });
    }, []);

    const showMore = () => {
        setVisiblePrinters((prevVisibleItems) => prevVisibleItems + 3);
        setShowHideButton(true);
    };

    const hideItems = () => {
        setVisiblePrinters(3);
        setShowHideButton(false);
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
        {loading ? (
            <LoadingWrapper>
                <Spin size ="large"/>
            </LoadingWrapper>
                
            ) : (
                <>
            <CardWrapper>
        {printerList.slice(0, visiblePrinters).map((item) => (
            <CardItem
            id={item.id}
                title={item.title}
                text={item.text}
                imageSrc={dataCard[item.id].image}
                price={item.price}
            />
        ))}
        </CardWrapper>
        {showHideButton ? (
                        <ShowButton onClick={hideItems}>Show less</ShowButton>
                    ) : (
                        <ShowButton onClick={showMore}>Show more</ShowButton>
                    )}
        </>
            )}
    </div>     
    );
    };

    export default Home;