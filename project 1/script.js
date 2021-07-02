
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

function checklength(input,minval,maxval)
{
if (input.value.length < minval)
{
    showerror(input,`${getFieldId(input)} needs to be atleast ${minval}`);



}
else if(input.value.length > maxval)
{
    showerror(input,`${getFieldId(input)} needs to be atleast ${minval}`);
}
else
{
    showsuccess(input);

}
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

  
    checklength(username,3,10);
    checklength(password,6,30);

});





