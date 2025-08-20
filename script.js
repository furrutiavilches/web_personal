document.getElementById("year").textContent = new Date().getFullYear();
// Si publicas en GitHub Pages, setea el link de demo automáticamente:
const user = "furrutiavilches"; const repo = "portafolio";
document.getElementById("demoLink").href = `https://${user}.github.io/${repo}/`;