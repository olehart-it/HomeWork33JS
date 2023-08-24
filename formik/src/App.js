import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Поле "Имя" обязательно'),
  email: Yup.string()
    .email('Введите свой Email')
    .required('Поле "Email" обязательно'),
  phone: Yup.string()
    .matches(/^\d{12}$/, 'Телефон должен содержать 12 цифр')
    .required('Поле "Телефон" обязательно'),
});

const App = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const [dataSubmitted, setDataSubmitted] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    setDataSubmitted(true);
  };

  return (
    <div>
      <h1>Форма</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Имя</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="phone">Телефон</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <button type="submit">Отправить</button>
          {dataSubmitted && <p>Данные приняты</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default App;
