
import React, { useState } from 'react'
import './SearchBar.css'
import lupe from '../../assets/lupe.svg'
import { InputTextField } from '../InputTextField/InputTextField'
import { Link, useNavigate } from 'react-router-dom'

const SearchBar: React.FC = () => {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("")

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault()
    navigate(`/search?name=${searchValue}`);
  }

  return (
    <form onSubmit={submitHandler} className='SearchBar'>
      <InputTextField className="SearchBar-text-field" placeholder="Search recipe" onChange={(e) => setSearchValue(e.target.value)}/>
      <Link to={`/search?name=${searchValue}`}>
        <div className='lupe'>
          <img src={lupe} alt="magnifying glass"/>
        </div>
      </Link>
    </form>
  )
}

export {SearchBar}