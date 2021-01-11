import React from 'react';
import Attribution from './Attribution/Attribution';
import Banner from './Banner/Banner';
import Todo from './Todo/Todo';

const App = () => {
    
    return (
        <React.Fragment>
            <Banner/>
            <Todo/>
            <Attribution/>
        </React.Fragment>
    );
}

export default App;
