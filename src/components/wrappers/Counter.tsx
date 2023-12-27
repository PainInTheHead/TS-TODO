const Counter = (props: any) => {
  return (
    <div className="total">
      <span>{props.active} item left</span>
      <span>Complete Todos: {props.complete}</span>
    </div>
  );
};

export default Counter;
