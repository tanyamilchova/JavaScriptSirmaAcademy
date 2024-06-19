
let inputStr=["Student name: Mark, Grade: 8,Graduated with an average score:4.75","Student name: Lori, Grade: 8,Graduated with an average score:5.75","Student name: Nik, Grade: 9,Graduated with an average score:4.00","Student name: Klark, Grade: 9,Graduated with an average score:6.75","Student name:Alen, Grade: 7,Graduated with an average score:3.75","Student name:Bob, Grade: 7,Graduated with an average score:5.00"];
function result(inputStr){
    let arrStudents=[];
    inputStr.forEach(element => {
    let resArr=element.split(",");
    
    let name=resArr[0].split(":")[1];
    let grade=parseInt(resArr[1].split(":")[1]);
    let score=parseFloat(resArr[2].split(":")[1]);
 
    let student={name:name,grade:grade,score:score};
  if(student.score>3.00){
        arrStudents.push(student);
    }
});
return arrStudents;
}
let nextYearStudents=result(inputStr);
console.log(nextYearStudents);

let resString="";

for (let i = 1; i <12; i++) {
    let avg=0;
    let countStudents=0;
    let list="";
   
    for (let j = 0; j < nextYearStudents.length; j++) {
        const element = nextYearStudents[j];
       if(element.grade===i){
            countStudents++;
            avg+=element.score;
            list+=element.name+", ";
        }
    }
    if(countStudents>0){
        let infoStr=`${i}Grade `+`ListOfStudents ${list}`+`Avg ${avg/countStudents}`;
    
        resString+=(infoStr+"\n==============\n");
    }
}
console.log(resString);
