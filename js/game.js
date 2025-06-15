// Game Data - All questions in one quiz
const gameData = {
    historia: {
        title: "Quiz História do Brasil - Brasil Colonial",
        questions: [
            // Expansão Territorial
            {
                question: "O que eram as Entradas no período colonial brasileiro?",
                options: [
                    "Expedições oficiais organizadas pelo governo português",
                    "Festas tradicionais dos indígenas",
                    "Rituais religiosos dos bandeirantes",
                    "Tipos de embarcações usadas no litoral"
                ],
                correct: 0,
                explanation: "As Entradas eram expedições oficiais organizadas pelo governo português para explorar o interior do Brasil.",
                funFact: "Você sabia que o nome 'Bandeirantes' vem das bandeiras que carregavam durante as expedições?"
            },
            {
                question: "Em que data foi fundado o Colégio de Piratininga, marco da fundação de São Paulo?",
                options: [
                    "25 de janeiro de 1500",
                    "25 de janeiro de 1554",
                    "7 de setembro de 1822",
                    "22 de abril de 1500"
                ],
                correct: 1,
                explanation: "O Colégio de Piratininga foi fundado em 25 de janeiro de 1554 pelos padres José de Anchieta e Manuel da Nóbrega.",
                funFact: "O local onde foi fundado o colégio hoje é o Pátio do Colégio, no centro de São Paulo!"
            },
            {
                question: "Quem foram os fundadores do Colégio de Piratininga?",
                options: [
                    "Padres Antônio Vieira e Bartolomeu de Gusmão",
                    "Padres José de Anchieta e Manuel da Nóbrega",
                    "Padres Diogo Antônio Feijó e Feijó",
                    "Padres João Ramalho e Leonardo Nunes"
                ],
                correct: 1,
                explanation: "O Colégio de Piratininga foi fundado pelos padres jesuítas José de Anchieta e Manuel da Nóbrega em 1554.",
                funFact: "José de Anchieta tinha apenas 19 anos quando chegou ao Brasil e se tornou um dos fundadores de São Paulo!"
            },
            {
                question: "Qual foi o primeiro nome da cidade de São Paulo?",
                options: [
                    "São Paulo dos Campos de Piratininga",
                    "Vila de São Paulo",
                    "São Paulo de Piratininga",
                    "Cidade de São Paulo"
                ],
                correct: 2,
                explanation: "A cidade de São Paulo foi fundada como 'São Paulo de Piratininga', em referência ao apóstolo São Paulo e ao rio Piratininga que havia na região.",
                funFact: "O nome 'Piratininga' vem do tupi e significa 'peixe seco', uma referência ao período de seca do rio Tamanduateí, quando os peixes ficavam presos nas poças d'água!"
            },
            
            // Bandeirantes e Ouro
            {
                question: "O que motivava os bandeirantes em suas expedições?",
                options: [
                    "Apenas a busca por ouro",
                    "Busca por indígenas, ouro e pedras preciosas",
                    "Exploração científica do território",
                    "Conversão de indígenas ao cristianismo"
                ],
                correct: 1,
                explanation: "Os bandeirantes buscavam principalmente capturar indígenas, encontrar ouro e pedras preciosas.",
                funFact: "Você sabia que o nome 'Vila Rica' (atual Ouro Preto) foi dado por causa da grande quantidade de ouro encontrada na região?"
            },
            {
                question: "O que foi a Guerra dos Emboabas (1707)?",
                options: [
                    "Uma batalha entre portugueses e espanhóis",
                    "Um conflito entre paulistas e forasteiros pelo controle das minas",
                    "Uma revolta de escravizados",
                    "Uma disputa entre bandeirantes e jesuítas"
                ],
                correct: 1,
                explanation: "A Guerra dos Emboabas foi um conflito entre os bandeirantes paulistas (que descobriram o ouro) e os forasteiros (emboabas) que vieram depois para explorar as minas.",
                funFact: "A palavra 'emboaba' era usada para se referir aos forasteiros e significa 'ave de pés emplumados', em referência às botas que usavam!"
            },
            
            // Escravidão e Sociedade
            {
                question: "Em que ano chegaram os primeiros navios negreiros ao Brasil?",
                options: [
                    "1500",
                    "1532",
                    "1568",
                    "1600"
                ],
                correct: 2,
                explanation: "Os primeiros navios negreiros chegaram ao Brasil em 1568, trazendo africanos escravizados para trabalhar nos engenhos de açúcar.",
                funFact: "Você sabia que o Brasil foi o país que mais recebeu escravizados africanos nas Américas? Foram cerca de 4,8 milhões de pessoas!"
            },
            {
                question: "Como era a relação entre a Casa-Grande e a Senzala?",
                options: [
                    "Eram construções iguais para diferentes classes sociais",
                    "A Casa-Grande era a moradia dos senhores e a Senzala dos escravizados",
                    "Eram nomes de cidades coloniais",
                    "Eram tipos de plantações"
                ],
                correct: 1,
                explanation: "A Casa-Grande era a residência dos senhores de engenho, enquanto a Senzala era o local onde ficavam os escravizados, mostrando a grande desigualdade social da época.",
                funFact: "O livro 'Casa-Grande & Senzala', de Gilberto Freyre, é um dos mais importantes sobre a formação da sociedade brasileira!"
            },
            {
                question: "Como os escravos africanos chegaram ao Brasil?",
                options: [
                    "Através de navios negreiros",
                    "Por rotas terrestres da África",
                    "Em embarcações pequenas pelo Oceano Pacífico",
                    "Por meio de acordos comerciais com tribos indígenas"
                ],
                correct: 0,
                explanation: "Os escravos africanos foram trazidos para o Brasil principalmente através dos navios negreiros, em condições desumanas, em uma viagem que podia durar meses.",
                funFact: "A travessia do Atlântico nos navios negreiros era chamada de 'Travessia do Meio' e era tão terrível que muitos escravos morriam durante a viagem."
            },
            {
                question: "Qual era a principal atividade econômica que utilizava mão de obra escrava no Brasil Colonial?",
                options: [
                    "Extrair borracha na Amazônia",
                    "Fabricação de açúcar nos engenhos",
                    "Cultivo de café no Sudeste",
                    "Mineração de diamantes"
                ],
                correct: 1,
                explanation: "A fabricação de açúcar nos engenhos foi a principal atividade econômica que utilizou mão de obra escrava no Brasil Colonial, especialmente nos séculos XVI e XVII.",
                funFact: "Você sabia que um único engenho de açúcar podia ter centenas de escravos trabalhando? Era um trabalho extremamente pesado e perigoso!"
            },
            
            // Trabalho nas Minas
            {
                question: "Qual era o imposto cobrado pela Coroa Portuguesa sobre o ouro extraído?",
                options: [
                    "Um terço do ouro encontrado",
                    "Um quinto do ouro encontrado",
                    "Metade do ouro encontrado",
                    "Um décimo do ouro encontrado"
                ],
                correct: 1,
                explanation: "Era cobrado o 'quinto', ou seja, 20% de todo o ouro extraído deveria ser entregue à Coroa Portuguesa.",
                funFact: "Você sabia que a expressão 'tirar o couro' vem do hábito de esconder ouro em couro de animais para fugir dos impostos?"
            },
            {
                question: "O que era a Casa de Fundição, criada em 1719?",
                options: [
                    "Local onde se fabricavam ferramentas para as minas",
                    "Oficina de ourivesaria",
                    "Local onde o ouro era derretido e transformado em barras para cobrança de impostos",
                    "Fábrica de moedas"
                ],
                correct: 2,
                explanation: "A Casa de Fundição era o local onde o ouro em pó era transformado em barras, selado e taxado, garantindo o pagamento do quinto à Coroa.",
                funFact: "Para cada barra de ouro, uma parte era retirada como imposto e a barra recebia um selo real, comprovando o pagamento!"
            },
            {
                question: "Qual foi o período conhecido como 'Ciclo do Ouro' no Brasil?",
                options: [
                    "1500-1600",
                    "1600-1700",
                    "1691-1800",
                    "1750-1850"
                ],
                correct: 2,
                explanation: "O Ciclo do Ouro ocorreu entre 1691 e 1800, quando a extração de ouro foi a principal atividade econômica da colônia, especialmente na região de Minas Gerais.",
                funFact: "Nesse período, a população de Minas Gerais cresceu tanto que a capital da colônia foi transferida de Salvador para o Rio de Janeiro, que estava mais próximo das minas!"
            },
            {
                question: "O que era o 'quinto' no período do Ciclo do Ouro?",
                options: [
                    "Um imposto que correspondia à quinta parte de toda produção de ouro",
                    "O nome dado aos cinco principais garimpos de ouro",
                    "A distância mínima entre as minas de ouro",
                    "O número de dias de trabalho obrigatório por semana"
                ],
                correct: 0,
                explanation: "O 'quinto' era um imposto cobrado pela Coroa Portuguesa que correspondia a 20% (um quinto) de todo o ouro extraído no Brasil.",
                funFact: "Para garantir o pagamento do quinto, foram criadas as Casas de Fundição, onde todo o ouro em pó deveria ser transformado em barras e taxado!"
            },
            
            // Conjuração Mineira
            {
                question: "Quem foi o líder da Inconfidência Mineira?",
                options: [
                    "Dom Pedro I",
                    "Joaquim José da Silva Xavier (Tiradentes)",
                    "Tomás Antônio Gonzaga",
                    "Cláudio Manuel da Costa"
                ],
                correct: 1,
                explanation: "Joaquim José da Silva Xavier, conhecido como Tiradentes, foi o líder do movimento conhecido como Inconfidência Mineira.",
                funFact: "Você sabia que Tiradentes recebeu esse apelido porque também trabalhava como dentista?"
            },
            {
                question: "Qual era o principal objetivo da Inconfidência Mineira?",
                options: [
                    "Abolir a escravidão no Brasil",
                    "Proclamar a independência de Minas Gerais",
                    "Aumentar os impostos sobre o ouro",
                    "Criar uma universidade em Vila Rica"
                ],
                correct: 1,
                explanation: "O movimento buscava a independência da região das Minas Gerais de Portugal, inspirado pelo iluminismo e pela independência dos EUA.",
                funFact: "Você sabia que o lema da bandeira de Minas Gerais, 'Libertas Quae Sera Tamen', foi inspirado no movimento da Inconfidência Mineira?"
            },
            {
                question: "Em que ano foi criada a vila de Vila Rica, atual Ouro Preto?",
                options: [
                    "1701",
                    "1711",
                    "1721",
                    "1731"
                ],
                correct: 1,
                explanation: "Vila Rica (atual Ouro Preto) foi elevada à vila em 1711, tornando-se um dos principais centros urbanos da região das minas de ouro.",
                funFact: "Vila Rica foi a primeira vila criada na região das minas e mais tarde se tornou a capital de Minas Gerais!"
            },
            {
                question: "Em que ano a capital do Brasil foi transferida de Salvador para o Rio de Janeiro?",
                options: [
                    "1750",
                    "1763",
                    "1775",
                    "1789"
                ],
                correct: 1,
                explanation: "A capital do Brasil foi transferida de Salvador para o Rio de Janeiro em 1763, por ordem do Marquês de Pombal, devido à importância crescente da região sudeste com a mineração de ouro.",
                funFact: "O Rio de Janeiro permaneceu como capital do Brasil por quase 200 anos, até a construção de Brasília em 1960!"
            },
            {
                question: "Quais são considerados três dos principais bandeirantes do período colonial?",
                options: [
                    "Dom Pedro I, Dom João VI e José Bonifácio",
                    "Fernão Dias Paes, Borba Gato e Bartolomeu Bueno da Silva",
                    "Tiradentes, Tomás Antônio Gonzaga e Cláudio Manuel da Costa",
                    "Anchieta, Nóbrega e Manuel da Nóbrega"
                ],
                correct: 1,
                explanation: "Fernão Dias Paes (o 'Caçador de Esmeraldas'), Manuel de Borba Gato e Bartolomeu Bueno da Silva (o Anhanguera) estão entre os mais famosos bandeirantes, conhecidos por suas expedições pelo interior do Brasil.",
                funFact: "O apelido 'Anhanguera' dado a Bartolomeu Bueno significa 'diabo velho' em tupi, pois ele teria ateado fogo em álcool para assustar os indígenas!"
            }
        ]
    },
    ciencias: {
        title: "Quiz de Ciências - 5º Ano",
        questions: [
            // Adolescência e Puberdade
            {
                question: "Qual dessas NÃO é uma característica da puberdade?",
                options: [
                    "Crescimento dos pelos pubianos",
                    "Aumento da estatura",
                    "Crescimento dos dentes de leite",
                    "Desenvolvimento dos seios nas meninas"
                ],
                correct: 2,
                explanation: "O crescimento dos dentes de leite ocorre na primeira infância, não na puberdade. Na puberdade, ocorrem mudanças como o desenvolvimento dos caracteres sexuais secundários e o estirão de crescimento.",
                funFact: "A puberdade geralmente começa entre os 8-13 anos nas meninas e 9-14 anos nos meninos!"
            },
          {
            question: "O que ocorre com os meninos durante a puberdade?",
            options: ["A voz se torna mais aguda", "Começam a menstruar", "Crescimento dos testículos e da voz mais grossa", "Aumento da quantidade de leite materno"],
            correct: 2,
            explanation: "Nos meninos, a puberdade traz aumento dos testículos, crescimento de pelos faciais e engrossamento da voz.",
            funFact: "A mudança de voz nos meninos é causada pelo crescimento da laringe e das cordas vocais."
          },
          {
            question: "Qual hormônio é responsável pelo início da puberdade?",
            options: ["Insulina", "Testosterona", "Estrogênio", "GnRH (hormônio liberador de gonadotrofina)"],
            correct: 3,
            explanation: "O GnRH é liberado pelo hipotálamo e estimula a hipófise a produzir hormônios que ativam os ovários e testículos.",
            funFact: "O GnRH age como o 'sinal de partida' do desenvolvimento da puberdade."
          },
          {
            question: "Qual dessas glândulas está localizada no cérebro e regula o sono?",
            options: ["Tireoide", "Hipófise", "Pineal", "Paratireoide"],
            correct: 2,
            explanation: "A glândula pineal produz melatonina, que regula o ciclo do sono e vigília.",
            funFact: "Dormir no escuro total ajuda a glândula pineal a produzir mais melatonina!"
          },
          {
            question: "O que fazem as glândulas sudoríparas?",
            options: ["Produzem saliva", "Produzem hormônios sexuais", "Produzem leite materno", "Produzem suor para controlar a temperatura"],
            correct: 3,
            explanation: "As glândulas sudoríparas produzem suor, que ajuda a controlar a temperatura corporal e eliminar toxinas.",
            funFact: "As pessoas têm entre 2 e 4 milhões de glândulas sudoríparas!"
          },
          {
            question: "Qual glândula ajuda a regular o cálcio no corpo?",
            options: ["Pineal", "Paratireoide", "Suprarrenal", "Timo"],
            correct: 1,
            explanation: "A paratireoide produz hormônios que ajudam a controlar os níveis de cálcio no sangue e nos ossos.",
            funFact: "Apesar de pequenas, as paratireoides são essenciais para o funcionamento muscular e nervoso!"
          },
          {
            question: "Qual desses alimentos é considerado um construtor do corpo?",
            options: ["Arroz", "Óleo", "Frango", "Refrigerante"],
            correct: 2,
            explanation: "Alimentos construtores, como o frango, fornecem proteínas que ajudam na formação dos músculos e tecidos.",
            funFact: "As proteínas são compostas por aminoácidos, os tijolos do nosso corpo!"
          },
          {
            question: "Qual vitamina ajuda na coagulação do sangue?",
            options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina K"],
            correct: 3,
            explanation: "A vitamina K é essencial para a coagulação do sangue, evitando sangramentos excessivos.",
            funFact: "Ela é abundante em vegetais verde-escuros, como espinafre e couve!"
          },
          {
            question: "Qual mineral ajuda a fortalecer ossos e dentes?",
            options: ["Ferro", "Sódio", "Cálcio", "Zinco"],
            correct: 2,
            explanation: "O cálcio é essencial para a formação e manutenção dos ossos e dentes.",
            funFact: "O leite é uma das principais fontes de cálcio!"
          },
          {
            question: "Como a vacina protege nosso corpo?",
            options: ["Matando os vírus diretamente", "Aumentando a temperatura do corpo", "Estimulando a produção de anticorpos", "Evaporando os germes"],
            correct: 2,
            explanation: "A vacina contém partes enfraquecidas de vírus ou bactérias, que ensinam o corpo a se defender produzindo anticorpos.",
            funFact: "A vacina contra a varíola foi a primeira criada, por Edward Jenner, em 1796!"
          },
          {
            question: "O que são anticorpos?",
            options: ["Pequenas células que causam doenças", "Substâncias produzidas por vírus", "Defesas naturais do corpo contra germes", "Vitaminas do corpo humano"],
            correct: 2,
            explanation: "Anticorpos são proteínas produzidas pelo sistema imunológico para combater invasores como vírus e bactérias.",
            funFact: "Eles funcionam como 'soldadinhos' que identificam e eliminam os invasores do nosso corpo!"
          },
          {
            question: "Qual dessas doenças pode ser prevenida com vacina?",
            options: ["Gripe", "Dor de cabeça", "Alergia", "Cárie"],
            correct: 0,
            explanation: "A gripe é causada por um vírus e pode ser prevenida com a vacina da gripe.",
            funFact: "As vacinas são atualizadas anualmente por causa das mutações do vírus da gripe!"
          },
          {
            question: "O que deve ser feito ao encontrar uma pessoa afogada?",
            options: ["Esperar ela se levantar", "Puxar pela roupa com força", "Retirá-la da água e chamar ajuda imediatamente", "Sacudir a pessoa para ela acordar"],
            correct: 2,
            explanation: "A primeira ação é retirar a pessoa da água com segurança, iniciar respiração se necessário e chamar o socorro.",
            funFact: "Nunca entre em água perigosa sozinho para tentar salvar alguém — chame um adulto ou os bombeiros."
          },
          {
            question: "Como evitar acidentes com crianças de 0 a 5 anos?",
            options: ["Deixar objetos pequenos ao alcance", "Evitar supervisão constante", "Manter produtos perigosos fora do alcance", "Permitir que brinquem na cozinha"],
            correct: 2,
            explanation: "Crianças pequenas exploram o mundo com as mãos e boca, por isso produtos tóxicos e objetos pequenos devem estar fora do alcance.",
            funFact: "Muitas intoxicações acontecem por produtos de limpeza guardados em garrafas de refrigerante."
          },
          {
            question: "O que fazer se alguém desmaiar?",
            options: ["Sacudir a pessoa", "Oferecer comida rapidamente", "Deitá-la com as pernas elevadas e chamar ajuda", "Dar um susto para acordar"],
            correct: 2,
            explanation: "O ideal é deitar a pessoa com as pernas elevadas para melhorar a circulação e buscar ajuda médica.",
            funFact: "Desmaios são causados por falta de sangue momentânea no cérebro e podem acontecer por calor, susto ou jejum."
          },
          {
            question: "Em que ano foi inventada a vacina e por quem?",
            options: ["1790, por Edward Jenner", "1800, por Louis Pasteur", "1750, por Alexander Fleming", "1796, por Robert Koch"],
            correct: 0,
            explanation: "De acordo com a apostila, a vacina foi inventada em 1790 por um médico inglês chamado Edward Jenner, que usou o vírus da varíola bovina para proteger contra a varíola humana.",
            funFact: "Edward Jenner é considerado o 'pai da imunologia' e sua descoberta salvou milhões de vidas ao longo da história."
        }
    ]
}
};

