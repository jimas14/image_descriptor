chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
   if (info.status === 'complete') {
       	//window.alert('yoyoyoyo\n');

       	console.log("yi4tiowefea");

  		//var images = document.getElementsByTagName('img');
  		var images = document.images;
		console.log(images);

		for(var i = 0; i < images.length ; i++) {
		  // to open all photos in new tabs:
		  // window.open(allImages[i].src, '_blank');
		  images[i].src = 'url_to_cat_image';
		}

		// var images = [];
		// for(var i = 0; i < document.images.length; i++){
		//   images.push(document.images[i].src);
		//   console.log(images);
		// }
		//chrome.runtime.sendMessage({method:"downloadImages",images:images});
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

// 	).onLoad(function downloadImages(info,tab) {
//   alert('o');
//   chrome.tabs.executeScript(tab.id,{file:"script.js"});
// }

// chrome.runtime.onMessage.addListener(function(message){
//   //In case you want to do other things too this is a simple way to handle it
//   if(message.method == "downloadImages"){
//     message.images.forEach(function(v){
//       allImages.push(v);
//     });
//     alert(allImages[0]);
//   }
// });