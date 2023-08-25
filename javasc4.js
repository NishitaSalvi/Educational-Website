let body=document.body;
let sideBar=document.getElementById("sside-bar");
let profile=document.getElementById("pprofile");
let searchForm =document.getElementById("ssearch-form");


document.getElementById("user-btn").addEventListener( "click",() => {
    profile.classList.toggle("active");
    searchForm.classList.remove("activee");


})


document.getElementById("search-btn").addEventListener( "click",() => {
    profile.classList.remove("active");
    searchForm.classList.toggle("activee");

})


document.getElementById("menu-btn").addEventListener( "click",() => {
    sideBar.classList.toggle("activeee");
    body.classList.toggle("activeee")
})


window.onscroll = () =>{
    profile.classList.remove("active");
    searchForm.classList.remove("activee");
    
}

