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

// 获取页面上ID为'zh'的元素，通常用于账号输入框
var zh = document.getElementById('zh');
// 获取页面上ID为'mm'的元素，通常用于密码输入框
var mm = document.getElementById('mm');

// 定义登录函数
function login() {
	// 如果账号或密码为空，则弹出提示并返回false，阻止表单提交
	if (zh.value == "" || mm.value == "") {
		alert("账号或密码不能为空");
		return false;
	} else if (zh.value != "admin" || mm.value != "admin") {
		// 如果账号或密码不正确（这里只检查是否为"admin"），则弹出提示并返回false
		alert("账号或密码错误(可以选择游客登录)");
		return false;
	}
	// 如果账号和密码正确，则此函数不返回任何值（默认返回undefined），允许表单提交
}

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

document.getElementById('qwzc').addEventListener('click', function() {
	window.location.href = '_register.html';
});
// 设置跳转