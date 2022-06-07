//object constructor
function user(uName,email, password, age){
   this.uName=uName;
    this.email=email;
    this.age=age;
    this.password=password;
}

function isvalid(user){
    //return false if the user is not valid
    //return true if the user is valid
    //add password for email, password
    let valid=true;
    if(user.uName.length==0){
        valid=false;
        alert("please complete all fields");
        $("#txtUserName").addClass("input-error");
    }
    if(user.email.length==0){
        valid=false;
        alert("please complete all fields");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        alert("please complete all fields");
        $("#txtPassword").addClass("input-error");
    }
    if(user.age.length==0){
        valid=false;
        alert("please complete all fields");
        $("#txtAge").addClass("input-error");
    }
    return valid;
}

//register function
function Register(){
    let Uname= $("#txtUserName").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword").val();
    let userAge=$("#txtAge").val();

    console.log(Uname,userEmail,userPass,userAge)

    //creating the object
    let newUser = new user(Uname,userEmail,userPass,userAge);
    
    if(isvalid(newUser)==true){
        // console.log(newUser)
        saveUser(newUser);
        
        //clear input fields
        $('input').val("");
    }
}
function init(){
    console.log("Register")
    //hook events
    $("#btn-register").click(Register);
    $("#txtPassword").keypress(function(e){
        if(e.key=="Enter"){
            Register();
        }
    });
}

window.onload=init;