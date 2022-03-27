import { apple, cart, google, habitual, home, main, orders, product, profile } from "./images";
import "./App.css";

function App() {
  const { body } = document;

  const changeBackground = (number) => {
    // Check if background is already showing
    let prevBg;
    if (body.className) {
      prevBg = body.className;
    }
    body.className = "";
    switch (number) {
      case "1":
        return prevBg === "bg-1" ? false : body.classList.add("bg-1");
      case "2":
        return prevBg === "bg-2" ? false : body.classList.add("bg-2");
      case "3":
        return prevBg === "bg-3" ? false : body.classList.add("bg-3");
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={habitual} alt="logo" />
      </div>
      <div className="background-toggles" title="Change Background">
        <div className="bg-1" onClick={() => changeBackground("1")}></div>
        <div className="bg-2" onClick={() => changeBackground("2")}></div>
        <div className="bg-3" onClick={() => changeBackground("3")}></div>
      </div>
      <div className="wrapper">
        <div className="text-container">
          <h1 className="title">Find the stuff you’ll love.</h1>
          <p className="text">
            Aliquam rhoncus pretium dolor volutpat lectus odio non tellus neque. Aliquet et purus nibh bibendum integer
            etiam in enim nisi.
          </p>
          <div className="stores">
            <div className="store">
              <a href="https://apple.com" target="_blank" rel="noreferrer">
                <img src={apple} alt="apple store" />
              </a>
            </div>
            <div className="store">
              <a href="https://play.google.com" target="_blank" rel="noreferrer">
                <img src={google} alt="google store" />
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={main} alt="" />
        </div>
      </div>

      <div className="cart">
        <img src={cart} alt="cart" />
      </div>
      <div className="home">
        <img src={home} alt="home" />
      </div>
      <div className="orders">
        <img src={orders} alt="orders" />
      </div>
      <div className="product">
        <img src={product} alt="product" />
      </div>
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default App;
