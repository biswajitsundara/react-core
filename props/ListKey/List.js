import ListItem from "./ListItem";

const List = () => {
  const blogs = [
    {
      key: 123,
      title: "How to cook food",
      author: "Mark",
      desc: "cooking is simple",
    },
    {
      key: 345,
      title: "How to walk",
      author: "Bis",
      desc: "walk on your legs",
    },
  ];

  return (
    <>
      {blogs.map((blog) => (
        <ListItem key={blog.id} item={blog} />
      ))}
    </>
  );
};

export default List;
