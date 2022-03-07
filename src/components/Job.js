import React, { useEffect, useState } from 'react'


const Job = (props)=> {

    const {
        id,
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = props.data

    let keys = [role, level, ...languages, ...tools]


    const [icon, setIcon] = useState("")

    useEffect (() => {
        const svgs = () => {
            import(`${logo}`).then((dat) => {
                setIcon(dat.default)
            })
        } 
        svgs()
    },[logo])
// 

    return (
        <div className= {featured ? "job-container job-container--border" : "job-container"}>

            <div className="logo">
                <img src={icon} alt="" />
            </div>

            <div className="job-section-one">

                <div className="company">
                    <span className="company-name">{company}</span>
                    {props.data.new && <span className="company-new">NEW!</span>}
                    {props.data.featured &&<span className="company-featured">FEATURED</span>}
                </div>

                <div className="job-position">{position}</div>

                <div className="details">
                    <span>{postedAt}</span>
                    <span> • </span>
                    <span>{contract}·</span>
                    <span> • </span>
                    <span>{location}</span>
                
                </div>

            </div>

            <div className="job-section-two">
                {keys.map((key, id) => (
                    <span className='roles' onClick={() => props.setKey(key)} key={id}>
                        {key}
                    </span>
                ))}
            </div>

        </div>
    ) 
}

export default Job