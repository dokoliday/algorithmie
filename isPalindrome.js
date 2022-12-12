const isPlaindrome=(x)=>{
    return x.toString().split('').reverse().join("") === x.toString().split('').join('');
}
console.log(isPlaindrome(121))
console.log(isPlaindrome(122))