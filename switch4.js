
let age = 40;

if(age <= 50){
   console.log('Abricot') ;
} else if( age >= 100){
    console.log('Ananas');
} 



console.log('****************************tableau**********************************');

let lala = [ 10, 7, 9, 8, 6 ];
console.log(lala);
lala.sort(function(a,b){
    return b-a
})
console.log(lala);

lala.sort(function(a,b){
    return a-b
})
console.log(lala);

let mimi = ['awa','dior','diarra'];
mimi.sort();
console.log(mimi);
