function checkData()
{
    var userName = document.getElementById("uname").value;
    var regName = "[a-zA-Z]{3,20}"
    var myedu = document.myform.edu;
    if (userName == ""){
        // window.alert("This field is required...");
        document.getElementById("nameErr").innerHTML="This field id required.";
        document.myform.uname.focus();
        return false;
    }
    if (!userName.match(regName))
    {
        window.alert("This field contains only characters and minimum 3 and maximum 20 characters")
    }
    if (myedu[0].checked==false && myedu[1].checked==false && myedu[2].checked==false)
    {
        window.alert("Select you Qualification");
        return false;
    }
}