if(localStorage.lista == null || localStorage.lista == undefined || localStorage.lista == ""){
	localStorage.setItem("lista", "[]");
	list = localStorage.lista;
}

show();
function enter(atividade, event) {
	var evento = event.which || event.keyCode;
	var list = localStorage.lista;
	if (evento == 13) {
		add(atividade.value	);
		show();
		atividade.value = "";
		return false;
	}
}

function show(){
	var list = localStorage.lista;
	var json = JSON.parse(list);
	
	var html = '<ul class ="list-group">';	
	for(var i = 0; i < json.length;i++){
		html+='<li class ="list-group-item"><input type="checkbox">' + " " + json[i].atividade + '<a href="#" onclick="remover('+i+');" style="float:right"><i style="color:black" class="glyphicon glyphicon-new-window"></i></a></listai>';
		
	}
	html+='</ul>';

	document.getElementById("atividades").innerHTML = html;
}

function remover(i){
	var json = JSON.parse(localStorage.lista);
	json.splice(i,1);
	localStorage.lista = JSON.stringify(json);
	show();
}

function add(atividade){
	var list = localStorage.lista;
	var json = JSON.parse(list);
	json[json.length] = {"atividade":atividade};
	localStorage.lista = JSON.stringify(json);
}