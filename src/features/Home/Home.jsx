import { useContext } from 'react';
import { AuthContextData } from '../../auth/AuthContextData';
import { Banner } from '../../common/componentsBanner/Banner';
import { Movies } from '../movies/pages/Movies';
import { Series } from '../series/pages/Series';


export const Home = () => {
    
    const { movies } = useContext(AuthContextData);
    
return (
     <div>
        <Banner data={ movies[10]}/>   
        <Movies />
        <Series />
    </div>
  )
}
