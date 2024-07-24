


export type ProjectType = {
    title: string;
    description: string;
    content: string;
    demo_link: string;
    display_img: string;
    github_link: string;
};


export const projects: ProjectType[] = [
    {
        title: "Cloud Native User Management System Project",
        description: "A cloud-native user management system designed and deployed on GCP.",
        content: `
DevOps Project
Mar 2021 – June 2022
Bengaluru, KA, India
Jan 2024 – May 2024

Technologies: GCP, Terraform, Packer

- Designed & deployed cloud-native user management on GCP (registration, auth, profiles, email verification).
- Enabled secure and automated infrastructure provisioning on GCP through IaC (Terraform, Packer) with GitHub Actions.
        `,
        demo_link: "",
        display_img: "projects_images/gcp.svg",
        github_link: "https://github.com/Basu-Patil/tf-gcp-infra"
    },
    {
        title: "TicTacToe & ConnectFour",
        description: "A data structures and algorithms project implementing Tic Tac Toe and Connect Four with AI opponents.",
        content: `
Data Structures and Algorithms Project

- Programmed Tic Tac Toe and Connect Four with MCTS, enabling AI opponents.
- Designed & executed test cases to validate game logic & algorithms.
        `,
        demo_link: "",
        display_img: "/projects_images/tictactoe.jpg",
        github_link: "https://github.com/ssaurabh760/TicTacToe-Connect4"
    },
    {
        title: "Chef2Go",
        description: "A full-stack web platform for discovering and ordering from local chefs.",
        content: `
Full Stack Web Development Project
Jan 2024 – May 2024
Technologies: React.js, React Redux, TypeScript, Material UI, Node.js, Express, MongoDB

- Developed Chef2Go, a recipe platform with login/signup, chef/recipe search, and premium subscriptions using the MERN stack.
- Implemented secure routes, user authentication, and built a dynamic user interface for an engaging experience on Chef2Go.
        `,
        demo_link: "",
        display_img: "/projects_images/chef2go.png",
        github_link: "https://github.com/basupatil1213/chef-2-go"
    },
    {
        title: "Fitpulse",
        description: "A full-stack web application for fitness challenges optimized for user engagement.",
        content: `
Full Stack Web Development Project
Sep 2023 – Dec 2023
Technologies: Vue.js, Java, MySQL

- Engineered a data-driven Fitness Challenge App using Vue.js and Java to optimize user engagement.
- Leveraged MySQL schema normalization techniques to optimize data storage and retrieval, ensuring a responsive user experience.
        `,
        demo_link: "",
        display_img: "/projects_images/fitpulse.png",
        github_link: "https://github.com/basupatil1213/fitpulse"
    }
];