import React, { useState, useEffect } from 'react'
import Job from './Job'

const Jobs = ({ data, setKey, keywords }) => {

    const [filterData, setFilterData] = useState([])

  //  const functionSearch = () => {
  //      if(keywords.length > 0) {
  //          const newData = filterData.filter((dat) => {
  //              return dat.position.toLocalLowerCase().includes(keywords)
  //          })
  //          setFilterData(newData)
  //      } else {
  //          setFilterData(data)
  //      }
  //  }

    
    useEffect(() => {
      const modificateData = () => {
        if(keywords) {
            const newData = data.filter((dat) => {
                return keywords.every((key) => {
                    return (
                        dat.role === key ||
                        dat.level === key ||
                        dat.languages.includes(key) ||
                        dat.tools.includes(key)
                    )
                } )            
            })
            setFilterData(newData)
        }else {
            setFilterData(data)
        }
    }
      modificateData()
    }, [keywords])


    return (
        <div className="jobs-container">
            {filterData.map ((dat) => {
                return <Job key={dat.id} data={dat} setKey={setKey} />
            })}
        </div>
    )
    
}

export default Jobs