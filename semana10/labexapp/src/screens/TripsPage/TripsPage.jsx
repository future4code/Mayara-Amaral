import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useTrips } from '../../hooks/hooks';
import { goLoginPage, goSubscribersPage, goTravelRegistrationPage, goTripsPage } from '../../router/goToPages';

function TripsPage() {
  const token = window.localStorage.getItem("token")
  const history = useHistory()
  const trips = useTrips()

  useEffect(() => {
    if(token) {
      goTripsPage(history)
    } else {
      goLoginPage(history)
    }
  })

  return (
    <div>
      <Header />
      <div>
        {trips.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </div>
      <button onClick={() => goTravelRegistrationPage(history)}>Criar novas viagens</button>
      <button onClick={() => goSubscribersPage(history)}>Verificar inscritos</button>
    </div>
  );
}

export default TripsPage;