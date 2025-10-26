function startQuiz() { //função para iniciar o nivel facil
    const questoes = [
        {
            questoes: "Qual o principal objetivo da Governança de TI?",
            alternativas: [
                { text: "Aumentar salário de profissionais da TI", correct: false },
                { text: "Apenas reduzir os custos operacionais de TI", correct: false },
                { text: "Exclusivamente para garantir a segurança da informação", correct: false },
                { text: "Alinhar estratégia da TI com objetivos de negócios", correct: true },
            ]
        },
        {
            questoes: "Qual framework é amplamente utilizado para Governança da TI e foca em controle e gestão de processos?",
            alternativas: [
                { text: "ITIL", correct: false },
                { text: "Scrum", correct: false },
                { text: "COBIT", correct: true },
                { text: "PMBOK", correct: false },
            ]
        },
        {
            questoes: "Qual o papel de um comitê de direção da TI na Governança da TI? ",
            alternativas: [
                { text: "Apenas aprovar a compra de novos equipamentos", correct: false },
                { text: "Desenvolver todo o código fonte dos sistemas", correct: false },
                { text: "Aprovar as políticas e os investimentos relacionados a TI", correct: true },
                { text: "Exclusivamente monitorar a segurança de Rede", correct: false },
            ]
        },
        {
            questoes: "A Governança de TI é um subconjunto de qual estrutura de governança mais ampla?",
            alternativas: [
                { text: "Governancia de Projetos", correct: false },
                { text: "Governancia Financeira", correct: false },
                { text: "Governancia Legal", correct: false },
                { text: "Governacia Corporativa", correct: true },
            ]
        },
        {
            questoes: "Qual dos seguintes itens NÃO é um elemento chave da Governança da TI?",
            alternativas: [
                { text: "Estratégia e planejamento da TI", correct: false },
                { text: "Estruturas organizacionais", correct: false },
                { text: "Preferencia pessoais dos funcionários", correct: true },
                { text: "Controle interno", correct: false },
            ]
        },
        {
            questoes: "O que a Governança da TI busca garantir em relação aos riscos?",
            alternativas: [
                { text: "Eliminar completamente todos os riscos da TI", correct: false },
                { text: "Gerenciar e metigar os riscos da TI de forma responsavél", correct: true },
                { text: "Apenas ignorar os riscos de baixo impacto", correct: false },
                { text: "Transferir todos os riscos para os fornecedores", correct: false },
            ]
        },
        {
            questoes: "Em um ambiente de Governança da TI eficaz, quem deve ser o principal responsavél pelo programa de governança?",
            alternativas: [
                { text: "A alta liderança da empresa", correct: true },
                { text: "O gerente da TI", correct: false },
                { text: "Os analistas de suporte", correct: false },
                { text: "O Chief Technology Officer (CTO)", correct: false },
            ]
        },
        {
            questoes: "Qual é uma saida de Governça de TI saudavél?",
            alternativas: [
                { text: "Aumento da complexidade nos processos", correct: false },
                { text: "Isolamento da área da TI do restante do negócio", correct: false },
                { text: "Diminuição da colaboração interdepartamental", correct: false },
                { text: "Definição de prioridades e padrões", correct: true },
            ]
        },
        {
            questoes: "Qual é o principal foco da auditoria de TI no contexto da Governança?",
            alternativas: [
                { text: "Testar a velocidade da rede", correct: false },
                { text: "Desenvolver novos sistemas", correct: false },
                { text: "Verificar a conformidade com as políticas e procedimentos", correct: true },
                { text: "Instalar novos programas", correct: false },
            ]
        },
        {
            questoes: "A segregação de funções, um princípio fundamental da Governança da TI, ajuda a mitigar qual tipo de risco?",
            alternativas: [
                { text: "Risco obsolescência tecnológica", correct: false },
                { text: "Risco de erro humano intencional ou não intencional", correct: true },
                { text: "Risco de lantidão na rede", correct: false },
                { text: "Risco de queda dde energia", correct: false },
            ]
        },
    ];

    const questoesElement = document.getElementById("questoes") //vai receber as questoes
    const alternativasButton = document.getElementById("alternativasButton") //vai receber as alternativas
    const proximo = document.getElementById("proximo") //botão para pular para proximas questoes
  

    let currentQuestionIndex = 0; //variavel para selecionar o elemento das questoes
    let score = 0; //pontuação

    function startQuiz() { //define a pontuaçao e elemento quando inicia o quiz
        currentQuestionIndex = 0;
        score = 0;
        proximo.innerHTML = "Proximo";

        const h1 = document.getElementById("text-principal");
        h1.classList.add("fadeOut"); // adiciona a animação de sumir

        // espera a animação terminar antes de mostrar o quiz
        setTimeout(() => {
            h1.style.display = "none"; // esconde o h1
            currentQuestionIndex = 0;
            score = 0;
            proximo.innerHTML = "Próximo";
        }, 0.1); // tempo igual ao da animação
    }

{
    showQuestion(); //mostrar as questoes e alternativas
}

function showQuestion() { //função para criar os elementos de questoes e alternativas
    resetState(); //apaga os botões e as questoes anterior para criar as novas
    let currentQuestion = questoes[currentQuestionIndex] //seleciona a questão 
    let questoesNo = currentQuestionIndex + 1; //numero da questão
    questoesElement.innerHTML = questoesNo + ". " + currentQuestion.questoes;


    currentQuestion.alternativas.forEach(alternativas => { //função para criar os botões das alternativas
        const button = document.createElement("button")
        button.innerHTML = alternativas.text;
        button.classList.add("btn"); //criar uma classe para os botões
        alternativasButton.appendChild(button)
        if (alternativas.correct) {
            button.dataset.correct = alternativas.correct
        }
        button.addEventListener("click", selectAlternativas) //cria um evento quando clica na alternativa
    });
}

function resetState() { //função para resetar a pagina 
    proximo.style.display = "none"
    while (alternativasButton.firstChild) {
        alternativasButton.removeChild(alternativasButton.firstChild)
    }
}

function selectAlternativas(e) {  //evento para quando a alternativa for selecionada
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct"); //caso a alternativa correta for selecionada cria um classe para botão e soma pontuação
        score++
    } else {
        selectedBtn.classList.add("incorrect");  //caso a alternativa estiver incorreta add classe 
    }
    Array.from(alternativasButton.children).forEach(button => { //indica qual alternativa correta
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true; //desabilita o click dos botões das alternativas quando selecionada
    });
    proximo.style.display = "block";  //habilita o botão para proxima alternativa 
}

