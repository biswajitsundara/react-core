import Child from "./DefaultChild";
import { Header as Header1, Body } from "./NamedChild";
import Dashboard, { Banner } from "./MixDefault";

const Parent = () => {
  return (
    <>
      <Banner />
      <Dashboard />
      <Header1 />
      <Body />
      <Child />
    </>
  );
};

export default Parent;
