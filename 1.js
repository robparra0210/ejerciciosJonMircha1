function contar(tex){ 
	
	let  texto = toString(tex);
//	let	 texx = typeof(tex);



	switch (typeof(tex)){
	
		case 'string':
		return ` '${tex}'  tiene ${texto.length} caracteres y es ${typeof(tex)}`		
		break

		case 'number':
		return ` '${tex}'  tiene ${texto.length} caracteres y es ${typeof(tex)}`		
		break

		default:
		return `El dato de intento ingresar no es valido`
		break

		}	



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