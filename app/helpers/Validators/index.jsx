import * as yup from 'yup';

const EMAIL = yup.string()
    .matches(/^[+\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid email')
    .required('Email is required')
    .max(150, 'Email must be maximum 150 characters');

const PASSWORD = (name) => yup.string()
    .max(16, `${name} should not contain more than 16 characters`)
    .min(8, `${name} should be of minimum 8 characters length`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, `${name} should contain alteast one uppercase, lowercase, number & special characters`)
    .required(`${name} is required`);

const CONFIRM_PASSWORD = yup.string()
    .required('Confirm password is required')
    .min(8, 'Confirm password must be minimum 8 characters')
    .max(18, 'Confirm password must be maximum 18 characters ')
    .oneOf([yup.ref('password'), null], 'Both passwords must match');

const NAME = (name) => yup.string()
    .matches(/^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/, `${name} is not valid`)
    .required(`${name} is required`)
    .nullable();

const STRING_REQUIRED = (name, length = 100) => yup.string()
    .trim().required(`${name} is required`)
    .max(length, `${name} should have maximum ${length} characters`);

const PHONE_NUMBER = (name, isRequired = true) => {
    return (isRequired ?
        yup.string()
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, `Invalid ${name}`)
            .min(10, `${name} should be minimum 10 digits`)
            .max(16, `${name} should be maximum 16 digits`)
            .required(`${name} is required`)
            .nullable()
        : yup.string()
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, `Invalid ${name}`)
            .min(10, `${name} should be minimum 10 digits`)
            .max(16, `${name} should be maximum 16 digits`)
            .optional()
            .nullable());
}

export const RegisterValidator = yup.object({
    firstName: NAME('First name'),
    lastName: NAME('Last name'),
    email: EMAIL,
    phone: PHONE_NUMBER('Phone number'),
    companyName: STRING_REQUIRED('Company name'),
    password: PASSWORD('Password'),
    password_confirmation: CONFIRM_PASSWORD,
});

export const LoginValidator = yup.object({
    email: EMAIL,
    password: PASSWORD('Password'),
    rememberMe: yup.bool().notRequired(),
});

export const ChangePasswordValidtor = yup.object({
    old_password: PASSWORD('Old password'),
    password: PASSWORD('New password'),
    password_confirmation: CONFIRM_PASSWORD
});

export const ForgotPasswordValidator = yup.object({
    email: EMAIL,
});