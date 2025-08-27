const projectList = document.getElementById('project-list');
const form = document.getElementById('project-form');

async function fetchProjects() {
 const res = await fetch('https://portifolio-node.onrender.com/api/projects');
  const projects = await res.json();
  projectList.innerHTML = '';
  projects.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${p.title}</strong>: ${p.description} - <a href="${p.link}" target="_blank" class="text-green-600 hover:underline">Ver no GitHub</a>`;
    projectList.appendChild(li);
  });
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const link = document.getElementById('link').value;

  await fetch('https://portifolio-node.onrender.com/api/projects', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title, description, link })
  });

  form.reset();
  fetchProjects();
});

fetchProjects();
