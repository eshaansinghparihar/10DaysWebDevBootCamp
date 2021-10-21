const greeting=document.getElementById("greetings")
const hour=new Date().getHours()
const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"]
var welcomeMssg="";
if (hour < 12) welcomeMssg = welcomeTypes[0];
else if (hour < 16) welcomeMssg = welcomeTypes[1];
else welcomeMssg = welcomeTypes[2];
greeting.innerHTML = welcomeMssg + ", Let's get things done.";