import {useState, useEffect} from 'react';


const useFetch = (url) =>{

   
    const abortConst = new AbortController();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loadingM,setLoading] = useState(true);


     useEffect(()=>
    {
        setTimeout(() => {
            fetch(url, {signal : abortConst.signal})
            .then(res=>
                {
                    if(!res.ok)
                    {
                        throw error('Fetch wasnt Successful! Try Again')
                    }
                    return res.json();
                })
            .then(data=>
                {
                    setData(data);
                    setError(null);
                    setLoading(false);
                }
            )
            .catch(error=>
                {
                    if(error.name === 'AbortError')
                    {
                        console.log("Fetch aborted");
                    }
                    else
                    {
                        setError(error.message);
                        setLoading(false);
                    }
                }
            )
        });

       return ()=> abortConst.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

    return {data, error, loadingM};

}


export default useFetch;