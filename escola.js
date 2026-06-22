const dadosDoAluno = require('./aluno.json');
console.log("--- Sistema escolar ---");
console.log(Nome: ${dadosDoAluno.nome});
console.log('Curso: ${dadosDoAluno.curso}');
if (dadosDoAluno.bolsista) {
console.log("Status: Este aluno possui isenção de mensalidade.");
} else {
console.log("Status: Mensalidade padrão.");
};
//Alterar o tipo de bolsa
//Adicione a saída idade