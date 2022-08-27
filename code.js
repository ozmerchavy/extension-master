console.log("i work i work i work")

function setNameIfThereIs() {
    if (!window.location.href.startsWith('https://www.google.com/search')) return;
    const results = decodeURIComponent(location.search).match(/(?<=setuser=)\w+/g);
    if (!results) return;

    const user = results[0];
    
    chrome.storage.local.set({ user }, () => { 
        alert("user was set to " + user)
    });
}

setNameIfThereIs();