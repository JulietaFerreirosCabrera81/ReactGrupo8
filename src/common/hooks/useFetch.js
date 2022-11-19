import { useEffect, useState } from 'react';


 export const useFetch = (service, onInit= true ) =>{
    const[data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState();
    const [ canFetch, setCanFetch ] = useState(onInit);

const getData = async () => {
    setIsLoading(true)
    try {
        const res = await service();
        setData(res);
    } catch (error){
        setError(error);
    } finally{
        setIsLoading(false)
    }
   };

    useEffect(() => {
        if ( canFetch ){
        getData();
        }
    }, [canFetch])
    
    return {
        data,
        isLoading,
        error,
        setCanFetch,
    };

}