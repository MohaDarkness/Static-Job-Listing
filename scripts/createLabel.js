export const createLabel = (labelName, labelListener) => {
  const label = document.createElement("p");
  label.innerHTML = labelName;
  label.classList.add("selected-label");
  label.addEventListener("click", labelListener);
  return label;
};
