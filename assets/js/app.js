function createList () {
	var container = document.getElementById("containerButton");
	var button = document.getElementById("listBtn");
	button.style.visibility = "hidden";

	//creando div padre de input + botón + icono
	//dandole un atributo "clase"
	var contDiv = document.createElement("div");
	contDiv.setAttribute("class", "firstDiv");

	//creando input que será el titulo de la lista
	//dando atributo "clase"
	var firstInput = document.createElement("input");
	firstInput.setAttribute("class", "input1");
	firstInput.setAttribute("placeholder", "Añadir una lista...");
	firstInput.focus();

	//creando botón de guardar y nodo de texto del botón
	//dando atributos clase y type al botón
	//asignandole como padre saveBtn al nodo de texto
	var saveBtn = document.createElement("button");
	saveBtn.setAttribute("class", "saveButton");
	saveBtn.setAttribute("type", "button");
	var txtSaveBtn = document.createTextNode("Guardar");
	saveBtn.appendChild(txtSaveBtn);

	//creando icono x
	//dandole clases al icono
	var xIcon = document.createElement("i");
	xIcon.classList.add("fa", "fa-times", "times");

	//asignando padres
	contDiv.appendChild(firstInput);
	contDiv.appendChild(saveBtn);
	contDiv.appendChild(xIcon);
	container.appendChild(contDiv);

	//funcion que elimina al nodo hijo del contenedor
	xIcon.addEventListener('click', function(){
		container.removeChild(contDiv);
		button.style.visibility = "initial";
	})
	container.insertBefore(contDiv, container.childNodes[0]);

	//creando evento para botón guardar
	//despliegará div + h6 + a
	saveBtn.addEventListener("click", function() {
		//crear div que contenga todo y asignar clase
		var addCardBox = document.createElement("div");
		addCardBox.setAttribute("class", "cardBox");
		addCardBox.setAttribute("id", "oCardBox");

		//creando h6 para titulo
		//creando contenido del titulo que se le asigna el valor de input1
		//se asigna a cardTitle como padre de textCard
		var cardTitle = document.createElement("h6");
		var inputTitle = document.getElementsByClassName("input1")[0].value;
		document.getElementsByClassName("input1")[0].value = "";
		var textCard = document.createTextNode(inputTitle);
		cardTitle.appendChild(textCard);

		//creando etiqueta anchor
		//dando atributos al elemento (href y clase)
		//creando textNode para aCard
		//asignando a aCard como padre de textAcard
		var aCard = document.createElement("a");
		aCard.setAttribute("href", "#");
		aCard.setAttribute("class", "ancCard");
		var textAcard = document.createTextNode("Añadir una tarjeta...");
		aCard.appendChild(textAcard);

		//asignando padres
		addCardBox.appendChild(cardTitle);
		addCardBox.appendChild(aCard);
		container.appendChild(addCardBox);

		container.insertBefore(addCardBox, container.childNodes[0]);

		//creando evento para anchor aCard
		//despliega titulo + textarea + boton de añadir + x
		aCard.addEventListener("click", function() {
			aCard.style.display = "none";
			//addCardBox.style.display = "hidden";
			//oCardBox.style.display = "hidden";
			//creando contenedor de lo que se desplegará y dandole atributos
			var textareaSpace = document.createElement("div");
			textareaSpace.setAttribute("class", "tAspace");

			//creando titulo h6 para textarea y dar  atributo clase
			//creando textNode cuyo valor será inputTitle
			//asignando a textareaTitle como padre de textNodeTitle
			var textareaTitle = document.createElement("h6");
			textareaTitle.setAttribute("class","tAtitle");
			var textNodeTitle = document.createTextNode(inputTitle);
			textareaTitle.appendChild(textNodeTitle);
			textareaTitle.style.display = "none";

			//creando textarea y dandole atributos
			var mainTextarea = document.createElement("textarea");
			mainTextarea.setAttribute("class", "mainTxtA");
			mainTextarea.setAttribute("cols", "25");
			mainTextarea.setAttribute("rows", "4");

			//creando botón añadir y dandole atributo
			//creando textNode del botón
			//asignarle a textAddBtn addBtn como padre
			var addBtn = document.createElement("button");
			addBtn.setAttribute("class", "addButton");
			addBtn.setAttribute("type", "button");
			var textAddBtn = document.createTextNode("Añadir");
			addBtn.appendChild(textAddBtn);

			//creando icono X
			var xIcon2 = document.createElement("i");
			xIcon2.classList.add("fa", "fa-times", "times");

			//asignando padre
			textareaSpace.appendChild(textareaTitle);
			textareaSpace.appendChild(mainTextarea);
			textareaSpace.appendChild(addBtn);
			textareaSpace.appendChild(xIcon2);
			addCardBox.appendChild(textareaSpace);

			//funcion que elimina al nodo hijo (textareaSpace) del contenedor
			xIcon2.addEventListener('click', function(){
				addCardBox.removeChild(textareaSpace);
				aCard.style.display = "initial";
			})
			addCardBox.insertBefore(textareaSpace, addCardBox.childNodes[1]);

			addBtn.addEventListener("click", function() {
				var secondCardBox = document.getElementById("oCardBox");

				//rescatando el valor del textarea
				var textareaValue = document.getElementsByClassName("mainTxtA")[0].value;
				document.getElementsByClassName("mainTxtA")[0].value = "";
				var textSpan = document.createTextNode(textareaValue);
				
				//creando div para almacenar independiente el span
				var loneBox = document.createElement("div");
				loneBox.setAttribute("class", "ofSpan");
				var pLoneBox = document.createElement("p");
				pLoneBox.appendChild(textSpan);				

				//asignando padre
				loneBox.appendChild(pLoneBox);
				secondCardBox.appendChild(loneBox);

				//insertando valor de textarea antes del textarea
				var insBefore = document.getElementsByClassName("ofSpan")[0];
				textareaSpace.insertBefore(insBefore, textareaSpace.childNodes[0]);
			})
			
		})

	})
}