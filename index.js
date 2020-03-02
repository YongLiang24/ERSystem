//nav bar logic starts
let nav01 = document.getElementById("nav01");
let nav02 = document.getElementById("nav02");
let nav03 = document.getElementById("nav03");
let nav04 = document.getElementById("nav04");
let mainContent = document.getElementById("main-content");
let empNav = document.getElementById("emp-nav");
let timeObj = document.getElementById("time");
// nav01.style.display="none";
// nav02.style.display="none";
// nav01.style.display="block";
// nav02.style.display="block";
// $("#welcome-page").hide();
// $("#emp-nav").hide();
// $("#emp-nav").show();
$("#table_").hide();
$("#login-card").hide();
clockDisplay()
$("#request-card").hide();
$("#personal-info").hide();

    nav01.addEventListener('click', function(){
        $("#table_").hide();
        $("#request-card").hide();
        $("#personal-info").hide();
        $("#welcome-page").show();
        console.log("click check script")
        // fetch('http://date.jsontest.com/')
        // .then((response) => {
        //     return response.json();
        //     })
        // .then((data) => {
        //     console.log(data);
        //  });
    })
    nav02.addEventListener('click', function(){
        $("#table_").hide();
        $("#welcome-page").hide();
        $("#personal-info").hide();
        $("#request-card").show();
        console.log("click check script two")
    })

    nav03.addEventListener('click', ()=>{
        console.log("check nav03")
        $("#request-card").hide();
        $("#welcome-page").hide();
        $("#personal-info").hide();
        $("#table_").show();
    })

    nav04.addEventListener('click', ()=>{
        $("#request-card").hide();
        $("#welcome-page").hide();
        $("#table_").hide();
        $("#personal-info").show();
    })
    
//nav bar logic ends


//login logic starts
let logout = document.getElementById("logout");
let login = document.getElementById("login");

    logout.addEventListener('click', function(){
        console.log(this.id)
    })
    login.addEventListener('click', function(){
        console.log(this.id)
    })

let empType = document.getElementById("emp-type");

empType.addEventListener('change', function(ev){
    console.log(ev.target.value);
})
//login logic ends

//request card start






//welcome page 



function addZero(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }
function clockDisplay(){ 
    let d = new Date();
    let hours = addZero(d.getHours());
    let minutes = addZero(d.getMinutes());
    let seconds = addZero(d.getSeconds());
    timeObj.innerText=`${hours}:${minutes}:${seconds}`
}
setInterval(clockDisplay,1000);

