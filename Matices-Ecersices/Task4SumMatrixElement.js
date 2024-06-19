let matrix=[[7,1,3,3,2,1],
            [1,3,9,8,5,6],
            [4,6,7,9,1,0]];
function sumMatrElem(matrix){
    let sum=0;
    let rows=0;
    let cols=0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let elem=matrix[i][j];
            sum+=elem;
        }
    }
    console.log(matrix.length);
    console.log(matrix[0].length);
    console.log(sum);
}
sumMatrElem(matrix);