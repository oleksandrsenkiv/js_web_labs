import React, {useState} from "react";
import { InfoWrapper, ImgWrapper, Description, PrinterInfoText, PrinterPrice, Typewrapper } from "./ShowItemPage.styled";
import { Button } from "antd";
const PrinterToDisplay = (props) => {
    const {printer} = props;

    return (
       <InfoWrapper>
            <ImgWrapper>
            <img src={printer.image} alt="#" />
            </ImgWrapper>
            <Description>
                <h2>{printer.title}</h2>
                <PrinterInfoText>
                    {printer.text}
                </PrinterInfoText>
                <Typewrapper>
                    
                </Typewrapper>
                <PrinterPrice>
                    <p>
                        Type: {printer.type}
                    </p>
                    <p>
                        Price: ${printer.price}
                    </p>
                    <Button size="large">Buy now</Button>   
                </PrinterPrice>
            </Description>
       </InfoWrapper>
    )
}

export default PrinterToDisplay;