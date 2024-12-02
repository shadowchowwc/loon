(function() {
    'use strict';

    // 隐藏广告元素的函数
    const hideAds = () => {
        // 隐藏通过类名、id选择的广告元素
        document.querySelectorAll('.center-header, .top-bill-wrapper, .middle-insert-ad, #middleText, #middleBanner, #ceilling, #apkBannerM, #CallAppContainer, #backTop')
            .forEach(adElement => adElement.style.display = 'none');
        
        // 隐藏通过 src 包含 'pos.baidu.com' 的 iframe 广告
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (iframe.src.includes('pos.baidu.com')) {
                iframe.parentElement.style.display = 'none';
            }
        });
    };

    // 创建 MutationObserver 监视 DOM 变化
    const observer = new MutationObserver(hideAds);

    // 配置 observer，监视整个文档的子节点变化
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始调用隐藏已经加载的广告
    hideAds();

    // 自动展开剩余内容
    const autoExpand = () => {
        const expandButton = document.querySelector('.lookall-box .surplus-btn');
        if (expandButton) {
            // 模拟点击展开按钮
            expandButton.click();
        }
    };

    // 等待页面完全加载后执行自动展开操作
    window.addEventListener('load', () => {
        autoExpand();
    });
})();
