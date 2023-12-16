import React, {useState} from "react";
import {CardWrapper, SearchSection} from "./Catalog.styled";
import CardItem from "../../CardItem/CardItem";
import { UserOutlined } from '@ant-design/icons';
import {Input, Dropdown, MenuProps, message, Select} from "antd";
import dataCard from "../../CardData/CardData";
const { Search } = Input;

  
  const items = [
    {
      label: 'Name',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Increase',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'Decrease',
      key: '3',
      icon: <UserOutlined />
    }
  ];
  
  

const Catalog = () => {
    const [searchPrinter, setSearchPrinter] = useState('');
    const [sortPrinter, setSortPrinter] = useState('');
    const [typePrinter, setTypePrinter] = useState('');
    
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

    const sortData = (data, sortType) => {
        let sortedData = [...data];

        switch (sortType) {
            case '1':
                sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case '2':
                sortedData = sortedData.sort((a, b) => a.price - b.price);
                break;
            case '3':
                sortedData = sortedData.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return sortedData.filter(item => item.title.toLowerCase().includes(searchPrinter.toLowerCase()) && (typePrinter ? item.type === typePrinter : true));
    };

    const sortedPrinters = sortData(dataCard, sortPrinter);


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
                
                <div className="Input">
                
                <Search
                        placeholder="Input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={handleSearch}
                    />
                </div>
                
            </SearchSection>
        <CardWrapper>
        {sortedPrinters.map((item) => (
            <CardItem
                id={item.id}
                title={item.title}
                text={item.text}
                imageSrc={item.image}
                price={item.price}
                type={item.type}
               />
        ))}
        </CardWrapper>   
        </div>
            
    );
    };
export default Catalog;