function getFinalOpenedDoors(num){
    let doors = [];
    let result = [];

    // filing array with 100 closed(false) doors
    for(let i = 0; i<num; i++){
        doors.push(false);
    }
    toggle(doors).forEach((door, index) => door ? result.push(index+1) : 0);
    return result;

    function toggle(doors){
        let step = 1;
        while(step<=num){
            for(let i = step-1; i<doors.length; i+=step){
                doors[i] = !doors[i]; // open/close door
            }
            step++;
        }
        return doors;
    }
}
console.log(getFinalOpenedDoors(100));
getFinalOpenedDoors(100);