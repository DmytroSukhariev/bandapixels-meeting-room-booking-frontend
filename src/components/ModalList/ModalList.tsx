import React, { FC } from 'react';
import { IInput } from '../../types/IInput';
import { ModalInput } from '../ModalInput/ModalInput';
import './modal-list.scss';
import {useData} from "../../layouts/DataContextLayout/useData";

interface Props {
  inputs: IInput[];
  handleInputChange?: () => void;
}

export const ModalList: FC<Props> = ({ inputs, handleInputChange }) => {
  const {state, setCurrentBackendEvent} = useData()
  return (
    <ul className='modal-list'>
      {inputs.map((item, index) => {
        return (
          <li className='modal-list__item' key={index}>
            {/*<ModalInput*/}
            {/*  disabled={item.disabled}*/}
            {/*  handleInputChange={handleInputChange}*/}
            {/*  variant={item.variant}*/}
            {/*/>*/}
          </li>
        );
      })}
    </ul>
  );
};
