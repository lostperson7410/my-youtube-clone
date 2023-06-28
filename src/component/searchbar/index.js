import React from "react";
import { SearchBarStyled } from "./styled";
import {FiSearch} from 'react-icons/fi'


const SearchBar = ()=>{
    return(
        <SearchBarStyled>
            <input className="shit" type="search" placeholder="Search"/>
            <div className="label-icon">
                <label>
                    <FiSearch/>
                </label>
            </div>
        </SearchBarStyled>
    );
}

export default SearchBar;