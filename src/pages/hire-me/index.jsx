import React from 'react';
import Helmet from 'react-helmet';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';

import Layout from '../../components/Layout';
import config from '../../../data/SiteConfig';
import Container from '../../components/Container';

import styles from './hire-me.module.scss';

class HireMe extends React.Component {
  validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, 'Your name is probably longer then that')
      .required('This field is required!'),
    email: yup
      .string()
      .email('Invalid e-mail adress')
      .required('E-mail is required to get back to you'),
    message: yup
      .string()
      .min(5, 'This message probably is to short')
      .required('Message is required'),
  });

  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <main>
          <div style={{ marginBottom: 80 }} />
          <Container>
            <Formik
              initialValues={{ fullName: '', email: '', message: '' }}
              validationSchema={this.validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                isSubmitting, dirty, handleReset, errors, touched,
              }) => (
                <Form>
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

                  <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
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
