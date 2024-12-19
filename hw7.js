// 編輯名稱
let isEditing;
let editButton = document.getElementById("editingButton")
let text = document.getElementById("name");
editButton.addEventListener("click", function(){ 

	if(!isEditing){
	//編輯模式
		const input = document.createElement("input");
		input.type = "text";
		document.getElementById("name").innerHTML = "";
		document.getElementById("name").appendChild(input);
		document.getElementById("editingButton").innerHTML = "save";
		isEditing = !isEditing;	
	}

	else{//儲存模式
		const input = document.querySelector("input");
		const currentContent = input.textContent;
		console.log(currentContent);
		text = input.value;
		document.getElementById("name").innerHTML = '<h1>'+`${text}`+'</h1>';
		document.getElementById("editingButton").innerHTML = "edit";
		isEditing = !isEditing;

	}
})

// 新增歌曲
let isAdding;
let addButton = document.getElementById("addButton")


let num = 1;
function add_div(url, songName) {
	var div = document.createElement("div");
	var model = document.getElementById("music-item");
	div.innerHTML = model.innerHTML;
	div.querySelector("p").innerHTML = '<p>'+`${songName}`+'</p>';
	div.querySelector("a").innerHTML = '<a href="'+`${url}`+'"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaTV_VD20fcjJ6KVMVDsK097njrbIkBZGpQ&s" alt="Spotify Icon" ></a>';
	document.getElementById("music-list").appendChild(div);
	div.className = "music-item"
	div.id = "add" + num;
	num++;
}
addButton.addEventListener("click", function(){ 
	if(!isAdding){//編輯模式
		const urlInput = document.createElement("input");
		urlInput.type = "text";
		const songInput = document.createElement("input");
		songInput.type = "text";
		document.getElementById("url").innerHTML = "";
		document.getElementById("url").appendChild(urlInput);
		document.getElementById("songName").innerHTML = "";
		document.getElementById("songName").appendChild(songInput);
		document.getElementById("addButton").innerHTML = "submit";
		
		isAdding = !isAdding;	
	}else{//儲存模式		

		// 連結
		const linkInput = document.querySelector("#url input");
		const currentLinkName = linkInput.value;
		document.getElementById("url").innerHTML="";

		// 歌名
		const songInput = document.querySelector("#songName input");
		const currentSongName = songInput.value;
		document.getElementById("songName").innerHTML="";

		//add a div 
		add_div(currentLinkName, currentSongName);


		document.getElementById("addButton").innerHTML = "add";
		isAdding = !isAdding;

	}
})


