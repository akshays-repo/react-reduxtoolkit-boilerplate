import { Form } from 'react-bootstrap';
import './style.scss';


const SelectBox = (props: {
  size?: any;
  options: any[];
  label?: string;
  key_values: any;
  option_label: string | number;
  handleSelectBox: Function;
  defaultSelected?: any;
  hideLabels?: boolean;
}) => {
  return (
    <Form.Group>
      <Form.Control
        onChange={(e) => props.handleSelectBox(e.target.value)}
        as="select"
        size={props.size}
        placeholder=""
        style={{ width: 'auto', color: '#91949c', border: '1px solid #696969' }}
        defaultValue={props.defaultSelected}
      >
        {!props.hideLabels && (
          <option>{props.label ? props.label : 'Choose '}</option>
        )}
        {props.options?.map((option) => (
          <option
            key={option[props.key_values]}
            value={option[props.key_values]}
          >
            {option[props.option_label]}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectBox;
