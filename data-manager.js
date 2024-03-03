const dataDirectory = "data"

// Fonction pour lire le fichier JSON et ajouter les compétences
function addSkillsFromJSON() {
    fetch(`${dataDirectory}/skills.json`)
        .then(response => response.json())
        .then(data => {
            const competences = data.competences;
            competences.forEach(skill => {
                addSkill(skill);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la lecture du fichier JSON:', error);
        });
}

// Fonction pour ajouter une compétence
function addSkill(skillName) {
    const skillsContainer = document.getElementById('skills-container');
    const skillElement = document.createElement('span');
    skillElement.classList.add('tag', 'is-primary');
    skillElement.textContent = skillName;
    skillsContainer.appendChild(skillElement);
}

// Fonction pour charger et afficher les expériences professionnelles depuis le fichier JSON
function loadExperiencesFromJSON() {
    fetch(`${dataDirectory}/experiences.json`)
        .then(response => response.json())
        .then(data => {
            const experiencesContainer = document.getElementById('experiences-container');
            data.experiences.forEach(entreprise => {
                const entrepriseElement = document.createElement('div');
                entrepriseElement.innerHTML = `<h3>${entreprise.entreprise}</h3>`;
                entreprise.missions.forEach(mission => {
                    const missionElement = document.createElement('div');
                    missionElement.classList.add('mission');
                    missionElement.innerHTML = `
                    </br><p><strong>${mission.poste}</strong> - ${mission.date}</p>
                    <p>${mission.description}</p>
                `;
                    entrepriseElement.appendChild(missionElement);
                });
                experiencesContainer.appendChild(entrepriseElement);
                // Ajouter une ligne horizontale entre chaque entreprise
                experiencesContainer.appendChild(document.createElement('hr'));
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la lecture du fichier JSON:', error);
        });
}

// Fonction pour charger et insérer les informations "À propos" depuis le fichier JSON
function insertAboutContent() {
    fetch(`${dataDirectory}/about.json`)
        .then(response => response.json())
        .then(data => {
            const aboutContainer = document.getElementById('about-container');
            aboutContainer.innerHTML = `
                <h2 class="title">${data.titre}</h2>
                <p>${data.contenu}</p>
            `;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la lecture du fichier JSON:', error);
        });
}

// Fonction pour charger et afficher les informations sur l'éducation depuis le fichier JSON
function loadEducationFromJSON() {
    fetch(`${dataDirectory}/education.json`)
        .then(response => response.json())
        .then(data => {
            const educationContainer = document.getElementById('education-container');
            data.education.forEach(formation => {
                const formationElement = document.createElement('div');
                formationElement.classList.add('box');
                formationElement.innerHTML = `
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong class="diplome">${formation.diplome}</strong> - ${formation.etablissement}<br>
                                ${formation.date}<br>
                                ${formation.description}
                            </p>
                        </div>
                    </div>
                </article>
            `;
                educationContainer.appendChild(formationElement);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la lecture du fichier JSON:', error);
        });
}

// Appel des méthodes.
loadEducationFromJSON();
insertAboutContent();
loadExperiencesFromJSON();
addSkillsFromJSON();
