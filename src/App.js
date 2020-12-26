import React from 'react';
import {HeaderApp} from './components/layout/headerApp'
import {footerApp} from './components/layout/footer'
import {mainApp} from './components/layout/main/main'

const App = ()=>{
    return(
        <div>
            <HeaderApp/>
                <mainApp/>
            <footerApp/>      
        </div>
    ) 
}

export default App;