function showScore() {  //função para tela final onde mostra a pontuação e criar opção de jogar novamente
    resetState()
    questoesElement.innerHTML = `Sua Pontuação foi: ${score} de ${questoes.length}`
    proximo.innerHTML = "Jogar Novamente" //mudar o texto do botão de proximo para jogar novamente
    proximo.style.display = "block"

}

function handleNextButton() { //evento para quando o botão do proximo for selecionado
    currentQuestionIndex++ //muda o elemento da questão pulando para proxima questão
    if (currentQuestionIndex < questoes.length) {  //caso verdadeiro mostrar proxima questão falso mostrar a tela final com pontuação
        showQuestion()
    } else {
        showScore() //função para mostrar a pontuação
        let creditos = document.getElementById("creditos")
        creditos.style.display = "flex"
        let frase = document.getElementById("frase")

        if (score < 5) {
            frase.innerHTML = "Você pode melhorar sua pontuação, tente novamente!"
        }
        else if (score < 9) {
            frase.innerHTML = "Você consegue mais, não desista!"
        }
        else {
            frase.innerHTML = "Parabéns!!! Por que não tenta um nível mais difícil? "
        }
    }
}

proximo.addEventListener("click", () => { //quando acabar as questoes botão de proximo receber a função para tela inicial
    if (currentQuestionIndex < questoes.length) {
        handleNextButton()
    } else {
        window.location.replace("index.html")
    }
})

startQuiz() //função para inicial o jogo
}