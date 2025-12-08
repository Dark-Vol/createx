import { Link } from 'react-router-dom';

import './Modal.scss';

const Modal = () => {
  return (
    <div className="modal-links">
      <Link to="login" className="modal-link">
        Log in
      </Link>
      <span className="modal-separator">/</span>
      <Link to="register" className="modal-link">
        Register
      </Link>
    </div>
  );
};

export default Modal;