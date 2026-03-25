window.SETIF_DATA = {
  event: {
    name: "SETIF IFPR",
    campus: "IFPR Campus Paranavai",
    month: 10,
    day: 17,
    hour: 8,
    minute: 0,
    durationDays: 2,
    // Atualize estes campos quando a proxima edicao tiver data ou link oficial.
    registrationUrl: "submeter.html",
    about: {
      summary:
        "A SETIF e um evento academico do IFPR voltado a tecnologia da informacao, integracao institucional e divulgacao de atividades de ensino, pesquisa e extensao.",
      pillars: [
        "Programacao tecnico-academica com palestras e minicursos.",
        "Mostra de projetos desenvolvidos por estudantes e equipes do campus.",
        "Interacao entre comunidade interna, convidados e participantes externos."
      ],
      audience:
        "Estudantes, servidores, egressos, comunidade academica e participantes interessados nas atividades divulgadas pela SETIF."
    }
  },
  program: [
    {
      id: "p1",
      type: "palestra",
      dayOffset: 0,
      time: "19:00",
      duration: "50 min",
      title: "Inteligencia artificial no dia a dia do desenvolvimento",
      place: "Auditorio principal",
      speaker: "Convidado da area de desenvolvimento",
      description:
        "Discussao sobre uso responsavel de IA, produtividade e limites tecnicos em projetos reais."
    },
    {
      id: "p2",
      type: "palestra",
      dayOffset: 0,
      time: "20:15",
      duration: "45 min",
      title: "Trajetorias academicas e oportunidades na area de tecnologia",
      place: "Sala multiuso",
      speaker: "Convidado da area academica e profissional",
      description:
        "Conversa sobre formacao, experiencias de projeto e possibilidades de atuacao para estudantes da area."
    },
    {
      id: "p3",
      type: "palestra",
      dayOffset: 1,
      time: "09:00",
      duration: "50 min",
      title: "Dados, automacao e decisoes orientadas por metricas",
      place: "Laboratorio 02",
      speaker: "Equipe de analise aplicada",
      description:
        "Uma visao pratica sobre coleta, organizacao e leitura de dados para resolver problemas do campus."
    },
    {
      id: "p4",
      type: "palestra",
      dayOffset: 1,
      time: "10:30",
      duration: "45 min",
      title: "Seguranca digital para aplicacoes web modernas",
      place: "Auditorio principal",
      speaker: "Convidado da area de seguranca",
      description:
        "Boas praticas de autenticacao, protecao de dados e prevencao de falhas comuns em sistemas web."
    },
    {
      id: "m1",
      type: "minicurso",
      dayOffset: 0,
      time: "14:00",
      duration: "2h",
      title: "Prototipos com HTML, CSS e JavaScript",
      place: "Laboratorio 01",
      speaker: "Equipe organizadora",
      description:
        "Atividade pratica introdutoria para desenvolvimento de interfaces web em ambiente de laboratorio."
    },
    {
      id: "m2",
      type: "minicurso",
      dayOffset: 0,
      time: "16:00",
      duration: "2h",
      title: "Git e GitHub para projetos colaborativos",
      place: "Laboratorio 03",
      speaker: "Equipe organizadora",
      description:
        "Fluxo de versionamento, organizacao de repositorios e colaboracao em equipe para projetos academicos."
    },
    {
      id: "m3",
      type: "minicurso",
      dayOffset: 1,
      time: "14:00",
      duration: "2h",
      title: "API REST na pratica",
      place: "Laboratorio 02",
      speaker: "Equipe de desenvolvimento web",
      description:
        "Conceitos de rotas, requisicoes e integracao entre front-end e back-end em um exercicio guiado."
    },
    {
      id: "m4",
      type: "minicurso",
      dayOffset: 1,
      time: "16:00",
      duration: "2h",
      title: "Figma para interfaces mais consistentes",
      place: "Sala criativa",
      speaker: "Equipe de design",
      description:
        "Criacao de telas, componentes e fluxos visuais com foco em clareza, hierarquia e apresentacao."
    }
  ],
  projects: [
    {
      id: "projeto-estufas",
      tag: "Automacao",
      title: "Monitoramento inteligente de estufas",
      image: "https://picsum.photos/seed/projeto-automacao/900/620",
      summary:
        "Sistema para acompanhar temperatura, umidade e acionamento automatico com base em dados coletados em tempo real.",
      team: ["Joao", "Maria", "Pedro"],
      advisor: "Prof. orientador de automacao",
      stack: ["ESP32", "Sensores", "Dashboard", "IoT"],
      impact:
        "Ajuda a transformar observacao manual em acompanhamento continuo com alertas e historico.",
      description:
        "O projeto integra sensores ambientais, painel web e regras automaticas para apoiar atividades em laboratorio e testes de cultivo controlado."
    },
    {
      id: "projeto-portal",
      tag: "Web",
      title: "Portal academico com foco em usabilidade",
      image: "https://picsum.photos/seed/projeto-web/900/620",
      summary:
        "Reformulacao de uma plataforma institucional com navegacao simplificada, acessibilidade e design responsivo.",
      team: ["Ana", "Carlos", "Beatriz"],
      advisor: "Prof. orientador de UX",
      stack: ["HTML", "CSS", "JavaScript", "Acessibilidade"],
      impact:
        "Melhora a experiencia de consulta de informacoes e reduz a friccao para estudantes em dispositivos moveis.",
      description:
        "A proposta reorganiza fluxos de acesso, hierarquia visual e componentes reutilizaveis para tornar o portal mais claro e consistente."
    },
    {
      id: "projeto-robotica",
      tag: "Robotica",
      title: "Robo seguidor de linha com visao computacional",
      image: "https://picsum.photos/seed/projeto-robotica/900/620",
      summary:
        "Projeto experimental que combina sensores, camera e ajuste de trajetoria para competicoes estudantis.",
      team: ["Lucas", "Fernanda", "Rafael"],
      advisor: "Prof. orientador de robotica",
      stack: ["Python", "OpenCV", "Microcontroladores"],
      impact:
        "Cria uma ponte entre eletronica, programacao e testes iterativos de desempenho em pista.",
      description:
        "O grupo desenvolveu um prototipo com leitura de faixa, calibracao de resposta e analise de percurso para melhorar a estabilidade do robo."
    },
    {
      id: "projeto-dados",
      tag: "Dados",
      title: "Painel de indicadores para gestao escolar",
      image: "https://picsum.photos/seed/projeto-dados/900/620",
      summary:
        "Dashboard para consolidar frequencia, desempenho e indicadores administrativos em um unico ambiente visual.",
      team: ["Sofia", "Gabriel", "Laura"],
      advisor: "Prof. orientador de dados",
      stack: ["Power BI", "ETL", "Planilhas", "SQL"],
      impact:
        "Facilita leitura de informacoes e apoia a tomada de decisao com dados organizados.",
      description:
        "O painel foi pensado para resumir informacoes dispersas em visoes mais acionaveis para acompanhamento escolar."
    },
    {
      id: "projeto-mobile",
      tag: "Mobile",
      title: "Aplicativo de organizacao de estudos",
      image: "https://picsum.photos/seed/projeto-mobile/900/620",
      summary:
        "Ferramenta para acompanhamento de metas, calendario de tarefas e notificacoes focadas em rotina academica.",
      team: ["Bruno", "Mariana", "Felipe"],
      advisor: "Prof. orientador de mobile",
      stack: ["Flutter", "Firebase", "UX Writing"],
      impact:
        "Ajuda estudantes a visualizarem prioridades e manterem uma rotina mais consistente.",
      description:
        "O aplicativo combina agenda, lembretes e organizacao por materias em uma interface simples e pensada para uso diario."
    },
    {
      id: "projeto-maker",
      tag: "Maker",
      title: "Estacao interativa para oficinas de eletronica",
      image: "https://picsum.photos/seed/projeto-maker/900/620",
      summary:
        "Kit modular pensado para aulas praticas com sensores, LEDs, protoboards e desafios guiados por etapas.",
      team: ["Cleber", "Cesar", "Felipe"],
      advisor: "Prof. orientador de cultura maker",
      stack: ["Arduino", "Componentes modulares", "Material didatico"],
      impact:
        "Apoia oficinas de iniciacao com uma base mais visual, pratica e facil de replicar.",
      description:
        "A estacao organiza componentes e exercicios progressivos para acelerar demonstracoes, oficinas e atividades praticas em sala."
    }
  ]
};
