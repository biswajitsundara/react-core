const Styledemo = () => {
  const styleCard = {
    backgroundColor: "skyblue",
    width: "250px",
    height: "200px"

  };

  const textColor = 'blue';
  return (
    <div style={styleCard}>
      <h1 style={{ color: `${textColor}` }}>Hello World</h1>
      <p style={{color: 'red', fontSize: '20px'}}>This is demo text</p>
    </div>
  );
};

export default Styledemo;
