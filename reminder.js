var addReminderButton=document.getElementById("addReminderButton")

var reminders=[]

var backgroundColor=['#0F9D58','#F4B400','#4285F4' ,'#DB4437']

var sound = new Audio('https://www.freespecialeffects.co.uk/soundfx/computers/pop1.wav')

function convertNowToTimeDateLocal(){
    const now=new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0,16)
}

window.addEventListener('load',()=>{
    document.getElementById("reminderTime").value=convertNowToTimeDateLocal()
    setInterval(function(){
        notify()},30000)
})

function notify(){
    reminders.forEach(reminder=>{
        if(reminder.time===convertNowToTimeDateLocal())
        {
            if(Notification.permission==="granted")
            {
            showNotification(reminder)
            sound.play();
            }
            else if(Notification.permission==="denied" || Notification.permission==="default")
            {
                Notification.requestPermission().then(function(permission){
                    if(permission==="granted")
                    {
                        showNotification(reminder)
                        sound.play()
                    }
                })
            }
        }
    })
}

function displayReminder(){
 let card;
 reminder=reminders[reminders.length-1]
 card=document.createElement("div")
 card.setAttribute("class","card")
 color=backgroundColor[reminder.id%4]
 card.setAttribute("style",`background-color:${color};color:white;`)
 
 let title=document.createElement("p")
 title.setAttribute("class","cardTitle")
 title.setAttribute("style",`background-color:${color};color:white;`)
 title.innerHTML=reminder.title

 let deleteButton=document.createElement("button")
 deleteButton.setAttribute("class","deleteReminder")
 deleteButton.setAttribute("style",`background-color:white;color:${color};`)
 deleteButton.setAttribute("id", `${reminder.id}`)
 deleteButton.innerHTML=`<i class="fa fa-trash-o" aria-hidden="true"></i>`

 card.appendChild(title)
 card.appendChild(deleteButton)

 let container=document.getElementById("cards")
 container.appendChild(card)

 deleteButton.addEventListener("click", function(){
     var id=this.id
     container.removeChild(card)
     if(reminders.length>1)
     reminders.splice(id,1)
     else
     reminders.pop()
 })
}
function addReminder(){
    var reminderTitle=document.getElementById("addReminder")
    var reminderTime=document.getElementById("reminderTime")
    var meetingLink=document.getElementById("addLink")
    if(reminderTime.value!=="" && reminderTitle.value!=="")
    {
        var reminder={
            id:reminders.length,
            title:reminderTitle.value,
            meetingLink:meetingLink.value,
            time:reminderTime.value
        }
        reminders.push(reminder)
        console.log(reminders)
        displayReminder()
        reminderTitle.value=""
        reminderTime.value=convertNowToTimeDateLocal()
        meetingLink.value=""

    }
}
addReminderButton.addEventListener("click" , function(){
    addReminder()
})
function showNotification(reminder){
    let notif=new Notification(`${reminder.title}`,{
        icon:"/assets/logo.png"
    })

    notif.onclick=(e)=>{
        if(reminder.meetingLink!=="")
        {
            window.open(`${reminder.meetingLink}`)
        }
    }
}