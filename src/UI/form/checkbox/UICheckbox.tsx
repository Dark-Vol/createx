import { ChangeEvent, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { ISignInFormInput, ISignUpFormInput } from '@/types/form/form.types';

import './UICheckbox.scss';

interface UICheckboxProps {
  title: string;
  register: UseFormRegister<ISignInFormInput> | UseFormRegister<ISignUpFormInput>;
}

const UICheckbox = ({ title, register }: UICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useLocation();

  return (
    <div>
      <label htmlFor="checkbox" className="ui-checkbox-label">
        <div className="ui-checkbox-container">
          <div className={`ui-checkbox-list ${isChecked ? 'ui-checkbox-checked' : ''}`}>
            <span className={isChecked ? 'ui-checkbox-checkmark' : 'ui-checkbox-checkmark-hidden'}>&#10004;</span>
          </div>
          <input
            {...(pathname === '/login'
              ? (register as UseFormRegister<ISignInFormInput>)('mailing', {
                  onChange(e: ChangeEvent<HTMLInputElement>) {
                    setIsChecked(e.target.checked);
                  },
                })
              : (register as UseFormRegister<ISignUpFormInput>)('remember', {
                  onChange(e: ChangeEvent<HTMLInputElement>) {
                    setIsChecked(e.target.checked);
                  },
                }))}
            checked={isChecked}
            type="checkbox"
            id="checkbox"
            className="ui-checkbox-input"
          />
          <span className="ui-checkbox-text">{title}</span>
        </div>
      </label>
    </div>
  );
};

export default UICheckbox;