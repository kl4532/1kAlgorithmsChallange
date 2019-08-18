function validate(password) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_]{6,}$/.test(password);
}
console.log(validate('Da_as2'));


// Best solution from CW

// function validate(password) {
//     return  /^[A-Za-z0-9]{6,}$/.test(password) &&
//             /[A-Z]+/           .test(password) &&
//             /[a-z]+/           .test(password) &&
//             /[0-9]+/           .test(password) ;
//   }