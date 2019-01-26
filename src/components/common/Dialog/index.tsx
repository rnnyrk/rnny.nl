import React, { FC } from 'react';
import { PoseGroup } from 'react-pose';

import { DialogOverlay, DialogBody } from './styled';

const Dialog:FC<DialogProps> = ({ isOpen, onClose, children }) => (
  <PoseGroup>
    {isOpen && [
      <DialogBody key="modal-body">{children}</DialogBody>,
      <DialogOverlay key="modal-overlay" onClick={onClose} />
    ]}
  </PoseGroup>
);

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
}

export default Dialog;
