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
                question: "Qual glândula é conhecida como a 'glândula mestra' do corpo humano?",
                options: [
                    "Tireoide",
                    "Hipófise",
                    "Suprarrenal",
                    "Pâncreas"
                ],
                correct: 1,
                explanation: "A hipófise é chamada de 'glândula mestra' porque produz hormônios que controlam outras glândulas do corpo, como a tireoide, as suprarrenais e as gônadas.",
                funFact: "Apesar de ter apenas o tamanho de uma ervilha, a hipófise é essencial para o crescimento e o metabolismo!"
            },
            // Sistema Glandular
            {
                question: "Qual dessas glândulas produz insulina?",
                options: [
                    "Tireoide",
                    "Hipófise",
                    "Pâncreas",
                    "Suprarrenal"
                ],
                correct: 2,
                explanation: "O pâncreas produz insulina, um hormônio que regula os níveis de glicose (açúcar) no sangue, permitindo que as células absorvam a glicose para obter energia.",
                funFact: "A falta de insulina ou a resistência à sua ação causa o diabetes, uma doença que afeta como o corpo processa o açúcar no sangue."
            },
            // Nutrição
            {
                question: "Qual desses nutrientes é a principal fonte de energia para o corpo?",
                options: [
                    "Proteínas",
                    "Carboidratos",
                    "Gorduras",
                    "Vitaminas"
                ],
                correct: 1,
                explanation: "Os carboidratos são a principal fonte de energia do corpo, fornecendo glicose, que é o combustível preferido do cérebro e dos músculos.",
                funFact: "O cérebro consome cerca de 20% da energia fornecida pelos carboidratos, mesmo representando apenas 2% do peso corporal!"
            },
            // Doenças e Defesas
            {
                question: "Qual dessas doenças é causada por vírus?",
                options: [
                    "Tuberculose",
                    "Gripe",
                    "Cólera",
                    "Tétano"
                ],
                correct: 1,
                explanation: "A gripe é causada pelo vírus influenza, enquanto a tuberculose e o tétano são causados por bactérias, e a cólera é causada por uma bactéria chamada Vibrio cholerae.",
                funFact: "Os vírus da gripe sofrem mutações frequentes, por isso as vacinas precisam ser atualizadas anualmente para proteger contra as cepas em circulação!"
            },
            // Primeiros Socorros
            {
                question: "O que fazer em caso de queimadura de primeiro grau (leve)?",
                options: [
                    "Passar manteiga ou pasta de dente na área queimada",
                    "Aplicar gelo diretamente na pele queimada",
                    "Lavar com água corrente fria por 10-15 minutos",
                    "Estourar as bolhas que se formarem"
                ],
                correct: 2,
                explanation: "Em queimaduras leves, o correto é lavar com água corrente fria por 10-15 minutos para resfriar a área e aliviar a dor. Nunca se deve aplicar manteiga, pasta de dente ou gelo diretamente, nem estourar bolhas.",
                funFact: "As queimaduras de primeiro grau afetam apenas a epiderme (camada mais superficial da pele), causando vermelhidão e dor, mas sem formar bolhas."
            },
            // Vitaminas e Nutrientes
            {
                question: "Qual vitamina é produzida pelo nosso corpo quando nos expomos ao sol?",
                options: [
                    "Vitamina A",
                    "Vitamina C",
                    "Vitamina D",
                    "Vitamina K"
                ],
                correct: 2,
                explanation: "A vitamina D é sintetizada na pele quando nos expomos à luz solar. Ela é essencial para a absorção de cálcio e fósforo, importantes para a saúde dos ossos e dentes.",
                funFact: "Apenas 10-15 minutos de exposição solar, 2-3 vezes por semana, são suficientes para produzir a quantidade necessária de vitamina D!"
            },
            // Alimentos e Nutrientes
            {
                question: "Qual desses alimentos é uma boa fonte de ferro?",
                options: [
                    "Maçã",
                    "Cenoura",
                    "Feijão",
                    "Alface"
                ],
                correct: 2,
                explanation: "O feijão é uma excelente fonte de ferro não-heme, um mineral essencial para a produção de hemoglobina, que transporta oxigênio no sangue. As carnes são fontes de ferro heme, que é mais facilmente absorvido.",
                funFact: "A vitamina C aumenta a absorção do ferro dos vegetais. Por isso, é recomendado consumir uma fruta cítrica (como laranja ou acerola) junto com as refeições!"
            },
            // Primeiros Socorros
            {
                question: "O que fazer em caso de sangramento nasal?",
                options: [
                    "Deitar de barriga para cima",
                    "Inclinar a cabeça para trás",
                    "Sentar e inclinar a cabeça levemente para frente, apertando o nariz",
                    "Assoprar com força para limpar o nariz"
                ],
                correct: 2,
                explanation: "Em caso de sangramento nasal, deve-se sentar e inclinar a cabeça levemente para frente, apertando as narinas por 5-10 minutos. Inclinar a cabeça para trás pode fazer o sangue escorrer para a garganta, causando engasgo.",
                funFact: "O sangramento nasal é comum em crianças e geralmente não é grave. A maioria dos casos para sozinha em poucos minutos!"
            },
            // Sistema Endócrino
            {
                question: "Qual dessas glândulas produz o hormônio do crescimento?",
                options: [
                    "Tireoide",
                    "Hipófise",
                    "Pineal",
                    "Suprarrenal"
                ],
                correct: 1,
                explanation: "A hipófise anterior produz o hormônio do crescimento (GH), que estimula o crescimento dos ossos e tecidos do corpo. A deficiência desse hormônio pode causar nanismo, enquanto o excesso pode levar ao gigantismo.",
                funFact: "O hormônio do crescimento é liberado principalmente durante o sono profundo, destacando a importância de uma boa noite de descanso para o crescimento adequado das crianças!"
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
const feedback = document.getElementById('feedback');
const questionModal = document.getElementById('questionModal');
const resultModal = document.getElementById('resultModal');
const restartButton = document.getElementById('restartButton');
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');

// Inicia o quiz
function startQuiz(quizType = 'historia') {
    currentPath = quizType;
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    showQuestion();
    questionModal.style.display = 'flex';
}

// Função para fechar todos os modais
function closeAllModals() {
    questionModal.style.display = 'none';
    resultModal.style.display = 'none';
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
});