// Estado do jogo
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Elementos do DOM
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextButton = document.getElementById('nextButton');
const explanationContainer = document.getElementById('explanationContainer');
const explanationText = document.getElementById('explanationText');
const funFactText = document.getElementById('funFactText');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('resultMessage');
const questionModal = document.getElementById('quizContainer'); 
const resultModal = document.getElementById('resultContainer');   
const restartButton = document.getElementById('restartButton');
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');

// Inicia o quiz
function startQuiz(quizType = 'historia') {
    // Esconde todos os elementos primeiro
    const startScreen = document.getElementById('startScreen');
    const gameIntro = document.querySelector('.game-intro');
    const gameBoard = document.querySelector('.game-board');
    const stars = document.querySelector('.stars');
    
    // Oculta os elementos da tela inicial com transição suave
    if (startScreen) {
        startScreen.style.opacity = '0';
        setTimeout(() => {
            startScreen.style.display = 'none';
        }, 200);
    }
    
    if (gameIntro) {
        gameIntro.style.opacity = '0';
        setTimeout(() => {
            gameIntro.style.display = 'none';
        }, 200);
    }
    
    if (gameBoard) {
        gameBoard.style.opacity = '0';
        setTimeout(() => {
            gameBoard.style.display = 'none';
        }, 200);
    }
    
    // Garante que o fundo de estrelas fique atrás do quiz
    if (stars) {
        stars.style.zIndex = '-1';
    }
    
    // Previne rolagem da página de fundo
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Reseta o estado do jogo
    currentPath = quizType;
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    // Limpa qualquer conteúdo anterior
    if (optionsContainer) optionsContainer.innerHTML = '';
    if (explanationContainer) explanationContainer.style.display = 'none';
    if (nextButton) nextButton.style.display = 'none';
    
    // Mostra o container do quiz
    if (questionModal) {
        questionModal.style.display = 'block';
        // Rola para o topo do quiz
        questionModal.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Atualiza o título do quiz
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) quizTitle.textContent = gameData[currentPath]?.title || 'Quiz';
    
    // Atualiza o contador de perguntas
    updateQuestionCounter();
    
    // Mostra a primeira pergunta
    showQuestion();
}

