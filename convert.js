function startTime() {

    document.getElementById("txt").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
  
  }



function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}else{
    switch(y){
        case "Dollar":
            document.getElementById("value2").value = x * 72.42;
        break;

        case "Pound":
            document.getElementById("value2").value = x * 102.81;
        break;

        case "Euro":
            document.getElementById("value2").value = x * 88.35;
        break;

        case "Yen":
            document.getElementById("value2").value = x * 0.67;
        break;

       
    }
}
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
