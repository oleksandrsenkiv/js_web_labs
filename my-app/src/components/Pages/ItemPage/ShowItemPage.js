import { InfoWrapper, ImgWrapper, Description, PrinterInfoText, PrinterPrice, Typewrapper } from "./ShowItemPage.styled";
import { Button, InputNumber, message } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import dataCard from "../../CardData/CardData";
const PrinterToDisplay = (props) => {
    const {printer} = props;
    const [printerCount, setCount] = useState('1')
    const dispatch = useDispatch();
    const addPrinter = () => {

        dispatch({
            type: "ADD_PRINTER",
            payLoad: {
                id: printer.id,
                img: dataCard[printer.id],
                title: printer.title,
                price: printer.price,
                count: parseInt(printerCount)
            },
        });

    };

    const handleAddToCart = () => {
        addPrinter();
        alert(`Додано ${printerCount} принтерів: ${printer.title}`);
    };

    return (
       <InfoWrapper>
            <ImgWrapper>
            <img src={dataCard[printer.id].image} alt="#" />
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
                    <InputNumber size="large" min={1} max={5} value={printerCount} onChange={setCount}/>
                    <Button size="large" onClick={handleAddToCart}>Add to cart</Button>   
                </PrinterPrice>
            </Description>
       </InfoWrapper>
    )
}

export default PrinterToDisplay;