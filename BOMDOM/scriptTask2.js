function getFormValue(event){
    event.preventDefault();
    

    const firstEl=document.querySelector('input[name=fname]');
    const lastEl=document.querySelector('input[name=lname]');
    console.log(firstEl.value);
    console.log(lastEl.value);
}