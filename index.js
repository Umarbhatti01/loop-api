function get(){
    alert(`hey`);
    let number;
    do{
        number = document.getElementById("no").value;
    }
    while (!(number>=0 && number <=100)){
        console.log(`Welcome To ATM`)
        document.getElementById("show").innerHTML = (`Welcome To ATM`);
    }
}


// for-loop
// function get(){    
//     alert(`hey`);
//     let number =  document.getElementById("no").value;
//     for (let i =1 ; i<=10;i++){
//         console.log(`${number} X ${i} = ${number*i}`)
//     }
// }


// While-loop
// function get() {
//     alert(`hey`);
//     let number =document.getElementById("no").value;
//     let i = 1;
//     while (i<=10){
//         console.log(`${number} X ${i} = ${number*i}`)
//         i++;
//     }
// }


