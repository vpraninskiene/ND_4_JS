const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

function displayOut() {
    var x = document.getElementById('png-1');
    setTimeout(function(){
        x.style.opacity='0';
    }, 1000);
}
displayOut();

for(var x of tabs){
    x.style.display = "none"
}

function changeHeader(evt, name){


   for(var x of tabs){
    x.style.display = "none"
   }
   document.getElementById(name).style.display = "block"

   for(var x of buttons){
    x.classList.remove("selected")
   }
   evt.currentTarget.classList.add("selected")

}