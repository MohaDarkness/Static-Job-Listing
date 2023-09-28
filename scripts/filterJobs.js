export const filterJobs = (allJobPostsData) => {
  const labels = JSON.parse(localStorage.filteredData);
  console.log(labels);

  const takeAllJobs = labels.length === 0 ? true : false;

  const filteredJobPosts = allJobPostsData.filter((jobPostData) => {
    if (takeAllJobs) return true;

    const { role, level, languages, tools } = jobPostData;
    const thisJobLabels = [role, level, ...languages, ...tools].map((element) =>
      element.toLowerCase()
    );

    for (let label of labels) {
      if (thisJobLabels.includes(label.toLowerCase())) {
        continue;
      } else return false;
    }
    return true;
  });

  return filteredJobPosts;
};
