function loger(service, text){
    console.log(`${service}: ${text}`);
}
loger('admin service','seccessful user registration');

//Partial application with function wrapper
const adminLog=(text)=> loger('admin', text);
adminLog('User has been deleted');

//Partial application with function wrapper
const userLog=loger.bind( {},'user');
userLog('Post created');

//fetch partial application
// axios.get('http://');

// async function fetcher(method, url,data){
//     return fetch()
// }

//CURRING
// -normal
constsum=(a,b,c)=>{
    return a+b+c;
}
// -curring
const currySum=a=>{
    return b=>{
        return c=>{
           return a+b+c; 
        }
    }
}
// Ако има arrow function, която връща expresion множе да се махне return-a и скобите
const currySum1=a=>b=> c=> a+b+c; 
        

const result=currySum(5)(10)(15);

const first=currySum(5);
const second=first(10);
const res=second(15);

console.log(result);