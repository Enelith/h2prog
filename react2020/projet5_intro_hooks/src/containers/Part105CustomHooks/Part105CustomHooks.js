import { useEffect, useState } from "react";

// Note : une function commençant par le mot clé "use" implique qu'il s'agira d'un HOOK
// Le HOOK useIncrement va extraire la logique présente dans la fonction PArt105CustomHooks associée à l'incrémentation des compteurs
// Pour pouvoir être utilisé, le HOOK a besoin de retourner les informations
function useIncrement(debut, step) {
    const [compteur, setCompteur] = useState(debut);

    const increment = () => {
        setCompteur(cpt => cpt + step);
    }

    return [compteur, increment]; // increment est ici la fonction qui permet d'incrémenter le compteur !
}

function Part105CustomHooks() {
    // Pb flagrant : logique dupliquée => utilisation d'un Hook personnalisé
    /*
    const [compteur, setCompteur] = useState(0);
    const [compteur2, setCompteur2] = useState(10);

    const increment1 = () => {
        setCompteur(cpt => cpt + 1);
    }
    const increment2 = () => {
        setCompteur2(cpt => cpt + 1);
    }

    return (
        <>
            <div>
                <button onClick={increment1} > {compteur}</button>
                <button onClick={increment2} > {compteur2}</button>
            </div>
        </>
    );
    */

    const [compteur, setCompteur] = useIncrement(0, 1);
    const [compteur2, setCompteur2] = useIncrement(10, 2);

    return (
        <>
            <div>
                <button onClick={setCompteur} > {compteur}</button>
                <button onClick={setCompteur2} > {compteur2}</button>
            </div>
        </>
    );
}

export default Part105CustomHooks;