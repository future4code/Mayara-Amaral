import React from 'react';
import Form from '../../components/Form/FormApply';
import Header from '../../components/Header/Header';
import { useTrips } from '../../hooks/hooks';

function PublicPage() {
  const trips = useTrips()

  const tripsOptions = trips.map((trip) => {
    return <option key={trip.id}>{trip.name}</option>
  })

  return (
    <div>
      <Header />      
      Public Page
      <Form 
        nome={'Nome: '}
        idade={'Idade: '}
        porque={'Porque você deveria ser escolhido: '}
        profissao={'Profissão: '}
        pais={'País de origem: '}
        viagem={'Viagem: '}
        opcoes={tripsOptions}
        />
    </div>
  );
}

export default PublicPage;
