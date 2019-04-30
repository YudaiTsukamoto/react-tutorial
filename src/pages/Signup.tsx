/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import Layout from '../components/Layout';
import isEmpty from 'lodash.isempty';
import { Form as FormikForm, Field, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Colors } from '../constants/styles';

// ===
// @interface

interface Props extends FormikProps<Values> {}
interface Values {
  name: string;
  email: string;
  password: string;
  confirmation: string;
}

// ===
// @View

const SignUp: React.FC<Props> = ({ errors, touched, validateForm }) => {
  React.useEffect(() => {
    validateForm();
  }, [validateForm]);
  const isSubmitable = !isEmpty(errors);
  return (
    <Layout>
      <Container>
        <h1>Signup</h1>
        <Form>
          <FormItem>
            <FormLabel>Name</FormLabel>
            {touched.name && errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
            <FormField name="name" />
          </FormItem>
          <FormItem>
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            <FormLabel>Email</FormLabel>
            <FormField name="email" autoComplete="username" />
          </FormItem>
          <FormItem>
            {touched.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
            <FormLabel>Password</FormLabel>
            <FormField
              name="password"
              type="password"
              autoComplete="new-password"
            />
          </FormItem>
          <FormItem>
            {touched.confirmation && errors.confirmation && (
              <ErrorMessage>{errors.confirmation}</ErrorMessage>
            )}
            <FormLabel>Confirmation</FormLabel>
            <FormField
              name="confirmation"
              type="password"
              autoComplete="new-password"
            />
          </FormItem>
          <Submit disabled={isSubmitable} type="submit">
            Sign Up!
          </Submit>
        </Form>
      </Container>
    </Layout>
  );
};

// ===
// @Styled

const Container = styled.div({
  maxWidth: 700,
  margin: '0 auto',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 0',
});

const Form = styled(FormikForm)({
  width: '100%',
});

const FormItem = styled.div({
  marginBottom: 20,
});

const FormLabel = styled.label({
  display: 'block',
  marginBottom: 5,
  fontWeight: 700,
});

const ErrorMessage = styled.div({
  marginBottom: 5,
  color: Colors.crimson,
});

const FormField = styled(Field)({
  fontSize: 16,
  width: '100%',
  padding: 8,
  border: `2px solid ${Colors.paleGray}`,
  borderRadius: 6,
});

const Submit = styled.button<{ disabled: boolean }>(({ disabled }) => ({
  appearance: 'none',
  background: disabled ? Colors.paleGray : Colors.turquoiseBlue,
  borderRadius: 6,
  border: 'none',
  color: disabled ? Colors.gray : Colors.white,
  display: 'block',
  fontSize: 20,
  margin: '0 auto',
  padding: 8,
  textAlign: 'center',
  width: '50%',
}));

// ===
// @Container

export default () => {
  const onSubmit = (values: Values) => {
    axios
      .post('http://localhost:3000/api/v1/users', {
        user: {
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.confirmation,
        },
      })
      .then(response => alert(JSON.stringify(response)))
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  const initialValues: Values = {
    name: '',
    email: '',
    password: '',
    confirmation: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8)
      .required('Required'),
    confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'password do not match')
      .required('Required'),
  });

  return (
    <Formik<Values>
      initialValues={initialValues}
      component={SignUp}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};
