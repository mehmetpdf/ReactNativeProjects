/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Body, Button, Title, Content, Input, Item, Text } from 'native-base';
import {Formik} from "formik";
import * as Yup from 'yup';

type Props = {};
export default class App extends Component<Props> {

    _handleSubmit = (values) => {
        alert(JSON.stringify(values))
    };

  render() {
    return (
        <Container>
          <Header>
            <Body>
              <Title>Header</Title>
            </Body>
          </Header>
          <Formik
            initialValues={{email: '', password: '', passwordConfirm: ''}}
            onSubmit={this._handleSubmit}
            validationSchema={
                Yup.object().shape({
                    email: Yup
                        .string()
                        .email('gecersiz format')
                        .required('zorunlu alan'),
                    password: Yup
                        .string()
                        .min(6, '6 Karakter Girilmeli')
                        .required('zorunlu alan'),
                    passwordConfirm: Yup
                        .string()
                        .oneOf([Yup.ref('password')], ' Sifreler Ayni Olmali')
                })
            }
          >
              {({values, handleChange, handleSubmit, errors, touched, setFieldTouched, isValid}) => (
                  <Content style={{padding: 10}}>

                      <Item error={errors.email && touched.email}>
                          <Input
                              onChangeText={handleChange('email')}
                              value={values.email}
                              onBlur={() => setFieldTouched('email')}
                              placeholder='e-mail'
                              keyboardType={'email-address'}
                          />
                          {(errors.email && touched.email) && <Text style={{color: 'red'}}>{errors.email}</Text> }

                      </Item>

                      <Item error={errors.password && touched.password}>
                          <Input
                              onChangeText={handleChange('password')}
                              value={values.password}
                              onBlur={() => setFieldTouched('password')}
                              placeholder='password'
                              secureTextEntry={true}
                          />
                          {(errors.password && touched.password) && <Text style={{color: 'red'}}>{errors.password}</Text> }

                      </Item>

                      <Item error={errors.passwordConfirm && touched.passwordConfirm}>
                          <Input
                              onChangeText={handleChange('passwordConfirm')}
                              value={values.passwordConfirm}
                              onBlur={() => setFieldTouched('passwordConfirm')}
                              placeholder='passwordConfirm'
                              secureTextEntry={true}
                          />
                          {(errors.passwordConfirm && touched.passwordConfirm) && <Text style={{color: 'red'}}>{errors.passwordConfirm}</Text> }

                      </Item>

                      <Button
                          block
                          disabled={!isValid}
                          onPress={handleSubmit}
                          style={{marginTop: 10}}
                      >
                          <Text>Primary</Text>
                      </Button>
                  </Content>
              )}
          </Formik>
        </Container>
    );
  }
}
