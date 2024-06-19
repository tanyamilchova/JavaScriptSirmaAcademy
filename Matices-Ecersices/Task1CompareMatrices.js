let matrix1=[[1,2,3],[4,5,6]];
let matrix2=[[1,2,3],[4,5,6]];

function compareMatrices(matrix1,matrix2) {
    let equal=true;
   for (let i = 0; i < matrix1.length; i++) {
   equal=true;
        if(!compareRow(matrix1[i],matrix2[i])){
     console.log("Matrix are not equal");
     equal=false;
            break;
        }
    }
    if(equal){
        console.log("Equal");
    }
}
function compareRow(row1,row2){
    let equal=true;
    for (let i = 0; i < row1.length; i++) {
        equal=true;
        if( row1[i]!=row2[i]){
        equal=false;
            break;
        }    
    }
    return equal;
}
// compareRow([1,2,3],[1,2,3]);
compareMatrices(matrix1,matrix2);
// compareMatrices(matrix);
// let matrix1=[
//     [[1,2],[10,20],5],
//     [[3,4],[30,40],7]
// ];
// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix1[i].length; j++) {
//         const element = matrix1[i][j];
//         console.log(element);
        
//     }
    
// }
