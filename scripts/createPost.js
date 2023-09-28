export const createPost = (postData, labelListener) => {
  // Create container div
  const post = document.createElement("div");
  post.classList.add("container");

  // Create job post div
  const jobPostDiv = document.createElement("div");
  jobPostDiv.classList.add("job-post");

  // Create job info section div
  const jobInfoSectionDiv = document.createElement("div");
  jobInfoSectionDiv.classList.add("job-info-section");

  // Create logo div
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo-div");

  // Create logo image
  const logoImg = document.createElement("img");
  logoImg.src = `${postData.logo}`;
  logoImg.alt = "";
  logoImg.classList.add("logo");

  // Append logo image to logo div
  logoDiv.appendChild(logoImg);

  // Create job data div
  const jobDataDiv = document.createElement("div");
  jobDataDiv.classList.add("job-data");

  // Create a div with the class "flex-row"
  const flexRowDiv = document.createElement("div");
  flexRowDiv.classList.add("flex-row");

  // Create company name paragraph
  const companyNamePara = document.createElement("p");
  companyNamePara.classList.add("company-name");
  companyNamePara.textContent = `${postData.company}`;

  // Create job alerts div
  const jobAlertsDiv = document.createElement("div");
  jobAlertsDiv.classList.add("job-alerts");
  jobAlertsDiv.classList.add("flex-row");

  // Create new post span
  const newPostSpan = document.createElement("span");
  newPostSpan.classList.add("new-post");
  newPostSpan.textContent = "NEW!";

  // Create featured job span
  const featuredJobSpan = document.createElement("span");
  featuredJobSpan.classList.add("featured-job");
  featuredJobSpan.textContent = "FEATURED";

  // Append new post and featured job spans to job alerts div
  if (postData.new) jobAlertsDiv.appendChild(newPostSpan);

  if (postData.featured) jobAlertsDiv.appendChild(featuredJobSpan);

  // Append company name and job alerts to the "flex-row" div
  flexRowDiv.appendChild(companyNamePara);
  flexRowDiv.appendChild(jobAlertsDiv);

  // Create position paragraph
  const positionPara = document.createElement("p");
  positionPara.classList.add("position");
  positionPara.textContent = `${postData.position}`;

  // Create containing Div
  const containingDiv = document.createElement("div");

  // Create posted at paragraph
  const postedAtPara = document.createElement("p");
  postedAtPara.classList.add("posted-at");
  postedAtPara.textContent = `${postData.postedAt}`;

  // Create small circle divs
  const smallCircleDiv1 = document.createElement("div");
  smallCircleDiv1.classList.add("small-circle");
  const smallCircleDiv2 = document.createElement("div");
  smallCircleDiv2.classList.add("small-circle");

  // Create contract paragraph
  const contractPara = document.createElement("p");
  contractPara.classList.add("contract");
  contractPara.textContent = `${postData.contract}`;

  // Create location paragraph
  const locationPara = document.createElement("p");
  locationPara.classList.add("location");
  locationPara.textContent = `${postData.location}`;

  // Append to containingDiv
  containingDiv.appendChild(postedAtPara);
  containingDiv.appendChild(smallCircleDiv1);
  containingDiv.appendChild(contractPara);
  containingDiv.appendChild(smallCircleDiv2);
  containingDiv.appendChild(locationPara);

  // Append elements to job data div
  jobDataDiv.appendChild(flexRowDiv);
  jobDataDiv.appendChild(positionPara);
  jobDataDiv.appendChild(containingDiv);

  // Append job data div to job info section div
  jobInfoSectionDiv.appendChild(logoDiv);
  jobInfoSectionDiv.appendChild(jobDataDiv);

  // Create job labels section div
  const jobLabelsSectionDiv = document.createElement("div");
  jobLabelsSectionDiv.classList.add("job-labels-section");

  // Create label spans
  // const labelSpans = ["Frontend", "Senior", "HTML", "CSS", "JavaScript"];
  const { role, level, languages, tools } = postData;
  const labelSpans = [role, level, ...languages, ...tools];

  for (const labelText of labelSpans) {
    const label = document.createElement("p");
    label.classList.add("label");
    label.textContent = labelText;
    jobLabelsSectionDiv.appendChild(label);
  }

  // Append job info section and job labels section to job post div
  jobPostDiv.appendChild(jobInfoSectionDiv);
  jobPostDiv.appendChild(jobLabelsSectionDiv);

  // Append job post div to container div
  post.appendChild(jobPostDiv);

  //add listeners here!
  // post
  //   .querySelector(".filter-input")
  //   .addEventListener("keypress", textInputListener);

  post.querySelectorAll(".label").forEach((label) => {
    label.addEventListener("click", labelListener);
  });

  return post;
};
