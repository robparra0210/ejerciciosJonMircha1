function contar(tex){ 
	
	let  texto

	if(typeof(tex) == "string"){
		texto = tex;
		return ` '${tex}'  tiene ${texto.length} caracteres y es ${typeof(tex)}`		
		}else if(typeof(tex) == 'number'){
			texto = toString(tex)			
			return ` '${tex}'  tiene ${texto.length} caracteres y es ${typeof(tex)}`		
			}	else{ 
					return 'no correspone a una cadena de texto ni un numero por favor ingrese otra cosa'		

				}





	//return ` '${tex}'  tiene ${texto.length} letras`		
	


}




let carro = {

	asientos: 4,
	puertas: 3,
	motor: 1.5,
	marca: 'chevrolet',
	acelerar: function(){
		return "estoy acelrando"
	}, 

	frenar: function(){ 
		return "estoy frenando"
	}



}