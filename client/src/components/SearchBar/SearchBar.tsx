import React, { useState } from 'react';
import './SearchBar.css';
import { InputTextField } from '../InputTextField/InputTextField';
import { Link, useNavigate } from 'react-router-dom';
import { Skimmer } from '../icons/Skimmer';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();
    navigate(`/search?searchValue=${searchValue}`);
  };

  const onChange: any = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <form onSubmit={submitHandler} className="SearchBar">
      <InputTextField
        className="SearchBar-text-field"
        placeholder="Search recipe"
        onChange={onChange}
      />
      <Link to={`/search?searchValue=${searchValue}`}>
        <div className="lupe">
          <Skimmer width={34} height={34} />
        </div>
      </Link>
    </form>
  );
};

export { SearchBar };
