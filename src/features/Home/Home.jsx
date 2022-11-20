
import { Banner } from '../../common/componentsBanner/Banner';
import { useFetch } from '../../common/hooks/useFetch';
import { Movies } from '../movies/pages/Movies';
import { getPopularMovies } from '../movies/services/getPopularMovies';
import { Series } from '../series/pages/Series';


export const Home = () => {
    
    const {data : movies, error: errorMovies, isLoading: isLoadingMovies  } = useFetch(getPopularMovies); 

return (
    <div>
       <Banner data={ movies[10]}/> 
       <Movies/>
       <Series/>
    </div>
  )
}
