// 5. Closure for Data Privacy
// Create a function that returns an object with two methods: one to get a private variable
// and one to set it. Use a closure to maintain the private variable.


function createPrivateCounter(){
    let value=0;
    return{ increment:function(){
            console.log(value++);
        },
        getCount:function(){
            return value;
        }
    };
    

}

const counter = createPrivateCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());