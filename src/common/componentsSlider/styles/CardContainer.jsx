import styled from 'styled-components';

export const CardContainer = styled.div `
    display:flex;
    transition: all 0.3s ease-in-out;
    width: 270px;
    height: 140px;
    min-width:100px;
    min-height:50px;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    &:hover{
        transform: scale(1.1);
    }
`;