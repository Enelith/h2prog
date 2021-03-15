import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton';
import { withFormik } from 'formik';
import * as Yup from 'yup';

class FormulaireAjout extends Component {
    /*
    // Le STATE n'est plus obligatoire � partir du moment o� on int�gre FORMIK (Part 057), cf. bas de page, mapPropsToValues ...
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }

    // .. ce qui impacte aussi cette m�thode vu qu'on a alors plus de STATE
    // Ce traitement va �tre r�alis� dans la partie handleSubmit
    validationFormHandler = (event) => {
        event.preventDefault();

        this.props.validation(
            this.state.titreSaisi,
            this.state.auteurSaisi,
            this.state.nbPagesSaisi
        );

        // Reset le formulaire
        this.setState({
            titreSaisi: "",
            auteurSaisi: "",
            nbPagesSaisi: ""
        });
    }

    // => Le bouton de validation va devoit �tre modifi� et appeler la partie handleSubmit de withFormik (cf Bas de page)
    */

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Sigmar One' }}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            name="titre" // IMPORTANT : doit avoir la m�me valeur que les params de la partie withFormik > mapPropsToValues
                            // value={this.state.titreSaisi}
                            // onChange={(event) => this.setState({ titreSaisi: event.target.value })}
                            value={this.props.values.titre} // Changement de comportement via Formik
                            onChange={this.props.handleChange} // Changement de comportement li� � Formik ~ la fonction handleChange est fournie gr�ce � ce dernier
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.errors.titre && this.props.touched.titre && <span style={{ color: "red" }}>{this.props.errors.titre}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            name="auteur"
                            // value={this.state.auteurSaisi}
                            // onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
                            value={this.props.values.auteur} // Changement de comportement via Formik
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.errors.auteur && this.props.touched.auteur && <span style={{ color: "red" }}>{this.props.errors.auteur}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input type="number"
                            className="form-control"
                            id="nbPages"
                            name="nbPages"
                            // value={this.state.nbPagesSaisi}
                            // onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
                            value={this.props.values.nbPages} // Changement de comportement via Formik
                            // Pr�cision renforc�e : 
                            // Pour utiliser la fonction Yup.number(), on doit convertir la valeur en INTEGER (via/gr�ce � Formik), autrement, c'est consid�r� comme un String
                            // Pour rappel, on peut convertir une String via parseInt(), ou plus simplement pr�fixer de "+"
                            onChange={(event) => this.props.setFieldValue('nbPages', +event.target.value)}
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.errors.nbPages && this.props.touched.nbPages && <span style={{ color: "red" }}>{this.props.errors.nbPages}</span>}
                    </div>
                    {/* 
                    <Bouton typeBtn="btn-primary" buttonAction={this.validationFormHandler} > Valider</Bouton>
                    */}
                    <Bouton typeBtn="btn-primary" buttonAction={this.props.handleSubmit} > Valider</Bouton>{/* buttonAction : R�f�rence � withFormik, partie handleSubmit */}
                    <Bouton typeBtn="btn-danger" buttonAction={this.props.handleReset} > Reset</Bouton>{/* buttonAction : R�f�rence � withFormik, partie handleSubmit */} 
                </form>
            </>
        );
    }
}

// withFormik requiert 3 parties � renseigner en terme d'argument pour utiliser ce syst�me de validation : mapPropsToValues, validate (si non Yup), et handleSubmit
// http://jaredpalmer.com/formik/docs/api/withFormik
export default withFormik({
    mapPropsToValues: () => ({
        // Fonction : r�alise la liaison entre les valeurs qu'on aura sur nos inputs, et les donn�es qu'utilisera FORMIK
        // Part 057 :
        titre: '',
        auteur: '',
        nbPages: ''
    }),
    /*
    // Code version sans le module Yup
    validate: (values) => {
        // Fonction : permet de lancer les actions de validation. Cette partie validate r�cup�rera des values (des tous les inputs)
        const errors = {};
        if (values.titre.length < 3) {
            errors.titre = "Le titre doit avoir plus de 3 caract\u00e8res";
        }
        if (values.titre.length > 15) {
            errors.titre = "Le titre doit avoir moins de 15 carat\u00e8res";
        }
        if (!values.auteur) {
            errors.auteur = "Le champs Auteur est obligatoire";
        }
        return errors;
    },
    */
    // Code version avec Yup : � la place de validate, on passera par un SCHEMA ~ Formik dispose d'une m�thode validationSchema
    validationSchema: Yup.object().shape(
        // G�n�ration du sch�ma dans un objet (ce dernier va r�cup�rer plusieurs propri�t�s qui sont sur l'ensemble des champs)
        {
            titre: Yup.string()
                .min(3, "Le titre doit avoir plus de 3 caract\u00e8res")
                .max(15, "Le titre doit avoir moins de 15 carat\u00e8res")
                .required("Le titre est obligatoire"),
            auteur: Yup.string()
                .min(3, "L'auteur doit avoir plus de 3 caract\u00e8res")
                .required("L'auteur est obligatoire"),
            nbPages: Yup.number()
                .lessThan(1000, "Nombre de pages doit \u00eatre inf\u00e9rieur \u00e0 1000 pages")
                .moreThan(50, "Nombre de pages doit \u00eatre sup\u00e9rieur \u00e0 50 pages")

        }
    ),
    handleSubmit: (values, { props }) => {
        // Fonction : permet de lancer les actions � la soumission du formulaire (cette partie sera li�e � notre Bouton)
        // Demande deux arguments : les valeurs, et  les props (pour lesquelles on utilisera la syntaxe de DESTRUCTURATION d'objet {})
        console.log(values);

        props.validation(
            values.titre,
            values.auteur,
            values.nbPages
        );
    }
})(FormulaireAjout);
