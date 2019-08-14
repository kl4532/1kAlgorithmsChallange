// Iterative Rotation Cipher

const IRC = {
    encode(n, text) {
        let result = text
        function rotate(times, str){
            let rememberSpaces = IRC.findSpaces(str);
            if(times>0){
                str = str.replace(/\s/g, '');
                str = IRC.shiftOrder(str, n, true);
                rememberSpaces.forEach(i => {
                    str = str.slice(0,i) + ' ' + str.slice(i);
                })      
                str = str.split(' ').map(sub => sub=IRC.shiftOrder(sub, n, true)).join(' ');
                return times === 1 ? str : rotate(times-1, str);     
            };
            
        }
        result = rotate(n, result);
        console.log(result);
        return n + " " + result;
    },
    decode (text) {
        let result = text
        let n = text.match(/[^\s]+/)[0];
        result = result.slice(n.length+1, result.length);
        function rotate(times, str){
            let rememberSpaces = IRC.findSpaces(str);
            if(times>0){
                str = str.split(' ').map(sub => sub=IRC.shiftOrder(sub, n, false)).join(' ');
                str = str.replace(/\s/g, '');
                str = IRC.shiftOrder(str, n, false);
                rememberSpaces.forEach(i => {
                    str = str.slice(0,i) + ' ' + str.slice(i);
                })      
                return times === 1 ? str : rotate(times-1, str);     
            };
            
        }
        result = rotate(n, result);
        console.log(result);
        return result;

    },
    findSpaces(str){
        const spaces = [];
        str.split('').forEach((s,index)=>{
            s === ' ' ? spaces.push(index) : null;
        })
        return spaces;
    },
    shiftOrder(str, n, clockwise){
        let rotated = str.split('');
        if(clockwise){
            while(n>0){
                let temp = rotated.pop();
                rotated.unshift(temp);
                n--;
            }
            rotated = rotated.join('');
            return rotated
        }else{
            while(n>0){
                let temp = rotated.shift();
                rotated.push(temp);
                n--;
            }
            rotated = rotated.join('');
            return rotated
        }
    }
}
let encoded = IRC.encode(10, 'If you wish to make an apple pie from scratch, you must first invent the universe.');
IRC.decode(encoded);

// If you wish to make an apple pie from scratch, you must first invent the universe.
// hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet
