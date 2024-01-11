const travel1 = document.querySelector('.sec8');
let copy = [];
function getAll() {
    fetch("http://localhost:3000/travel")
        .then(res => res.json())
        .then(data => {
            travel1.innerHTML = ""
            copy = copy.length ?copy:data;
            console.log(copy);
            copy.forEach(element => {
                travel1.innerHTML += `
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
                    <button onclick="Update(${element.id})" class="upd">Update</button>
                    <button onclick="favoritebox(${element.id})" class="fav">Favorite</button>
                    <a href="./details.html?id=${element.id}">details</a>

                </div>
            </div>
        `
            });
        });
}
getAll();

sort.addEventListener("change", (e) => {
    if (e.target.value == "asc") {
        copy=copy.sort((a, b) => a.name.localeCompare(b.name));
        console.log(copy);
    }
    else if (e.target.value == 'des') {
        copy=copy.sort((a, b) => b.name.localeCompare(a.name));
    } else {
        copy = []
    }
    getAll();
})


//update

function Update(id) {
    console.log(id);
    axios.get(`http://localhost:3000/travel/${id}`).then((res) => {
        window.location = `./update.html?id=${res.data.id}`;
        console.log(res.data);
        Name.value = res.data.name,
            Cat.value = res.data.category,
            imgDiv.src = res.data.image
    })
}





// delete

function deletebox(id) {
    axios.delete("http://localhost:3000/travel/" + id)
    window.location = "./index.html"
    console.log(element.id);

}


// favorite

function favoritebox(id) {
    axios.get(" http://localhost:3000/travel/" + id)
        .then(res => {
            axios.post(" http://localhost:3000/Favorite", res.data)
        }).then(res => window.location = "./favorite.html")
}




