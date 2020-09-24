import React from 'react'
import { useHistory } from 'react-router-dom';
import PlannerDays from '../../components/PlannerDays/PlannerDays';
import PlannerMenu from '../../components/PlannerMenu/PlannerMenu';
import {PlannerWeek} from '../../styled/styled'

function PlannerPage() {
    const history = useHistory()

    return (
        <div>
            <PlannerMenu />
            <PlannerWeek>
                <PlannerDays dia={'Domingo'} />
                <PlannerDays dia={'Segunda'} />
                <PlannerDays dia={'Terça'} />
                <PlannerDays dia={'Quarta'} />
                <PlannerDays dia={'Quinta'} />
                <PlannerDays dia={'Sexta'} />
                <PlannerDays dia={'Sábado'} />            
            </PlannerWeek>
        </div>
    )
}

export default PlannerPage;