//function clickAlert(){
    //alert("I was clicked");
// }

function addingEventListener(butt) {
    const element =document.getElementById("input");
    if("button"){
        element.addEventListener("click",function(){
            alert("Button clicked!");
        })
    }
}
// document.addEventListener("DOMContentLoaded", function{
// const input =document.getElementById("input");

//  input.addEventListener("click", function(){
//   alert("I was clicked!");
// });
// return true;
// })
