

let url = `https://travel-bee-server.onrender.com/users`;

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;

let submit = document.getElementById("submit").value;


async function postData() {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
            "fname": `${fname}`,
            "lname": `${lname}`,
            "email": `${email}`,
            "password": `${password}`
      })
    });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();