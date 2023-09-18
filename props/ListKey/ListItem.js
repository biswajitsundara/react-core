const ListItem = ({item}) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.author}</p>
      <p>{item.desc}</p>
    </div>
  );
};

export default ListItem;
