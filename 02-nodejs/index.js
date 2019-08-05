/**
 *
 * 01) Obter o usuario
 * 02) Obter o numero de telefone a partir do id do usuario
 * 03) Obter o endereço a partir do id do usuario
 *
*/

function getUsuario(callback){
	setTimeout(function (){
		return callback({
			id: 1,
			nome: "Felipe",
            dataNascimento: new Date()
		})
	}, 1000)
}

getUsuario(function printUsuario(usuario){
	console.log(usuario)
})
