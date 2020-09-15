import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useTrips } from '../../hooks/hooks';
import { goSubscribersPage, goTravelRegistrationPage } from '../../router/goToPages';

function TripsPage() {
  const history = useHistory()
  const trips = useTrips()
  
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