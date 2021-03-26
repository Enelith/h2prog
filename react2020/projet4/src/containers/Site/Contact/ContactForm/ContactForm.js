import React from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const contactForm = (props) => (
	<>
        <Form>
            <Form.Group controlId="nom">
                <Form.Label>Nom</Form.Label><Badge variant="warning">(min 5 caract&egrave;res)</Badge>
                <Form.Control type="text" placeholder="Nom" />
            </Form.Group>

            <Form.Group controlId="mail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Votre message</Form.Label><Badge variant="warning">(entre 100 et 200 caract&egrave;res)</Badge>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Valider
            </Button>
        </Form>
	</>
);

export default contactForm;
