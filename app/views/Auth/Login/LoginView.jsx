import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MuiBox, MuiGrid, MuiLink, MuiTypography } from 'components';
import MuiInputField from 'components/Input';
import MuiPassowrdField from 'components/PasswordInput';
import MuiButton from 'components/Buttons';
import { Formik } from 'formik';
import { LoginValidator } from 'helpers';
import { AdminAuthService } from 'services';
import { isSuccess } from 'utils';
import { useHistory } from 'react-router-dom';

function LoginView() {

    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const onSubmitForm = (values, actions) => {
        history.push('/admin/dashboard')
        // actions.setSubmitting(true);

        // AdminAuthService.login(values).then((resp) => {
        //     if (isSuccess(resp)) {
        //         // 
        //     }
        // })
    }

    return (
        <MuiBox className='authPageMainWrap'>
            <Formik initialValues={form} enableReinitialize onSubmit={onSubmitForm} validationSchema={LoginValidator}>
                {(props) => (
                    <MuiBox onSubmit={onSubmitForm} component='form' autoComplete='off' autoCorrect='off' className='authPageCntntWrap'>
                        <MuiGrid container spacing={2}>
                            <MuiGrid item xs={12} style={{ paddingTop: 0 }}>
                                <MuiTypography variant='h5' className='formTitle' align='center'>Login your account</MuiTypography>
                            </MuiGrid>
                            <MuiGrid item xs={12} mb={1}>
                                <MuiBox className='fieldMainWrap'>
                                    <MuiBox component='label'>Email Id</MuiBox>
                                    <MuiInputField
                                        placeholder='Email Id'
                                        name="email"
                                        onChange={props.handleChange}
                                        value={props.values.email || ''}
                                        onBlur={props.handleBlur}
                                        error={props.touched.email && !!props.errors.email}
                                        helperText={props.touched.email ? props.errors.email : ''}
                                    />
                                </MuiBox>
                            </MuiGrid>
                            <MuiGrid item xs={12} mb={1}>
                                <MuiBox className='fieldMainWrap'>
                                    <MuiBox component='label'>Password</MuiBox>
                                    <MuiPassowrdField
                                        name='password'
                                        placeholder='Password'
                                        onChange={props.handleChange}
                                        value={props.values.password || ''}
                                        onBlur={props.handleBlur}
                                        error={props.touched.password && !!props.errors.password}
                                        helperText={props.touched.password ? props.errors.password : ''}
                                    />
                                </MuiBox>
                            </MuiGrid>
                            <MuiGrid item xs={12}>
                                <MuiTypography className='formTextLinkWrap' align='right'>
                                    <MuiLink to='/forget-password' component={Link}>Forget password?</MuiLink>
                                </MuiTypography>
                            </MuiGrid>
                            <MuiGrid item xs={12} mb={1}>
                                <MuiButton type="submit" loading={props.isSubmitting} disabled={!props.isValid} className='primaryBtnWrap' fullWidth>
                                    SUBMIT
                                </MuiButton>
                            </MuiGrid>
                            <MuiGrid item xs={12}>
                                <MuiTypography className='formTextLinkWrap' align='center'>
                                    Don’t have account? <MuiLink to='/register' component={Link}>Register</MuiLink>
                                </MuiTypography>
                            </MuiGrid>
                        </MuiGrid>
                    </MuiBox>
                )}
            </Formik>
        </MuiBox>
    )
}

export default LoginView