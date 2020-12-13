console.log('we are in tut20');
localStorage.setItem('Name', 'rishu');
let a = localStorage.getItem('Name');
localStorage.setItem('name',JSON.stringify('Name'))
// Local storarge clear all value
localStorage.clear();
localStorage.removeItem('Name');
console.log(a);

// Local storarge clear all value
sessionStorage.clear();
sessionStorage.removeItem('Name','rohan')
console.log(a);

