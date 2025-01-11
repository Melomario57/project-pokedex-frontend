import logo from "../images/klipartz.com.png"
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

function Header ({ onSearch,onClear }){
  return(
  <header className="header">
    <img src={logo} alt="logo" className="header_img"/>
    <SearchBar onSearch={onSearch} onClear={onClear}/>
    <Link className="header_link" to="/">Home</Link>
  </header>
  )
}

export default Header;