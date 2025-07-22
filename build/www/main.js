var Urlroot =
function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  console.log(Httpreq.responseText);       
}


function revealChange(el,show){
      if(show == "show"){
         document.getElementById(el).innerHTML = 
         document.getElementById(el + "_full").innerHTML;
          console.log(document.getElementById(el + "_full").innerText);
      }
      if(show == "hide"){
         document.getElementById(el).innerHTML = "click here to show more...";
      }
  }


document.getElementById("basic_ai_bg").onclick = function(){
    var elem = "basic_ai";
  if(document.getElementById(elem + "_code_block").innerHTML !== document.getElementById(elem + "_code_block_full").innerHTML){
      revealChange(elem + "_code_block","show");
  }
}

document.getElementById("banned_spam_bg").onclick = function(){
    var elem = "banned_spam";
  if(document.getElementById(elem + "_code_block").innerHTML !== document.getElementById(elem + "_code_block_full").innerHTML){
      revealChange(elem + "_code_block","show");
  }
}

document.getElementById("banned_spam2_bg").onclick = function(){
    var elem = "banned_spam2";
  if(document.getElementById(elem + "_code_block").innerHTML !== document.getElementById(elem + "_code_block_full").innerHTML){
      revealChange(elem + "_code_block","show");
  }
}

document.getElementById("w_spam_bg").onclick = function(){
    var elem = "w_spam";
  if(document.getElementById(elem + "_code_block").innerHTML !== document.getElementById(elem + "_code_block_full").innerHTML){
      revealChange(elem + "_code_block","show");
  }
}

document.getElementById("w_spam2_bg").onclick = function(){
    var elem = "w_spam2";
  if(document.getElementById(elem + "_code_block").innerHTML !== document.getElementById(elem + "_code_block_full").innerHTML){
      revealChange(elem + "_code_block","show");
  }
}
