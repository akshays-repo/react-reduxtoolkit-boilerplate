import { Field, ErrorMessage } from 'formik';

import { CheckboxWithLabel } from 'formik-mui';

const WeStockCheckBox = (props: {

  name: string;
  type: string;
  error?: any;
  label: string;
  touched?: any;
  disabled?: boolean;
  showText?: boolean;
}) => {
  return (
    <div className='mb-4 d-flex align-item-start' style={{color:"#0000008a"}}>
      <Field
        disabled={props.disabled || false}
        component={CheckboxWithLabel}
        name={props.name}
        Label={{ label: props.label }}
        type='checkbox'
      />
    </div>
  );
};

export default WeStockCheckBox;
