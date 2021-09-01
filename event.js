chrome.alarms.onAlarm.addListener((alarm) => {
  //alert('Alret');

  chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});

  chrome.windows.create({
    width : 200,
    height : 100,
    type : 'popup',
    url : 'alert.html'
  });
});