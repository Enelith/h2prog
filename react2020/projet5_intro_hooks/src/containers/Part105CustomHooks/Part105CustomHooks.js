import { useEffect, useState } from "react";

// Note : une function commen�ant par le mot cl� "use" implique qu'il s'agira d'un HOOK
// Le HOOK useIncrement va extraire la logique pr�sente dans la fonction PArt105CustomHooks associ�e � l'incr�mentation des compteurs
// Pour pouvoir �tre utilis�, le HOOK a besoin de retourner les informations
function useIncrement(debut, step) {
    const [compteur, setCompteur] = useState(debut);

    const increment = () => {
        setCompteur(cpt => cpt + step);
    }

    return [compteur, increment]; // increment est ici la fonction qui permet d'incr�menter le compteur !
}

function Part105CustomHooks() {
    // Pb flagrant : logique dupliqu�e => utilisation d'un Hook personnalis�
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