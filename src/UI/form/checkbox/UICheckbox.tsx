import { ChangeEvent, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { ISignInFormInput, ISignUpFormInput } from '@/types/form/form.types';

import styles from './UICheckbox.module.css';

interface UICheckboxProps {
  title: string;
  register: UseFormRegister<ISignInFormInput> | UseFormRegister<ISignUpFormInput>;
}

const UICheckbox = ({ title, register }: UICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useLocation();
  const fieldName = pathname === '/login' ? 'mailing' : 'remember';

  return (
    <div>
      <label
        htmlFor="checkbox"
        className="pl-8 relative inline-block leading-[1] cursor-pointer select-none group/edit"
      >
        <div className="h-8 flex items-center">
          <div
            className={`${styles['checkbox-list']} ${
              isChecked ? 'bg-primary border-primary' : ''
            }`}
          >
            <span className={isChecked ? 'text-white' : 'hidden'}>&#10004;</span>
          </div>
          <input
            {...(register as any)(fieldName, {
              onChange(e: ChangeEvent<HTMLInputElement>) {
                setIsChecked(e.target.checked);
              },
            })}
            checked={isChecked}
            type="checkbox"
            id="checkbox"
            className="hidden"
          />
          <span className="duration-200 group-hover/edit:scale-105">{title}</span>
        </div>
      </label>
    </div>
  );
};

export default UICheckbox;