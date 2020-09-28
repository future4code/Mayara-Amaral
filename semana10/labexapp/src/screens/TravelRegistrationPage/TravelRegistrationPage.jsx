import React from 'react';
import FormCreateTrip from '../../components/Form/FormCreateTrip';
import Header from '../../components/Header/Header';

function TravelRegistrationPage() {
  return (
    <div>
      <Header />      
      TravelRegistrationPage
      <FormCreateTrip 
        nome={'Nome: '}
        planeta={'Planeta: '}
        descricao={'Descrição: '}
        duracao={'Duração em dias: '}
        data={'Data: '}        
      />
    </div>
  );
}

export default TravelRegistrationPage;