export const createGoogleSearch = () =>
  chrome.tabs.create({
    url: "https://www.google.com/search?q=%s"
  })

//createGoogleSearch()
console.log("bg running")
/* 
- name: Browser Platform Publish
uses: PlasmoHQ/bpp@v2
with:
  keys: ${{ secrets.SUBMIT_KEYS }}
  artifact: build/chrome-mv3-prod.zip 
*/
