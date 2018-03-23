arrImage=["images/tovar0.png","images/tovar1.png","images/tovar2.png",
	"images/tovar3.png","images/tovar4.png","images/tovar5.png",
	"images/tovar6.png","images/tovar7.png","images/tovar8.png"];
arrName=["Анжелина", "Бритни", "Вероника", "Джелли", 
		"Омелия", "Сюзанна", "Каролина","Шейла", "Элеонора"];
arrVozrast=["Возраст: 20 лет","Возраст: 21 год","Возраст: 22 года","Возраст: 23 года","Возраст: 24 года",
"Возраст: 25 лет","Возраст: 26 лет","Возраст: 27 лет"];

function colorRandom(){
 r=Math.round(Math.random()*255);
 g=Math.round(Math.random()*255);
 b=Math.round(Math.random()*255);
}

colorRandom();
container.style.backgroundColor="RGB("+r+","+g+","+b+")";

function createTovar(){
	var k=0;
	for ( var i = 0; i < 3; i++) {

		for ( var j = 0; j < 3; j++) {

			box=document.createElement("div");
			div=document.getElementById("container");
			div.appendChild(box);
			box.id="box";
			img=document.createElement("img");
			box.appendChild(img);
			img.src=arrImage[k];
			p=document.createElement("p");
			box.appendChild(p);
			p.innerHTML=arrName[k];
			colorRandom();
			box.style.backgroundColor="RGB("+r+","+g+","+b+")";	
			var x=["110px", "495px","880px"];
			var y=["120px","580px", "1040px"];
			box.style.top = y[i];
			box.style.left= x[j];
			k=k+1;
			//container.lastChild.addEventListener('click', onClick.bind(this));
		}
	}
}
createTovar()


// function onClick(event) {
// 	// body...
// 		console.log(this.id)
// 		if(!event.target.classList.contains('close')){
// 			return;
// 		}
// 		deleteUser(event.target, this.id)





// function GenereteBlock() {

	// for ( var i = 0; i < 9; i++) {debugger;
	//     // new (function () {
	//     // 	Tovar=new Array;
	//     	mainElement = document.createElement("div");
	//     	// this.id = Tovar[i].id;
	    	
	//     	mainElement.style.backgroundImage=url("images/Tovar"+i);
	//     	div.appendChild(mainElement);
	//     	mainElement.width="76";
	//     	mainElement.heigth="110";
	    	
	//     	var box=document.getElementById("container");
	//     	box.appendChild(div);
	// }

			// var nameLabel = document.createElement("div");
			// nameLabel.innerText =  items[i].first_name + ' ' + items[i].last_name;


			// var closeButton = document.createElement("input");
			// closeButton.setAttribute('type', 'button');
			// closeButton.setAttribute('value', 'X');
			// closeButton.classList.add('close');

			// var trayButton = document.createElement("input");
			// trayButton.setAttribute('type', 'button');
			// trayButton.setAttribute('value', '-');
			// trayButton.classList.add('tray');

			// var avatarImg = document.createElement('img');
			// div.avatarImg.src= "images/Tovar"+i;
			
			// mainElement.append(nameLabel);
			// mainElement.append(closeButton);
			// mainElement.append(trayButton);
			// mainElement.append(avatarImg);

			// container.append(mainElement);
	  		//       container.lastChild.addEventListener('click', onClick.bind(this));
	    // }
	


	// function onClick(event) {
	// // body...
	// 	console.log(this.id)
	// 	if(!event.target.classList.contains('close')){
	// 		return;
	// 	}
	// 	deleteUser(event.target, this.id)
