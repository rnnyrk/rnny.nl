import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { PoseGroup } from 'react-pose';

import { DialogOverlay, DialogBody } from './styled';

const Dialog:FC<DialogProps> = (
  { isOpen, onClose, children }
) => createPortal(
  <PoseGroup>
    {isOpen && [
      <DialogBody key="modal-body">{children}</DialogBody>,
      <DialogOverlay key="modal-overlay" onClick={onClose} />
    ]}
  </PoseGroup>,
  document.getElementById('modal'),
);

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
}

export default Dialog;
