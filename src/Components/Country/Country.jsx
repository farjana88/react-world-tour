
import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    // const passWithParams = () => handleVisitedCountry(country)
    

    return (
        <div className={`Country ${visited? 'visited':'non-visited'}`}>
            <h3 style={{color: visited? 'purple' :'black'}}>Name:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area:{area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {
                visited? 'I have visited this country.': 'I want to visit'
            }
        </div>
    );
};

export default Country;


















// import { useState } from 'react';
// import './Country.css';

// const Country = ({country, handleVisitedCountry}) => {
//    const {name, flags, population, area, cca3} = country
//    const [visited, setVisited] = useState(false)

//    const handleVisited = () => {
//     setVisited(!visited)
//    }

//    const passWithParams = () => handleVisitedCountry(country)
   

// // console.log(country)
//     return (
//         <div className={`Country ${visited && 'visited'}`}>
//             <h3>Name: {name?.common}</h3>
//             <img src={flags.png} alt="" />
//             <p>Population: {population}</p>
//             <p>Area:{area}</p>
//             <p><small>Code: {cca3}</small></p>
//             <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
//             <br />
//         <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
//            {visited ? 'I have visited this country' : 'I want to visit'}
//         </div>
//     );
// };

// export default Country;