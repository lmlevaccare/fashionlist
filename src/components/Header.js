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
      <h1>Designer.Wish.List</h1>
      <h1 style={{ color: "pink" }}>{props.title}</h1>
      <h1>
        <Button
          color="pink"
          Name="Deleted Saved Designer Item? Click Here to Re-Add Deleted Item back to Wish List"
          onClick={onClick}
        />
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
