
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

function showerror(input,message)
{
    const formcontrol =input.parentElement;
    formcontrol.className= 'form-control error' ;    
    const small = formcontrol.querySelector('small');
    small.innerText = message;

}
function showsuccess(input)
{
const formcontrol=input.parentElement;
formcontrol.className='form-control success';

}

function checkRequired(inputArray)
{
    inputArray.forEach(function(input) {
        if(input.value === '')
        {
            showerror(input,`${getFieldId(input)}  is required `);
        }
        else
        {
            showsuccess(input);
        }
        
    });
}
function getFieldId(input)
{
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//create event for button
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username,email,password,confirmpassword]);

    //console.log(username.value)
    //check if username empty
 //   if(username.value ==='' )
    //{
//showerror(username, 'Username is required!')

  //  }
   // else {
     //   showsuccess(username);
    //}

    //if(email.value ==='' )
    //{
//showerror(email, 'Email is required!')

  //  }
    //else {
      //  showsuccess(email);
   // }

    //if(password.value ==='' )
    //{
//showerror(password, 'Password is required!')

  //  }
    //else {
      //  showsuccess(password);
   // }

    //if(confirmpassword.value ==='' )
    //{
//showerror(confirmpassword, 'Confirm password is required!');

  //  }
    //else {
      //  showsuccess(confirmpassword);
    //}
    

    

});





