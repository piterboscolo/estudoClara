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
    },
    geografia: {
        title: "Quiz de Geografia",
        questions: [
            // Rios brasileiros
            {
                question: "Qual é o rio mais extenso do Brasil?",
                options: ["Rio Amazonas", "Rio São Francisco", "Rio Paraná", "Rio Tocantins"],
                correct: 0,
                explanation: "O Rio Amazonas é o mais extenso do Brasil e do mundo, com aproximadamente 6.992 km de extensão.",
                funFact: "O Rio Amazonas despeja no oceano cerca de 209 milhões de litros de água por segundo!"
            },
            {
                question: "Complete a frase: O Rio São Francisco nasce em ______ e deságua no Oceano ______.",
                options: [
                    "Bahia, Atlântico",
                    "Minas Gerais, Pacífico",
                    "Minas Gerais, Atlântico",
                    "Bahia, Pacífico"
                ],
                correct: 2,
                explanation: "O Velho Chico nasce na Serra da Canastra, em Minas Gerais, e percorre 2.830 km até desaguar no Oceano Atlântico.",
                funFact: "O Rio São Francisco é conhecido como 'rio da integração nacional' por cortar cinco estados brasileiros!"
            },
            // Partes de um rio
            {
                question: "Qual parte do rio é conhecida como sua nascente?",
                options: [
                    "Onde o rio encontra o mar",
                    "O ponto mais largo do rio",
                    "O local onde o rio começa",
                    "O trecho mais profundo do rio"
                ],
                correct: 2,
                explanation: "A nascente é o local onde o rio tem seu início, geralmente em áreas de maior altitude.",
                funFact: "Algumas nascentes do Brasil têm águas termais que podem chegar a 40°C!"
            },
            // Bacias hidrográficas
            {
                question: "Qual é a maior bacia hidrográfica do Brasil?",
                options: [
                    "Bacia do Rio São Francisco",
                    "Bacia Amazônica",
                    "Bacia do Rio Paraná",
                    "Bacia do Rio Tocantins"
                ],
                correct: 1,
                explanation: "A Bacia Amazônica é a maior do Brasil e do mundo, cobrindo cerca de 7 milhões de km².",
                funFact: "A vazão média da Bacia Amazônica é maior que a soma das vazões dos 6 maiores rios do mundo juntos!"
            },
            // Climas brasileiros
            {
                question: "O clima tropical predomina no Brasil por causa da localização do país na zona intertropical.",
                options: [
                    "Verdadeiro",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadeiro. O Brasil está localizado quase que inteiramente na zona intertropical, onde predominam climas quentes.",
                funFact: "O Brasil é o único país cortado pelo Equador e pelo Trópico de Capricórnio!"
            },
            // Vegetações brasileiras
            {
                question: "Qual destes biomas é conhecido como 'Savana brasileira' e possui árvores de troncos retorcidos?",
                options: [
                    "Mata Atlântica",
                    "Cerrado",
                    "Caatinga",
                    "Pantanal"
                ],
                correct: 1,
                explanation: "O Cerrado é conhecido como a 'Savana brasileira' e possui árvores de troncos retorcidos, adaptadas ao clima com períodos de seca.",
                funFact: "O Cerrado é considerado a savana mais rica em biodiversidade do mundo, abrigando cerca de 5% de todas as espécies do planeta!"
            },
            // Região Norte
            {
                question: "Qual é a capital do Amazonas?",
                options: ["Belém", "Manaus", "Porto Velho", "Rio Branco"],
                correct: 1,
                explanation: "Manaus é a capital do Amazonas e a maior cidade da região Norte do Brasil.",
                funFact: "Manaus é chamada de 'Paris dos Trópicos' por seu período áureo durante o ciclo da borracha!"
            },
            // Parques nacionais
            {
                question: "Qual desses parques nacionais NÃO está na Região Norte?",
                options: [
                    "Parque Nacional do Jaú",
                    "Parque Nacional da Chapada dos Veadeiros",
                    "Parque Nacional do Monte Roraima",
                    "Parque Nacional da Amazônia"
                ],
                correct: 1,
                explanation: "O Parque Nacional da Chapada dos Veadeiros está localizado em Goiás, na região Centro-Oeste do Brasil.",
                funFact: "O Parque Nacional do Jaú é o maior parque de floresta tropical do mundo, com 2.367.333 hectares!"
            },
            // Diferença entre clima e tempo
            {
                question: "Qual é a diferença entre clima e tempo?",
                options: [
                    "Clima é o que acontece agora e tempo é a previsão para a semana",
                    "Clima é o comportamento médio da atmosfera em longo prazo, tempo é o estado momentâneo",
                    "Tempo é o que medimos em anos e clima em dias",
                    "Não há diferença, os termos são sinônimos"
                ],
                correct: 1,
                explanation: "O clima refere-se ao comportamento médio da atmosfera em um local durante um longo período (pelo menos 30 anos), enquanto o tempo é o estado momentâneo da atmosfera em um determinado local e momento.",
                funFact: "Você sabia que o Brasil tem todos os tipos de clima do mundo, exceto o clima desértico e o clima polar?"
            },
            // Rios de planalto e planície
            {
                question: "Qual característica é típica dos rios de planalto?",
                options: [
                    "Pouco aproveitamento para geração de energia",
                    "Pouco desnível ao longo do curso",
                    "Grande potencial para navegação",
                    "Grande desnível e quedas d'água"
                ],
                correct: 3,
                explanation: "Os rios de planalto possuem desníveis acentuados e quedas d'água, sendo ideais para geração de energia hidrelétrica.",
                funFact: "A Usina de Itaipu, no Rio Paraná, é a segunda maior usina hidrelétrica do mundo em geração de energia!"
            },
            // Regime dos rios - 1
            {
                question: "O que caracteriza um rio perene?",
                options: [
                    "Secam completamente em determinadas épocas do ano",
                    "Mantêm água durante todo o ano, mesmo na estação seca",
                    "Só possuem água durante e logo após as chuvas",
                    "Mudam completamente de curso ao longo do ano"
                ],
                correct: 1,
                explanation: "Rios perenes mantêm água durante todo o ano, mesmo na estação seca, pois são alimentados por lençóis freáticos ou derretimento de geleiras.",
                funFact: "O Rio Amazonas é um exemplo de rio perene, mantendo seu volume durante todo o ano!"
            },
            // Regime dos rios - 2
            {
                question: "O que significa o período de vazante de um rio?",
                options: [
                    "Momento em que o rio atinge seu nível mais baixo",
                    "Período em que o rio transborda suas margens",
                    "Quando o rio está em seu nível normal",
                    "Momento em que o rio seca completamente"
                ],
                correct: 0,
                explanation: "A vazante é o período em que o rio atinge seu nível mais baixo, geralmente durante a estação seca, quando há menor volume de chuvas.",
                funFact: "No Rio São Francisco, a diferença entre o período de cheia e vazante pode chegar a vários metros de altura!"
            },
            // Regime dos rios - 3
            {
                question: "O que caracteriza um rio de regime fluvial?",
                options: [
                    "Seu volume é determinado pelo derretimento de geleiras",
                    "Sua vazão é controlada por chuvas em sua bacia hidrográfica",
                    "É alimentado principalmente por águas subterrâneas",
                    "Seca completamente em determinadas épocas do ano"
                ],
                correct: 1,
                explanation: "Um rio de regime fluvial tem sua vazão determinada principalmente pelas chuvas que ocorrem em sua bacia hidrográfica, apresentando períodos de cheia e vazante conforme o regime de chuvas da região.",
                funFact: "O Rio Amazonas tem um regime fluvial complexo, com diferentes períodos de cheia ao longo de seu curso!"
            },
            // Regime dos rios - 4
            {
                question: "O que são rios temporários ou intermitentes?",
                options: [
                    "Rios que mudam de nome ao longo do ano",
                    "Rios que secam completamente em determinadas épocas",
                    "Rios que correm apenas em direção ao mar",
                    "Rios que não possuem nascente definida"
                ],
                correct: 1,
                explanation: "Rios temporários ou intermitentes são aqueles que secam completamente em determinadas épocas do ano, geralmente durante a estação seca, voltando a ter água apenas na estação chuvosa.",
                funFact: "Muitos rios do sertão nordestino são temporários, secando completamente na estação seca!"
            },
            // Regime dos rios - 5
            {
                question: "O que caracteriza o período de cheia de um rio?",
                options: [
                    "Quando o rio atinge seu menor volume de água",
                    "Momento em que o rio seca completamente",
                    "Período em que o rio atinge seu maior volume e transborda",
                    "Quando o rio muda de curso repentinamente"
                ],
                correct: 2,
                explanation: "O período de cheia ocorre quando o rio atinge seu maior volume de água, muitas vezes transbordando suas margens, geralmente na estação chuvosa ou durante o derretimento de geleiras.",
                funFact: "As cheias anuais do Rio Amazonas podem alagar uma área de até 100 km de largura em algumas regiões!"
            },
            // Clima Brasileiro - 1
            {
                question: "Qual característica define o clima equatorial no Brasil?",
                options: [
                    "Invernos frios com geadas frequentes",
                    "Temperaturas elevadas e chuvas bem distribuídas o ano todo",
                    "Longos períodos de estiagem e vegetação de caatinga",
                    "Verões quentes e invernos rigorosos com neve"
                ],
                correct: 1,
                explanation: "O clima equatorial é caracterizado por temperaturas elevadas (médias anuais entre 24°C e 27°C) e chuvas abundantes e bem distribuídas ao longo do ano, típico da região amazônica.",
                funFact: "Na Amazônia, a umidade do ar pode chegar a 90% e a diferença entre a temperatura mais alta e a mais baixa do ano é menor que a diferença entre o dia e a noite!"
            },
            // Clima Brasileiro - 2
            {
                question: "O clima tropical típico do Brasil central é caracterizado por:",
                options: [
                    "Duas estações bem definidas: inverno seco e verão chuvoso",
                    "Chuvas constantes durante todo o ano",
                    "Temperaturas abaixo de zero no inverno",
                    "Ausência total de chuvas no verão"
                ],
                correct: 0,
                explanation: "O clima tropical típico do Brasil central apresenta duas estações bem definidas: inverno seco (abril a setembro) e verão chuvoso (outubro a março), com temperaturas médias anuais entre 20°C e 28°C.",
                funFact: "O Cerrado, bioma típico do clima tropical, é considerado a savana mais rica em biodiversidade do mundo!"
            },
            // Clima Brasileiro - 3
            {
                question: "O clima tropical semiárido, encontrado no Nordeste brasileiro, é marcado por:",
                options: [
                    "Chuvas abundantes o ano todo",
                    "Longos períodos de estiagem e chuvas irregulares",
                    "Temperaturas baixas durante todo o ano",
                    "Nevascas frequentes no inverno"
                ],
                correct: 1,
                explanation: "O clima tropical semiárido apresenta longos períodos de seca (até 11 meses por ano), chuvas escassas e irregulares, e temperaturas elevadas durante todo o ano, geralmente acima de 26°C.",
                funFact: "O polígono das secas no Nordeste é maior que a área de muitos países europeus, como a França e a Espanha juntas!"
            },
            // Clima Brasileiro - 4
            {
                question: "O clima tropical úmido da costa brasileira se caracteriza por:",
                options: [
                    "Invernos muito frios com neve",
                    "Alta pluviosidade e pequena amplitude térmica anual",
                    "Ausência de chuvas durante o verão",
                    "Temperaturas abaixo de zero no inverno"
                ],
                correct: 1,
                explanation: "O clima tropical úmido da costa brasileira apresenta altos índices pluviométricos (acima de 1.500 mm/ano), pequena amplitude térmica anual (geralmente menos de 5°C) e temperaturas médias elevadas, acima de 22°C.",
                funFact: "A Mata Atlântica, que ocorre nesse clima, é um dos biomas mais ameaçados do mundo, restando menos de 13% de sua cobertura original!"
            },
            // Clima Brasileiro - 5
            {
                question: "O clima subtropical do sul do Brasil se diferencia dos outros climas brasileiros por:",
                options: [
                    "Apresentar as quatro estações do ano bem definidas",
                    "Ter apenas duas estações: verão e inverno",
                    "Não ter variação de temperatura ao longo do ano",
                    "Ter chuvas durante todo o ano sem estação seca"
                ],
                correct: 0,
                explanation: "O clima subtropical, típico da região Sul do Brasil, apresenta as quatro estações bem definidas, com verões quentes, invernos frios (com ocorrência de geadas), e chuvas bem distribuídas ao longo do ano, sem uma estação seca definida.",
                funFact: "Em algumas cidades serranas do Rio Grande do Sul e Santa Catarina, a temperatura pode chegar a -10°C no inverno, com ocorrência de neve em alguns anos!"
            },
            // Vegetação Brasileira - 1
            {
                question: "Qual característica NÃO está associada ao bioma da Mata Atlântica?",
                options: [
                    "Alta biodiversidade com muitas espécies endêmicas",
                    "Vegetação adaptada a longos períodos de seca",
                    "Floresta densa e perene",
                    "Ocorrência de manguezais em áreas costeiras"
                ],
                correct: 1,
                explanation: "A Mata Atlântica não é adaptada a longos períodos de seca. Pelo contrário, é um bioma úmido com chuvas bem distribuídas ao longo do ano e alta umidade do ar.",
                funFact: "Apesar de ter mais de 90% de sua área original desmatada, a Mata Atlântica ainda abriga cerca de 20 mil espécies de plantas, sendo 8 mil delas endêmicas!"
            },
            // Vegetação Brasileira - 2
            {
                question: "O que caracteriza a vegetação do Cerrado?",
                options: [
                    "Árvores altas e copadas com troncos retilíneos",
                    "Vegetação rasteira sem árvores",
                    "Árvores de troncos tortuosos e casca grossa",
                    "Florestas densas e úmidas"
                ],
                correct: 2,
                explanation: "O Cerrado é caracterizado por árvores de troncos tortuosos, casca grossa e raízes profundas, adaptadas ao solo ácido e pobre em nutrientes, além de longos períodos de seca.",
                funFact: "O Cerrado é considerado o berço das águas do Brasil, pois abriga as nascentes de importantes bacias hidrográficas como a do Rio São Francisco, Tocantins e Paraná!"
            },
            // Vegetação Brasileira - 3
            {
                question: "Qual característica é típica da Caatinga?",
                options: [
                    "Vegetação sempre verde e úmida",
                    "Plantas com folhas pequenas ou transformadas em espinhos",
                    "Árvores de grande porte com copas largas",
                    "Solo permanentemente encharcado"
                ],
                correct: 1,
                explanation: "A Caatinga apresenta vegetação adaptada à seca, com plantas que possuem folhas pequenas ou transformadas em espinhos para reduzir a perda de água, além de raízes profundas para buscar água no subsolo.",
                funFact: "Apesar do aspecto seco, a Caatinga abriga mais de 1.000 espécies de animais, sendo 44 delas ameaçadas de extinção, como a arara-azul-de-lear e o tatu-bola!"
            },
            // Vegetação Brasileira - 4
            {
                question: "O que caracteriza o bioma Pantanal?",
                options: [
                    "Vegetação exclusivamente aquática",
                    "Alternância entre períodos de cheia e seca",
                    "Ausência de árvores",
                    "Clima frio durante todo o ano"
                ],
                correct: 1,
                explanation: "O Pantanal é caracterizado pela alternância entre períodos de cheia (quando grandes áreas ficam alagadas) e seca, o que cria uma rica biodiversidade adaptada a essas mudanças sazonais.",
                funFact: "O Pantanal é considerado pela UNESCO como Patrimônio Natural Mundial e Reserva da Biosfera, abrigando a maior concentração de vida selvagem das Américas!"
            },
            // Vegetação Brasileira - 5
            {
                question: "O que é a Mata de Araucárias?",
                options: [
                    "Floresta de pinheiros típica do sul do Brasil",
                    "Vegetação rasteira do litoral",
                    "Floresta tropical úmida",
                    "Vegetação de áreas alagadas"
                ],
                correct: 0,
                explanation: "A Mata de Araucárias é uma formação florestal típica da região Sul do Brasil, dominada pelo pinheiro-do-paraná (Araucaria angustifolia), uma árvore de grande porte que pode atingir até 50 metros de altura.",
                funFact: "Apesar de ser um símbolo do Paraná, o pinheiro-do-paraná também ocorre naturalmente em partes de Santa Catarina, Rio Grande do Sul e até em pequenas áreas de São Paulo e Minas Gerais!"
            },
            // Região Norte - 1 (Clima)
            {
                question: "Qual é o tipo climático predominante na maior parte da Região Norte do Brasil?",
                options: [
                    "Clima semiárido",
                    "Clima equatorial úmido",
                    "Clima tropical de altitude",
                    "Clima subtropical"
                ],
                correct: 1,
                explanation: "A Região Norte possui clima predominantemente equatorial úmido, caracterizado por altas temperaturas (médias anuais entre 24°C e 28°C) e elevada umidade do ar durante todo o ano, com chuvas abundantes e bem distribuídas.",
                funFact: "Em algumas partes da Amazônia, a umidade do ar pode chegar a 90% e a diferença de temperatura entre o dia e a noite é maior que a diferença entre as estações do ano!"
            },
            // Região Norte - 2 (Vegetação)
            {
                question: "Qual destas NÃO é uma característica da Floresta Amazônica na Região Norte?",
                options: [
                    "Grande biodiversidade de espécies vegetais e animais",
                    "Vegetação adaptada a longos períodos de seca",
                    "Estratificação da vegetação em diferentes alturas",
                    "Presença de árvores de grande porte e cipós"
                ],
                correct: 1,
                explanation: "A Floresta Amazônica não é adaptada a longos períodos de seca. Pelo contrário, ela depende do clima úmido equatorial, com chuvas frequentes ao longo de todo o ano. A vegetação é perenifólia (sempre verde) e higrófila (adaptada à umidade).",
                funFact: "A Amazônia abriga cerca de 2.500 espécies de árvores (um terço de toda a madeira tropical do mundo) e mais de 30 mil espécies de plantas das 100 mil da América do Sul!"
            },
            // Região Norte - 3 (Atividade Econômica)
            {
                question: "Qual é a principal atividade econômica da Zona Franca de Manaus?",
                options: [
                    "Agricultura de exportação",
                    "Pecuária extensiva",
                    "Indústria de transformação",
                    "Extração de petróleo"
                ],
                correct: 2,
                explanation: "A Zona Franca de Manaus é um importante polo industrial do Norte do Brasil, concentrando indústrias de eletrônicos, motocicletas, produtos químicos e bens de informática. Foi criada em 1967 para promover o desenvolvimento econômico da região amazônica.",
                funFact: "A Zona Franca de Manaus é responsável por mais de 50% do PIB do Amazonas e gera mais de 500 mil empregos diretos e indiretos na região!"
            },
            // Região Norte - 4 (Agricultura)
            {
                question: "Qual destas culturas é tradicional na agricultura familiar da região Norte?",
                options: [
                    "Soja",
                    "Café",
                    "Mandioca",
                    "Trigo"
                ],
                correct: 2,
                explanation: "A mandioca é uma cultura tradicional na agricultura familiar da região Norte, sendo base da alimentação local na forma de farinha, tucupi, goma e outros derivados. É cultivada em pequenas propriedades usando técnicas tradicionais herdadas dos povos indígenas.",
                funFact: "O estado do Pará é o maior produtor de mandioca do Brasil, com uma produção que ultrapassa 4 milhões de toneladas por ano, grande parte proveniente da agricultura familiar!"
            },
            // Região Norte - 5 (Folclore)
            {
                question: "Qual destas festas populares é típica da região Norte do Brasil?",
                options: [
                    "Festa do Peão de Boiadeiro",
                    "Cirio de Nazaré e Festival de Parintins",
                    "Festa da Uva",
                    "Festa do Divino"
                ],
                correct: 1,
                explanation: "Tanto o Círio de Nazaré quanto o Festival de Parintins são importantes manifestações culturais do Norte. O Círio, em Belém do Pará, é uma grande festa religiosa em homenagem a Nossa Senhora de Nazaré, enquanto o Boi de Parintins é um espetáculo folclórico que ocorre no Amazonas, conhecido pela disputa entre os bois Garantido e Caprichoso, com apresentações de dança, música e alegorias gigantes.",
                funFact: "O Círio de Nazaré reúne cerca de 2 milhões de pessoas e é Patrimônio Cultural da Humanidade pela UNESCO, enquanto o Boi de Parintins, realizado em junho, atrai turistas do mundo todo para o Amazonas e é considerado o maior espetáculo ao ar livre do Brasil!"
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
    
    // Adiciona as opções de resposta ou campo de preenchimento
    if (questionData.type === 'fill') {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'fill-container';
        inputContainer.innerHTML = `
            <input type="text" id="fillAnswer" class="fill-input" placeholder="Digite sua resposta aqui...">
            <button id="submitFill" class="submit-btn">Enviar</button>
        `;
        optionsContainer.appendChild(inputContainer);
        
        const submitBtn = document.getElementById('submitFill');
        const fillInput = document.getElementById('fillAnswer');
        
        submitBtn.onclick = () => {
            const userAnswer = fillInput.value.trim();
            const correctAnswer = questionData.answer.toLowerCase();
            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            
            // Desabilita o input e o botão
            fillInput.disabled = true;
            submitBtn.disabled = true;
            
            // Mostra o feedback
            if (explanationContainer) {
                if (isCorrect) {
                    score++;
                    explanationContainer.innerHTML = `
                        <div class="feedback-content">
                            <h3 style="color: #2e7d32; margin-top: 0; text-align: center;">
                                <i class="fas fa-check-circle"></i>
                                Parabéns! Resposta correta!
                            </h3>
                            <p>${questionData.explanation}</p>
                            <p class="fun-fact">${questionData.funFact || ''}</p>
                        </div>
                    `;
                } else {
                    explanationContainer.innerHTML = `
                        <div class="feedback-content">
                            <h3 style="color: #d32f2f; margin-top: 0; text-align: center;">
                                <i class="fas fa-times-circle"></i>
                                Resposta incorreta
                            </h3>
                            <p>A resposta correta é: <strong>${questionData.answer}</strong></p>
                            <p>${questionData.explanation}</p>
                            <p class="fun-fact">${questionData.funFact || ''}</p>
                        </div>
                    `;
                }
                explanationContainer.style.display = 'block';
                nextButton.style.display = 'block';
            }
        };
        
        // Permite enviar com Enter
        fillInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        });
    } else {
        // Perguntas de múltipla escolha
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
    }
    
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