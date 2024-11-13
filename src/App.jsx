
//import Form from "./components/Form";
//import Form2 from "./components/Form2";
import Addexpense from "./expense-tracker/Addexpense";
import Expenses from "./expense-tracker/Expenses";

const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px" }}>
      {/* <Form /> */}
      {/* <Form2/> */}

      <Addexpense/>
      <Expenses/>
    </div>
  );
};

export default App;
