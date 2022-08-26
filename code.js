const style = document.createElement('style');
style.innerText = `
* { 
    color: green !important;
}
`;
document.body.appendChild(style);
document.head.appendChild(style);

if (document.body.innerText.toLowerCase().includes('porn')) {
    alert('very good')
}