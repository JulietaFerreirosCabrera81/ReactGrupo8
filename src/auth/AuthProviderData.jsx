import { useFetch } from '../common/hooks/useFetch';
import { getPopularMovies, getPopularTopMovies } from '../features/movies/services/getPopularMovies';
import { getPopularSeries, getPopularTopSeries } from '../features/series/services/getPopularSeries';
import { AuthContextData } from './AuthContextData';


export const AuthProviderData = ({children}) => {
    
     const {data: movies, isLoading: isLoadingMovies  } = useFetch(getPopularMovies);
     const {data: topMovies, isLoading: isLoadingTopMovies } = useFetch(getPopularTopMovies);
     const {data : series, isLoading: isLoadingSeries  } = useFetch(getPopularSeries);
     const {data: topSeries, isLoading: isLoadingTopSeries } = useFetch(getPopularTopSeries);

    return (
          <AuthContextData.Provider value={{  
            movies,
            topMovies,           
            series,             
            topSeries,              
            isLoadingMovies,
            isLoadingTopMovies,
            isLoadingSeries,
            isLoadingTopSeries,
          }}>
              {children}
         </AuthContextData.Provider>
   )
 };