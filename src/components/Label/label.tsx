import './style.scss';

const Label = (props: { label: string }) => {
  return (
    <>
      <div className='app-label'>{props.label}</div>
    </>
  );
};

export default Label;
