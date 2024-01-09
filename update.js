let id = new URLSearchParams(window.location.search).get("id");
let Name=document.querySelector("#name");
let fileimg=document.querySelector("#file");
let imgDiv=document.querySelector("#imgdiv");
let Cat=document.querySelector("#cat");
let Submit=document.querySelector("#submit");
let Form=document.querySelector("#form");



// axios(`http://localhost:3000/travel/${id}`)
// .then((res)=>{
//     Name.value=data.name,
//     Cat.value=data.category,
//     imgDiv.src=data.image

// })

fileimg.addEventListener("input", (e)=>{
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgDiv.src = reader.result
        }
    }
})
 

Submit.addEventListener("click", () => {
    if (!id) {
        axios.post(`http://localhost:3000/travel`, {
            name: Name.value,
            cat: Cat.value,
            image: imgDiv.src,
        })
        .then(res=>window.location="./index.html")
    } else {
        axios.patch(`http://localhost:3000/travel/${id}`, {
            name: Name.value,
           cat: Cat.value,
            image: imgDiv.src
        })
        .then(res=>window.location="./index.html")
    }
})