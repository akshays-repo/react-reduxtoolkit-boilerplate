import { Field, ErrorMessage } from 'formik';

import { TextField  } from 'formik-mui';

const WeStockTextField = (props: {
  placeholder: string;
  name: string;
  type: string;
  error?: any;
  label: string;
  touched?: any;
  disabled?: boolean;
  showText?: boolean;
}) => {
  return (
    <div className='mb-4'>
      <Field
        disabled={props.disabled || false}
        component={TextField}
        type={props.type}
        name={props.name}
        label={props.label}
        style={{ width: '100%' }}
        helperText={props.placeholder}
   
        
      />
    </div>
  );
};

export const WeStockTextFieldWithDisable = (props: {
  placeholder: string;
  name: string;
  type: string;
  error?: any;
  label: string;
  touched?: any;
  disabled?: boolean;
}) => {
  return (
    <div className=''>
      <Field
        disabled={props.disabled}
        component={TextField}
        type={props.type}
        name={props.name}
        label={props.label}
        style={{ width: '100%' }}
        helperText={props.placeholder}
      />
    </div>
  );
};

export default WeStockTextField;
