import { useState } from "react";

function Test() {
    const state = useState(0); // <= En faisant ça, on vient d'enregistrer un nouveau States (donc un nouvel état local) avec une valeur (qui est de 0)
    console.log(state); // useState renvoie un ARRAY contenant 2 informations : [0] => la valeur, [1] => l'équivalent du setState (qui va permettre de modifier cette valeur)
    // Pour récupérer ces valeurs directement, on va passer par le destructuring JS ES6 (ou ES7?)

    // Les noms sont arbitraires évidemment
    const [compteur, setCompteur] = useState(10);
    console.log(compteur, setCompteur);

    const handleClick = () => {
        setCompteur(compteur => compteur + 1);
    }

    return (
        <>
            <div>
                Compteur : {compteur}
            </div>
            <button onClick={handleClick} > Incr&eacute;menter la valeur</button>
        </>
    );
}

export default Test;