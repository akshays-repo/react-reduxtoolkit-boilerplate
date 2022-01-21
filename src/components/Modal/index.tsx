import { Modal } from 'react-bootstrap';
import './style.scss';

const AppModal = (props: {
  heading: any;
  onHide: Function;
  show: boolean;
  children?: any;
  large?: boolean;
}) => {
  return (
    <Modal
      {...props}
      size={props.large === true ? 'xl' : undefined}
      centered
      className='vertical-center-modal'
      backdrop='static'
    >
      <Modal.Header closeButton>
        <Modal.Title className='heading' id='contained-modal-title-vcenter'>
          <b> {props.heading} </b>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        className='body'
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          maxHeight: '80vh',
        }}
      >
        {props.children}
      </Modal.Body>

      {/* <Modal.Footer>
          <button onClick={()=> props.onHide()}>Close</button>
        </Modal.Footer> */}
    </Modal>
  );
};

export default AppModal;
