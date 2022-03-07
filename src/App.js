import data from './data.json'
import Jobs from './components/Jobs'
import { useState } from 'react'
import './App.css';
import Header from './components/Header'
//import Search from './components/Search'
// import Job from './components/Job'


function App() {

  const [filterKeywords, setFilterKeywords] = useState([]);

  //const searchKeyword = (data) => {
  //  setFilterKeywords(data)
  //}

  const aggFilterKey = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data])
    }
  }

  const deleteKeywords = (data) => {
    const newKeyword = filterKeywords.filter((key) => key !== data)
      setFilterKeywords(newKeyword)   
  }

  const clearAll = () => {
    setFilterKeywords([])
  }
  return (
    <div>
      <div className='header'></div>

        {filterKeywords.length > 0 && (
          <Header 
            keywords={filterKeywords} 
            removeKeywords={deleteKeywords} 
            clear={clearAll}/>
        )}
        
        <Jobs 
          keywords={filterKeywords} 
          data={data} 
          setKey={aggFilterKey} />      
    </div>
    
  );
}

export default App;
