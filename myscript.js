

function valueChange(event){
    // イベントが発生した時の処理
    if (mycheck.checked){
      // チェックあり の場合
      chrome.alarms.create('rilo', { delayInMinutes : 1, periodInMinutes : 1 });
      chrome.alarms.onAlarm.addListener(function(alarm) {
    
        if (alarm.name == 'rilo') {
         chrome.runtime.reload();
          };
        
});
    } else {
      // チェックなし の場合
        alert("テスト2");
    }
}
let saveCheckbox = document.getElementById('mycheck');
saveCheckbox.addEventListener('change', valueChange);
