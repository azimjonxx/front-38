// let m =prompt('ismingiz yozing')
// const s =document.querySelector('.s');
//  let a =localStorage.setItem('m', m)
//  let h = localStorage.getItem('m')
//   s.innerHTML=h

// // const name =prompt('ismngizni yozing')


// // localStorage.setItem('ism', name)

// // const olingan = localStorage.getItem('ism')

// // console.log()




// const h1 = document.querySelector('h1');
// const olinganh1 = localStorage.getItem('ism');

// const name = prompt('ismingizni yozing');
   
//  if(name){
//     localStorage.setItem('ism', name);
   
// }

// h1.textContent = olinganh1


const savedName = localStorage.getItem('ism');


const nameDisplay = document.getElementById('nameDisplay');
const addButton = document.getElementById('addButton');
const nameInput = document.getElementById('nameInput');


if (savedName) {
    nameDisplay.textContent = savedName;
}


addButton.addEventListener('click', function() {
    const name = Input.value;


   
    nameDisplay.textContent = name;
    localStorage.setItem('ism', name);

    console.log( name);
    
});

