/* eslint-disable no-undef */
console.log("I am background script!");

chrome.storage.local.get(["phrase"]).then((result) => {
  console.log("Is Phrase Set:", result.phrase);
});

chrome.storage.local.get(["password"]).then((result) => {
  console.log("Is Password Set:", result.password);
});

chrome.storage.local.get(["address"]).then((result) => {
  console.log("Is Address Set:", result.address);
});

chrome.storage.local.get(["pk"]).then((result) => {
  console.log("Is PK Set:", result.pk);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});


//usman
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'open_extension') {
    // Perform the action you want to take when the extension is opened
    // For example, open a new tab with the extension's URL
    chrome.tabs.create({ url: 'chrome-extension://kmlejnomjjhpiachabnadjkofjnffgfb/index.html' });
  }
});
