(function() {
  const data = {
    features: ["Mock data driven UI","Plain HTML/CSS/JS","GitHub Pages ready","Accessible sections","No external APIs required"],
    documentation: "This demo uses local mock data to render UI components without external dependencies.",
    howToUse: {
      steps: [
        "Open index.html in a browser",
        "Modify script.js to change mock data",
        "Push to GitHub Pages to deploy"
      ]
    },
    projectStructure: ["index.html","styles.css","script.js","README.md"]
  };

  const featuresList = document.getElementById('featuresList');
  data.features.forEach(function(f) {
    const li = document.createElement('li');
    li.textContent = f;
    featuresList.appendChild(li);
  });

  document.getElementById('documentationText').textContent = data.documentation;
  document.getElementById('howToCode').textContent = JSON.stringify(data.howToUse, null, 2);
  document.getElementById('structureTree').textContent = JSON.stringify({ tree: data.projectStructure }, null, 2);
})();