$(document).ready(function() {
  /*  bars插件参数说明：
      'height' : 进度条高度
      'duration' : 进度条动画显示时间
	  'background': 进度条背景
      'foreground' : 进度条显示颜色
	  'percentage' : 进度条百分比 */	
	  $('#mainDiv').bars({
		foreground: 'red',
		height: '20px',
		duration: 20000,
		background: 'blue',
		percentage: 60
	  });
});
