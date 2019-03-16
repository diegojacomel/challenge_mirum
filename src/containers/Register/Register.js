// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import * as Yup from 'yup';

// Components
import Container from '../../components/Container/Container';
import FormControl from '../../components/FormControl/FormControl';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

import Dropzone from "react-dropzone";

// Types
import { FETCH_REGISTER_FORM } from '../../redux/form/types';

// Styles
import 'rc-slider/assets/index.css';

const RegisterWrapper = styled('div')`
    display: block;
`

const SliderWrapper = styled('div')`
    margin: 15px 0 30px;
    width: 500px;
    max-width: 100%;
`

class Register extends Component {
    state = {}

    registerData = (data) => {
        const { props: { dispatch } } = this;
        
        dispatch({
            type: FETCH_REGISTER_FORM.SUCCESS,
            data
        })
    }

    render() {
        return (
            <RegisterWrapper>
                <Container>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            age: 0,
                            email: '',
                            phone: '',
                            uf: '',
                            country: '',
                            address: '',
                            interest: '',
                            receiveNews: false,
                            files: []
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 500);

                            alert(
                                JSON.stringify({
                                    files: values.files.map(file => ({
                                        fileName: file.name,
                                        type: file.type,
                                        size: `${file.size} bytes`
                                    })),
                                }, null, 2)
                            );
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                            .email()
                            .required('Required'),
                        })}
                        >
                        {form => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                setFieldValue
                            } = form;

                            return (
                                <Form>
                                    {/* <Dropzone onDrop={(acceptedFiles) => {
                                        if (acceptedFiles.length === 0) { return; }
                                        setFieldValue("files", values.files.concat(acceptedFiles));
                                    }}>
                                        {({getRootProps, getInputProps}) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <p>Click</p>
                                                </div>
                                                {values.files && values.files
                                                    ?
                                                    <Thumbnail file={new Blob(values.files)} />
                                                    :
                                                    null
                                                }
                                            </section>
                                        )}
                                    </Dropzone> */}
                                    <FormControl>
                                        <Label>
                                            Primeiro nome
                                        </Label>
                                        <Field
                                            component={Input}
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Primeiro nome"
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onKeyUp={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Sobrenome
                                        </Label>
                                        <Field
                                            component={Input}
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Sobrenome"
                                            type="text"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onKeyUp={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Idade
                                        </Label>
                                        <SliderWrapper>
                                            <Field
                                                component={Slider}
                                                min={13}
                                                max={45}
                                                marks={{ 13: '13-19', 20: '20-29', 30: '30-45', 45: '45 e acima' }}
                                                step={null}
                                                id="age"
                                                name="age"
                                                onChange={(e) => this.registerData(values)}
                                            />
                                        </SliderWrapper>
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            E-mail
                                        </Label>
                                        <Field
                                            component={Input}
                                            id="email"
                                            name="email"
                                            placeholder="david@example.com"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onKeyUp={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Telefone
                                        </Label>
                                        <Field
                                            component={Input}
                                            id="phone"
                                            name="phone"
                                            placeholder="(41)99999-9999"
                                            type="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onKeyUp={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Estado
                                        </Label>
                                        <Field
                                            component={Select}
                                            id="uf"
                                            name="uf"
                                            value={values.uf}
                                            onChange={handleChange}
                                            onBlur={(e) => this.registerData(values)}
                                        >
                                            <option value="">Estado</option>
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            País
                                        </Label>
                                        <Field
                                            component={Select}
                                            id="country"
                                            name="country"
                                            value={values.country}
                                            onChange={handleChange}
                                            onBlur={(e) => this.registerData(values)}
                                        >
                                            <option value="">País</option>
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Endereço
                                        </Label>
                                        <Field
                                            component={Select}
                                            id="address"
                                            name="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={(e) => this.registerData(values)}
                                        >
                                            <option value="">Selecione</option>
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Interesse
                                        </Label>
                                        <Field
                                            component={Input}
                                            id="interest"
                                            name="interest"
                                            placeholder="Digite seu interesse e aperte Enter"
                                            type="text"
                                            value={values.interest}
                                            onChange={handleChange}
                                            onKeyUp={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Field
                                            component={Input}
                                            id="receiveNews"
                                            name="receiveNews"
                                            placeholder="Digite seu interesse e aperte Enter"
                                            type="checkbox"
                                            checked={values.receiveNews}
                                            onChange={handleChange}
                                            onBlur={(e) => this.registerData(values)}
                                        />
                                    </FormControl>
                                    {/* {errors.email && touched.email &&
                                        <div className="input-feedback">
                                            {errors.email}
                                        </div>
                                    } */}
                                    {/* className={errors.email && touched.email ? 'text-input error' : 'text-input'} */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        color="success"
                                        linkTo="/result"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            );
                        }}
                        </Formik>
                </Container>
            </RegisterWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

export default connect(mapStateToProps)(Register);