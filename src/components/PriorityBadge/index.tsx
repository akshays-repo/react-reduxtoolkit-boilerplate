import { Card } from 'react-bootstrap';
import './style.scss';

const PriorityBadge = (props: { label: string | number; color?: string }) => (
  <div>
    <div className='d-flex' style={{ color: 'black', fontWeight: 600 }}>
      <div
        style={{
          backgroundColor: props.color,

          width: '20px',
          height: '20px',
          marginRight: '5px',
        }}
      ></div>
      <div>{props.label}</div>
    </div>
  </div>
);
export default PriorityBadge;
