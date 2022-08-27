console.log("i work i work i work")

if (window.location.href.startsWith('https://www.google.com/search')) {
    const results = decodeURIComponent(location.search).match(/(?<=setuser=)\w+/g) || [];
    const name = results[0] || "abdul";

    alert("setting the name " + name)
}