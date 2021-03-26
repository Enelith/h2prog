import React from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { withFormik } from 'formik';
import * as Yup from 'yup';

const contactForm = (props) => (
	<>
        <Form>
            <Form.Group controlId="nom">
                <Form.Label>Nom</Form.Label><Badge variant="warning">(min 5 caract&egrave;res)</Badge>
                <Form.Control
                    type="text"
                    placeholder="Nom"
                    name="nomFormik"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nomFormik}
                />
                {
                    props.touched.nomFormik && props.errors.nomFormik &&
                    <Form.Text id="nomHelpBlock" className='text-danger'>{props.errors.nomFormik}</Form.Text>
                }
            </Form.Group>

            <Form.Group controlId="mail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="emailFormik"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.emailFormik} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                {
                    props.touched.emailFormik && props.errors.emailFormik &&
                    <Form.Text id="emailHelpBlock" className='text-danger'>{props.errors.emailFormik}</Form.Text>
                }
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Votre message</Form.Label><Badge variant="warning">(entre 100 et 200 caract&egrave;res)</Badge>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="messageFormik"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.messageFormik} />
                {
                    props.touched.messageFormik && props.errors.messageFormik &&
                    <Form.Text id="messageHelpBlock" className='text-danger'>{props.errors.messageFormik}</Form.Text>
                }
            </Form.Group>

            <Button variant="primary" onClick={props.handleSubmit} >
                Valider
            </Button>
        </Form>
	</>
);

export default withFormik({
    mapPropsToValues: () => ({
        nomFormik: '',
        emailFormik: '',
        messageFormik: ''
    }),
    validationSchema: Yup.object().shape({
        nomFormik: Yup.string()
            .min(5, 'Le nom doit avoir au minimum 5 caract\u00E8res')
            .required('Le nom est obligatoire'),
        emailFormik: Yup.string()
            .email('L\'email est invalide')
            .required('L\'email est obligatoire'),
        messageFormik: Yup.string()
            .min(100, 'Le message doit faire au minimum 100 caract\u00E8res')
            .max(200, 'Le message doit faire moins de 200 caract\u00E8res')
            .required('Le message est obligatoire')
    }),
    handleSubmit: (values, { props }) => {
        alert('Message envoy\u00E9 - HandleSubmit via Formik - Traitement Server TODO');
	}
})(contactForm);
