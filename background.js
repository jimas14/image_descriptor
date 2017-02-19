var allImages = [];

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
   if (info.status === 'complete' && tab.active) {
       	console.log("yi4tiowefea");

		chrome.tabs.executeScript(tab.id,{file:"script.js"});

		chrome.runtime.onMessage.addListener(function(message){

			//In case you want to do other things too this is a simple way to handle it
			if(message.method == "downloadImages"){
				message.images.forEach(function(v){
				allImages.push(v);
			});
				console.log(allImages);
			}
		});
   }
});
// chrome.contextMenus.create({
//   title: "Image", 
//   contexts:["page"], 
//   onclick: downloadImages,
// });

//window.getEventListener("load", "script.js");

// window.onload = function getImages() {
// 	var images = [];
// 	for(var i = 0; i < document.images.length; i++){
// 	  images.push(document.images[i]);
// 	}
// 	console.log(images);
// 	chrome.runtime.sendMessage({method:"downloadImages",images:images});
// }