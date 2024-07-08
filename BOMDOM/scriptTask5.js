function insertRow(){
    const tableBodyElement=document.querySelector("#sampleTable > tbody");
    
    const countRows=tableBodyElement.children.length;
    
    const firstTd=document.createElement("td");
    firstTd.textContent=`Row${countRows + 1} cell1`;

    const secondTd=document.createElement("td");
    secondTd.textContent=`Row${countRows + 1} cell2`;

    const rowElement=document.createElement("tr");
    rowElement.appendChild(firstTd);
    rowElement.appendChild(secondTd);

    tableBodyElement.appendChild(rowElement);

}