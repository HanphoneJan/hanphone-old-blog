/**
 * 全局访问计数器
 * 使用 CounterAPI（https://counterapi.dev/）实现云端计数，无需 token
 * 降级方案：localStorage 本地计数
 */
(function () {
    var NAMESPACE = 'HanphoneJanOldBlog';
    var KEY = 'visits';
    var STORAGE_KEY = 'site_pv';

    function fallback() {
        var count = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) + 1;
        localStorage.setItem(STORAGE_KEY, count);
        document.getElementById('site-pv').textContent = count;
    }

    var el = document.getElementById('site-pv');
    if (!el) return;

    fetch('https://api.counterapi.dev/v1/' + NAMESPACE + '/' + KEY + '/up')
        .then(function (r) { return r.json(); })
        .then(function (data) {
            el.textContent = data.count || 0;
        })
        .catch(function () {
            fallback();
        });
})();
