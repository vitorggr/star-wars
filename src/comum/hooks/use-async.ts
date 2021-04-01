import { useEffect, useState } from "react";

export interface AsyncResultType<T> {
    isLoading : boolean;
    error:boolean;
    result: T | undefined;
}
// : AsyncReturnType<T>
export const useAsync = <T>(asyncFn: Promise<T>) => {
    const[isLoading,setIsLoading] = useState(false);
    const[error,setError] = useState(false);
    const[result,setResult] = useState<T>();

    useEffect(()=>{
        const fn=async() =>{
            setIsLoading(true);
            setError(false);
            try {
                const result = await asyncFn;
                setIsLoading(false);
                setResult(result);
            } catch (error) {
                setError(true);
                setIsLoading(false);
            }
        }
        fn();
    },[setIsLoading,setResult,setError,asyncFn])

    return {isLoading,error,result}

}