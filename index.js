const Box = (props) => {
  //  Write your code here.
  const { boxes, text } = props;
  return <div className={boxes}>{text}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxes="small-box" text="Small" />
      <Box boxes="medium-box" text="Medium" />
      <Box boxes="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
