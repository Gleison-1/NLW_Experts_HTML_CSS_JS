const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe uma caixa de diálogo",
        "Registra informações no console",
        "Interrompe a execução do código",
      ],
      correta: 1
    },
    {
      pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos operadores abaixo é usado para comparar igualdade sem considerar o tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador 'typeof' faz em JavaScript?",
      respostas: [
        "Verifica se uma variável é indefinida",
        "Retorna o tipo de dado de uma variável",
        "Concatena duas strings",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'Array.push()' em JavaScript?",
      respostas: [
        "Remove o último elemento de um array",
        "Adiciona um elemento ao final de um array",
        "Inverte a ordem dos elementos em um array",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma função que retorna outra função",
        "Uma estrutura condicional",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar código repetidamente em JavaScript?",
      respostas: [
        "If-else",
        "Switch",
        "Loop",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Uma linguagem de programação",
        "Uma interface de programação para documentos HTML e XML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Remover um evento",
        "Adicionar um evento a um elemento HTML",
        "Atualizar o conteúdo de uma página",
      ],
      correta: 1
    },
  ];
  
  //pega o documento e as funções queryselector busca alguma informação
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    //Coloca a descrição das perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //Coloca as perguntas por extensão
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + 
        totalDePerguntas
      }
      
  
      //adiciona as três perguntas
      quizItem.querySelector('dl').appendChild(dt)
   
    }
    //Remove a primeira pergunta do HTML - Resposta A
    quizItem.querySelector('dl dt').remove()
    
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }