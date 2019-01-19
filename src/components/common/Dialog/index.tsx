import React, { FunctionComponent } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { DialogContainer, DialogOverlay, DialogBody } from './styled';

const Dialog:FunctionComponent<DialogInterface> =
  ({ isOpen, onClose, children }) =>
(
  <DialogContainer>
    <TransitionGroup>
      {isOpen && (
        <CSSTransition
          classNames="dialog"
          timeout={300}
        >
          <DialogOverlay onClick={onClose}>
            <DialogBody>
              {children}
            </DialogBody>
          </DialogOverlay>
        </CSSTransition>
      )}
    </TransitionGroup>
  </DialogContainer>
);

interface DialogInterface {
  isOpen: boolean;
  onClose(): void;
  children?: any;
}

export default Dialog;
