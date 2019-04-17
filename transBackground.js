function get(){
	//有効か無効か
	chrome.runtime.sendMessage({method: "get", key: "invalid"}, function (response) {
		if(!response.data)
		run()
	});
}

function run(){
	window.addEventListener('DOMContentLoaded', (function(){
		chrome.runtime.sendMessage({method: "getConstant"}, function (response) {
			let Config=response.data

			let tImg=document.createElement("div");
			let tFilter=document.createElement("div");
			let tBody=document.getElementsByTagName("body")[0];
			let tHtml=document.getElementsByTagName("html")[0];
			let tStyle=document.createElement("style");

			//画像を変色させる色を決める
			let tBodyStyle=document.defaultView.getComputedStyle(tBody, null);
			let tBodyColor=tBodyStyle.backgroundColor;
			let tBodyImage=tBodyStyle.backgroundImage;
			if(tBodyImage!="none")return;//背景画像が設定されていれば何もしない
			if(!tBodyColor){
				tBodyColor=tBodyStyle.background;
			}
			if(!tBodyColor||tBodyColor.startsWith("rgba")&&tBodyColor.endsWith(", 0)"))
			tBodyColor="#ffffff";

			//画像設定
			tImg.style.background="url("+Config.base64+")";
			tImg.style.position="fixed";
			tImg.style.zIndex=-10;
			tImg.style.top="0";
			tImg.style.left="0";
			tImg.style.width="100vw";
			tImg.style.height="100vh";
			tImg.style.backgroundSize="cover";
			tImg.style.backgroundPosition="center";
			tHtml.appendChild(tImg);

			//画像変色
			tFilter.style.position="fixed";
			tFilter.style.zIndex=-9;
			tFilter.style.top="0";
			tFilter.style.left="0";
			tFilter.style.width="100vw";
			tFilter.style.height="100vh";
			// tFilter.style.background="rgba(255,255,255,0.85)";
			tFilter.style.background=tBodyColor;
			tFilter.style.opacity = 1 - Config.opacity;
			tHtml.appendChild(tFilter);
		});
	})(),false);
}

document.OnLoad = get();
