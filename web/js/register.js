// 获取页面上ID为'back'的元素，通常用于设置背景或其他样式
var back = document.getElementById('back');

// 监听窗口的鼠标移动事件
window.onmousemove = function(event) {
	// 根据鼠标的当前X坐标，计算背景图片的新X位置
	// 这里使用了负数，意味着鼠标向右移动时，背景图片向左移动
	var x = -event.clientX / 10;
	// 根据鼠标的当前Y坐标，计算背景图片的新Y位置
	// 同样使用了负数，且Y的系数与X不同，可以产生不同的移动速度
	var y = -event.clientY / 15;
	// 设置背景图片的X位置
	back.style.backgroundPositionX = x + "px";
	// 设置背景图片的Y位置
	back.style.backgroundPositionY = y + "px";
}

// 获取表单元素和输入字段
var registerForm = document.getElementById('logbody');
var zczh = document.getElementById('zczh'); // 账户
var zcmm = document.getElementById('zcmm'); // 密码
var qrmm = document.getElementById('qrmm'); // 确认密码
var sjh = document.getElementById('sjh'); // 手机号
var zcyx = document.getElementById('zcyx'); // 注册邮箱
var subBtn = document.getElementById('sub'); // 注册按钮

// 为注册按钮添加点击事件监听器
subBtn.addEventListener('click', function(event) {
	event.preventDefault(); // 阻止表单的默认提交行为

	// 验证输入字段
	if (zczh.value.trim() === '') {
		alert('账户不能为空');
		return;
	}
	if (zcmm.value.trim() === '') {
		alert('密码不能为空');
		return;
	}
	if (qrmm.value.trim() !== zcmm.value.trim()) {
		alert('两次输入的密码不一致');
		return;
	}
	if (!/^\d{11}$/.test(sjh.value.trim())) { // 简单的手机号验证，11位数字
		alert('请输入有效的手机号');
		return;
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(zcyx.value.trim())) { // 简单的邮箱验证，检查基本的邮箱格式
		alert('请输入有效的邮箱地址');
		return;
	}
	// 如果所有验证都通过，则执行以下操作
	// 在这里，我们只是通过弹窗显示提交的信息，而不是实际发送到服务器
	var formData = {
		zczh: zczh.value.trim(),
		zcmm: zcmm.value.trim(),
		sjh: sjh.value.trim(),
		zcyx: zcyx.value.trim()
	};

	// 显示提交的信息（在实际应用中，您应该将此数据发送到服务器）
	alert('注册信息：\n' +
		'账户: ' + formData.zczh + '\n' +
		'密码: ' + formData.zcmm + '\n' +
		'手机号: ' + formData.sjh);
});

// 获取页面上ID为'con'的元素，可能用于显示或隐藏内容
var con = document.getElementById('con')

// 定义函数，用于隐藏'con'元素
function loadoff() {
	con.style.display = "none";
}

// 定义函数，用于显示'con'元素
function loadon() {
	con.style.display = "flex";
}

// 当页面加载完成时，执行以下操作
window.onload = function() {
	// 显示'con'元素
	loadon();
	// 设置延时器，1.5秒后执行loadoff函数，隐藏'con'元素
	setTimeout(loadoff, 1500);
}

document.getElementById('ykbt').addEventListener('click', function() {
	window.location.href = 'home.html';
});

document.getElementById('fhdl').addEventListener('click', function() {
	window.location.href = '_login.html';
});
// 设置跳转