function createList (){
	var container = document.getElementById("container");
	var input = document.getElementById("input");
	//container.removeChild(input);
	//input.style.display = "none";

	//var newDiv = document.createElement("div");
	var newInput = document.createElement("input");
	newInput.setAttribute("type", "text");
	newInput.setAttribute("placeholder", "Añadir una lista...");
	newInput.classList.add("class", "inputTitle");
 
	//boton guardar lista 
	var btn = document.createElement("button");
	var txtBtn = document.createTextNode("Guardar");
	btn.setAttribute("type", "button");
	btn.classList.add("class", "safeBtn");
	
	//agregar al padre
	tareas.appendChild(newInput);
	tareas.appendChild(btn);
	btn.appendChild(txtBtn);
	
	btn.addEventListener("click", function(){
		var tasks = document.getElementsByClassName("inputTitle")[0].value;
		document.getElementsByClassName("inputTitle")[0].value = "";
		//input.style.display = "inline-block";
		console.log(tasks);


		//creando div de textarea	

		var txtAreaDiv = document.createElement("div");
		txtAreaDiv.setAttribute("class" , "tAdiv")
		var spanDiv = document.createElement("span");
		var textDiv = document.createTextNode(tasks);
		spanDiv.classList.add("class", "spanOfDiv");
		var addBoton = document.createElement("button");
		var txtAddBtn = document.createTextNode("Añadir una tarjeta");
		addBoton.setAttribute("type", "button");
		addBoton.classList.add("class", "addBtn");

		txtAreaDiv.appendChild(spanDiv);
		txtAreaDiv.appendChild(addBoton);
		spanDiv.appendChild(textDiv);
		addBoton.appendChild(txtAddBtn);
		tareas.appendChild(txtAreaDiv);


		addBoton.addEventListener("click", function(){
			var contTxtArea = document.createElement("div")
			var textAreaHidden = document.createElement("textarea");
			textAreaHidden.setAttribute("cols", "20");
			textAreaHidden.setAttribute("rows", "1");
			textAreaHidden.classList.add("class", "txtHidden");
			var anadir = document.createElement("button");
			var txtAnadir = document.createTextNode("Añadir");
			anadir.setAttribute("type", "button");
			anadir.classList.add("class", "botonAnadir");

			contTxtArea.appendChild(textAreaHidden);
			contTxtArea.appendChild(anadir);
			anadir.appendChild(txtAnadir);
			txtAreaDiv.appendChild(contTxtArea);



		})




			
		/* debo crear a partir del click de este boton, un div que tenga un span, que sera el titulo (su valor es lo ingresado en el input) + boton (que mostrara el siguiente div al hacer click) + div(que esta oculto) y que debe contener un textarea + boton + X*/
		})





}


