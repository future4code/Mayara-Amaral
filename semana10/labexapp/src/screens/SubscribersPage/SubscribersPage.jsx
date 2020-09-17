import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../../components/Header/Header';
import BaseUrl from '../../const-requests/const-requests';
import { useTrips, useInputValue } from '../../hooks/hooks';
import { RenderSubscribers } from '../../components/RenderSubscribers/RenderSubscribers';
import { useHistory } from 'react-router-dom';
import {goSubscribersPage , goLoginPage} from '../../router/goToPages'


function SubscribersPage() {
  const token = window.localStorage.getItem("token")
  const history = useHistory()

  useEffect(() => {
    if(token){
      goSubscribersPage(history)
    } else {
      goLoginPage(history)
    }
  })

  const trips = useTrips()
  const tripsOptions = trips.map((trip) => {
    return <option value={trip.id} key={trip.id}>{trip.name}</option>
  })

  const [trip, setTrip] = useInputValue()

  const [renderTrip, setRenderTrip] = useState()

  const requestDetails = () => axios.get(`${BaseUrl}/trip/${trip}`, {
    headers: {
      auth: token
    }
  })
  .then(res => {
    console.log(res)
    setRenderTrip(res.data.trip)
  }).catch(err => {
    console.log(err)
  })


  return (
    <div>
      <Header />      
      SubscribersPage
      <div>

        <select value={trip} onChange={setTrip}>
          {tripsOptions}
        </select>
        <button onClick={() => requestDetails()}>Selecionar viagem</button>
        
      </div>
      
      {renderTrip ? <RenderSubscribers renderTrip={renderTrip} /> : "" }

     
    </div>
  );
}

export default SubscribersPage;