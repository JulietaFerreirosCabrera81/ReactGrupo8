import styled from 'styled-components';

export const CardContainer = styled.div `
    display:flex;
    transition: all 0.3s ease-in-out;
    width: 240px;
    height: 120px;
    min-width:100px;
    min-height:50px;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    &:hover{
        transform: scale(1.1);
    }

    @media(max-width: 700px ){
        width: 180px;
        height: 90px;
    }

    @media(max-width: 500px ){
        width: 140px;
        height: 40px;
    }

`;