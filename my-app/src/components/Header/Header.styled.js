import styled from 'styled-components';

export const HeaderSection = styled.div`
    height: 500px;
    background-color: #D4D4D4 ;
    display: flex;
    position: relative;
    img {
        position: absolute;
        right: 0;
        height: 500px;
        width: auto;
    }
`
export const HeaderText = styled.div`
    position: absolute;
    left: 30px;
    top: 90px;
    width: 500px;
    h {
        font-size: 33px;
        font-weight: bold;
    }
    p {
        font-size: 18px;
        margin-top: 30px;
    }

`