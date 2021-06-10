import { useEffect, useState } from "react";

// Note : REACT recommande de cr�er autant de useEffect que l'on a de fonctionnalit�s diff�rentes.
function Part104UseEffect() {
    const [cpt, setCpt] = useState(0);

    const [age, setAge] = useState(18);
    const [sexe, setSexe] = useState(true);
    const [couleur, setCouleur] = useState("noire");

    const anniversaire = () => setAge(age => age + 1);
    const changeSexe = () => setSexe(sexe => !sexe);

    /**
     * - componentDidMount :
     *      useEffect( () => {...}, [] )
     * - componentDidMount & componentDidUpdate :
     *      useEffect( () => {...} )
     */
    useEffect(
        () => {
            document.title = `1) Age : ${age}`;
            console.log("1) DEPENDANCES [] <=> componentDidMount (CREATION ONLY)");
        },
        [] // <= Liste des DEPENDANCES ([] <=> componentDidMount : execution unique � partir du moment o� le composant est mont�, et n'est pas r�p�t�)
    );
    useEffect(
        () => {
            document.title = `2) Age : ${age}`;
            console.log("2) DEPENDANCES non renseignees <=> componentDidMount | componentDidUpdate (s'execute � chaque rafraichissement du component)");
        }
    );
    useEffect(
        () => {
            document.title = `3) Age : ${age}`;
            console.log("3) DEPENDANCES [age] <=> ne s'active UNIQUEMENT qu'avec la modification de la liste dependance indiquee (ici : age ou sexe) ~ Permet de limiter l'effet de bord");
        },
        [age, sexe]
    );

    /**
     * - componentWillUnmount :
     *      useEffect( () => {...; return function() { // fonction de d�montage }, [] )
     * Note : la liste de d�pendance est ici arbitraire, on ne veut l'effectuer ici qu'� la cr�ation du component
     */
    useEffect(
        () => {
            const timer = setInterval(
                () => {
                    setCpt(cpt => cpt + 1)
                },
                1000
            );
            return function () { // fonction appel�e au d�montage
                clearInterval(timer);
            }
        },
        []
    );

    return (
        <>
            <div>
                Timer : {cpt}
            </div>
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
        </>
    );
}

export default Part104UseEffect;