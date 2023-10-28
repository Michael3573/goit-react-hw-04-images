import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ images, handleOpenModal }) {
  return images.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li
      className={style.item}
      key={id}
      onClick={() => handleOpenModal(id, tags, largeImageURL)}
    >
      <img src={webformatURL} alt={tags} className={style.img} />
    </li>
  ));
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
  onClickHandler: PropTypes.func,
};
