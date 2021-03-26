import React from 'react';
import Card from 'react-bootstrap/Card';
import Horaire from './Horaire/Horaire';

const etablissement = (props) => (
    <>
        <Card>
            <Card.Body>
                <Card.Title>{props.properties.nom}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    T&eacute;l&eacute;phone : {props.properties.telephone}<br />
                    {props.properties.email && <><span>Email: {props.properties.email}</span><br /></>}
                    {/*}
                "id":"commissariat_police-01053-01",
                "codeInsee":"01053",
                "pivotLocal":"commissariat_police",
                "nom":"Commissariat de police de Bourg-en-Bresse",
                "adresses":[
                    {"type":"géopostale","lignes":["4 rue des Remparts"],"codePostal":"01000","commune":"Bourg-en-Bresse","coordonnees":[5.2251315,46.2067399]}
                ],
                "email":"police-bourg-en-bresse@interieur.gouv.fr",
                "telephone":"04 74 47 20 20",
                "url":"https://www.police-nationale.interieur.gouv.fr/Actualites/L-actu-police/moncommissariat.fr",
                "zonage":{"communes":["01053"]}
                    
                */}
                </Card.Subtitle>
                <Card.Text>
                    <strong>ID :</strong> {props.properties.id}<br />
                    <strong>Code Insee :</strong> {props.properties.codeInsee}<br />
                    <strong>URL :</strong> {props.properties.url}<br />
                </Card.Text>

                <Card.Text>
                    <strong>Adresses :</strong>
                </Card.Text>
                <ul>
                    {
                        props.properties.adresses.map((adresse, index) => {
                            return <li key={index}>{adresse.lignes.join(', ')}, {adresse.codePostal}, {adresse.commune}</li>
                        })
                    }
                </ul>

                {
                    props.properties.horaires &&
                    <>
                        <Card.Text>
                            <strong>Horaires : </strong>
                        </Card.Text>
                        <Horaire horaires={props.properties.horaires} />
                    </>
                }

                {
                    props.properties.url &&
                    <>
                        <Card.Text>
                            <a href={props.properties.url} className="btn btn-info" target="_blank" rel="noreferrer">Visiter le site web</a>
                        </Card.Text>
                    </>
                }
            </Card.Body>
        </Card>
    </>
);

export default etablissement;
