import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const FooterWrapper = styled.div`
    height: 100px;
    background-color: #E5E7E9;
    display: flex;
    justify-content: space-around;
    align-items: center;
` 
export const LogoWrapper = styled.div`
    display: flex;
    padding-left: 7px;
    margin-right: 35px;
    font-size: 28px;
    align-items:center;
    > span {
        margin: 0 12px;
    }
    p {
        display: flex;
        font-size: 20px;
    }
    
`;

export const SocialMediaWrapper = styled.div`
   height: 30px;
   width: auto;
` ;
export const FooterText = styled.div`
    font-size: 18px;
    
`; 
export const IconMain = styled(Icon)`
    font-size: 25px;
    padding-left: 17px;
    color: ${({color}) => color};
    transition: ease all 0.3s;
    cursor: pointer;
    &:hover {
    font-size: 29px;
  }

` ;
