import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'HR Management for Apprentices',
        description: "My squad and I developed a Human Resources Management application for apprentices. I was the Product Owner and I was responsible for the product's vision, roadmap, and backlog. I used Jira and Confluence to manage the project and Figma to design the UI. We used React, Typescript, and Symfony to develop the application. We used GitLab for version control and CI/CD.",
        tools: ['Jira', 'Confluence', 'Figma', 'React', 'Typescript', 'Symfony', 'GitLab'],
        role: 'Product Owner',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Vintage Auto 83 Website',
        description: 'I have designed and developed a website for a local vintage car club. I used HTML, CSS, and JavaScript for the frontend. The website is only a "showcase" website, so it does not have any backend. I used Google Maps to display the club\'s location and a contact form to send emails to the club\'s email address.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Parsing docx to json',
        description: 'I have made a python prototype that parses a docx file to a json file. The application uses the python-docx library to read the docx file and the json library to write the json file. The application is a command-line application that takes the path of the docx file as an argument and returns the path of the json file.',
        tools: ['Python', 'python-docx', 'json'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Whats Dat Film',
        description: 'My team and I develop a game web application inspired by the website "1 jour 1 film". The user try to guess the movie of the day, the main goal is to guess with a minimum of try. Each try, the common informations between the film choose by the user and the film to guess are display. The website is running on a LAMP server. We used php for the backend and html, css and javascript for the frontend. The database is a MySQL database and we used the APIs of the movie database and the movie poster database to get the informations.',
        tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'The Movie Database API', 'The Movie Poster Database API', 'GitHub'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Gestion application',
        description: 'My team and I develop an application to help student associations to manage their members and events. We used NodeJS for the backend and VueJs for the frontend. We used a MySQL database to store the data. We used the Google Calendar API to display the events and the Google Maps API to display the location of the events. We used the SendGrid API to send emails to the members.',
        tools: ['VueJS', 'NodeJS', 'MySQL', "Google Calendar API", "Google Maps API", "SendGrid API", 'GitHub'],
        code: '',
        demo: '',
        image: crefin,
        role: 'Full Stack Developer',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },