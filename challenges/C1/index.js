function wave(str) {
    let result=[];
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) !== " "){
            let arr = str.split("");
            let x= str.charAt(i).toUpperCase();
            arr.splice(i,1,x);
            result.push(arr.join(""));
        }
    }
    console.log(result);
    return result;
}
wave("two words"); 
//  -> [ 'Two words',
    //   'tWo words',
    //   'twO words',
    //   'two Words',
    //   'two wOrds',
    //   'two woRds',
    //   'two worDs',
    //   'two wordS' ]