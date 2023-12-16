import React, {useState, useEffect} from "react";
import {CardWrapper, SearchSection, ApplyButton, LoadingWrapper} from "./Catalog.styled";
import CardItem from "../../CardItem/CardItem";
import { UserOutlined } from '@ant-design/icons';
import {Input, Dropdown,  Select} from "antd";
import dataCard from "../../CardData/CardData";
import { getPrintersList } from "../../../fetching";
import { Spin } from "antd";

const { Search } = Input;

  
  const items = [
    {
      label: 'Name',
      key: 'title',
      icon: <UserOutlined />,
    },
    {
      label: 'Increase',
      key: 'price',
      icon: <UserOutlined />,
    },
    {
      label: 'Decrease',
      key: 'price DESC',
      icon: <UserOutlined />
    }
  ];
  
  

const Catalog = () => {
    const [searchPrinters, setSearchPrinter] = useState('');
    const [sortPrinters, setSortPrinter] = useState('');
    const [typePrinter, setTypePrinter] = useState('');
    const [printerList, setBackendData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterParametrs, setFilter] = useState({
        typePrinter: '',
        sortPrinters: '',
        searchPrinters: '',
    });
    
    useEffect(() => {
        setLoading(true);
        getPrintersList(filterParametrs)
            .then((response) => {
                setBackendData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка під час отримання даних:', error);
                setLoading(false);
            });
    }, [filterParametrs]);

    const handleMenuClick = (element) => {
        setSortPrinter(element.key);
    };

    const handleSearch = (newSearchTerm) => {
        setSearchPrinter(newSearchTerm);
    }

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    const handleChange = (value) => {
        setTypePrinter(value);
      };

      const applyFilter = () => {
        setFilter({
            typePrinter,
            sortPrinters,
            searchPrinters,
        });
    };

    return (
        <div>
            <SearchSection>
                <div className="Sort">
                    <Dropdown.Button  size="large" menu={menuProps} onClick={handleMenuClick}>
                    Sort by 
                </Dropdown.Button>
                </div>
                <div className="Select">
                    <p>Filter by type</p>
                    <Select
                        defaultValue="Type"
                        size="large"
                        onChange={handleChange}
                        options={[
                            { value: 'ink', label: 'Ink' },
                            { value: 'laser', label: 'Laser' }
                        ]}
                        />
                </div>
                <ApplyButton size="large" onClick={applyFilter}>Apply Filters</ApplyButton>
                <div className="Input">
                
                <Search
                        placeholder="Input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onChange={(e) => setSearchPrinter(e.target.value)}
                        onSearch={applyFilter}
                    />
                </div>
                
            </SearchSection>
            {loading ? (
                <LoadingWrapper><Spin size="large"/></LoadingWrapper>
                
            ) : (
                <CardWrapper>
                    {printerList.length === 0 ? (
                            <h1>No printers found.</h1>
                    ) : (
                        printerList.map((item) => (
                    <CardItem
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        imageSrc={dataCard[item.id].image}
                        price={item.price}
                        type={item.type}
                    />
                        ))
                    )}
                </CardWrapper>
            ) }  
                    
                </div>
                
    );
    };
export default Catalog;