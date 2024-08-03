
let myElement = document.getElementById("myElement");
myElement.addEventListener("click", function () {
    if(myElement.style.textDecoration == "line-through"){ myElement.remove()
        
    } 
    myElement.style.textDecoration = "line-through";
    
    
});

let myButton = document.getElementById("myButton");
let myArray = [];
let myInput = document.getElementById("MyInput");
let counter = 0;
myButton2.addEventListener("click",function(){
    const oldHeaders = document.querySelectorAll('h1');
        oldHeaders.forEach(header => header.remove())
       myArray=[] ;
})
myButton.addEventListener("click", function () {
    if (myInput.value != "") {
        counter += 1;
        myArray.push(myInput.value);
        myInput.value = " ";

        
        const oldHeaders = document.querySelectorAll('h1');
        oldHeaders.forEach(header => header.remove());

    
        for (let i = 0; i < myArray.length; i++) {
            const h1 = document.createElement('h1');
            h1.textContent = myArray[i];
            document.body.appendChild(h1);
            h1.addEventListener("click", function () {

                if(h1.style.textDecoration == "line-through"){
                    h1.style.textDecoration = "none"
                }else{
                    h1.style.textDecoration = "line-through"
                }

            });
        }
    }
});


