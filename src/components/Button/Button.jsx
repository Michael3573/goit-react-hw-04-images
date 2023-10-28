import PropTypes from 'prop-types';
import style from './Button.module.css';

function Button({ handlePageIncrement }) {
  return (
    <button
      className={style.button}
      type="button"
      onClick={handlePageIncrement}
    >
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  handlePageIncrement: PropTypes.func,
};
