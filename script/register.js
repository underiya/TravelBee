


// POST DATA


let url = `https://travel-bee-server.onrender.com/users`;

let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let email = document.querySelector(".email");
let password = document.querySelector(".pass");

let submit = document.querySelector(".submit");


submit.addEventListener("click", (event) => {
  event.preventDefault();
  
  if(fname.value !== "" && lname.value !=="" && email.value !=="" && password.value !=""){
      postData();
      alert("Account Created Successfully");
      window.location.replace("./login.html");
  }
  else{
    alert("Please fill out all fields!");
  }

});



async function postData() {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            "firstname": `${fname.value}`,
            "lastname": `${lname.value}`,
            "email": `${email.value}`,
            "password": `${password.value}`
      })
    });
    let data = await res.json();
     console.log(data);
  } catch (error) {
    console.log(error);
  }
}
