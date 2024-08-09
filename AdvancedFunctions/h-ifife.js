function iife(){
    console.log('iife');
}
iife();

// expresion (5+5)
// expresion ( function iife(){
    //         console.log('iife');
//             } )
// (  /*expresion*/  ); всеки expresion  може да бъде затворен в скоби
(function iife(){
    console.log('iife');
}) (); // executed immediately

// може и така } () );

// IIAFE arrow FE
( ()=>{console.log('iife');} ) ();