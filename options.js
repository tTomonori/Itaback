document.OnLoad = onLoaded()
document.ondragstart = function(){return false;};
function onLoaded(){
	document.querySelector('#invalid').addEventListener('change', change)
	chrome.runtime.sendMessage({method: "get", key: "invalid"},(res)=>{
		document.querySelector('#invalid').checked=res.data
	});
}

function change(){
	// 	//無効化
		chrome.runtime.sendMessage({method: "set", key: "invalid", value: document.querySelector('#invalid').checked});
}
