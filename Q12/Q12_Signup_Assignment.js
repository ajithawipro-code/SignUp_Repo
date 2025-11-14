function signUp(UserName)
{
    let arr=["Alice","Bob","Dave"];
    for(i=0;i<arr.length;i++)
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

let res=signUp("Alice");
console.log(res);