import Card from "./Card";

const Employees = () => {
  const empDetails = {
    name: "Biswajit",
    email: "bis@123",
    phone: "9566040760",
  };

  return <Card details={empDetails} />;
};

export default Employees;
