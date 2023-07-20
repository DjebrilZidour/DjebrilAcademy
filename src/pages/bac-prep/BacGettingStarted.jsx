import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
const startNowClicked = () => {};

const BacGettingStarted = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>Bac Preparation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            inventore explicabo aliquid quaerat libero dolorum nobis laudantium
            quo asperiores voluptatum!
          </p>
          {/* <Link to="/"> */}
            <Btn value="start Now !!!" />
          {/* </Link> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BacGettingStarted;
