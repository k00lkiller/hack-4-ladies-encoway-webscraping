chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    let doc =  fetchDocument(activeTabUrl)
    console.log(doc)

 })



function fetchDocument(url) {        
    let response = fetch(url)
    console.log(response)
    let text = response.text()
    if (!fetchDocument.parser) fetchDocument.parser = new DOMParser() // the dom parser is reusable
    return fetchDocument.parser.parseFromString(text, "text/html")
}

