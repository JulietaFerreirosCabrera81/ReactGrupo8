import { NavBar } from '../../common/componentsNavBar/NavBar';
import { Movies } from '../movies/pages/Movies';
import { Series } from '../series/pages/Series';


export const Home = () => {
  
  return (
    <div>
       <NavBar/>
       <Movies/>
       <Series/>
    </div>
  )
}
