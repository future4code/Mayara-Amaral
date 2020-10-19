import React from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PlannerDays from '../../components/PlannerDays/PlannerDays';
import PlannerMenu from '../../components/PlannerMenu/PlannerMenu';


function PlannerPage() {
    const history = useHistory()

    return (
        <div>
            <Header />
            <PlannerMenu />
            <div>
                <PlannerDays/>                        
            </div>
            <Footer />
        </div>
    )
}

export default PlannerPage;