// Mostra a pergunta atual
function showQuestion() {
    const questionData = gameData[currentPath].questions[currentQuestionIndex];
    
    // Atualiza o contador de perguntas
    questionNumber.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = gameData[currentPath].questions.length;
    
    // Atualiza o título do quiz
    document.querySelector('.modal-header h2').textContent = gameData[currentPath].title;
    
    // Atualiza o texto da pergunta
    questionText.textContent = questionData.question;
    
    // Limpa as opções anteriores
    optionsContainer.innerHTML = '';
    
    // Esconde o feedback e o botão de próxima pergunta
    feedback.style.display = 'none';
    nextButton.style.display = 'none';
    
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
    
    // Mostra o modal de pergunta
    questionModal.style.display = 'flex';
    
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
        feedback.innerHTML = `
            <h3 style="color: #2e7d32;">
                <i class="fas fa-check-circle"></i>
                Parabéns! Você acertou!
            </h3>
        `;
        
        feedback.style.display = 'block';
        
        // Avança automaticamente para a próxima pergunta após 1,5 segundos
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        selectedButton.classList.add('incorrect');
        // Mostra a resposta correta
        buttons[questionData.correct].classList.add('correct');
        
        // Mostra o feedback completo para respostas erradas
        feedback.innerHTML = `
            <h3 style="color: #c62828;">
                <i class="fas fa-times-circle"></i>
                Resposta Incorreta
            </h3>
            <div class="feedback-content">
                <p>${questionData.explanation}</p>
                <p class="fun-fact"><i class="fas fa-lightbulb"></i> ${questionData.funFact}</p>
            </div>
        `;
        
        feedback.style.display = 'block';
        nextButton.style.display = 'block';
        
        // Rola suavemente até o feedback
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Vai para a próxima pergunta ou mostra o resultado
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < gameData[currentPath].questions.length) {
        showQuestion();
    } else {
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
