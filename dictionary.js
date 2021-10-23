var searchButton = document.getElementById("searchButton")

var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
var errors={}
var dictionaryResults=[]

function getMeaning(inputWord)
{
document.getElementById("searchBar").value=""
return url+inputWord
}

function search()
{
 var searchInput=document.getElementById("searchBar").value
 fetch(getMeaning(searchInput))
 .then(response=>response.json())
 .then(result=>{
     if(result.title==="No Definitions Found")
     {
         errors=result;

     }
     else
     {
         dictionaryResults=result;
     }
 })
}
searchButton.addEventListener("click", function(){
search()
})