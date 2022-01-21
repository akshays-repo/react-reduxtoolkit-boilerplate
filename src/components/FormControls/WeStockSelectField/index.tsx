import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { Select } from 'formik-mui';

import './style.scss';

const WeStockSelectBox = (props: {
  options: any[];
  label?: string;
  key_values: any;
  option_label: string | number;
  placeholder: string;
  error?: any;
  name: string;
  touched?: any;
  defaultValue?: any;
  handleChange?: Function;
}) => {
  return (
    <div className='select-box d-flex'>
      <Field
        disabled={false}
        component={Select}
        defaultValue={props.defaultValue}
        name={props.name}
        onKeyUp={props.handleChange}
        label={props.label}
        helperText={props.placeholder}
        style={{ width: '100%' }}
        formHelperText={{ children: props.placeholder }}
      >
        {props.options?.map((option) => (
          <MenuItem
            key={option[props.key_values]}
            value={option[props.key_values]}
          >
            {option[props.option_label]}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export default WeStockSelectBox;
