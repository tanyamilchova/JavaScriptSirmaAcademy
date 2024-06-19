let matrix1=[[1,2],[3,4]];
let matrix2=[[2,2],[2,2]];
function addition(matrix1,matrix2){
    let result=[];
    for (let i = 0; i < matrix1.length; i++) {
        let row=[];
        for (let j = 0; j < matrix1[i].length; j++) {
            let elem=matrix1[i][j]+matrix2[i][j];
           row.push(elem);
        }
       result.push(row);
    }
    return result;
}
let resultMatrix=addition(matrix1,matrix2);

printMatrix(resultMatrix);
function printMatrix(matrix){
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];
        console.log(element);
        }
    }
}