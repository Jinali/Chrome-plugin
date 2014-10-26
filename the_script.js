document.addEventListener('DOMContentLoaded', function () {
console.log("load success");
});
	
document.getElementById("b1").addEventListener("click",on_b1_click);
function on_b1_click() {
 console.log('b1_clicked');
  chrome.tabs.getSelected(null, function(tab) {
         document.getElementById('currentLink').innerHTML = tab.url;
          });
  function getFile(){
 //var files = evt.dataTransfer.files;
 //var file = files[0];
//console.log(file.name)
alert("change occured");

  }
 

