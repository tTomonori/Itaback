class ItaStrage{

}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("bbb");
  switch (request.method) {
		case "get"://変数取得
			sendResponse({data: ItaStrage[request.key]})
			break;
		case "set"://変数上書き
			ItaStrage[request.key]=request.value
			break
    default:
      console.log('no method');
      break;
  }
});
