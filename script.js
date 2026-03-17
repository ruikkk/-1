// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('AI瑞格的个人网站已加载');

    // 可以在这里添加更多交互逻辑，例如动态加载内容，表单提交等。
    // 示例：平滑滚动到锚点
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});