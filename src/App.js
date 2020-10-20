import "./app.css";
import { counterForm } from "./formcounter";
import { Counter } from "./counter";

export const App = () => {
  const app = document.createElement("div");
  app.className = "app-counter-container";

  const CounterForm = counterForm((value) => {
    app.append(Counter(value));
  });

  app.append(CounterForm);
  return app;
};
