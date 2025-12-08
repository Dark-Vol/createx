import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalForm from '@components/forms/ModalForm';
import { IModalProps } from '@/types/modal.types';

import './ModalWrapper.scss';

const ModalWrapper = ({ isOpenModal, setIsOpenModal }: IModalProps) => {
  const navigate = useNavigate();
  const [isMouseDownElemModal, setIsMouseDownElemModal] = useState(false);
  const [isMouseUpElemModal, setIsMouseUpElemModal] = useState(false);

  const handleCloseModal = () => {
    if (!isMouseDownElemModal || !isMouseUpElemModal) return;
    setIsOpenModal(false);
    navigate('');
    setIsMouseDownElemModal(false);
    setIsMouseUpElemModal(false);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('modal')) return;
    setIsMouseDownElemModal(true);
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('modal')) return;
    setIsMouseUpElemModal(true);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleCloseModal}
      className={isOpenModal ? 'modal' : 'modal-hidden'}
    >
      <ModalForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default ModalWrapper;