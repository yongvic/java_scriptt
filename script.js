document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner les boutons
    const btnDirigeant = document.getElementById("btn_dirigeant");
    const btnProfesseur = document.getElementById("btn_professeur");
    const btnEtudiant = document.getElementById("btn_etudiant");

    function afficherPopup(role) {
        // Supprimer une pop-up existante s'il y en a une
        let existingPopup = document.querySelector(".overlay");
        if (existingPopup) {
            existingPopup.remove();
        }

        // Contenu dynamique de la pop-up
        let div = document.createElement("div");
        div.classList.add("overlay");

        let formContent = "";

        if (role === "etudiant") {
            formContent = `
                <label>Matricule: </label>
                <input type="number" id="matricule"><br><br>
                <label>Nom: </label>
                <input type="text" id="nom"><br><br>
                <label>Prénom: </label>
                <input type="text" id="prenom"><br><br>
                <label>Age: </label>
                <input type="number" id="age"><br><br>
                <label>Filière: </label>
                <input type="text" id="filiere"><br><br>
                <label>Niveau d'étude: </label>
                <input type="text" id="niveau_etude"><br><br>
            `;
        } else if (role === "professeur") {
            formContent = `
                <label>Nom: </label>
                <input type="text" id="nom"><br><br>
                <label>Prénom: </label>
                <input type="text" id="prenom"><br><br>
                <label>Prof de: </label>
                <input type="text" id="prof"><br><br>
            `;
        } else if (role === "dirigeant") {
            formContent = `
                <label>Nom: </label>
                <input type="text" id="nom"><br><br>
                <label>Prénom: </label>
                <input type="text" id="prenom"><br><br>
                <label>Dirigeant de: </label>
                <input type="text" id="dirigeant"><br><br>
            `;
        }

        // Structure de la pop-up
        div.innerHTML = `
            <div class="pop_up">
                <form>
                    ${formContent}
                    <input type="submit" value="Envoyer">
                </form>
                <button class="close-btn">×</button>
            </div>
        `;

        // Ajouter la pop-up au body
        document.body.appendChild(div);

        // Gérer la fermeture
        document.querySelector(".close-btn").addEventListener("click", function () {
            div.remove();
        });
    }

    // Ajouter les événements aux boutons
    btnEtudiant.addEventListener("click", () => afficherPopup("etudiant"));
    btnProfesseur.addEventListener("click", () => afficherPopup("professeur"));
    btnDirigeant.addEventListener("click", () => afficherPopup("dirigeant"));
});
