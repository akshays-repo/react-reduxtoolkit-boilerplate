import { Card } from '@mui/material';

const LayoutCard = (props: any) => {
  return <Card style={{margin:"0px !important"}} className='p-3'>{props.children}</Card>;
};

export default LayoutCard;
