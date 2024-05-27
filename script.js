

function allmarks(){
  const sub1 = parseInt(document.getElementById("telugu").value) ;
  const sub2 = parseInt(document.getElementById("hindi").value) ;
  const sub3 = parseInt(document.getElementById("english").value) ;
  const sub4 =parseInt( document.getElementById("maths").value) ;
  const sub5 = parseInt(document.getElementById("science").value );
  const sub6 = parseInt(document.getElementById("social").value) ;


  //marks validation

  if (sub1 >=101 ){
    alert("please enter the marks in below 100 telugu");
  } else if (sub2 >=101 ){
    alert("please enter the marks in below 100 in hindi");
  } else if (sub3 >=101 ){
    alert("please enter the marks in below 100 in english");
  } else if (sub4 >=101 ){
    alert("please enter the marks in below 100 in maths");
  } else if (sub5 >=101 ){
    alert("please enter the marks in below 100 in science");
  } else if (sub6 >=101 ){
    alert("please enter the marks in below 100 in social");
  }

  

  

  //total calculation

 var total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;

 let pass = 0;
 let passSubjects = ""; 
 
 let failed = 0;
 let failedSubjects = ""; 

 if(sub1 >= 35){
  pass = pass+1;
  passSubjects = passSubjects +" telugu ";
 }else{
  failed = failed+1;
  failedSubjects = failedSubjects + "telugu ";
 }
 if(sub2 >= 35){
  pass = pass+1;
  passSubjects = passSubjects +" hindi ";
 }else{
  failed = failed+1;
  failedSubjects = failedSubjects +" hindi ";
 }
 if(sub3 >= 35){
  pass = pass+1;
  passSubjects = passSubjects + "english ";
 }else{
  failed = failed +1;
  failedSubjects = failedSubjects + "english ";
 }
 if(sub4 >= 35){
  pass = pass+1;
  passSubjects = passSubjects +" maths ";
 }else{
  failed = failed+1;
  failedSubjects = failedSubjects + "maths ";
 }
 if(sub5 >= 35){
  pass = pass+1;
  passSubjects = passSubjects + "science  ";
 }else{
  failed = failed+1;
  failedSubjects = failedSubjects + "science ";
 }
 if(sub6 >= 35){
  pass = pass+1;
  passSubjects = passSubjects +"social ";
 }else{
  failed = failed +1;
  failedSubjects = failedSubjects +"social ";
 }
document.getElementById("pass_fail").innerHTML = pass + "/" + failed;
document.getElementById("ps_fs").innerHTML =  passSubjects + "/" +failedSubjects;

 //average calculation

 var average = total/6;

 document.getElementById("total").innerHTML = total;
 document.getElementById("average").innerHTML  = average.toFixed(1);

let grade = 0;
if(average >= 80){
  grade = 1;
} else if (average >= 70){
  grade = 2;
} else if(average >= 60){
  grade = 3;
}else if(average >= 50){
  grade = 4;
}else{
  grade = 5
}

switch(grade){
case 1:
document.getElementById("grade").innerHTML = "A"
break;
case 2:
  document.getElementById("grade").innerHTML = "B"
break;
case 3:
  document.getElementById("grade").innerHTML = "C"
  break;
  case 4:
    document.getElementById("grade").innerHTML = "D"
break;
default :
document.getElementById("grade").innerHTML = "E"
}



};




