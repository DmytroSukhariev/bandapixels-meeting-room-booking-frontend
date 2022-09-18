import React, { FC } from 'react';
import { ModalText } from '../ModalText/ModalText';
import './modal-info-list.scss';

interface Props {
  info: string[];
}

export const ModalInfoList: FC<Props> = ({ info }) => {
  return (
    <ul className='modal-list'>
      {info.map((item, index) => {
        return (
          <li className='modal-list__item' key={index}>
            <ModalText text={item} />
          </li>
        );
      })}
    </ul>
  );
};
