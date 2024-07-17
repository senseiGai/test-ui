import "./App.css";
import { TextMenu } from "spark-admin-sdk";
import { Wrapper } from "spark-admin-sdk";
import { ButtonMenu } from "spark-admin-sdk";
import { ColorMenu } from "spark-admin-sdk";
import { LinkMenu } from "spark-admin-sdk";
import { IconLinkMenu } from "spark-admin-sdk";
// import { CustomColorMenu } from "spark-admin-sdk";
import { BlockEditMenu } from "spark-admin-sdk";
import { BlockWrapper } from "spark-admin-sdk";

const handleClick = () => {
  console.log("aaa");
};

function App() {
  return (
    <>
      {/* <CustomColorMenu /> */}
      <BlockWrapper block={<h1>HAHAH</h1>} />
      <BlockEditMenu />
      <IconLinkMenu />
      <LinkMenu />
      <ColorMenu />
      <TextMenu />
      {/* <Wrapper id="" component={<button>HUI</button>} /> */}
      <ButtonMenu onClick={handleClick} />
    </>
  );
}

export default App;
