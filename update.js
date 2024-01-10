let id = new URLSearchParams(window.location.search).get("id");
let Name=document.querySelector("#name");
let fileimg=document.querySelector("#file");
let imgDiv=document.querySelector("#imgdiv");
let Cat=document.querySelector("#cat");
let Submit=document.querySelector("#submit");
let Form=document.querySelector("#form");

axios(`http://localhost:3000/travel/${id}`)
.then((res)=>{
    Name.value=res.data.name,
    Cat.value=res.data.category,
    imgDiv.src=res.data.image

})

fileimg.addEventListener("change", (e)=>{
    let src=e.target.files[0]

        let reader=new FileReader ();
        reader.readAsDataURL(src);
        reader.onload = function (e) {
            imgDiv.src = e.target.result
        
    
}
})
 
Form.addEventListener("submit", () => {
    if (!id) {
        axios.post(`http://localhost:3000/travel`, {
            name: Name.value,
            cat: Cat.value,
            image: imgDiv.src,
        })
    } else {
        axios.patch(`http://localhost:3000/travel/${id}`, {
            name: Name.value,
           cat: Cat.value,
            image: imgDiv.src
        })
    }
});






