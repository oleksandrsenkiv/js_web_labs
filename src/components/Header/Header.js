import React from "react";
import {HeaderSection, HeaderText} from './Header.styled';
import ImgPrinter from '../Icons/printer-black.jpg';

const Header = () => {
    return (
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
    );
    };
export default Header;