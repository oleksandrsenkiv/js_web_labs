import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: flex;
    height: 660px;
    justify-content: center;
    align-items: center;
`

export const ImgWrapper = styled.div`
    img{
        border-radius: 20px;
        height: 350px; 
        margin-right: 100px;
    }
    
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width:600px;
    text-align: left;

    h2{
        font-size:30px;
    }
`
export const PrinterInfoText = styled.div`
    font-size: 20px;
`
export const PrinterPrice = styled.div`
    flex-direction: column;
    font-size: 20px;
    p{
        font-size: 22px;
        margin-right: 20px;
        font-weight: bold;
    }
`
export const Typewrapper = styled.div`
    
    p{
        font-size: 22px;
        margin-right: 10px;
        margin-bottom: 0px;
        font-weight: bold;
    }
`