import React from "react";
import { NavLink} from "react-router-dom";
import {LinkingWrapper, IconsWrapper} from './Navigation.styled';
import {
    PrinterOutlined,
    ShoppingCartOutlined,
    
} from "@ant-design/icons";


const Navigation = () => (
    
        <LinkingWrapper>
            <div className="nav">
                <div className="left-nav-elements">
                    <div className="nav-element">
                        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                    </div>
                    <div className="nav-element">
                        <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                    </div>
                </div>
                <div className="logo">
                    <IconsWrapper>
                    
                        <PrinterOutlined />
                        <p className="logo-name">Printers Shop</p>
                    </IconsWrapper>
                    
                </div>
                <div className="right-nav-elements">
                    <IconsWrapper>
                        <NavLink to="/Cart"> Cart</NavLink>
                    </IconsWrapper>
                </div>
            </div>
        </LinkingWrapper>
);

export default Navigation;