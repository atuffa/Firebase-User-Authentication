
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2jdMleMkNG2r9bOiPga6M3pM6jvMXPu4",
    authDomain: "authentication-d91b8.firebaseapp.com",
    databaseURL: "https://authentication-d91b8.firebaseio.com",
    projectId: "authentication-d91b8",
    storageBucket: "authentication-d91b8.appspot.com",
    messagingSenderId: "183771607101"
  };
  firebase.initializeApp(config);

  // get stored values
  const txtEmail =$("#txtEmail");
  const txtPassword=$("#txtPassword");
  const btnLogin=$("#btnLogin");
  const btnSignUp=$("#btnSignUp");
  const btnLogout=$("#btnLogout");
  const auth = firebase.auth();

  // add event listeners
 
  $("#btnLogin").on("click", function(){
    
    //  Get Email and password
    const email = txtEmail.val();
    const pass = txtPassword.val();
    // const auth = firebase.auth();

    //Sign in 
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // add sign up event 
  $("#btnSignUp").on("click", function(){
      
    //  Get Email and password
    const email = txtEmail.val();
    const pass = txtPassword.val();
    // const auth = firebase.auth();

    //Sign in 
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // add a logout btn event listener
  $("#btnLogout").on("click", function(){
    auth.signOut()
  })

  // add a real time authentication listener
  auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          console.log(firebaseUser);
          $("#btnLogout").removeClass("hide")
      }else{
          console.log("Not Logged In")
          $("#btnLogout").addClass("hide")
      }
  })


//
