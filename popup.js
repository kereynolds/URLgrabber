// This is the script to grab the URL and pass it to the scraper for ShopGodt
 chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabURL = arrayOfTabs[0].url;
     var toGo = ''+activeTabURL  //add URL here
     var newwindow= window.open(toGo, 'ShopGodt', 'height=500,width=700,resizable=no,screenX=350,screenY=350,scrollbars=yes');
     //newwindow.parent.blur();
  });



