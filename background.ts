export const createGoogleSearch = () =>
  chrome.tabs.create({
    url: "https://www.nope.com/search?q=%s"
  })

//createGoogleSearch()
console.log("bg running")
