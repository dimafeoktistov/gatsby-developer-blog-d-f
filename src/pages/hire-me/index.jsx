import React from 'react';
import Helmet from 'react-helmet';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import Recaptcha from 'react-recaptcha';

import Api from '../../utils/api';

import Layout from '../../components/Layout';
import config from '../../../data/SiteConfig';
import Container from '../../components/Container';

import styles from './hire-me.module.scss';

class HireMe extends React.Component {
  validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, '*Your name is probably longer then that!')
      .max(30)
      .required('*Full name is required!'),
    email: yup
      .string()
      .email('*Invalid e-mail adress!')
      .required('*E-mail is required!'),
    message: yup
      .string()
      .min(5, '*Your message probably is too short!')
      .required('*Message is required!'),
    recaptcha: yup.string().required('check captcha'),
  });

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const scripts = Array.from(document.getElementsByTagName('script'));
    const script = scripts.filter(el => el.src === 'https://www.google.com/recaptcha/api.js')[0];
    document.body.removeChild(script);
  }

  showMessage = () => {};

  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <main style={{ backgroundColor: '#f2f2f2' }}>
          <div style={{ marginBottom: 50 }} />
          <Container>
            <h1 style={{ marginTop: 60, paddingTop: 20, textAlign: 'center' }}>Hire me!</h1>
            <p style={{ textAlign: 'center' }}>
              If you have any question or have any collaboration to offer feel free to drop me a
              message through the form below!
            </p>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                message: '',
                recaptcha: '',
              }}
              validationSchema={this.validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                try {
                  await Api.post(values);
                  setSubmitting(false);
                  resetForm();
                  setStatus({ msg: 'Message has been sent!' });
                } catch (error) {
                  setSubmitting(false);
                  setStatus({ msg: 'Something went wrong...' });
                }
              }}
            >
              {({
                isSubmitting, dirty, handleReset, status, setFieldValue,
              }) => (
                <Form className={styles.form}>
                  <div style={{ padding: 20 }}>
                    <div>
                      <label htmlFor="fullName" className={styles.label}>
                        Please enter your full name:
                      </label>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        className={styles.textInput}
                      />
                      <ErrorMessage name="fullName" className={styles.error} component="div" />
                    </div>

                    <div>
                      <label htmlFor="email" className={styles.label}>
                        Please enter your email:
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={styles.textInput}
                        placeholder="Email"
                      />
                      <ErrorMessage name="email" className={styles.error} component="div" />
                    </div>

                    <div>
                      <label htmlFor="message" className={styles.label}>
                        Please enter your message:
                      </label>
                      <Field
                        type="textarea"
                        className={styles.textArea}
                        name="message"
                        component="textarea"
                        placeholder="Message"
                      />
                      <ErrorMessage name="message" className={styles.error} component="div" />
                    </div>
                    <Recaptcha
                      name="recaptcha"
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      render="explicit"
                      verifyCallback={(response) => {
                        setFieldValue('recaptcha', response);
                      }}
                      onloadCallback={() => {
                        console.log('done loading!');
                      }}
                    />
                    <ErrorMessage name="recaptcha" className={styles.error} component="div" />

                    {status && status.msg && <div>{status.msg}</div>}

                    <div style={{ display: 'flex' }}>
                      <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Cancel
                      </button>
                      <button type="submit" disabled={isSubmitting}>
                        Send
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Container>
        </main>
      </Layout>
    );
  }
}

export default HireMe;
