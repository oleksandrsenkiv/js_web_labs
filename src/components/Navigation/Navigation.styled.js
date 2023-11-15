import styled from 'styled-components';


export const LinkingWrapper = styled.div`
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #E5E7E9;
  }

  .left-nav-elements {
    list-style-type: none;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0;
    height: 70px;
  }


  .nav-element {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    margin: 17px 30px;
    font-size: 20px;
    width: 5%;}

    a {
      color: black;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: #06A7FE;
      }
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    padding-left: 7px;
    margin-right: 35px;
    font-size: 28px;
    align-items:center;
    > span {
        margin: 0 15px;
    }
    p {
        display: flex;
        font-size: 20px;
    }
    
`;


