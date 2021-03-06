import React, { useState } from "react";

function Search({ setSearch }) {
    const[input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearch(input)
        setInput("")
    }


    return (
        <form className="search-food" onSubmit={handleSubmit}>
          <label htmlFor="search">Search your favorite food</label>
          <input
            type="text"
            id="search"
            placeholder="search food"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Search!</button>
        </form>
      );
}
    
export default Search
