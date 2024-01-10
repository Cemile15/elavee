let id = new URLSearchParams(window.location.search).get("id");
let divfav2=document.querySelector(".sec-two");

fetch(`http://localhost:3000/travel/${id}` )
.then(res=>res.json())
.then(element=>{
    console.log(element);
    divfav2.innerHTML=`
    
    <div class="carttt">
        <div class="cart2">
            <img class="cart2"
                src="${element.image}"
                alt="">
        </div>
        <div class="cart3">
            <h1>${element.name}</h1>
            <p class="text1">${element.category}</p>
            <button>Delete</button>
            <button>Update</button>
            <button>Favorite</button>

        </div>
    </div>
    `
})