function signUp(UserName)
{
    let arr=["Alice","Bob","Dave"];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===UserName)
        {
             return "User Already Registered, Please Login!";
        }
                
    }
    arr.push(UserName);
    console.log(arr);
    return "SignUp Successful, Please Login!"
}

let res=signUp("Kim");
console.log(res);

function loginPage(Username, Password)
 {
    let arr = ["Alice", "David", "Bob"];
    let userFound = false; 
    for (let i = 0; i < arr.length; i++)
         {
        if (arr[i] === Username)
         {
            userFound = true; 
            if (Password === "Emp@123")
           {
                return "Login Successful!";
            } else 
            {
                return "Wrong Password";
            }
        }
    }
    if (!userFound) 
    {
        return "User Not Found, Please SignUp!";
    }
}

let res1 = loginPage("Alice", "Emp@123");
console.log(res1); 
console.log(loginPage("Alice", "abc"));
console.log(loginPage("Charlie", "Emp@123"));
