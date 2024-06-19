let matrix1=["a b c d","a b c d","a b c d"];
let matrix2=["k b c k","a b g d","a k c d"];
function addition(matrix1,matrix2){
    let result=[];
    for (let i = 0; i < matrix1.length; i++) {
        let row=[];
        for (let j = 0; j < matrix1[i].length; j++) {
            let elem;
            if(matrix1[i][j]===matrix2[i][j]){
                elem=matrix1[i][j];
            }else{
                elem="*";
            }
           row.push(elem);
        }
       result.push(row);
    }
    return result;
}
let resultMatrix=addition(matrix1,matrix2);

printMatrixJoin(resultMatrix);
function printMatrixJoin(matrix){
    for (let i = 0; i < matrix.length; i++) {
      const element = matrix[i].join(' ');
        console.log(element);
        }  
}
// function printMatrix(matrix){
//     for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         const element = matrix[i][j];
//         console.log(element);
//         }
//     }
// }
