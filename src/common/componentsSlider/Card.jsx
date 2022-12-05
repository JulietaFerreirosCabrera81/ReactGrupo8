import { useNavigate } from 'react-router-dom';
import { CardContainer } from './styles/CardContainer';


export const Card = ({ entity }) => {
    
    const navigate = useNavigate() ;
  
    const handleClick = () => {
       navigate(`movie/${entity.id}`,{
         state: entity,
         });
    };
  
return (
    <>
        <CardContainer
            onClick={handleClick}
            image={entity.backdrop}
        >
        </CardContainer>     
    </>
    );
};






