import React from 'react'

const Search = (props) => {
    <form onSubmit={props.onSubmit}>
        <input type='text' name='search' value={props.value} placeholder='Search Theme Park' onChange={props.onChange}> 
        </input>
        <button type='submit'>Submit</button>
    </form>
}

export default Search