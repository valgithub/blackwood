function init() {
	getData();
}

function getData() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://reqres.in/api/users?page=2');
	xhr.onload = function (){

		var response = xhr.responseText;
		var config = JSON.parse(response);
		var items = config.data;
		generateItems(items);
		//console.log(generateItems);
		
	};
	xhr.send(); 
}


function deleteUser(element, id) {
	var xhr = new XMLHttpRequest();
   	xhr.open('DELETE', 'https://reqres.in/api/users/'+id);

	xhr.onreadystatechange = function () {
	  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) {
			element.parentNode.hidden = !element.parentNode.hidden;
	  }
	}

	xhr.send();
}


function generateItems (items) {

	for ( var i = 0; i < items.length; i++) {
	    new (function () {

	    	var mainElement = document.createElement("div");
	    	this.id = items[i].id;
	    	
			var nameLabel = document.createElement("div");
			nameLabel.innerText =  items[i].first_name + ' ' + items[i].last_name;

			var closeButton = document.createElement("input");
			closeButton.setAttribute('type', 'button');
			closeButton.setAttribute('value', 'X');
			closeButton.classList.add('close');

			var trayButton = document.createElement("input");
			trayButton.setAttribute('type', 'button');
			trayButton.setAttribute('value', '-');
			trayButton.classList.add('tray');

			var avatarImg = document.createElement('img');
			avatarImg.src= items[i].avatar;
			
			mainElement.append(nameLabel);
			mainElement.append(closeButton);
			mainElement.append(trayButton);
			mainElement.append(avatarImg);

			container.append(mainElement);
	        container.lastChild.addEventListener('click', onClick.bind(this));
	    })
	}


	function onClick(event) {
	// body...
		console.log(this.id)
		if(!event.target.classList.contains('close')){
			return;
		}
		deleteUser(event.target, this.id)
	}

	// function onClick(event) {
	
	// 	console.log(this.id)
	// 	if(!event.target.classList.contains('tray')){
	// 		return;
	// 	}
	// 	trayUser(event.target, this.id);
		
	// }

	
}

init();



