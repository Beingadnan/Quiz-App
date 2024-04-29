export default function Button({
  btnText = "",
  handlerFunction = () => {},
}) {
  return (
    <button
      
      onClick={handlerFunction}
    >
      {btnText || "Submit"}
    </button>
  );
}