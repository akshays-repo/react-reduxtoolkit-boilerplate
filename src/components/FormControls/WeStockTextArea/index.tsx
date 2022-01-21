import { Field, ErrorMessage } from 'formik';

const WeStockTextArea = (props: {
  placeholder: string;
  name: string;

  error?: any;
  label: string;
  touched?: any;
  rows?:string
}) => {
  return (
    <div className="form-group">
      <Field
        rows={props.rows}
        as="textarea"
        name={props.name}
        placeholder={props.label}
        style={{backgroundColor:"transparent"}}
        className={`form-control
        ${props.error && props.touched ? 'is-invalid' : ''} `}
      />
      <ErrorMessage
        component="div"
        name={props.name}
        className="invalid-feedback d-flex"
      />
    </div>
  );
};

export default WeStockTextArea;
