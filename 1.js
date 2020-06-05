function contar(tex){ 
	
	let  texto = tex.toString();
	
	if( typeof(tex) === 'string' ||  typeof(tex) === 'number' ){
		return `${tex} es un ${typeof(tex)} y tiene ${texto.length } caracteres`
	}else{ 
		return `no valido`
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