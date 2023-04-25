import React, {Fragment} from 'react'
import './App.css'
import './index.css'
import ATab from './Components/ATab'
import MTabs from './MobileComponents/MTabs'


const App: React.FC = () => {

    return (
        <Fragment>
            <ATab/>
            <MTabs />
        </Fragment>
    )
}

export default App