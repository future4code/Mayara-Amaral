import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FormCreateTrip from '../../components/Form/FormCreateTrip';
import Header from '../../components/Header/Header';
import { goLoginPage, goTravelRegistrationPage } from '../../router/goToPages';

function TravelRegistrationPage() {
  const token = window.localStorage.getItem("token")
  const history = useHistory()

  useEffect(() => {
    if(token){
      goTravelRegistrationPage(history)
    } else {
      goLoginPage(history)
    }
  })

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