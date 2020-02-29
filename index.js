//nav bar logic starts
let nav01 = document.getElementById("nav01");
let nav02 = document.getElementById("nav02");

    nav01.addEventListener('click', function(){
        console.log("click check script")
        fetch('http://date.jsontest.com/')
        .then((response) => {
            return response.json();
            })
        .then((data) => {
            console.log(data);
         });
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
login.hidden=false;
loginCard.hidden=false;
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