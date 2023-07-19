"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Pegando requisicao da API e colorindo o titulo conforme categoria
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        mostrarCursos(data);
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    //Então agora posso fazer um foreach neles. Passando mouse em cima do curso do foreach, vejo que ele é do tipo : Curso
    // por padrao a Template String se eu tiver uma array, ela junta usando a vírgula, no caso do curso.tags, ja tem join nativo com vírgula
    //Então para modificar eu uso o join(", ") para por vírgula com espaço
    cursos.forEach(curso => {
        //Poderia fazer dentro, mas preferi fazer aqui
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}" >${curso.nome}</h2>
        <p>Horas: ${curso.horas}<p>
        <p>Aulas: ${curso.aulas}<p>
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}<p>
        <p>Tags: ${curso.tags.join(", ")}<p>
        <p>Aulas: ${curso.idAulas.join(" | ")}<p>
        
      </div>
    
    `;
    });
}
//`` template string
