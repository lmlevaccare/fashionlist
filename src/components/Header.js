import PropTypes from "prop-types";
import Button from './Button';

const Header = (props) => {
  const onClick = (e) =>  {
    e.preventDefault()
    props.saveLastbtn()
    console.log(e)
  };

  return (
    <header className="header">
      <h1 style={{ color: "pink" }}>{props.title}</h1>
      <Button color="pink" Name="Add" onClick={onClick}/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
