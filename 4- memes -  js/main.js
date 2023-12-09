let myForm = document.querySelector("form");
let myInput = document.querySelector(".input");
let myBtn = document.querySelector(".submit");
let container = document.querySelector(".data");

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
});

fetch(" https://api.imgflip.com/get_memes")
.then((res)=> res.json())
.then((d)=>{
    let myArray = d.data.memes;

    myBtn.addEventListener("click",()=>{
        if(myInput.value >=1 && myInput.value <=100){
            let myIndex = myInput.value;
            myIndex--;
            let result = `
            <h1 class="text">${myArray[myIndex].name}</h1>
            <img src="${myArray[myIndex].url}" class="img">
            `;
            container.innerHTML = result;
            container.style.color = "black";
            myInput.value = "";
        }else{
            container.innerHTML = "Enter valid number !";
            container.style.color = "red";
        }
    });
});

