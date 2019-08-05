class Usuario {
    retornarDadosUsuario() {
		return {nome: "Felipe Ferreira" };
    }
}

let usuario = new Usuario();
console.log(usuario.retornarDadosUsuario());


class Usuario2 {
    retornarDadosUsuario() {
		return {nome: "Felipe 2" };
    }
}

let usuario2 = new Usuario2();
console.log(usuario2.retornarDadosUsuario());
