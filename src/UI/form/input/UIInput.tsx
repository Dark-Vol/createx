import { useEffect, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import EyeCloseIcon from '@/assets/icons/eye-close.svg?react';
import EyeOpenIcon from '@/assets/icons/eye-open.svg?react';
import useValidField from '@/hooks/useValidField';
import { ISignInFormInput, ISignUpFormInput } from '@/types/form/form.types';

import './UIInput.scss';

interface UIInputProps {
  placeholderText: string
  typeInput: string
  isRequired?: boolean
  nameInput: string
  register: UseFormRegister<ISignInFormInput> | UseFormRegister<ISignUpFormInput>
  errors: FieldErrors<ISignInFormInput> | FieldErrors<ISignUpFormInput>
}

const UIInput = ({placeholderText, typeInput, isRequired, nameInput, register, errors}: UIInputProps) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisitField, setIsVisitField] = useState(false);
  const [isValidField, setIsValidField] = useState(false);

  const handleClickPass = () => {
    setIsVisiblePassword(!isVisiblePassword);
  }

  useEffect(() => {
    const error = (errors as Record<string, any>)[nameInput];
    if (error) setIsValidField(false);
    if (!error) setIsValidField(true);
  }, [Object.values(errors).length, errors, nameInput]);

  return (
    <div className="ui-input-wrapper">
      <div className="ui-input-container">
        <input
          {...(register as any)(nameInput, {
            ...useValidField(nameInput),
            required: isRequired ? 'This field is required!' : undefined,
            onBlur() {
              if (!isVisitField) setIsVisitField(true);
            },
          })}
          autoComplete="off"
          type={typeInput === 'password' ? (isVisiblePassword ? 'text' : 'password') : typeInput}
          className={`ui-input ${isVisitField ? (isValidField ? 'ui-input-valid' : 'ui-input-invalid') : ''} ${typeInput === 'password' ? 'ui-input-password' : ''}`}
          placeholder={placeholderText}
        />
        {typeInput === 'password' && (
          <button type="button" onClick={handleClickPass} className="ui-input-eye-button">
            {isVisiblePassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </button>
        )}
        <span className={`ui-input-status ${isValidField ? 'ui-input-status-valid' : 'ui-input-status-invalid'}`}>
          {isVisitField ? (isValidField ? <>&#10004;</> : <>&#10006;</>) : ''}
        </span>
      </div>
      <p className={`ui-input-message ${isValidField ? 'ui-input-message-valid' : 'ui-input-message-invalid'}`}>
        {isVisitField
          ? !isValidField
            ? `Ваш ${nameInput === 'confPassword' ? 'confirm password' : nameInput} некорректен!`
            : 'Это поле заполнено верно!'
          : ''}
      </p>
    </div>
  );
};

export default UIInput;