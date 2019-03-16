// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

// Containers
import Header from '../Header/Header';

// Components
import Container from '../../components/Container/Container';
import FormControl from '../../components/FormControl/FormControl';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import Checkbox from '../../components/Checkbox/Checkbox';

// Types
import { FETCH_REGISTER_FORM } from '../../redux/form/types';

// DataMock
import dataMock from '../../utils/dataMock';

// Validation
import validation from './validations';

const RegisterWrapper = styled('div')`
    display: block;
    margin-bottom: 40px;
`

const NewsletterSpacing = styled('div')`
    margin: 25px 0;
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
                <Header />
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
                            addressType: '',
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
                        validationSchema={validation}
                        >
                        {form => {
                            const {
                                values,
                                errors,
                                touched,
                                isSubmitting,
                                handleChange,
                                handleBlur,
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
                                            onKeyUp={() => this.registerData(values)}
                                            maxLength={20}
                                            errors={errors.firstName}
                                            touched={touched.firstName}
                                            onBlur={handleBlur}
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
                                            onKeyUp={() => this.registerData(values)}
                                            onBlur={handleBlur}
                                            errors={errors.lastName}
                                            touched={touched.lastName}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Idade
                                        </Label>
                                        <RadioGroup 
                                            onChange={handleChange}
                                            onBlur={() => this.registerData(values)}
                                        />
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
                                            onKeyUp={() => this.registerData(values)}
                                            onBlur={handleBlur}
                                            errors={errors.email}
                                            touched={touched.email}
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
                                            placeholder="(41) 99999-9999"
                                            type="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onKeyUp={() => this.registerData(values)}
                                            onBlur={handleBlur}
                                            mask="(99) 99999-9999"
                                            errors={errors.phone}
                                            touched={touched.phone}
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
                                            onBlur={handleBlur}
                                            onClick={() => this.registerData(values)}
                                            errors={errors.uf}
                                            touched={touched.uf}
                                        >
                                            <option value="">Selecione uma opção</option>
                                            {dataMock.uf.map((uf, indexUf) => (
                                                <option key={indexUf} value={uf}>{uf}</option>
                                            ))}
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
                                            onBlur={handleBlur}
                                            onClick={() => this.registerData(values)}
                                            errors={errors.country}
                                            touched={touched.country}
                                        >
                                            <option value="">Selecione uma opção</option>
                                            {dataMock.countries.map((uf, indexUf) => (
                                                <option key={indexUf} value={uf}>{uf}</option>
                                            ))}
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <Label>
                                            Endereço
                                        </Label>
                                        <Field
                                            component={Select}
                                            id="addressType"
                                            name="addressType"
                                            value={values.addressType}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            onClick={() => this.registerData(values)}
                                            errors={errors.addressType}
                                            touched={touched.addressType}
                                        >
                                            <option value="">Selecione uma opção</option>
                                            {dataMock.address.map((uf, indexUf) => (
                                                <option key={indexUf} value={uf}>{uf}</option>
                                            ))}
                                        </Field>
                                    </FormControl>
                                    {!!values.addressType
                                        ?
                                        <FormControl>
                                            <Label>
                                                Endereço
                                            </Label>
                                            <Field
                                                component={Input}
                                                id="address"
                                                name="address"
                                                placeholder="Endereço"
                                                type="text"
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onKeyUp={() => this.registerData(values)}
                                                errors={errors.address}
                                                touched={touched.address}
                                            />
                                        </FormControl>
                                        :
                                        null
                                    }
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
                                            onBlur={handleBlur}
                                            onKeyUp={() => this.registerData(values)}
                                            errors={errors.interest}
                                            touched={touched.interest}
                                        />
                                    </FormControl>
                                    <NewsletterSpacing>
                                        <FormControl>
                                            <Field
                                                label="Desejo receber novidades por e-mail."
                                                component={Checkbox}
                                                id="receiveNews"
                                                name="receiveNews"
                                                checked={values.receiveNews}
                                                onChange={handleChange}
                                                onBlur={() => this.registerData(values)}
                                            />
                                        </FormControl>
                                    </NewsletterSpacing>
                                    {/* className={errors.email && touched.email ? 'text-input error' : 'text-input'} */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        color="success"
                                        linkTo="/result"
                                    >
                                        Salvar
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