function submitt(){
  var name=document.getElementById("name");
  var countryfrom=document.getElementById("countryfrom");
  var countryto=document.getElementById("countryto");
  var individualsnumber=document.getElementById("individualsnumber");
  var leavingdate=document.getElementById("leavingdate");
  var returningdate=document.getElementById("returningdate");
  var email=document.getElementById("email");
  var mobile=document.getElementById("mobile");
  var notes=document.getElementById("notes");
  if( name.value&& countryfrom.value && countryto.value && individualsnumber.value && notes.value&& leavingdate.value && returningdate.value && email.value && mobile.value){
	var reg=/[a-z]/,reg2=/[0-9]/,reg3=/^([0-9]|[0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|([0-9])|((1)[0-2]))(\/)\d{4}$/,reg4=/[0-9]/;
	if(!(name.value).match(reg))alert("Your name Must have only characters");
	else if(!(countryfrom.value).match(reg))alert("there isnt any country name like this!");
	else if(!(countryto.value).match(reg))alert("there isnt any country name like this!");
	else if(!(individualsnumber.value).match(reg2))alert("Please insert a number of individuals");
	else if(!(leavingdate.value).match(reg3))alert("Please insert a date in dd/mm/yyyy format");
	else if(!(returningdate.value).match(reg3))alert("Please insert a date in dd/mm/yyyy format");
	else if(!(mobile.value).match(reg4))alert("Please insert a phone number format");
	else if((email.value).search("@")==-1||(email.value).search(".")==-1)
	{
	confirm("E-mail must has '@'and '.' on it");
	}
	else if((email.value).search("@")<6 &&(email.value).search("@")!=-1)
{
  confirm("E-mail must has at least 6 characters");
}
else if((email.value).search("@gmail.com")==-1 &&(email.value).search("@yahoo.com")==-1&&(useremail.value).search("@outlock.com")==-1)
{
confirm("you must input your E-mail location");
}
else
confirm("SUCCESSFUL BOOK");
  }
  else {
	alert("Please Fill The Empty Cells");
  }

}
