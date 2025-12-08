import { useLocation } from 'react-router-dom';

import './UIButton.scss';

interface UIButtonProps {
  title: string;
  isSubmit: boolean;
  isCompasionPasswords?: boolean;
}

const UIButton = ({ title, isSubmit, isCompasionPasswords }: UIButtonProps) => {
  const { pathname } = useLocation();
  const showPasswordError = pathname === '/register' && !isCompasionPasswords;

  return (
    <div className="ui-button-wrapper">
      <button type={isSubmit ? 'submit' : 'button'} className="ui-button">
        {title}
      </button>
      {showPasswordError && (
        <p className="ui-button-error">Введённые пароли не совпадают!</p>
      )}
    </div>
  );
};

export default UIButton;