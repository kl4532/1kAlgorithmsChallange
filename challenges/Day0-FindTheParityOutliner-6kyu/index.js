function findOutlier(integers){
    //your code here
    let temp = 0;
    for(let i=0; i<3; i++){
      integers[i]%2 === 0 ? temp++ : temp;
    }
    return temp>1 ? integers.filter(i=>i%2!==0)[0] : integers.filter(i=>i%2==0)[0];
}
//console.log(findOutlier([2, 2, 2, 0, 1, 4]));
//console.log(findOutlier([1, 1, 7, 1, 2, 1]));
