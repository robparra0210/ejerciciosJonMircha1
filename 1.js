function contar(tex =""){ //Primer ejercicio
	
	if(!tex){
		return console.warn("cadena vacia")
		}else if( typeof(tex) === 'string' ||  typeof(tex) === 'number' ){
			return `${tex} es un ${typeof(tex)} y tiene ${tex.toString().length } caracteres`
				}else{ 
					return `no valido`
					}
	}

function truncar(tex, n){ //Segundo ejercicios
	if(!tex){
		return console.warn("cadena vacia")
		}else if( typeof(tex) === 'string' ||  typeof(tex) === 'number' ){
			return tex.slice(0,n)
				}else{ 
					return `no valido`
					}
}


function separar(tex, c=(/ /g)){ //Tercer ejercicio
	if(!tex){
		return console.warn("cadena vacia")
		}else if( typeof(tex) === 'string' ||  typeof(tex) === 'number' ){
			return tex.split(c)
				}else{ 
					return `no valido`
					}
}

function repetir(tex,n=1){ //Cuarto ejercicio
	if(!tex){
		return console.warn("cadena vacia")
		}else if( typeof(tex) === 'string' ||  typeof(tex) === 'number' ){
			return (tex+" ").repeat(n)
				}else{ 
					return `no valido`
					}
}



let ejercicio = "";

while(ejercicio ==""){

 ejercicio = prompt(`Cual ejercicio quieres? \n \n A) Contar numero de caracteres\n B) Recortar texto  \n C) Separar texto \n D) Repetir texto \n `  )

	switch (ejercicio) {

		case 'a':
			let opcionA = prompt(`Programa una funcion que cuente el numero de caracteres de una cadena de texto ejem. miFuncion('hola mundo') ----> devuelve 10 \n A. Seguir B.Volver`)
			if( opcionA == 'a'){
				let palabra = prompt('ingrese palabra')
				alert(contar(palabra))

			}else if(opcionA =='b'){
				ejercicio = ""
			}
			break;
	
		case 'b': 
			let opcionB = prompt(`truncar texto \n a. Seguir B.Volver `)
			if( opcionB == 'a'){
				let palabra = prompt('ingrese palabra')
				let n = prompt('cuantos caracteres desea?')

				alert(truncar(palabra,n))

			}else if(opcionB =='b'){
				ejercicio = ""
			}
			break;		

		case 'c': 
			let opcionC = prompt(` dada un Strign devuelva un array de textos separados por un cierto caracter. pe
									P.E: miFuncion("hola que tal",'') devuelve ['hola', 'que','tal'] \n a. Seguir B.Volver `)
			if( opcionC == 'a'){
				let palabra = prompt('ingrese palabra')
				let caracter = prompt('por cual caracter separar')

				alert(separar(palabra,caracter=" "))

			}else if(opcionC =='b'){
				ejercicio = ""
			}
			break;	



		case 'd': 
			let opcionD = prompt(`Repitir un texto X veces  \n a. Seguir B.Volver `)
			if( opcionD == 'a'){
				let palabra = prompt('ingrese palabra')
				let n = prompt('cuantas veces va a repetir')

				alert(repetir(palabra,n))

			}else if(opcionD =='b'){
				ejercicio = ""
			}
			break;	


			default :
			ejercicio = ""
			break


		}
	}
	

















