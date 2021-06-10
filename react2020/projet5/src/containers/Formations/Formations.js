import TitreH1 from "components/TitreH1/TitreH1";
import Bouton from "components/Bouton/Bouton";
import { useEffect, useState } from "react";
import axios from "axios";

function Formations() {
    const [formations, setFormations] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_H2PROG_FORMATIONS)
            .then(response => {
                setFormations(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <TitreH1>Bienvenu sur le site listant les formations H2PROG</TitreH1>
            <Bouton>Toutes les formations</Bouton>
            <Bouton>PHP</Bouton>
            <Bouton>Algorithmique</Bouton>
            <Bouton>JavaScript</Bouton>

            <table className="table">
                <thead>
                    <th>Num&eacute;ro</th>
                    <th>Libell&eacute;</th>
                    <th>Description</th>
                    <th>Cat&eacute;gorie</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {
                        formations && formations.map(formation => {
                            return (
                                <tr key={formation.id}>
                                    <td>{formation.id}</td>
                                    <td>{formation.libelle}</td>
                                    <td>{formation.description}</td>
                                    <td>{formation.categorie}</td>
                                    <td>
                                        <img src={formation.image} alt={formation.image} width="100px"/>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Formations;