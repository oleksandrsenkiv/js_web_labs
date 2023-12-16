import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;

`

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
`

export const ImgWrapper = styled.div`
    margin-left:80px;
    img{
        width: 150px;
        margin-right: 25px;

    }
`
export const PrinterCount = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
    button{
        margin: 0 10px;

    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    margin-top: auto;
    margin-bottom: 80px;
    `



export const NavWrapper = styled.div`
    display: flex;
`
