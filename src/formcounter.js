export const counterForm = (onSubmit) => {
  const formInput = document.createElement("input");
  formInput.type = "number";
  formInput.min = 1;
  formInput.required = true;

  const formBtn = document.createElement("button");
  formBtn.innerText = "START!";
  formBtn.type = "submit";

  const form = document.createElement("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    onSubmit(formInput.value);
  };
  form.append(formInput, formBtn);
  return form;
};
