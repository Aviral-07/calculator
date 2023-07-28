// var screen="";
// document.write("hello there mate \n");
//  var a=function() { return("entered")};
//  document.write(a());
// var ar=document.querySelector(".r1");
// document.write(ar.innerText);
//document.write(document.getElementById("7").innerText);
//document.write(document.querySelector("#7"));
// var butt=document.querySelector(".r1");
// document.write(butt.innerHTML);
// butt.addEventListener("mouseenter",()=>{
//     document.write(butt.innerHTML);
// })
var screen = "";
function value() {

}
var buttons = document.querySelectorAll(".button");
console.log(buttons);
Array.from(buttons).forEach((button) => {
     button.addEventListener("click", (e) => {
          if (e.target.id === "=") {
               //console.log(result);
               result(screen);
               var res=result(screen);
               console.log(res);
               screen=res;
               //document.querySelector("input").value="";
          }
          else if(e.target.id==="ac")
          screen="";
          else
               screen = screen + e.target.id;
          console.log(screen);
          //document.write(e.target.id);
          if(e.target.id==="=")
          document.querySelector("input").value=res;
          else
          document.querySelector("input").value=screen;
     })
})
function result (screen) {
     return eval(screen);
}
