import { Button } from 'react-bootstrap';

const WeStockSubmitButton = (props: { name: string; isSubmitting: any }) => {
  return (
    <div>
      <Button
        type="submit"
        variant="info"
        disabled={props.isSubmitting}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default WeStockSubmitButton;
