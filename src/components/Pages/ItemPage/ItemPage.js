import React from 'react';
import {useParams} from 'react-router-dom';
import dataCard from "../../CardData/CardData";
import PrinterToDisplay from "../../Pages/ItemPage/ShowItemPage"

const ItemPage = () => {
    const {id} = useParams();
    const printer = dataCard.find((item) => item.id === Number(id));
    if (!printer) {
        return <div>Not Found</div>;
    }

    return (
        <div>
            <PrinterToDisplay printer={printer}/>
        </div>
    );
};

export default ItemPage;