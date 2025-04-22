import './modal.css'

type ModalItemProps = {

    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode; // 👈 Aquí defines children
            
    
  };

  

  function Modal({ isOpen, onClose , children }: ModalItemProps) {
    return (
        
            <div className="modal-container" style={{display: isOpen ? 'grid' : 'none'}}>
               <div className="modal-body">
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
                </div>                 
            </div>
    )
}

export default Modal