import React from "react";
import {FooterWrapper, LogoWrapper,SocialMediaWrapper,IconMain,FooterText} from './Footer.styled';
import {
    PrinterOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
    return (
    <FooterWrapper>
        <LogoWrapper>
            <PrinterOutlined />
            <p className="logo-name">Printers Shop</p>
        </LogoWrapper>
        <FooterText>
            <p>©All rights reserved</p>
        </FooterText>
        <SocialMediaWrapper>
            <IconMain component={YoutubeOutlined} color='#FF0000'/>
            <IconMain component={TwitterOutlined} color='#03A9F4'/>
            <IconMain component={InstagramOutlined} color='#FA3FAB'/>
        </SocialMediaWrapper>
    </FooterWrapper>
    );
    };

    export default Footer;