interface ItemList {
  title: string;
  description: string;
  responsibleMember: string;
  date: string;
}

const contentList: ItemList[] = [
  {
    title: "Treinamento Geral",
    description:
      "Treinamento Geral de apresentação da organização interna da equipe, regras da categoria e o que se espera ao final do processo Trainee.",
    responsibleMember: "Ayssa G.",
    date: "27/05/2023",
  },
  {
    title: "Git e Github",
    description: "Introdução ao Git e GitHub para controle de versão.",
    responsibleMember: "Emme Menezes",
    date: "27/05/2023",
  },
  {
    title: "Modelagem 3D",
    description: "Introdução à modelagem 3D com Fusion 360.",
    responsibleMember: "Gabriel Baliza",
    date: "27/05/2023",
  },
  {
    title: "Soldagem",
    description: "Treinamento de soldagem.",
    responsibleMember: "Raul Myron",
    date: "03/06/2023",
  },
  {
    title: "Lógica de programação com Python",
    description:
      "Conceitos de lógica de programação, engenharia de software e orientação à objetos utilizando a linguagem Python.",
    responsibleMember: "Raul Myron",
    date: "10/05/2023",
  },
  {
    title: "Estratégia",
    description:
      "Modelos matemáticos, estratégias para atribuição de papéis e planejamento de trajetória dos jogadores VSS.",
    responsibleMember: "André Dornelas",
    date: "17/05/2023",
  },
  {
    title: "Visão Computacional",
    description:
      "Conceitos básicos de visão computacional e técnicas de visão computacional aplicados ao VSSS utilizando OpenCV.",
    responsibleMember: "Maria Cláudia",
    date: "24/05/2023",
  },
  {
    title: "Conceitos básicos de controle digital para VSS",
    description:
      "Tipos de controladores mais comuns e o dominio Z para discretização.",
    responsibleMember: "André Dornelas",
    date: "01/07/2023",
  },
  {
    title: "Eletrônica",
    description: "Modelagem de PCBs e cuidados.",
    responsibleMember: "Paulo Henrique",

    date: "08/07/2023",
  },
  {
    title: "Inteligência Artificial",
    description: "Conceitos básicos de Inteligência Artificial",
    responsibleMember: "Hiago dos Santos",
    date: "15/07/2023",
  },
  {
    title: "Figma e Design Thinking ",
    description:
      "Tutorial básico de Figma e conceitos básicos sobre Design Thinking.",
    responsibleMember: "Gabriel Bismarck",

    date: "15/07/2023",
  },
  {
    title: "Projeto Final",
    description: "Entrega do projeto final de acordo com a área de interesse.",
    responsibleMember: "Ayssa G.",
    date: "22/07/2023",
  },
];

export default contentList;
