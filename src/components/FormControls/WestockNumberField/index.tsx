import { Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';

const WeStockNumberField = (props: {
  placeholder: string;
  name: string;
  error?: any;
  label: string;
  touched?: any;
  step?: string | number;
  disabled?: boolean;
}) => {
  return (
    <div className="">
      <Field
        component={TextField}
        label={props.label}
        disabled={props.disabled}
        type={'number'}
        name={props.name}
        helperText={props.placeholder}
        min="0"
        style={{ width: '100%'}}
        step={0.000001}

      />

    </div>
  );
};

export default WeStockNumberField;
