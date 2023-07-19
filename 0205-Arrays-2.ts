//Pegando requisicao da API e colorindo o titulo conforme categoria
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  tags: string[];
  nivel: "iniciante" | "avancado";
}

function mostrarCursos(cursos: Curso[]) {//cursos são do tipo da interface Curso que defini, mas não somente a interface, é uma array da Interface Cursos(interface que defini)
  //Então agora posso fazer um foreach neles. Passando mouse em cima do curso do foreach, vejo que ele é do tipo : Curso
  
  // por padrao a Template String se eu tiver uma array, ela junta usando a vírgula, no caso do curso.tags, ja tem join nativo com vírgula
  //Então para modificar eu uso o join(", ") para por vírgula com espaço
  cursos.forEach(curso => {
    //Poderia fazer dentro, mas preferi fazer aqui
    let color;

    if(curso.nivel === "iniciante"){
      color = "blue"
    }else{
      color = "red"
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
    
    `
  })
}

//`` template string
