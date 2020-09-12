let userName = document.querySelector("input[name='user-name']");
document.querySelector("input[name='user-name']")
function myFunction() {
    console.log( userName );
}
myFunction();
// console.log( userName );

let userEmail = document.querySelector("input[name='user-email']");
document.querySelector("input[name='user-email']")
function nextFunction() {
    console.log( userEmail );
}
nextFunction();
// console.log( userEmail );

let userPassword = document.querySelector("input[name='user-password']");
document.querySelector("input[name='user-password']")
function doubleNextFunction() {
    console.log( userPassword );
}
doubleNextFunction();
// console.log( userPassword );

/*
let sendButton = document.querySelector("btn btn-success");

sendButton.addEventListener("click", function() {
    alert("Sikeres regisztráció te Gechi");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});
*/

    // űrlap események.
    /*let orderForm = document.querySelector("#orderForm");
    orderForm.addEventListener("submit", function(ev) {
        ev.preventDefault();
        console.log( this );
    }); */

    let product = {
        price: 666,
        desc: function() {
            return "Üdvözlöm!";
        }
    }

    console.log( product.desc() );

   // submit.addEventListener("click", myScript);

    function fillPre(content) {
        document.querySelector('pre').innerHtml = content;
    }
    const inputList = document.querySelectorAll('input');
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].addEventListener) {
            inputList[i].addEventListener('change' , function(event) {
                fillPre( this.className + ': ' + this.value );
            });
        }
    }
// táblázat (csak hiányzik maga a szerver)
    let table = document.querySelector("#demoTable");
    for (  let i = 0; i < userPassword.length; i++ ) {
        let tr = document.createElement("tr");
        for ( let data of Object.values(users[i]) ) {
            let td = document.createElement("td");
            td.innerHTML = data;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }