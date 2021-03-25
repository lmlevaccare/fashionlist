import PropTypes from "prop-types";

const Button = ({ color, Name,onClick}) => {

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
      
    >
      {Name}
    </button>
  );
};

Button.defaultProps = {
  color: "pink",
};

Button.propTypes = {
 Name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;