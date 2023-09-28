import { createPost } from "./createPost.js";
import { getPostsData } from "./getPostsData.js";
import { filterJobs } from "./filterJobs.js";
import { createLabel } from "./createLabel.js";

/* LISTENERS */
window.addEventListener("load", async () => {
  localStorage.filteredData = JSON.stringify([]);
  await renderPosts();
});

// textField listener
document
  .querySelector(".filter-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") return;

      addLabel(event.target.value);
      const textInput = event.target.value;
      event.target.value = "";
      return textInput;
    }
  });

// label listener
const labelListener = (event) => {
  addLabel(event.target.textContent);
};

// clear labels listener
document.querySelector(".clear-button").addEventListener("click", () => {
  localStorage.filteredData = JSON.stringify(new Array());
  document.querySelector(".labels-selected").innerHTML = "";
  renderPosts();
});

/* ADD/REMOVE LABEL */
// add label
const addLabel = (labelName) => {
  const labels = JSON.parse(localStorage.filteredData);
  if (labels.includes(labelName.toLowerCase())) return;

  labels.push(labelName.toLowerCase());
  localStorage.filteredData = JSON.stringify(labels);
  const newLabel = createLabel(labelName, removeLabel);
  displayLabel(newLabel);
  renderPosts();
};

// remove label
const removeLabel = (event) => {
  event.target.remove();
  const labelName = event.target.innerHTML;
  const labels = JSON.parse(localStorage.filteredData);
  const index = labels.indexOf(labelName.toLowerCase());
  if (index >= 0) labels.splice(index, 1);
  localStorage.filteredData = JSON.stringify(labels);

  renderPosts();
};
// render
const renderPosts = async () => {
  const postsData = await getPostsData();
  const filteredData = filterJobs(postsData);
  const jobsPosts = filteredData.map((postData) =>
    createPost(postData, labelListener)
  );
  displayJobs(jobsPosts);
};

// display jobs
const displayJobs = (jobPosts) => {
  const jobsSection = document.getElementById("jobs-section");
  jobsSection.innerHTML = "";
  for (let jobPost of jobPosts) jobsSection.appendChild(jobPost);
};

// display label
const displayLabel = (label) => {
  document.querySelector(".labels-selected").appendChild(label);
};
