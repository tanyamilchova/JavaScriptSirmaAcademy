import { useEffect, useState } from "react"
// export default function useFetch(url, initialState){
// transform - function which by default accepts state and return state
    export default function useFetch(url, initialState, transform = result=> result){ //Generic way
    const [state, setState]=useState(initialState);

    // 1начин
    // useEffect(()=> {
    //     (async () => {
    //         const responce= await fetch(url);
    //         const result= await responce.json();

    //         setState(result);
    //     }) () ;             // IIFE imediately involved function expression самоизпълнява се
    // }, [ url ] );           // url is outside the useEfrct so have to be added to dependency array- [ url ]

    // 2начин
//     useEffect(()=> {
//     fetch(url)
//             .then (responce => responce.json())
//             .then (result => setState(result));
//         }, [ url ] );
//     return [state, setState];
// }

// with transform:
useEffect(()=> {
    fetch(url)
            .then (responce => responce.json())
            .then (result => setState(transform(result))); // Generic way - указва как да се трансформира резултата преди да се запази в стейта
        }, [ url ] );
    return [state, setState];
}