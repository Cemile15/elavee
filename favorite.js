let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
let divfav2=document.querySelector(".fav-2");


fetch("http://localhost:3000/Favorite")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        divfav2.innerHTML+=`
        <div class="carttt">
        <div class="cart2">
            <img class="cart2"
                src="${element.image}"
                alt="">
        </div>
        <div class="cart3">
            <h1>${element.name}</h1>
            <p class="text1">${element.category}</p>
             <button onclick="deletebox(${element.id})" class="del">Delete</button>
        </div>
    </div>
        `
    });
})

function deletebox(id){
    axios.delete(" http://localhost:3000/Favorite/"+id)
    window.location="./favorite.html"
    console.log(element.id);

}