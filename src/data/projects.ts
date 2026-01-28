export interface Project {
  id: string; // Changed to string for better slug support later
  title: string;
  image: string;
  company: string;
}

export interface ProjectGroupData {
  company: string;
  icon: string;
  projects: Project[];
}

export const PROJECTS_DATA: ProjectGroupData[] = [
  {
    company: "Itaú",
    icon: "/icons/itau-icon-brand.svg",
    projects: [
      {
        id: "itau-app-redesign",
        title: "App Redesign & Navigation",
        image: "/projects/itau-work.jpg",
        company: "Itaú",
      },
      {
        id: "itau-personal-finance",
        title: "Personal Finance Manager",
        image: "/projects/nu-transport.jpg", // Placeholder
        company: "Itaú",
      },
      {
        id: "itau-transaction-feed",
        title: "Transaction Feed redesign",
        image: "/projects/nu-ui.jpg", // Placeholder
        company: "Itaú",
      },
    ],
  },
  {
    company: "PicPay",
    icon: "/icons/picpay-icon-brand.svg", // Using the one we already have
    projects: [
      {
        id: "picpay-desafio",
        title: "Desafio PicPay",
        image: "/projects/PicPay-work.jpg",
        company: "PicPay",
      },
      {
        id: "picpay-pix",
        title: "Cadastro de chaves Pix",
        image: "/projects/PicPay-work-1.jpg",
        company: "PicPay",
      },
      {
        id: "picpay-appclip",
        title: "App Clip PicPay",
        image: "/projects/PicPay-work-2.jpg",
        company: "PicPay",
      },
    ],
  },
];
