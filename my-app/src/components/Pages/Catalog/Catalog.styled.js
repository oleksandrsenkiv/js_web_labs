import styled from 'styled-components';
import { Button } from 'antd';


export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 50px;
    flex-wrap: wrap;
    
`
export const SearchSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    .Input{
        width: 300px;

    }
    .Sort{
        display: flex;
        flex-direction: row;     
    }
    
    .Sort h {
        font-size: 20px;  
        margin-right: 10px;
    }
    .Select{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Select p{
        font-size: 19px;
        margin-right: 15px;

    }
`
export const ApplyButton = styled(Button)`
`
export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`
