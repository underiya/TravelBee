
        let btn = document.querySelector(".btn");
        let email = document.querySelector(".uname");
        let pass = document.querySelector(".password");
        

   btn.addEventListener("click", (event) => {
     event.preventDefault();
    
      let user =  fetch("https://travel-bee-server.onrender.com/users");
        
        user.then((response) =>{
          return response.json();
        })
        .then((data) =>{
          // console.log(data[1].email);
          // console.log(data.length);
            for(let i=0; i<data.length; i++){
              if(email.value === "" && pass.value === ""){
                alert("Please fill out all fields!");
                return
              }
              if(email.value === data[i].email && pass.value === data[i].password){
                   console.log("logIn Successful");
                   window.location.replace("./index.html");
                   return
              }
              if(email.value === `admin@gmail.com` && pass.value === `admin`){
                  window.location.replace("./admin.html");
                  return
              }
            }
            console.log("Incorrect Email or Password");
        });
        
    });
