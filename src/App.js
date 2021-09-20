import { useState } from 'react';
import List from './List';

const App = () =>  {
  
  const [showData, setShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(Array.from(Array(20).keys(), n => n + 1));
  
    return (
      <div className="container">
            {showData ? 
              <List items = {items} setItems={setItems} 
                    isLoading = {isLoading} setIsLoading = {setIsLoading}
              />  
            :  
              <div className='button-wrapper'> 
                <button className='button-style' onClick={()=>{setShowData(true)}}>Show Data</button>
              </div>  
            }
      </div>
    );
  
}

export default App;