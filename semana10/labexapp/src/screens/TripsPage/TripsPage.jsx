import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTrips } from '../../hooks/hooks';
import { goSubscribersPage, goTravelRegistrationPage } from '../../router/goToPages';

function TripsPage() {
  const history = useHistory()
  const trips = useTrips()
  
  return (
    <div>  
      {trips.map((item) => {
        return <p key={item.id}>{item.name}</p>
      })}

      <button onClick={() => goTravelRegistrationPage(history)}>Criar novas viagens</button>
      <button onClick={() => goSubscribersPage(history)}>Verificar inscritos</button>
    </div>
  );
}

export default TripsPage;