import PageTitleWrapper from '../PageTitleWrapper';
import {
  Typography,
  Button,
  Grid,
  Tooltip,
  IconButton,
  Box,
} from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: string;
  isButton?: boolean;
  buttonTitle?: string;
  buttonOnclick?: Function;
  showPlusIcon?: boolean;
  showBackButton?: boolean;
}

const PageHeader = (props: Props) => {
  const {
    title,
    subtitle,
    showPlusIcon,
    isButton,
    buttonOnclick,
    buttonTitle,
    showBackButton,
  } = props;

  const navigate = useNavigate();

  const handleGoback = () => {
   navigate(-1)
  };

  return (
    <>
      <PageTitleWrapper>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography variant='h3' component='h3' gutterBottom>
              <div className='d-flex align-items-center' style={{ textAlign: 'left' }}>
                {' '}
                {showBackButton && (
                  <Tooltip arrow placement='top' title='Go back'>
                    <IconButton
                      onClick={handleGoback}
                      color='primary'
                      sx={{ mr: 2 }}
                    >
                      <ArrowBackTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                )}{' '}
                {title}{' '}
              </div>
            </Typography>
            <Typography variant='subtitle2'>
              {' '}
              <div style={{ textAlign: 'left' }}>{subtitle} </div>
            </Typography>
          </Grid>
          {isButton && (
            <Grid item>
              <Button
                onClick={() => (buttonOnclick ? buttonOnclick() : {})}
                // target="_blank"
                // rel="noopener noreferrer"
                sx={{ mt: { xs: 2, md: 0 } }}
                variant='contained'
                startIcon={showPlusIcon && <AddTwoToneIcon fontSize='small' />}
              >
                {buttonTitle}
              </Button>
            </Grid>
          )}
        </Grid>
      </PageTitleWrapper>
    </>
  );
};
export default PageHeader;
