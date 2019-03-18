// Modules
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Containers
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar'

// Components
import Container from '../../components/Container/Container';
import FormControl from '../../components/FormControl/FormControl';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import Checkbox from '../../components/Checkbox/Checkbox';
import Interest from '../../components/Interest/Interest';

// Types
import { FETCH_REGISTER_FORM } from '../../redux/form/types';

// DataMock
import dataMock from '../../utils/dataMock';

// Validation
import validation from './validations';

const RegisterWrapper = styled('div')`
    display: block;
`

const NewsletterSpacing = styled('div')`
    margin: 25px 0;
`

const ContentWrapper = styled('div')`
    display: flex;
    align-items: stretch;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`

const ContentWrapperSide = styled('div')`
    width: 300px;
    padding-top: 40px;
    padding-bottom: 40px;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`

const ContentWrapperMain = styled('div')`
    width: calc(100% - 300px);
    padding-top: 40px;
    padding-bottom: 30px;
    background: #f9f9f9;
    min-height: calc(100vh - 140px);
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`

class Register extends Component {
    state = {
        redirect: false
    }

    registerData = (data) => {
        const { props: { dispatch } } = this;

        dispatch({
            type: FETCH_REGISTER_FORM.SUCCESS,
            data
        })
    }

    render() {
        const { state, props: { formReducer } } = this;
        const { register } = formReducer;

        if (state.redirect) {
            return <Redirect to='/result'/>;
        }

        return (
            <RegisterWrapper>
                <Header />
                <ContentWrapper>
                    <ContentWrapperSide>
                        <Container>
                            <Sidebar />
                        </Container>
                    </ContentWrapperSide>
                    <ContentWrapperMain>
                    <Container>
                        <Formik
                            initialValues={register}
                            onSubmit={(values, { setSubmitting }) => {
                                this.registerData(values)

                                this.setState({
                                    redirect: true
                                })

                                setTimeout(() => {
                                    setSubmitting(false);
                                }, 500);
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
                                    handleSubmit,
                                    isValid
                                } = form;

                                return (
                                    <Form>
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
                                                id="radioGroup"
                                                parentValue={values.radioGroup}
                                                name="radioGroup"
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
                                            <Interest
                                                parentValue={values.interest}
                                                id="interest"
                                                name="interest"
                                                type="text"
                                                placeholder="Digite seu interesse e aperte Enter"
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
                                        <Button
                                            type="button"
                                            color="success"
                                            size='lg'
                                            disabled={!isValid}
                                            onClick={handleSubmit}
                                        >
                                            {isSubmitting
                                                ?
                                                'Carregando ...'
                                                :                                                
                                                'Salvar'
                                            }
                                        </Button>
                                    </Form>
                                );
                            }}
                            </Formik>
                        </Container>
                    </ContentWrapperMain>
                </ContentWrapper>
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