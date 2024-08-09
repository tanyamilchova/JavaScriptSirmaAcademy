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
rootReactElement.render(headerJSX);

// create element without JS 
// function Main(){
    // return React.createElement(
    //     'main',
    //     null,
    //     React.createElement('h3',{},'Main section'),
    //     React.createElement('p',{},'Lorem Ipsum')

    // );
//     <main>
//         <h3>

//         </h3>
//     </main>
// }
// const mainElement=Main();//ръчно
//  const bodyElement=React.createElement(
//     'div',
//     null,
//     headerJSX,
//     //Main()
//     React.createElement(Main,)
//  );
//  function Body(){
//     return(
//     <div>
//         {headerJSX}
//         <Main/>
//     </div>
//     )
//  }

//  rootElement.render(bodyElement);
// //-COMPONENT IS A functons that returns JSX
// function Comp(){
//     return headerJSX;
// }