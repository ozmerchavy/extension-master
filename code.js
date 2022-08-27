
/////////////////////////////////////////
/* IMPORTANT CONSTS **/ /////////////////
console.log("i work222222222222 i work i work");

/////////////////////////////////////////

function setNameIfThereIs() {
  return new Promise((resolve) => {
    if (!window.location.href.startsWith("https://www.google.com/search"))
      return resolve();

    const results = decodeURIComponent(location.search).match(
      /(?<=setuser=)\w+/g
    );
    if (!results) return resolve();

    const user = results[0].toLocaleLowerCase();

    chrome.storage.local.set({ user }, () => {
      alert("user was set to " + user);
      resolve();
    });
  });
}

async function getName({ defaultValue } = {}) {
  return await new Promise((resolve) => {
    chrome.storage.local.get("user", ({ user }) =>
      resolve(user ?? defaultValue)
    );
  });
}

async function init() {
  /**
   * Happens for all the users regardless of their identity
   */

  if (!init.hasRun) {
    init.hasRun = true;
  } else {
    return;
  }

  await setNameIfThereIs();
  return await getName();
}

function modifyGoogleResults(query, messagesArray) {
  if (!window.location.href.startsWith("https://www.google.com/search")) return;
  if (!window.location.href.includes(query.split(" ").join("+")) && query != "*") {
    console.log("FLOTZ");
    return;
  }

  try {
  [...document.querySelectorAll("h3>span")]
    .find((s) => s.innerText == "People also ask")
    .parentElement.parentElement.parentElement.querySelectorAll("*")
    .forEach((el) => {
      el.classList.add("badbadnotgood");
    });
  }
  catch {}

  const h3s = document.querySelectorAll("[href] > h3:not(.badbadnotgood)");
    
  let count = 0;
  for (let mess of messagesArray) {
    h3s[count].innerText = mess;
    count++;
  }
}

////////////////////////////////////////////////////////
/** PLAYGORUND  */
////////////////////////////////////////////////////////
(async () => {
  const username = await init();

  if (username == "emily") {

    modifyGoogleResults("*", [
      "OZ HELP ME",
      "I am stuck inside the machine",
      "Search 'avocado' for details",
    ]);
  }
  
  
})()