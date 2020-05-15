chrome.runtime.onInstalled.addListener(()=>{
    console.log('Extension successfully Installed!');
});

chrome.bookmarks.onCreated.addListener(()=>{
    alert('Page Bookmarked!');
});