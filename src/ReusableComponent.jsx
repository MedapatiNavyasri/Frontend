function Component() {
  return (
    <div>
      <h2>Hello!</h2>
      <p>This is a reusable component.</p>
    </div>
  );
}
function ReusableComponent() {
  return (
    <div>
      <Component />
      <Component />
      <Component />
    </div>
  );
}
export default ReusableComponent;