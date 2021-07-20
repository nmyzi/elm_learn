(function(doc, win){
    var docEl = doc.documentElement, //获取html
    // 是否换了方向，横屏？ 调整窗口宽度->resize事件
      resizeEvt = 'orientationchange' in win ? 'orientationchange': 'resize',
    
    recalc = function() {
        // 设备无差异计算出  16rem = 100% width
        var clientWidth = docEl.clientWidth; //html的整个窗口的宽度
         // console.log(clientWidth);

        if (!clientWidth) return;
        docEl.style.fontSize = 20 * clientWidth/320 + 'px';
        // console.log(clientWidth);
        // ?设备可能由纵向变模着拿 尺寸发生变化
        win.addEventListener(resizeEvt, recalc, false);
      };
      doc.addEventListener('DOMContentLoaded', recalc, false);
      
    // docEl.style.fontSize = '23.5px'; //先写死一个值测试一下
})(document, window) // 建一个闭包， 立即执行函数，传两个实参
