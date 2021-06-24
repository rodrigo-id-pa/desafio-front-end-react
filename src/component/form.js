import React from 'react';
import { Card, Button, Col, Form, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';

import { Title } from './styles';

import * as yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

const schema = yup.object().shape({
  firstName: yup.string().min(5).required(),
  phone: yup.number().required(),
  mail: yup.string().email().required(),
  date: yup.string().required(),
  city: yup.string().min(3).required(),
  state: yup.string().max(2).required(),
  zip: yup.string().min(8).required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

const Formulario = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        firstName: '',
        phone: '',
        mail: '',
        date: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Name required';
        } else if (!/^([a-zA-Zà-úÀ-Ú]|\s+)+$/i.test(values.firstName)) {
          errors.firstName = 'Invalid name';
        }
        if (!values.mail) {
          errors.mail = 'Mail required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
        ) {
          errors.mail = 'Invalid email address';
        }
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <>
          <Title>Hello World!</Title>
          <Card>
            <Card.Header>Formulário</Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='validationFormik101'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type='text'
                      name='firstName'
                      placeholder='Nome completo'
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='4' controlId='validationFormik102'>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type='text'
                      name='phone'
                      value={values.phone}
                      placeholder='DDD + XXXXX-XXXX'
                      onChange={handleChange}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    md='6'
                    controlId='validationFormikUsername2'
                  >
                    <Form.Label>E-mail</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='inputGroupPrepend'>
                          @
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type='text'
                        placeholder='E-Mail'
                        aria-describedby='inputGroupPrepend'
                        name='mail'
                        value={values.mail}
                        onChange={handleChange}
                        isInvalid={touched.mail && !!errors.mail}
                      />
                      <Form.Control.Feedback type='invalid' tooltip>
                        {errors.mail}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md='4' controlId='validationFormik108'>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                      type='date'
                      name='date'
                      defaultValue='2017-05-24'
                      value={values.date}
                      onChange={handleChange}
                      isInvalid={touched.date && !!errors.date}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.date}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md='6' controlId='validationFormik103'>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Cidade'
                      name='city'
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={touched.city && !!errors.city}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='3' controlId='validationFormik104'>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='RJ'
                      name='state'
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={touched.state && !!errors.state}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md='3' controlId='validationFormik105'>
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='XXXXX-XXX'
                      name='zip'
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={touched.zip && !!errors.zip}
                    />

                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.File
                    className='position-relative'
                    required
                    name='file'
                    label=''
                    onChange={handleChange}
                    isInvalid={touched.file && !!errors.file}
                    feedback={errors.file}
                    id='validationFormik107'
                    feedbackTooltip
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    required
                    name='terms'
                    label='Aceite os termos de condições'
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id='validationFormik106'
                    feedbackTooltip
                  />
                </Form.Group>
                <Button type='submit'>Enviar</Button>
              </Form>
            </Card.Body>
          </Card>
        </>
      )}
    </Formik>
  );
};

export default Formulario;
