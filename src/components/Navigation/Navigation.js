import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {LinkingWrapper, IconsWrapper} from './Navigation.styled';
import {
    PrinterOutlined,
    ShoppingCartOutlined,
    SearchOutlined
} from "@ant-design/icons";

const Navigation = () => (
    <Router>
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
                        <SearchOutlined/>
                        <ShoppingCartOutlined />
                    </IconsWrapper>
                </div>
            </div>
        </LinkingWrapper>
    </Router>
);

export default Navigation;