import React from 'react';
import Form from '../../components/Form/FormApply';
import Header from '../../components/Header/Header';
import {SecondTitle} from '../../styled/styled'


function PublicPage() {


  return (
    <div>
      <Header />
      <SecondTitle>Formulário de Cadastro</SecondTitle>
      <Form/>
    </div>
  );
}

export default PublicPage;
