import React, { FC, PropsWithChildren } from 'react';

interface Props {
    isOpen: boolean;
}

export const Modal: FC<PropsWithChildren<Props>> = ({ children, isOpen }) => {
    return <>{isOpen && <div className='modal'>{children}</div>}</>;
};
