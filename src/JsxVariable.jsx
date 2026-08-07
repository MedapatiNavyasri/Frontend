function JsxVariable() {
  const college = <h1>Welcome to Vishnu College</h1>;
  const message = <p>This message is JSX stored in a variable.</p>;
  return (
    <div>
      {college}
      {message}
    </div>
  );
}
export default JsxVariable;