function Counter({ count, countClicked }) {
  return <div onClick={countClicked}>{count}</div>;
}

export default Counter;
