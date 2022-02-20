/**
 * Utitilize o código do exercício anterior e adicione a funcionalidade de poder buscar alunos por id/nome/professor/idade
 */

 const prompt = require("prompt-sync")({siginit:true});

 const alunos = [
     {id: 1, nome: 'Ricardo', sobrenome: 'Andrade', idade: 36, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 100},
     {id: 2, nome: 'Flavia', sobrenome: 'Souza', idade: 25, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 100},
     {id: 3, nome: 'Paula', sobrenome: 'Martins', idade: 70, execicioAdp: true, professor: 'Luciana Tavares', temAcesso: true, mensalidade: 70},
     {id: 4, nome: 'Pedro', sobrenome: 'Silva', idade: 18, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 150},
     {id: 5, nome: 'Marcos', sobrenome: 'Moura', idade: 66, execicioAdp: true, professor: 'Luciana Tavares', temAcesso: true, mensalidade: 70},
 ];
 
 const novosAlunos = (id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade) => ({id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade})
 
// const buscaNome = prompt("digite o nome do aluno: ");
// const buscaAluno = alunos.find(a => a.nome === buscaNome);
 
 let addAlunos;

 console.log("Digite a opção de pesquisa: ");
 const pesquisaAluno = parseInt(prompt("1 - ID \n2 - Nome \n3 - Professor \n4 - Idade \n"));
 switch(pesquisaAluno){
     case 1:
        const buscaID = parseInt(prompt("digite o ID aluno: "));
        let buscaAluno = alunos.find(a => a.id === buscaID); 
        if(buscaAluno){
            console.log(buscaAluno); 
            removeAluno = prompt("Aluno encontrado tecle: \n[p] para Permitir o Acesso do Aluno \n[b] para Bloquear o Acesso do Aluno \n[r] para Remover \n[s] para Sair ").toUpperCase(); 
            switch (removeAluno){
                case 'R':
                    console.log("removendo");
                    alunos.splice(buscaAluno.id - 1, 1);
                    break;
                case 'S':
                    console.log("Consulta finalizada");
                    break;
                case 'P':
                    buscaAluno.temAcesso = true; 
                    console.log(buscaAluno)
                    break; 
                case 'B':
                    buscaAluno.temAcesso = false;
                    console.log(buscaAluno)
                    break;
                default:
                    console.log("Opção inválida digite S para adicionar e N para encerrar o programa ");
                    break;
            }
        }else{
            addAlunos = prompt("Aluno não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
            switch (addAlunos){
                case 'S':
                    const id = alunos.length+1;
                    const nome = prompt("Nome: ");
                    const sobrenome = prompt("Sobrenome: ");
                    const idade = parseInt(prompt("idade: "));
                    const mensalidade = parseFloat(prompt("Mensalidade em R$ "));
                    let exercicioAdp = false;
                    let professor = "";
                    if(idade >= 60){
                        exercicioAdp = true;
                    }
                    const selecionaProf = parseInt(prompt("Selecione o professor 1 - Luis Roberto / 2 - Luciana Tavares: "));
                    switch(selecionaProf){
                        case 1: 
                        professor = "Luis Roberto";
                        break;
                        case 2:
                            professor = "Luciana Tavares"
                            break;
                        default:
                            console.log("Opção inválida. Digite 1 - Luis Roberto / 2 - Luciana Tavares");
                            break;
                    }
                    const temAcesso = true;
                    //Conforme a ordem que é informada dentro do novosAlunos() é o preenchimento do novo objeto Aluno
                    const novoAluno = novosAlunos(id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade);
                    alunos.push(novoAluno)
                    break;
                case 'N':
                    console.log("Fechando o programa");
                    break;
                default:
                    console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
            }
        }
        break;
     case 2:
        const buscaNome = prompt("digite o nome aluno: ");
        let buscaAlunoNome = alunos.find(a => a.nome === buscaNome); 
        if(buscaAlunoNome){
            console.log(buscaAlunoNome); 
            removeAluno = prompt("Aluno encontrado tecle: \n[p] para Permitir o Acesso do Aluno \n[b] para Bloquear o Acesso do Aluno \n[r] para Remover \n[s] para Sair ").toUpperCase(); 
            switch (removeAluno){
                case 'R':
                    console.log("removendo");
                    alunos.splice(buscaAlunoNome.id - 1, 1);
                    break;
                case 'S':
                    console.log("Consulta finalizada");
                    break;
                case 'P':
                    buscaAlunoNome.temAcesso = true; 
                    console.log(buscaAlunoNome)
                    break; 
                case 'B':
                    buscaAluno.temAcesso = false;
                    console.log(buscaAlunoNome)
                    break;
                default:
                    console.log("Opção inválida digite S para adicionar e N para encerrar o programa ");
                    break;
            }
        }else{
            addAlunos = prompt("Aluno não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
            switch (addAlunos){
                case 'S':
                    const id = alunos.length+1;
                    const nome = prompt("Nome: ");
                    const sobrenome = prompt("Sobrenome: ");
                    const idade = parseInt(prompt("idade: "));
                    const mensalidade = parseFloat(prompt("Mensalidade em R$ "));
                    let exercicioAdp = false;
                    let professor = "";
                    if(idade >= 60){
                        exercicioAdp = true;
                    }
                    const selecionaProf = parseInt(prompt("Selecione o professor 1 - Luis Roberto / 2 - Luciana Tavares: "));
                    switch(selecionaProf){
                        case 1: 
                        professor = "Luis Roberto";
                        break;
                        case 2:
                            professor = "Luciana Tavares"
                            break;
                        default:
                            console.log("Opção inválida. Digite 1 - Luis Roberto / 2 - Luciana Tavares");
                            break;
                    }
                    const temAcesso = true;
                    //Conforme a ordem que é informada dentro do novosAlunos() é o preenchimento do novo objeto Aluno
                    const novoAluno = novosAlunos(id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade);
                    alunos.push(novoAluno)
                    break;
                case 'N':
                    console.log("Fechando o programa");
                    break;
                default:
                    console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
            }
        }
        break;
     case 3:
        const buscaProfessor = prompt("digite o professor do aluno: ");
        let buscaAlunoProf = alunos.filter(a => a.professor === buscaProfessor); 
        if(buscaAlunoProf){
            console.log(buscaAlunoProf); 
        }else{
            addAlunos = prompt("Aluno não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
            switch (addAlunos){
                case 'S':
                    const id = alunos.length+1;
                    const nome = prompt("Nome: ");
                    const sobrenome = prompt("Sobrenome: ");
                    const idade = parseInt(prompt("idade: "));
                    const mensalidade = parseFloat(prompt("Mensalidade em R$ "));
                    let exercicioAdp = false;
                    let professor = "";
                    if(idade >= 60){
                        exercicioAdp = true;
                    }
                    const selecionaProf = parseInt(prompt("Selecione o professor 1 - Luis Roberto / 2 - Luciana Tavares: "));
                    switch(selecionaProf){
                        case 1: 
                        professor = "Luis Roberto";
                        break;
                        case 2:
                            professor = "Luciana Tavares"
                            break;
                        default:
                            console.log("Opção inválida. Digite 1 - Luis Roberto / 2 - Luciana Tavares");
                            break;
                    }
                    const temAcesso = true;
                    //Conforme a ordem que é informada dentro do novosAlunos() é o preenchimento do novo objeto Aluno
                    const novoAluno = novosAlunos(id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade);
                    alunos.push(novoAluno)
                    break;
                case 'N':
                    console.log("Fechando o programa");
                    break;
                default:
                    console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
            }
        }
        break;
     case 4:
        const buscaIdade = parseInt(prompt("digite a idade aluno: "));
        let buscaAlunoIdade = alunos.find(a => a.idade === buscaIdade); 
        if(buscaAlunoIdade){
            console.log(buscaAlunoIdade); 
            removeAluno = prompt("Aluno encontrado tecle: \n[p] para Permitir o Acesso do Aluno \n[b] para Bloquear o Acesso do Aluno \n[r] para Remover \n[s] para Sair ").toUpperCase(); 
            switch (removeAluno){
                case 'R':
                    console.log("removendo");
                    alunos.splice(buscaAlunoIdade.id - 1, 1);
                    break;
                case 'S':
                    console.log("Consulta finalizada");
                    break;
                case 'P':
                    buscaAlunoIdade.temAcesso = true; 
                    console.log(buscaAlunoIdade)
                    break; 
                case 'B':
                    buscaAlunoIdade.temAcesso = false;
                    console.log(buscaAlunoIdade)
                    break;
                default:
                    console.log("Opção inválida digite S para adicionar e N para encerrar o programa ");
                    break;
            }
        }else{
            addAlunos = prompt("Aluno não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
            switch (addAlunos){
                case 'S':
                    const id = alunos.length+1;
                    const nome = prompt("Nome: ");
                    const sobrenome = prompt("Sobrenome: ");
                    const idade = parseInt(prompt("idade: "));
                    const mensalidade = parseFloat(prompt("Mensalidade em R$ "));
                    let exercicioAdp = false;
                    let professor = "";
                    if(idade >= 60){
                        exercicioAdp = true;
                    }
                    const selecionaProf = parseInt(prompt("Selecione o professor 1 - Luis Roberto / 2 - Luciana Tavares: "));
                    switch(selecionaProf){
                        case 1: 
                        professor = "Luis Roberto";
                        break;
                        case 2:
                            professor = "Luciana Tavares"
                            break;
                        default:
                            console.log("Opção inválida. Digite 1 - Luis Roberto / 2 - Luciana Tavares");
                            break;
                    }
                    const temAcesso = true;
                    //Conforme a ordem que é informada dentro do novosAlunos() é o preenchimento do novo objeto Aluno
                    const novoAluno = novosAlunos(id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade);
                    alunos.push(novoAluno)
                    break;
                case 'N':
                    console.log("Fechando o programa");
                    break;
                default:
                    console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
            }
        }
        break;
     default:
         console.log("Opção inválida");
         break;
 }
 
 
 //console.log(alunos);
 
 const mediaIdade = alunos.map(x => x.idade);
 const mediaMensalidade = alunos.map(x => x.mensalidade);
 
 console.log("O total de alunos matriculados é ", alunos.length)
 console.log("A media de idade dos alunos é: ", mediaIdade.reduce((soma, item)=>soma + item)/mediaIdade.length);
 console.log("O total das mensalidades dos alunos é: R$ ", mediaMensalidade.reduce((soma, item)=> soma + item));
 console.log("A media das mensalidade dos alunos é: R$", mediaMensalidade.reduce((soma, item)=> soma + item)/mediaMensalidade.length);