export type ModalType = { handleClose:any, show:any, children?:any, size?:string }

const Modal = ({ handleClose, show, children, size = 'md' }:ModalType) => {
    const showHideClassName = show ? "modal display-block show" : "modal display-none";

    return (
        <div className={"modal fade bd-example-modal-" + size + " " + showHideClassName}  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className={"modal-dialog modal-" + size}>
                <div className="modal-content">
                    {children}
                </div>
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;