// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

/*Criando uma interface para poder dizer que tipo de dado ela vai, se não fica podendo retornar ANY no handleCursos */
interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

/*Crio essa TYPE GUARD para garantir o tipo de retorno para ele se for TRUE */
function isCurso(curso: unknown): curso is Curso {//Type PREDICATE
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false;
  }
}

//Passando para ca, garanto que ITEM é do tipo Curso, podendo então utilizar as propriedades e métodos
function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
    });
  }
}

/*
DICAS:
Utilizando a fn filter, ela possui um callback que retorna os valores TRUE.
if(Array.isArray(data)){
  data.filter(item => {
    if(item && typeof === 'object' && "nome" in item){
      return true
    }else{
      return false
    }
  }).forEach(item => {
    document.body.innetHTML += `
    <p> ${item.nome}</p>` //->(n executa o codigo anterior ao foreach. Aqui ele vai dizer que item pode ser ANY, mas é impossível, pq anteriomente eu confirmei que seria true ou false, mas na verdade o TS n executa, então não tem como ele saber, e vai continuar podendo ser ANY
  })
  (TAMPLETE STRING `${}`)
  (fazendo o foreach com a "garantia que ele ira retornar true ou false", mas na vdd não acontece pq o TS não executa)
}

*/