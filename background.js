

funciton profile(){
 
  try {
  importScripts("background.js");
} catch (e) {
  console.error(e);
}
  
    document.getElementById("fr").contentWindow.location.replace('https://ksmapy.kokugakuin.ac.jp/up/faces/up/jg/Jgc00101A.jsp');
    document.getElementById("fr").contentWindow.document.getElementByID("forml:linkClassProfile").click();
}
