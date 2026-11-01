console.log("jsloaded");

document.querySelector(".menu-icon").addEventListener("click", ()=>{
    if(document.querySelector(".menu").style.display === "block"){
    document.querySelector(".menu").style.display = "none";
}
    else{
    document.querySelector(".menu").style.display = "block";

    }
});


//java script coded for Admin portal login
document.getElementById('myAdmin').addEventListener('submit', (e)=>{
e.preventDefault();
var userName = document.getElementById('user').value;
var passWord = document.getElementById('pass').value;
if( userName === "Nkumba" && passWord === "GroupE" ) {
   alert("Success! Welcome to Admin Page");
    window.location.href = "./stock.html";
}
else {
    alert("Wrong Credentials; Please try Username Nkumba and Password GroupE");

}
})