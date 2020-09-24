import React from 'react'
import {PlannerDay} from '../../styled/styled'

function PlannerDays(props) {
    return (
        <PlannerDay>
            <h3>{props.dia}</h3>
        </PlannerDay>
    )
}

export default PlannerDays;