function SearchBar({

    searchTerm,

    setSearchTerm,

    placeholder

}) {

    return (

        <input

            type="text"

            className="form-control shadow-sm"

            placeholder={placeholder}

            value={searchTerm}

            onChange={(e) =>

                setSearchTerm(

                    e.target.value

                )

            }

        />

    );

}

export default SearchBar;