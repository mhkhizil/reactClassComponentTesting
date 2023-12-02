import { Component } from "react";
import '../searchBar/search-box.style.css';
class SearchBox extends Component {
  render() {
    const {
      onSearchChange,
      placeholder = "search",
      className = "search-box",
    } = this.props;
    return (
      <input
        onChange={onSearchChange}
        className={className}
        type="search"
        placeholder={placeholder}
      />
    );
  }
}
export default SearchBox;
