const girl = document.getElementById('girl');

// ... existing code ...

document.addEventListener('DOMContentLoaded', (event) => {
    const girl = document.getElementById('girl');
    const smiley = document.getElementById('smiley');
    isSuccess = 0
    // 添加一个函数来持续更新提示语位置
    function update() {
        updateTooltipPosition(); // 持续更新提示语位置
        requestAnimationFrame(update); // 请求下一帧更新
    }

    requestAnimationFrame(update); // 启动更新循环

    document.addEventListener('click', handleAction); // 处理点击事件
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') { // 检查是否按下空格键
            event.preventDefault(); // 防止页面滚动
            handleAction(); // 调用处理函数
        }
    });

    function handleAction() {
        console.log('点击事件触发'); // 调试信息

        if (isSuccess === 0) {
            isSuccess = 1
            tooltip.textContent = 'Congratulation, you have completed a jump!'; // 更改提示语内容
            setTimeout(() => {
                tooltip.textContent = ''; // 恢复原位
                tooltip.style.display = 'none'; // 让提示框消失
                tooltip.style.border = 'none';
            }, 2000); // 2000毫秒后恢复
        }

        // 改变 Y 值以模拟跳跃
        girl.style.transform = 'translateY(-168px)'; // 向上移动20px
        setTimeout(() => {
            girl.style.transform = 'translateY(0)'; // 恢复原位
        }, 300); // 300毫秒后恢复

        // 显示笑脸
        smiley.style.display = 'block';
        smiley.style.opacity = 1; // 确保笑脸可见

        // 隐藏笑脸
        setTimeout(() => {
            smiley.style.opacity = 0; // 渐变消失
            setTimeout(() => {
                smiley.style.display = 'none'; // 完全隐藏
            }, 500); // 等待渐变结束
        }, 1000); // 根据需要调整显示时间
    }
});

// 在小女孩移动时更新提示语的位置
const tooltip = document.getElementById('tooltip');

// 假设有一个函数可以检测小女孩的移动
function updateTooltipPosition() {
    const girlRect = girl.getBoundingClientRect();
    tooltip.style.left = `${girlRect.right + 10}px`; // 小女孩右侧
    tooltip.style.top = `${girlRect.top}px`; // 与小女孩顶部对齐
    tooltip.style.display = 'block'; // 显示提示语
}
