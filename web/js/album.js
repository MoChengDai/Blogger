window.onload = function() {
	// 页面加载完成后，1秒后调用getpre函数，然后每3秒调用一次getpre函数
	setTimeout(getpre, 1000);
	timer = setInterval(getpre, 3000);

	// 初始化图片和圆点数组
	var pics = new Array();
	var dots = new Array();

	// 获取页面中的banner元素
	var banner = document.getElementById('banner');

	// 循环创建5个图片元素和对应的圆点
	for (var i = 1; i <= 5; i++) {
		var lbli = document.createElement('li'); // 创建列表项用于包裹图片
		var lbimg = document.createElement('img'); // 创建图片元素

		// 设置图片的路径、宽度和高度
		lbimg.src = "../image/pics0" + i + ".jpg";
		lbimg.style.width = "750px";
		lbimg.style.height = "421px";
		lbli.appendChild(lbimg); // 将图片添加到列表项中

		banner.appendChild(lbli); // 将列表项添加到banner中
		pics.push(lbli); // 将列表项添加到图片数组中
		pics[pics.length - 1].style.left = "0px"; // 设置每张图片的初始位置

		// 当鼠标悬停在图片上时，停止轮播；离开时，重新开始轮播
		lbimg.onmouseenter = function() {
			clearInterval(timer);
		}
		lbimg.onmouseleave = function() {
			timer = setInterval(getpre, 3000);
		}

		var bottomdot = document.createElement("div"); // 创建圆点
		bottomdot.style.left = 140 * (i + 1) + "px"; // 设置圆点的位置
		bottomdot.name = i; // 存储圆点的编号
		dots.push(bottomdot); // 将圆点添加到数组中
		banner.appendChild(bottomdot); // 将圆点添加到banner中

		// 为前三个和后两个图片设置不同的id，用于点击事件
		if (i > 3) {
			lbli.id = i - 3;
		} else {
			lbli.id = i + 2;
		}
	}

	// 初始化时，设置图片和圆点的样式
	var len = pics.length - 1;
	pics[len - 2].style.left = "0px";
	pics[len - 2].style.opacity = 0.5;
	pics[len - 3].style.opacity = 0;
	pics[len - 4].style.opacity = 0;
	pics[len - 1].style.zIndex = 100; // 设置当前显示的图片在最上层
	pics[len - 1].style.left = "200px"; // 设置当前显示的图片的位置
	pics[len - 1].style.transform = "scale(1.3)"; // 放大当前显示的图片
	pics[len - 1].style.opacity = 1;
	pics[len].style.left = "400px"; // 设置下一张图片的位置
	pics[len].style.opacity = 0.5;

	// 定义切换到下一张图片的函数
	function getnext() {
		var give_up = pics[len]; // 获取最后一张图片
		pics.pop(); // 从数组中移除
		pics.unshift(give_up); // 将其添加到数组最前面
		// 重置所有图片的层级和缩放
		for (var i = 0; i < pics.length; i++) {
			pics[i].style.zIndex = i;
			pics[i].style.transform = "scale(1)";
		}
		// 设置当前和下一张图片的样式
		pics[len - 2].style.left = "0px";
		pics[len - 2].style.opacity = 0.5;
		pics[len - 3].style.opacity = 0;
		pics[len - 4].style.opacity = 0;
		pics[len - 1].style.zIndex = 100;
		pics[len - 1].style.left = "200px";
		pics[len - 1].style.transform = "scale(1.3)";
		pics[len - 1].style.opacity = 1;
		pics[len].style.left = "400px";
		pics[len].style.opacity = 0.5;

		dotmov(); // 更新圆点的样式
		// 为当前和下一张图片设置点击事件
		pics[len - 2].onclick = function() {
			getnext();
		}
		pics[len].onclick = function() {
			getpre();
		}
	}

	// 定义切换到上一张图片的函数，逻辑与getnext类似
	function getpre() {
		var give_up = pics[0];
		pics.push(give_up);
		pics.shift();
		for (var i = 0; i < pics.length; i++) {
			pics[i].style.zIndex = i;
			pics[i].style.transform = "scale(1)";
		}
		pics[len - 2].style.left = "0px";
		pics[len - 2].style.opacity = 0.5;
		pics[len - 3].style.opacity = 0;
		pics[len - 4].style.opacity = 0;
		pics[len - 1].style.zIndex = 100;
		pics[len - 1].style.left = "200px";
		pics[len - 1].style.transform = "scale(1.3)";
		pics[len - 1].style.opacity = 1;
		pics[len].style.left = "400px";
		pics[len].style.opacity = 0.5;
		dotmov();
		pics[len - 2].onclick = function() {
			getnext();
		}
		pics[len].onclick = function() {
			getpre();
		}
	}

	// 设置第一个圆点的样式为选中状态
	dots[0].style.background = "rgb(48, 72, 77)";

	// 定义更新圆点样式的函数
	function dotmov() {
		for (var i = 0; i < dots.length; i++) {
			if (dots[i].name == pics[len - 1].id) { // 如果圆点的编号与当前图片的id相同
				dots[i].style.background = "rgb(48, 72, 77)"; // 设置为选中状态
			} else {
				dots[i].style.background = "rgb(123, 168, 175)"; // 设置为未选中状态
			}
		}
	}
}