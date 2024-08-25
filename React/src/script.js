const rootElement=document.getElementById('root');
const rootReactElement=ReactDOM.createRoot(rootElement);



// native react syntax
// const headingReactElement=React.createElement('h1',{},'Hello from React scr.js');
// rootReactElement.render(headingReactElement);
// console.log(headingReactElement);
// setTimeout(()=>{
//     rootReactElement.render(headingReactElement);
// },200);


// const secondHeadReactElement=React.createElement('h2',{},"create H2 from React");
// const headerReactElements=React.createElement('section',
//     {},
//     headingReactElement,
//     secondHeadReactElement);

//     setTimeout(()=>{
        // rootReactElement.render(headerReactElements);
//     },200);


//jsx syntax

const headerJSX=(
    <header>
        <h1 className="page-header">Hello from JSX</h1>
        <h2>Best UI Library </h2>
    </header>
);

// create component without JSX

// rootReactElement.render(headerJSX);

// create element without JS 
function Main(){
    return React.createElement(
    <main>
        <h3> Main section</h3>
        <p> Lorem Ipsum</p>
    </main>

        // 'main',
        // null, // options
        // React.createElement('h3',{},'Main section'), //1st child
        // React.createElement('p',{},'Lorem Ipsum')    //2nd child

    );

}
// const mainElement=Main();//ръчно

 function Body(){
    return(
    <div>
        {headerJSX}
        <Main/>
    </div>
    )
 }

 rootReactElement.render(<Body/>);
// //-COMPONENT IS A functons that returns JSX
// function Comp(){
//     return headerJSX;
// }

// const Component=()=>{
//     return (
//         <h1>abc</h1>

//     );
// }