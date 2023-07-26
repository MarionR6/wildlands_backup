// MENU BURGER

const toggle = document.getElementById('toggle');
const navigation = document.getElementById('navigation');
document.onclick = function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'navigation'){
    toggle.classList.remove('active');
    navigation.classList.remove('active');
    }
}
toggle.onclick = function(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

// POP UP CONNEXION

const connexion = document.getElementById ('email');
const password = document.getElementById ('password');

// FETCH

const dataUser = "json/data.json"

const fetchUser = async () => {
    const response = await fetch (dataUser, {
        method:"GET",
        headers:{
            "Accept" : "application/json"
        },
    })
    .then(response => response.json())
    .then (data => {
        connexion.placeholder = `${data.users[0].email}`;
        password.placeholder = `${data.users[0].password}`;
    })
}

fetchUser()

const checkbox = document.getElementById('checkbox');
const emaildisable = document.getElementById("emaildisable");
const passworddisable = document.getElementById("passworddisable");

checkbox.addEventListener("change", () =>{
    if(checkbox.checked){
        emaildisable.classList.add("emaildisable");
        passworddisable.classList.add("passworddisable");
    }else{
        emaildisable.classList.remove("emaildisable");
        passworddisable.classList.remove("passworddisable");
    }
})