// Função para fechar todos os modais e voltar para a tela inicial
function closeAllModals() {
    // Esconde os containers de quiz e resultados
    questionModal.style.display = 'none';
    resultModal.style.display = 'none';
    
    // Mostra a tela inicial e o game board
    document.getElementById('startScreen').style.display = 'block';
    document.querySelector('.game-intro').style.display = 'block';
    document.querySelector('.game-board').style.display = 'block';
    
    // Limpa qualquer estado do quiz
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
}

// Elementos de navegação
const closeQuizBtn = document.getElementById('closeQuizBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');
const homeButton = document.getElementById('homeButton');
const chooseQuizButton = document.getElementById('chooseQuizButton');

// Função para fechar todos os modais e restaurar o estado inicial
function closeAllModals() {
    // Recarrega a página para garantir que tudo volte ao estado inicial
    // Usamos um pequeno atraso para permitir que a animação de clique seja concluída
    setTimeout(() => {
        window.location.href = window.location.pathname;
    }, 150);
}

// Função para voltar para a tela inicial
function goToHome() {
    closeAllModals();
    // Rola para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para atualizar o contador de perguntas
function updateQuestionCounter() {
    if (questionNumber && totalQuestions && gameData[currentPath]?.questions) {
        questionNumber.textContent = currentQuestionIndex + 1;
        totalQuestions.textContent = gameData[currentPath].questions.length;
    }
}

// Função para reiniciar o quiz atual
function restartCurrentQuiz() {
    // Esconde o modal de resultados se estiver visível
    if (resultModal) {
        resultModal.style.display = 'none';
    }
    
    // Reseta o estado do quiz
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    // Limpa os estilos das opções de resposta
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
        button.style.pointerEvents = 'auto';
    });
    
    // Limpa a explicação
    if (explanationContainer) {
        explanationContainer.style.display = 'none';
    }
    
    // Esconde o botão de próxima pergunta
    if (nextButton) {
        nextButton.style.display = 'none';
    }
    
    // Mostra a primeira pergunta
    showQuestion();
    
    // Rola para o topo do quiz
    if (questionModal) {
        questionModal.scrollTo(0, 0);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicia o quiz quando um botão de iniciar é clicado
    document.querySelectorAll('.start-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const quizType = e.target.dataset.path;
            startQuiz(quizType);
        });
    });

    // Botão de próxima pergunta
    nextButton.addEventListener('click', nextQuestion);

    // Botão de reiniciar quiz
    restartButton.addEventListener('click', () => {
        closeAllModals();
        startQuiz();
    });

    // Fecha os modais ao clicar no botão de fechar
    document.querySelectorAll('.close-modal-btn').forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Fecha os modais ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === questionModal || e.target === resultModal) {
            closeAllModals();
        }
    });
    
    // Fecha o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Event listeners para os botões de navegação
    if (closeQuizBtn) {
        closeQuizBtn.addEventListener('click', closeAllModals);
    }
    
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', restartCurrentQuiz);
    }
    
    if (homeButton) {
        homeButton.addEventListener('click', goToHome);
    }
    
    if (chooseQuizButton) {
        chooseQuizButton.addEventListener('click', () => {
            closeAllModals();
            document.getElementById('startScreen').style.display = 'block';
            document.querySelector('.game-intro').style.display = 'block';
            document.querySelector('.game-board').style.display = 'block';
        });
    }
});

