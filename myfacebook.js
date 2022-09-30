var database = [
    {
    email: "damos01@gmail.com",   
    password: "damos2000"
    },

    {
      email: "samah02@gmail.com",   
      password: "samah2000"
    },
    {
      email: "maryam03@gmail.com",   
      password: "maryam2000"
    },

    {
      email: "rasheed04@gmail.com",   
      password: "rasheed2000"
    },
    {
      email: "isreal0@gmail.com",   
      password: "isreal2000"
    },
    {
      email: "martins06@gmail.com",   
      password: "martins2000"
    },
    {
      email: "gabrielle07@gmail.com",   
      password: "gabby2000"
    },
    {
      email: "daniel@gmail.com",   
      password: "dan2000"
    },
    {
      email: "oluniyi@gmail.com",   
      password: "olu2000"
    },
    {
      email: "ebenezer@gmail.com",   
      password: "eben2000"
    }
]


  var studentportal = [
      {
      portal: "Welcome to your portal Mr Damos, we hope you are ready for the exams"
      },

      {    
      portal: "Welcome to your portal Mr Samah, we hope you are ready for the exams"
      },
      {   
      portal: "Welcome to your portal Miss Maryam, we hope you are ready for the exams"
      },

      {   
      portal: "Welcome to your portal Mr Rasheed, we hope you are ready for the exams"
      },
      {  
      portal: "Welcome to your portal Mr Isreal, we hope you are ready for the exams"
      },
      {   
      portal: "Welcome to your portal Mr Martins, we hope you are ready for the exams"
      },
      {   
      portal: "Welcome to your portal Miss Gabby, we hope you are ready for the exams"
      },
      {   
      portal: "Welcome to your portal Mr Daniel, we hope you are ready for the exams"
      },
      {    
      portal: "Welcome to your portal Mr Olu, we hope you are ready for the exams"
      },
      {   
      portal: "Welcome to your portal Mr Ebenezer, we hope you are ready for the exams"
      }
  ]

let promptusername= document.getElementById("inpt1")
let promptpassword= document.getElementById("inpt2")
let firstbutton= document.getElementById("bnt")
let secondbutton= document.getElementById("cna")

function details(){
  for(var i=0; i<database.length; i++){
  if(database[i].email === promptusername.value && database[i].password===promptpassword.value){
    return true;
  }
  }
  return false;
}

function login(){
  if (details()){
    window.open("facebook.html")
  }
  else {alert ("please input correct details")
    window.open("myfacebook.html")}
}

firstbutton.addEventListener("click", login)

