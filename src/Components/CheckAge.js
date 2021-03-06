
import React from 'react'
import { Link } from 'react-router-dom'

import { getRandomCocktail } from '../lib/api'
import useFetch from '../utils/useFetch'


const CheckAge = () => {
  const { data: cocktailOTD, loading } = useFetch(getRandomCocktail)
  // console.log(cocktailOTD)

  return (
    <>
    <div className="transparent-bg">
      <div className="drink-responsibly">
        <h2 className="drink-responsibly-header">Please drink responsibly</h2>
        <p>Please confirm you are above the legal drinking age in your country.</p>
        <div className="button-div">

          <Link to="/home"><button type="button" className="yes-no">Yes</button></Link>

          <a href="https://www.party0.org/50-fun-things-to-do-without-alcohol/" 
          className="yes-no"
          target="_blank"
          rel="noopener noreferrer"><button type="button" className="yes-no">No</button></a>
        </div>
      </div>
    </div>

    
    {loading ? 
    console.log('loading')
    :
    <div className="section-wrapper">
      <h1>Cocktail of the Day</h1>
      <div className="cocktail-otd">
        <h2>{cocktailOTD.drinks[0].strDrink}</h2>
        <Link to={`/cocktails/${cocktailOTD.drinks[0].idDrink}`}>
        <img className="img-large" src={cocktailOTD.drinks[0].strDrinkThumb} alt={cocktailOTD.drinks[0].strDrink}/>
        </Link>
      </div>
    </div>
}
    </>
  )
}

export default CheckAge

