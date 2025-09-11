const projects = [
  {
    title: "Weather App",
    description: "A simple weather forecast app using OpenWeather API.",
    link: "https://example.com/weather-app"
  },
  {
    title: "To-Do List",
    description: "Manage your tasks with this interactive to-do list.",
    link: "https://example.com/todo-list"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with HTML, CSS, and JS.",
    link: "https://example.com/portfolio"
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});