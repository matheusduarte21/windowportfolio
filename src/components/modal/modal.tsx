import React from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void; 
    children: React.ReactNode;
};

export const ModalCustom: React.FC<ModalProps>= ({ isOpen, onClose, children }:ModalProps) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose} 
            contentLabel="Exemplo de Modal"
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'auto',
                    zIndex: 1000,
                },
                content: {
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    width: '80%',
                    maxWidth: '700px',
                    maxHeight: '650px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    border: 'none',
                },
            }}
        >
            {children}
            <button
                onClick={onClose}
                style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Fechar
            </button>
        </ReactModal>
    );
};

export default ModalCustom;
