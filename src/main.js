const projects = [
  {
    name: "Project 1",
    description: "Example project...",
    imageSrc: "./assets/code.svg",
    url: "https://github.com",
  },
  {
    name: "Project 2",
    description: "Example project...",
    imageSrc: "./assets/code.svg",
    url: "https://github.com",
  },
  {
    name: "Project 3",
    description: "Example project...",
    imageSrc: "./assets/code.svg",
    url: "https://github.com",
  },
  {
    name: "Project 4",
    description: "Example project...",
    imageSrc: "./assets/code.svg",
    url: "https://github.com",
  },
];

const createProjectCard = (project) => {
  const card = document.createElement('div');
  card.classList.add('project-card');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('project-card-img');
  const image = document.createElement('img');
  image.src = project.imageSrc;
  imageContainer.appendChild(image);

  const name = document.createElement('h2');
  name.innerHTML = project.name;

  const desc = document.createElement('p');
  desc.innerHTML = project.description;

  const textContent = document.createElement('div');
  textContent.classList.add('project-card-text');
  textContent.appendChild(name);
  textContent.appendChild(desc);

  const link = document.createElement('a');
  link.classList.add('project-card-link');
  link.href = project.url;
  link.appendChild(imageContainer);
  link.appendChild(textContent);

  card.appendChild(link);
  return card;
}

const projContainer = document.getElementById('projects-container');

for (const project of projects) {
  const card = createProjectCard(project);
  projContainer.appendChild(card);
}
