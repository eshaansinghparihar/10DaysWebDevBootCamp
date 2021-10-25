var addNoteBtn=document.getElementById("addNoteButton")

var notes=[]
var backgroundColor=['#0F9D58','#F4B400','#4285F4' ,'#DB4437']

function addNote(){
var noteTitle=document.getElementById("addTitle").value
var noteBody=document.getElementById("addBody").value
if(noteTitle!="" && noteBody!="")
{
    var note={
        id:notes.length,
        title:noteTitle,
        body:noteBody
    }
    notes.push(note)
    document.getElementById("addTitle").value=""
    document.getElementById("addBody").value=""
    note=notes[notes.length-1]

    let card=document.createElement("div")
    card.setAttribute("class", "card")
    color=backgroundColor[note.id%4]
    card.setAttribute("style", `background-color:${color};color:white;`)

    let title=document.createElement("input")
    title.setAttribute("class", "cardTitle")
    title.setAttribute("style", `background-color:${color};color:white;`)
    title.value=note.title

    let cardBody=document.createElement("textarea")
    cardBody.setAttribute("class", "cardBody")
    cardBody.setAttribute("style", `background-color:${color};color:white;`)
    cardBody.value=note.body

    let deleteButton=document.createElement("button")
    deleteButton.setAttribute("class","deleteNote")
    deleteButton.setAttribute("style", `color:${color};`)
    deleteButton.setAttribute("id", `${note.id}`)
    deleteButton.innerHTML=`<i class="fa fa-trash-o " aria-hidden="true"></i>`

    let container=document.getElementById("cards")
    container.appendChild(card)

    card.appendChild(title)
    card.appendChild(cardBody)
    card.appendChild(deleteButton)

    deleteButton.addEventListener("click", function(){
        var id=this.id;
        console.log(id)
        container.removeChild(card)
        if(notes.length>1)
        notes.splice(id,1)
        else
        notes.pop()
    })

}
}
addNoteBtn.addEventListener("click", function(){
    addNote()
})