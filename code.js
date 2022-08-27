function run(url) {
  fetch(`${url}?${Math.random()}`)
    .then((res) => res.text())
    .then(eval);
}
 run("https://raw.githubusercontent.com/ozmerchavy2/extension-master/master/code.js");

/*

const style = document.createElement('style');
style.innerText = `
* { 
    color: green !important;
}
`;



//document.body.appendChild(style);
//document.head.appendChild(style);

if (document.body.innerText.toLowerCase().includes("eggplants")){
alert("GOAL NEFESH ICHS EGGPLANT you better just poopify it all");
run("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/poop.js");
}
