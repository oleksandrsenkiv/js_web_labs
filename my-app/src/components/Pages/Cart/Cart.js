
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incrementCount, decrementCount, removePrinter } from "./actions";
import {CartWrapper, CartItem, ImgWrapper, PrinterCount, ButtonWrapper, NavWrapper} from "./Cart.styled"
import {dataCard} from "../../CardData/CardData";
import { NavLink } from "react-router-dom";
import {store} from "./store.js";
import { useState, useEffect } from "react";

const Cart = () => {
    const printerList = useSelector((state) => state.printerList);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
      }, [printerList]);
    
      const calculateTotalPrice = () => {
        let totalPrice = 0;
        printerList.forEach((printer) => {
          totalPrice += Math.round(printer.price) * printer.count;
        });
        setTotalPrice(totalPrice);
      };

      const handleIncrement = (title) => {
        dispatch(incrementCount(title));
        calculateTotalPrice();
      };
    
      const handleDecrement = (title) => {
        dispatch(decrementCount(title));
        calculateTotalPrice();
      };
    
      const handleRemove = (title) => {
        dispatch(removePrinter(title));
        calculateTotalPrice();
      };

      const filtredPrinterList = printerList.filter((printer) => printer.count > 0)

      console.log(store.getState());

    return (
        
       <CartWrapper>
        <h1>Cart</h1>
            {filtredPrinterList.map((printer, index)=>(
                <div key={index}>
                        <CartItem>
                        <NavLink to={`/itempage/${printer.id}`} style={{ textDecoration: 'none', color: 'inherit', display: "flex", alignItems: "center" }}>
                            <ImgWrapper>
                                <img src={dataCard[printer.id].image} alt="#" />
                            </ImgWrapper>
                            <h2>{printer.title}</h2>
                        </NavLink>

                            <PrinterCount>
                                <Button size="large" onClick={() => handleDecrement(printer.title)}>-</Button>
                                <p>{printer.count}</p>
                                <Button size="large" onClick={() => handleIncrement(printer.title)}>+</Button>
                            </PrinterCount>
                            {totalPrice > 0 && (
                   <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
                   Price: {Math.round(printer.price) * printer.count}$
                 </p>
                )}
                            <Button size="large" onClick={() => handleRemove(printer.title)}>
                             Remove
                            </Button>
                        </CartItem>
                </div>
            )) }
              {totalPrice > 0 && (
                    <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
                        Total Price: {totalPrice}$
                    </p>
                )}
            <ButtonWrapper>
                <Button size="large" style={{width:"140px", fontSize:"22px", height:"50px"}}><NavLink  to="/catalog">Back</NavLink></Button>
                <Button size="large" style={{width:"140px", fontSize:"22px", height:"50px"}}>Continue</Button>  
            </ButtonWrapper>
           
       </CartWrapper>
    )
}

export default Cart;