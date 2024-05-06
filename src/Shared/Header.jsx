import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
          <h3> This is Header </h3>  
          <Link to='/addcoffe'>Add</Link>
          <Link to='/'>Home </Link>
          <Link to='/updatecoffe'>Update</Link>
        </div>
    );
};

export default Header;