// Função para criar efeito de confete
function createConfetti() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    const container = document.getElementById('quizContainer');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        container.appendChild(confetti);
        
        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Adiciona a animação de queda
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(calc(100vh + 20px)) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para mostrar a tela de resultados
function showResults() {
    const totalQuestions = gameData[currentPath].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Atualiza a pontuação
    document.getElementById('score').textContent = `${score}/${totalQuestions}`;
    
    // Define a mensagem com base na pontuação
    let message = '';
    let emoji = '';
    
    if (percentage >= 80) {
        message = 'Excelente! Você é um verdadeiro especialista!';
        emoji = '🏆';
        createConfetti();
    } else if (percentage >= 60) {
        message = 'Muito bom! Continue assim!';
        emoji = '🌟';
    } else if (percentage >= 40) {
        message = 'Bom trabalho! Você está no caminho certo!';
        emoji = '✨';
    } else {
        message = 'Continue praticando! Você pode melhorar!';
        emoji = '💪';
    }
    
    document.getElementById('resultMessage').innerHTML = `${emoji} ${message} ${emoji}`;
    
    // Esconde o quiz e mostra os resultados
    questionModal.style.display = 'none';
    resultModal.style.display = 'block';
    
    // Adiciona animação ao container de resultados
    resultModal.style.animation = 'bounceIn 0.8s';
    
    // Adiciona estilos de animação
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            80% { transform: scale(0.9); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Mostra a pergunta atual
function showQuestion() {
    const questionData = gameData[currentPath].questions[currentQuestionIndex];
    
    // Atualiza o contador de perguntas no cabeçalho
    updateQuestionCounter();
    
    // Atualiza o contador de perguntas no modal
    if (questionNumber) questionNumber.textContent = currentQuestionIndex + 1;
    if (totalQuestions) totalQuestions.textContent = gameData[currentPath].questions.length;
    
    // Atualiza o título do quiz
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) quizTitle.textContent = gameData[currentPath]?.title || 'Quiz';
    
    // Atualiza o texto da pergunta
    if (questionText) questionText.textContent = questionData.question;
    
    // Limpa as opções anteriores
    if (optionsContainer) optionsContainer.innerHTML = '';
    
    // Configura o botão de próxima pergunta
    if (nextButton) {
        nextButton.style.display = 'none';
        nextButton.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
    }
    
    // Esconde a explicação
    if (explanationContainer) explanationContainer.style.display = 'none';
    
    // Garante que os botões de navegação estejam visíveis
    const quizHeader = document.querySelector('.quiz-header');
    if (quizHeader) {
        const navButtons = `
            <div class="quiz-header-top">
                <button id="closeQuizBtn" class="quiz-nav-btn" title="Fechar Quiz">
                    <i class="fas fa-times"></i>
                </button>
                <div class="question-counter">
                    <span id="questionNumber">${currentQuestionIndex + 1}</span> / <span id="totalQuestions">${gameData[currentPath].questions.length}</span>
                </div>
                <button id="restartQuizBtn" class="quiz-nav-btn" title="Recomeçar Quiz">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        `;
        quizHeader.innerHTML = navButtons;
        
        // Reconfigura os event listeners dos botões
        const closeBtn = document.getElementById('closeQuizBtn');
        const restartBtn = document.getElementById('restartQuizBtn');
        
        if (closeBtn) closeBtn.addEventListener('click', closeAllModals);
        if (restartBtn) restartBtn.addEventListener('click', restartCurrentQuiz);
    }
    
    // Adiciona as opções de resposta
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => selectOption(button, index);
        optionsContainer.appendChild(button);
    });
    
    // Rola para o topo do modal
    questionModal.scrollTo(0, 0);
}

