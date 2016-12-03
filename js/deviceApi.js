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


	/*	
	视频聊天
	*/
	function f_callVideo(){
		//alert("callVideo");
		device.startVideoChat();
	};
	function f_callAudio(){
		alert("callAudio");
	};
	function f_closeChat(){
		alert("closeChat");
	};


/*打开摄像头命令
*/
function f_openCameraControl(){
	
	device.openCameraControl();
	device.onAVSessionConnect(function(ret){
  		if(ret.code == 1){
  		  device.log('视频连接建立成功');
		  };
	});
};

/*
2. 发送命令
device.sendCameraCmd(opts)，>= iOS QQ 6.3，>= 安卓QQ 6.2，opts参数说明：

名称	类型	说明
cmd	String	命令，不同的值实现不同的功能。
startTalk：开始对讲
stopTalk：停止对讲
captureScreen：截屏
setMutable：切换静音
openMore：打开更多
url	String	只有cmd为openMore时有用，表示要打开的链接*/

function sendCameraCmd(opts){
	/*device.sendCameraCmd({
 	 cmd: 'startTalk'
	});*/
	device.sendCameraCmd(opts);
};


/*
device.openApi({
  name : 'mb_get_user_info',
  params : { // 可选参数

  },
  onSuccess : function (ret) { // 成功回调
    device.log('onSuccess: ' + JSON.stringify(ret));
    device.log('头像：' + '<img src="' + ret.figureurl_qq_1 + '">' + '，昵称：' + ret.nickname);
  },
  onError : function (ret) { // 失败回调
    device.log('onError: ' + JSON.stringify(ret));
  }
});
*/

function openApi(opts){
	device.openApi(opts);
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
};
