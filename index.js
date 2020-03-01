//nav bar logic starts
let nav01 = document.getElementById("nav01");
let nav02 = document.getElementById("nav02");
let empNav = document.getElementById("emp-nav");
let timeObj = document.getElementById("time");
// nav01.style.display="none";
// nav02.style.display="none";
// nav01.style.display="block";
// nav02.style.display="block";

// $("#emp-nav").hide();
// $("#emp-nav").show();
    clockDisplay()
    $("#request-card").hide();

    nav01.addEventListener('click', function(){
        $("#request-card").hide();
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
        $("#welcome-page").hide();
        $("#request-card").show();
        console.log("click check script two")
    })

    
//nav bar logic ends


//login logic starts
let logout = document.getElementById("logout");
let login = document.getElementById("login");
let loginCard = document.getElementById("login_card");

logout.hidden=false;
login.hidden=true;
loginCard.hidden=true;
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

