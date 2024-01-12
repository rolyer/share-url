// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    // // 查询当前激活的标签页
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //     // tabs 数组包含所有匹配的标签页，这里我们只取第一个（当前激活的标签页）
    //     var currentTab = tabs[0];
    //     // 打印当前标签页的URL
    //     console.log(currentTab.url);

    //     // 在这里可以对获取到的URL进行其他操作
    // });
});
  