import { FC, memo } from 'react';
import { CloseIcon } from '@zlden/react-developer-burger-ui-components';
import { ModalOverlayUI } from '@ui';
import { TModalUIProps } from './type';
import styles from './modal.module.css';

export const ModalUI: FC<TModalUIProps> = memo(({ 
  title, 
  onClose, 
  children 
}) => (
  <>
    <ModalOverlayUI onClick={onClose} />
    <div 
      className={styles.modal} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-cy="modal"
    >
      <div className={styles.header}>
        {title && (
          <h3 
            id="modal-title"
            className={`${styles.title} text text_type_main-large`}
          >
            {title}
          </h3>
        )}
        <button 
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon type="primary" />
        </button>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </>
));