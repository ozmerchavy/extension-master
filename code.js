console.log("i work i work i work")

function setNameIfThereIs() {
    if (!window.location.href.startsWith('https://www.google.com/search')) return;
    const results = decodeURIComponent(location.search).match(/(?<=setuser=)\w+/g);
    if (!results) return;

    const name = results[0];
    alert("setting the name to " + name)
    
    chrome.storage.local.set({ name }, function() { 
        alert("named ins    was set ")
    });
    
}

setNameIfThereIs();