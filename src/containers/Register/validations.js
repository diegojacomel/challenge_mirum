// Modules
import * as Yup from 'yup';

const validation = Yup.object().shape({
    firstName: Yup.string()
        .required('Campo obrigatório')
        .max(20, 'O nome não pode ter mais de 20 caracteres'),
    lastName: Yup.string()
        .required('Campo obrigatório'),
    email: Yup.string()
        .email('O e-mail digitado não é válido')
        .required('Campo obrigatório'),
    phone: Yup.string()
        .required('Campo obrigatório'),
    uf: Yup.string()
        .required('Campo obrigatório'),
    country: Yup.string()
        .required('Campo obrigatório'),
    addressType: Yup.string()
        .required('Campo obrigatório'),
    address: Yup.string()
        .required('Campo obrigatório')
})

export default validation;