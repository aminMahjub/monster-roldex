import './search-box-component.css';

const SearchBox = ({ className, onSearchChange, placeholder }) => {
    return (
        <input 
            type="search"
            className={className}
            placeholder={placeholder}
            onChange={onSearchChange}
        />
    )
}

export default SearchBox;