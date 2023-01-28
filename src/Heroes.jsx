import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Heroes = () => {
    const [pahlawan, setPahlawan] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
  
    const filteredData = pahlawan?.filter(item => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  
    const handleChange = event => {
      setSelectedOption(event.target.value);
    }
  
    const handleSearch = (event) => {
      setSearchValue(event.target.value);
    }
  
    async function getHeroes(){
        // API
        const response = await fetch('https://19104008-mhs.bdv.or.id/api/heroes.php');
        const json = await response.json();
        setPahlawan(json);
    }
    useEffect(() => {
      getHeroes();
    }, []);
  
    return (
      <div>
      <br />
      <div className="container">
        <h2>
          Indonesia's Heroes History
        </h2>
        <button className='btn btn-primary text-center'>
            <Link to='/'>
                Kembali
            </Link>
        </button>
        {/* Search  */}
        <div class="container mb-4">
          <div class="row">
            <div class="col-12" style={{ height: "50px" }} />
            <div class="col-12">
              <div className="filter-list">
                <form>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search Pahlawan"
                      onChange={handleSearch} 
                      value={searchValue}
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Search */}
        {/* dropdown */}
        <select onChange={handleChange} className='btn btn-secondary dropdown-toggle w-100'  id="heroes" name="heroes">
          <option selected disabled value="">Show All Pahlawan ...</option>
          {pahlawan?.map((pahlawan, index) => (
            <option value={index}>{pahlawan.name}</option>
          )) }
        </select>
        <br /><br /><br />
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <td>
                  No
                </td>
                <td>
                  Name
                </td>
                <td>
                  Birth Year
                </td>
                <td>
                  Death Year
                </td>
                <td>
                  Ascension Year
                </td>
                <td>
                  Description
                </td>
              </tr>
            </thead>
            <tbody>
              {!selectedOption && filteredData?.map((pahlawan, index) => (
              <tr key={ index }>
                <td>{index + 1}</td>
                <td className='table-dark'>{ pahlawan.name }</td>
                <td>{ pahlawan.birth_year }</td>
                <td>{ pahlawan.death_year }</td>
                <td>{ pahlawan.ascension_year }</td>
                <td>{ pahlawan.description }</td>
                <td className="text-center"></td>
              </tr>
              )) }
              {selectedOption && filteredData?.map((pahlawan, index) => {
                if (selectedOption == index) {
                  return (
                    <tr key={ index }>
                      <td>{index + 1}</td>
                      <td>{ pahlawan.name }</td>
                      <td>{ pahlawan.birth_year }</td>
                      <td>{ pahlawan.death_year }</td>
                      <td>{ pahlawan.ascension_year }</td>
                      <td>{ pahlawan.description }</td>
                      <td className="text-center"></td>
                  </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
        {/* <div className="mt-3 text-primary" id="loadingBar">
          <div className="spinner-border spinner-border-sm" /> loading
        </div> */}
      </div>
      <br />
      <div className="container-fluid py-2 border-top">
        <div className="container text-secondary">
          <small>
            Copyright by Rachma Wukir Purwitasari
          </small>
        </div>
      </div>
    </div>
  )
}
