import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PoseGroup } from 'react-pose';

import { CloseDialog, DialogOverlay, DialogBody } from './styled';

const Dialog:FC<DialogProps> = ({
  isOpen, onClose, children
}) => {
  useEffect(() => {
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    });
  }, []);

  return createPortal(
    <PoseGroup>
      {isOpen && [
        <DialogBody key="modal-body">
          <CloseDialog onClick={onClose} />
          {children}
        </DialogBody>,
        <DialogOverlay key="modal-overlay" onClick={onClose} />
      ]}
    </PoseGroup>,
    document.getElementById('modal'),
  );
}

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
}

export default Dialog;
