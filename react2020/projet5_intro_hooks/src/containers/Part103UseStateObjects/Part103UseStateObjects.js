import { useState } from "react";

function Part103UseStateObjects() {
    // Version standard
    const [age, setAge] = useState(18);
    const [sexe, setSexe] = useState(true);
    const [couleur, setCouleur] = useState("noire");

    const anniversaire = () => setAge(age => age + 1);
    const changeSexe = () => setSexe(sexe => !sexe);

    // Version Object
    const [personne, setPersonne] = useState({
        age: 18,
        sexe: true,
        couleur: "noire"
    });
    const anniversaireObject = () => {
        const newPersonne = { ...personne };
        newPersonne.age++;
        setPersonne(newPersonne);
    };
    const changeSexeObject = () => {
        const newPersonne = { ...personne };
        newPersonne.sexe = !newPersonne.sexe;
        setPersonne(newPersonne);
    }
    const changeCouleur = (newCouleur) => {
        const newPersonne = { ...personne };
        newPersonne.couleur = newCouleur;
        setPersonne(newPersonne);
    }

    return (
        <>
            <h5>Version Standard</h5>
            <div>
                Age : {age}
                &nbsp;
                <button onClick={anniversaire} >Anniversaire</button>
            </div>
            <div>
                Sexe : <button onClick={changeSexe} >{sexe ? "Homme" : "Femme"}</button>
            </div>
            <div>
                Couleur :
                <input type="text" value={couleur} onChange={(event) => setCouleur(event.target.value)} />
                <br />
                &nbsp;&#x2794; Valeur couleur dans le States : {couleur}
            </div>

            <h5>Version Object</h5>
            <div>
                Age : {personne.age}
                &nbsp;
                <button onClick={anniversaireObject} >Anniversaire</button>
            </div>
            <div>
                Sexe : <button onClick={changeSexeObject} >{personne.sexe ? "Homme" : "Femme"}</button>
            </div>
            <div>
                Couleur :
                <input type="text" value={personne.couleur} onChange={(event) => changeCouleur(event.target.value)} />
                <br />
                &nbsp;&#x2794; Valeur couleur dans le States : {personne.couleur}
            </div>
        </>
    );
}

export default Part103UseStateObjects;