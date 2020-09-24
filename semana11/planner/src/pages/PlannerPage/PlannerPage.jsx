import React from 'react'
import { useHistory } from 'react-router-dom';
import PlannerDays from '../../components/PlannerDays/PlannerDays';
import PlannerMenu from '../../components/PlannerMenu/PlannerMenu';


function PlannerPage() {
    const history = useHistory()

    return (
        <div>
            <PlannerMenu />
            <div>
                <PlannerDays/>                        
            </div>
        </div>
    )
}

export default PlannerPage;