let password=document.getElementById('password');
let letters=document.getElementById('letter');
let num=document.getElementById('number');
let symbol=document.getElementById('symbol');
let button=document.getElementById('button');
let bar=document.getElementById('bar');
let Length=document.getElementById('length');

bar.addEventListener('input',function(e){
let Length=document.getElementById('length');
Length.innerHTML=bar.value
console.log('updated')
})



Generate=()=>{
let Length=document.getElementById('length').value;
let letters=document.getElementById('letter');
let no=document.getElementById('number');
let sym=document.getElementById('symbol');
let bar=document.getElementById('bar').value;
let password=document.getElementById('password');
let symbol=['!@#$%^&*()'];
let numbers=[1234567890]
numbers=parseInt(numbers)
let Array=['abcdefghijklmnopqrstuvwxyz'];
//let fk='';
if(no.checked&&sym.checked&&letters.checked){
let ok=Array+symbol+numbers
let empty=[];
for (let i=0;i<bar;i++){
let random=Math.floor(Math.random()*ok.length);

empty.push(ok[random]);
let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
console.log(empty)
password.innerHTML=hi;
}
//console.log(ok);

//if(letters.checked&&no.checked){
//fk=Array+numbers
//empty.push(fk[random])
//console.log(empty);
    //ok=Array+numbers+"";
//console.log(ok)
//empty.push(ok[random]);
//console.log(empty);
//}
}
if(no.checked&&sym.checked&&letters.checked==false){

    let ok=symbol+numbers
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*ok.length);
    
    empty.push(ok[random]);
    let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log('letter missing')
    console.log(empty)
    password.innerHTML=hi;
    }
    

}
if(letters.checked&&no.checked&&sym.checked==false){

    let ok=Array+numbers
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*ok.length);
    
    empty.push(ok[random]);
    let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log(empty)
    password.innerHTML=hi;
    }
    

}

if(sym.checked&&letters.checked&&no.checked==false){

    let ok=Array+symbol
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*ok.length);
    
    empty.push(ok[random]);
    let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log(empty)
    password.innerHTML=hi;
    }
    

}

if(letters.checked==false&&no.checked==false){

    let symbol=['!','@','#','$','%','^','&','*','()'];
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*symbol.length);
    
    empty.push(symbol[random]);
    let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log(empty)
    password.innerHTML=hi;
    }
    

}
if(letters.checked==false&&sym.checked==false){

    let numbers=[1,2,3,4,5,6,7,8,9,0]
//numbers=parseInt(numbers)
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*numbers.length);
    
    empty.push(numbers[random]);
    let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log(empty)
    password.innerHTML=hi;
    }
    

}


if(no.checked==false&&sym.checked==false){

    let Array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*Array.length);
    
    empty.push(Array[random]);
   let hi=empty.slice(0,bar).join(' ');
   console.log(hi);
    console.log(empty)
    
    password.innerHTML=hi;

}
    

}

if(no.checked==false&&sym.checked==false&&letters.checked==false){

    //let Array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let empty=[];
    for (let i=0;i<bar;i++){
    let random=Math.floor(Math.random()*empty.length);
    
    empty.push(empty[random]);
    
    console.log(empty)
    password.innerHTML="fill the requirements first... ";
    console.log('fill the requirement first')

    }
    

}

//password.innerHTML=empty;
console.log('clicked')
}
button.addEventListener('click',Generate);

