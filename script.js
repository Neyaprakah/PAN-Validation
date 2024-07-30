function panvalidation(){
    let val=document.getElementById("panno").value;
    let check=/[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if(val=="")
    {
        window.alert("PAN no should not be empty!!");
    }
    else if(!check.test(val))
    {
        window.alert("Enter a valid PAN number");
    }
    else if(check.test(val))
    {
        window.alert("Your response is recorded");
    }
}