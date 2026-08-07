function Student({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
function ReusableWithProps() {
  return (
    <div>
      <Student name="Navya" age={20} />
      <Student name="Neha" age={22} />
      <Student name="Bharath" age={21} />
    </div>
  );
}
export default ReusableWithProps;