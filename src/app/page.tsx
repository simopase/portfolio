
import css from "./page.module.css";
import Home from "./components/Home/Home";

export default function Page() {

  return (
    <div className={css.page}>
      <Home></Home>
    </div>
  );
}
