import { Field, useField, useFormikContext } from 'formik';
import { addDays } from 'date-fns';
import { SYSTEM_DATE_FORMAT } from '../../../constants/dateFormat';

import { MobileDatePicker, TimePicker } from 'formik-mui-lab';
import moment from 'moment';

export const WeStockDatePickerFieldDisablePastDates = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div className=''>
      <Field
        component={MobileDatePicker}
        label={props.label}
        name={field.name}
        textField={{ helperText: props.placeholder }}
        inputFormat={SYSTEM_DATE_FORMAT}
        minDate={moment()}
      />
    </div>
  );
};

export const WeStockDatePickerFieldDisableFutureDates = ({ ...props }: any) => {
  const { setFieldValue, setFieldError } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className=''>
      <Field
        component={MobileDatePicker}
        label={props.label}
        name={field.name}
        textField={{ helperText: props.placeholder }}
        inputFormat={SYSTEM_DATE_FORMAT}
        maxDate={moment()}
      />
    </div>
  );
};

export const WeStockDatePicker = ({ ...props }: any) => {
  const { setFieldValue, setFieldError } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className=''>
      <Field
      disabled={props.disabled || false}
        component={MobileDatePicker}
        label={props.label}
        name={field.name}
        textField={{ helperText: props.placeholder }}
        inputFormat={SYSTEM_DATE_FORMAT}
      />
    </div>
  );
};

export const WeStockDatePickerFieldDisableGivenDate = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div>
      <Field
        component={MobileDatePicker}
        label={props.label}
        name={field.name}
        textField={{ helperText: props.placeholder }}
        inputFormat={SYSTEM_DATE_FORMAT}
        minDate={moment(props.minDate)}
        maxDate={props.maxDate ? props.maxDate : addDays(new Date(), 0)}
      />
    </div>
  );
};
