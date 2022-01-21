import "./style.scss"

const Value = (props: { value: string | number}) => {
  return (
    <>
      <div className='app-value'>{props.value} </div>
    </>
  );
};

export default Value;
