import React from 'react';
import {useParams} from 'react-router-dom';
import PrinterToDisplay from "../../Pages/ItemPage/ShowItemPage"
import {getPrinterInfo} from "../../../fetching"
import { Spin } from 'antd';
import { useState, useEffect } from "react";
import { LoadingWrapper } from './ItemPage.styled';

const ItemPage = () => {
    const { id } = useParams();
    const [printer, setPrinter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPrinterInfo(id)
            .then((response) => {
                setPrinter(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка', error);
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return <LoadingWrapper><Spin size='large'/></LoadingWrapper>; 
    }
    if(!printer){
        return <div>Not found</div>
    }
    return (
        <div>
            <PrinterToDisplay printer={printer}/>
        </div>
    );
};

export default ItemPage;