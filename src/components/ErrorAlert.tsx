import { Alert, AlertTitle } from "@mui/material";

export const ErrorAlert = (props: { alertMessage: string; show: boolean }) => {
  const { alertMessage, show } = props;

  if (show) {
    return (
      <Alert severity="error">
        <AlertTitle>{alertMessage}</AlertTitle>
      </Alert>
    );
  }

  return <></>;
};
