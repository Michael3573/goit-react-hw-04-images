import style from './Modal.module.css';
import PropTypes from 'prop-types';
import Load from '../Loader/Loader';

function Modal({ url, tags, hideModal }) {
  window.addEventListener('keydown', hideModal);
  return (
    <div className={style.overlay} onClick={hideModal}>
      <div className={style.modalLoader}>
        <Load />
      </div>
      <div className={style.modal}>
        <img src={url} alt={tags} className={style.modalImg} />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.string,
  hideModal: PropTypes.func,
};
