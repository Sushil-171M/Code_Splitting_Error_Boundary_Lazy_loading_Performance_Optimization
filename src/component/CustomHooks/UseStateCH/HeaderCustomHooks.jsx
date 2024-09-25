import IncrementCounter from "./IncrementCounter";
import HoverCounter from "./HoverCounter";

const HeaderCustomHook = () => {
  return (
    <>
      <div style={{ borderStyle: "inset" }}>
        <h2> Custom Hooks Practice </h2>
        <IncrementCounter />
        <HoverCounter />
      </div>
    </>
  );
};

export default HeaderCustomHook;
