//nav bar logic starts
let nav01 = document.getElementById("nav01");
let nav02 = document.getElementById("nav02");
let empNav = document.getElementById("emp-nav");
// nav01.style.display="none";
// nav02.style.display="none";
// nav01.style.display="block";
// nav02.style.display="block";

// $("#emp-nav").hide();
// $("#emp-nav").show();


    nav01.addEventListener('click', function(){
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
        console.log("click check script two")
    })
    
//nav bar logic ends


//login logic starts
let logout = document.getElementById("logout");
let login = document.getElementById("login");
let loginCard = document.getElementById("login_card");

logout.hidden=true;
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

//Employee logged in Menu starts
let firstCard = document.getElementById("first-card");
let listCards = document.getElementById("list-cards");
listCards.hidden=true;
firstCard.addEventListener('click', function(){
    console.log("clicked card1")
})