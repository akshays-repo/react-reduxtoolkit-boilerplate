import { Field, ErrorMessage, useFormikContext } from 'formik';

import { TextField } from 'formik-mui';

const WeStockFileField = (props: {
  placeholder: string;
  name: string;
  error?: any;
  touched?: any;
  disabled?: boolean;
  accept: string;
  label: string;
}) => {
  const { setFieldValue, setFieldError } = useFormikContext();

  return (
    <div className="">
      <label>{props.label}</label>
      <input
        id="file"
        accept={props.accept}
        name={props.name}
        type="file"
        onChange={(event: any) => {
          console.log('the file is ', event.currentTarget.files[0]);

          if (event.currentTarget.files[0]) {
            setFieldValue(props.name, event.currentTarget.files[0]);
          } else {
            setFieldError(props.name, 'This Filed Required');
          }
        }}
        className={`form-control
        ${props.error && props.touched ? 'is-invalid' : ''} `}
      />

      <ErrorMessage
        component="div"
        name={props.name}
        className="invalid-feedback"
      />
    </div>
  );
};

export default WeStockFileField;
