import {useState, useEffect} from 'react';


const useFetch = (url,stateID) =>{

   
    const abortConst = new AbortController();
    const [data1, setData] = useState(null);
    const [err, setError] = useState(null);
    const [loading,setLoading] = useState(true);


     useEffect(()=>
    {
        setTimeout(() => {
            fetch(url, {signal : abortConst.signal})
            .then(res=>
                {
                    if(!res.ok)
                    {
                        throw err('Could not fetch it Okily!')
                    }
                    return res.json();
                })
            .then(data1=>
                {
                    setData(data1);
                    setError(null);
                    setLoading(false);
                }
            )
            .catch(err=>
                {
                    if(err.name === 'AbortError')
                    {
                        console.log("Fetch aborted");
                    }
                    else
                    {
                        setError(err.message);
                        setLoading(false);
                    }
                }
            )
        });

       return ()=> abortConst.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

    return {data1, err, loading};
}


export default useFetch;