// Seleciona uma opção
function selectOption(selectedButton, selectedIndex) {
    // Desabilita todos os botões
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none';
    });

    const questionData = gameData[currentPath].questions[currentQuestionIndex];
    const isCorrect = selectedIndex === questionData.correct;

    // Adiciona classe de resposta correta/incorreta
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        
        // Mostra apenas a mensagem de acerto
        if (explanationContainer) {
            explanationContainer.innerHTML = `
                <div class="feedback-content">
                    <h3 style="color: #2e7d32; margin-top: 0; text-align: center;">
                        <i class="fas fa-check-circle"></i>
                        Parabéns! Você acertou!
                    </h3>
                </div>
            `;
            explanationContainer.style.display = 'block';
        }
        
        // Avança automaticamente para a próxima pergunta após 1,5 segundos
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        selectedButton.classList.add('incorrect');
        // Mostra a resposta correta
        buttons[questionData.correct].classList.add('correct');
        
        // Mostra o feedback completo para respostas erradas
        if (explanationContainer) {
            explanationContainer.innerHTML = `
                <div class="feedback-content">
                    <h3 style="color: #c62828; margin-top: 0; text-align: center; margin-bottom: 15px;">
                        <i class="fas fa-times-circle"></i>
                        Resposta Incorreta
                    </h3>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                        <p style="margin: 0 0 10px 0; font-weight: 500;">${questionData.explanation}</p>
                        <p class="fun-fact" style="margin: 0; font-style: italic; color: #6c757d;">
                            <i class="fas fa-lightbulb" style="color: #ffc107;"></i> ${questionData.funFact}
                        </p>
                    </div>
                    <button id="nextQuestionBtn" class="next-btn" style="width: 100%; margin-top: 10px;">
                        Próxima Pergunta <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
            explanationContainer.style.display = 'block';
            
            // Adiciona o event listener ao botão de próxima pergunta
            const nextBtn = document.getElementById('nextQuestionBtn');
            if (nextBtn) {
                nextBtn.addEventListener('click', nextQuestion);
            }
        }
        
        // Rola suavemente até o final da pergunta
        if (explanationContainer) {
            explanationContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Vai para a próxima pergunta ou mostra o resultado
function nextQuestion() {
    // Verifica se existe uma próxima pergunta
    if (currentQuestionIndex + 1 < gameData[currentPath].questions.length) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Se for a última pergunta, mostra os resultados
        showResults();
    }
}

// Mostra o resultado do quiz
function showResults() {
    const totalQuestions = gameData[currentPath].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Define o ícone e mensagem com base na pontuação
    let resultIcon, resultMessage;
    
    if (percentage >= 90) {
        resultIcon = '🏆';
        resultMessage = 'Excelente! Você é um verdadeiro especialista em História do Brasil!';
    } else if (percentage >= 70) {
        resultIcon = '🎉';
        resultMessage = 'Muito bom! Continue assim e logo estará dominando todos os assuntos!';
    } else if (percentage >= 50) {
        resultIcon = '👍';
        resultMessage = 'Bom trabalho! Com um pouco mais de estudo você vai longe!';
    } else {
        resultIcon = '🤔';
        resultMessage = 'Não desanime! Reveja o conteúdo e tente novamente para melhorar seu desempenho!';
    }
    
    // Atualiza o conteúdo do modal de resultado
    const resultText = `
        <div class="result-header">
            <span class="result-icon">${resultIcon}</span>
            <h2>Quiz Concluído!</h2>
        </div>
        <div class="result-score">
            <div class="score-circle">
                <span class="score-percent">${percentage}%</span>
                <div class="score-circle-fill" style="--percentage: ${percentage}%;"></div>
            </div>
            <p class="score-text">${score} de ${totalQuestions} acertos</p>
        </div>
        <div class="result-message">
            <p>${resultMessage}</p>
        </div>
    `;
    
    document.getElementById('resultText').innerHTML = resultText;
    questionModal.style.display = 'none';
    resultModal.style.display = 'flex';
    
    // Rola para o topo do modal de resultado
    resultModal.scrollTo(0, 0);
}

// Close modal
function closeModal() {
    questionModal.style.display = 'none';
}

// Add tooltip functionality
function addTooltip(element, text) {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = 'ⓘ<span class="tooltiptext">' + text + '</span>';
    element.appendChild(tooltip);
}

// Add tooltips to elements with data-tooltip attribute
document.querySelectorAll('[data-tooltip]').forEach(element => {
    addTooltip(element, element.dataset.tooltip);
});