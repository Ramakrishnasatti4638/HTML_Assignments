// function intoTable()
// {
//  var name=document.getElementById("fname").value+" "+document.getElementById("lname").value;
//  document.getElementById("full-name").innerHTML=username;
//  var email=document.getElementById("email_id").value;
//  var pnumber=document.getElementById("pnumber").value;
//  var password=document.getElementById("user_password").value;
//  var gender1=document.getElementById("gender_male");
//  var gender2=document.getElementById("gender_female");
//  var gender3=document.getElementById("gender_no");
//  if(gender1.checked==true)
//  {
//     var gender=document.getElementById("gender_male").value;
//  }
//  else if(gender2.checked==true)
//  {
//     var gender=document.getElementById("gender_female").value;
//  }
//  else
//  {
//     var gender=document.getElementById("gender_no").value;
//  }
//  alert(name);
//  var table=`<tr>
//                 <td></td>
//                 <td>${name}</td>
//             </tr>`;
// document.getElementById("table-body").innerHTML=name;
// 
// }


function validate()
{
   var username=document.getElementById("fname")+document.getElementById("lname");
   var password=document.getElementById("user_password");
   if(username.value.trim()=="" || password.value.trim()=="")
   {
      alert("Name or password was not filled");
      return false;
   }
   else
   {
      //document.getElementById("full-name").innerHTML=username;
      return true;
   }
}