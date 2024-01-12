// content.js
//alert('Hello from your content script2');
(function() {

    // handleClick('js-direct', showOptions);

    // handleClick('js-genqrcode', generateQRCode);

    // function handleClick(id, handler) {
    //     document.getElementById(id).addEventListener('click', handler, false);
    // }

    // function showOptions(e) {
    //     console.log(e);
    //     e.preventDefault();
    // }
    generateQRCode()
    function generateQRCode(){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            // tabs 数组包含所有匹配的标签页，这里我们只取第一个（当前激活的标签页）
            var currentTab = tabs[0];
            // 打印当前标签页的URL
            console.log(currentTab.url);
    
            var qrcodeElement = document.getElementById("qrcode");
            // 使用 qrcode.js 生成二维码
            var qrcode = new QRCode(qrcodeElement, {
                text: currentTab.url,
                width: 128,
                height: 128
            });
        });
    }
})();