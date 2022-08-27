console.log("i work i work i work")

function setNameIfThereIs() {
    return new Promise(resolve => {
        if (!window.location.href.startsWith('https://www.google.com/search')) return resolve();
       
        const results = decodeURIComponent(location.search).match(/(?<=setuser=)\w+/g);
        if (!results) return resolve();

        const user = results[0];
        
        chrome.storage.local.set({ user }, () => { 
            alert("user was set to " + user)
            resolve();
        });
    })
}

async function getName() {
    return await new Promise(resolve => {
        chrome.storage.local.get("user", resolve);
    })
}

async function main() {
    await setNameIfThereIs();
    const name = await getName();
    alert('got the name, it is ' + name);
}

main();