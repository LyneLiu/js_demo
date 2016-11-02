/*定义验证码的相关函数*/

var CODE = '';

$(function(){
   $('#reset').click(function() {
      createCode(6);
   });

   $('#submit').click(function() {
      validate();
   });
   
   createCode(6);

});

function validate () {
	var inputCode = document.getElementById('input').value.toUpperCase(); //stringObject.toUpperCase() 将验证码转换为大写

	if(inputCode.length <=0) {
	   alert('请输入验证码!');
	   window.location.reload();
	   return false;
	}else if(inputCode != CODE ){
	   alert('验证码输入错误！');
	   window.location.reload();
	   createCode();
	   return false;
	}else {
	   alert('OK');
	   window.location.reload()
	   return true;
	}
}

/*创建验证码*/
function createCode(length){
	CODE = '';
	var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	// ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
	ALPHABET += '0123456789';
	var checkCode = document.getElementById('checkCode');

	checkCode.value = '';

	for(var i=0;i<length;i++) {
	   var charIndex = Math.floor(Math.random()*ALPHABET.length);
	   CODE += ALPHABET[charIndex];
	}
	checkCode.value = CODE;
}