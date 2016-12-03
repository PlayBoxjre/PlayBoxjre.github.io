/*
*	qq light-app devices API 
*
*	use method by myself defined
*	
*   1.openLog(boo); use deviceApi log 
*   2.showToast(str): show toast string of 'str'
* 	3.
*/

/*
	open log switch to print logger
*/
function test(){
	alert("import outer js file");
};



	function f_callVideo(){
		alert("callVideo");
	};
	function f_callAudio(){
		alert("callAudio");
	};
	function f_closeChat(){
		alert("closeChat");
	};

/*
    打开日志
*/
function openLog(boo){
		///device.debug = false; // 关闭调试模式
		device.debug = boo; // 开启调试模式
		if(!boo){
			device.log('没开启调试模式看不到这条log');
		}else{
			device.log('开启了调试模式才能看到log', 'yellow');
			device.log('title can daft', '#f0f');
		}
		alert("open log");
		return 0;
};


function send(){
    device.send({
      datapoint : [{
        id : 500005,
        value : 1
      }],
      vibrate : 1, // 1为发送时振动，可选
      nfc : 1, // 1为近场通信方式，可选
      lifetime : 20, // 生命期，范围1到604800秒，可选
      onSuccess : function (ret) { // 发送成功回调
        device.log('onSuccess: ' + JSON.stringify(ret));
      },
      onAck : function (ret) { // 接收响应成功回调，蓝牙设备暂不支持
        device.log('onAck: ' + JSON.stringify(ret));
      },
      onError : function (ret) { // 发送失败回调
        device.log('onError: ' + JSON.stringify(ret));
      }
    });
}