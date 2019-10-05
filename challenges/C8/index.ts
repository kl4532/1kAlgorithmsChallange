export class G964 {
  public static accum(s: string):string {
      let arr = s.split('');
      let res: string = "";
      arr.forEach((letter, index: number) => {
        letter = letter.toLocaleLowerCase();
        res += letter.toUpperCase();
        let i = index;
        while(i>0){
          res += letter;
          i--;
        }
        index === arr.length-1 ? null : res += '-'; 
      })
      return res;
  }
}
// let show = G964.accum('seees');
// console.log(show);
console.log(G964.accum('ZpglnRxqenU'));
