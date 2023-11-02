document.addEventListener("DOMContentLoaded", function () {
  // Initial tab to display (e.g., Pie Chart)
  document.getElementById("PieChart").style.display = "block";
  // Fetch the JSON data from the provided URL
  fetch("https://run.mocky.io/v3/ba12d051-8f60-40c4-a9bd-6b2478d3b6ca")
    .then((response) => response.json())
    .then((data) => {
      // Call functions to count the occurrences of "UserId: rdel," "UserId: ajai," and "UserId: jpet" in the JSON data
      const rdelCount = countUserIds(data, "rdel");
      const ajaiCount = countUserIds(data, "ajai");
      const jpetCount = countUserIds(data, "jpet");
      const emalCount = countUserIds(data, "emal");
      const mphaCount = countUserIds(data, "mpha");
      const jchoCount = countUserIds(data, "jcho");
      const ahilCount = countUserIds(data, "ahil");
      const cphaCount = countUserIds(data, "cpha");

      // Display the counts on the HTML page
      document.getElementById(
        "result"
      ).textContent = `Count of "UserId: rdel": ${rdelCount}, Count of "UserId: ajai": ${ajaiCount}, Count of "UserId: jpet": ${jpetCount}, Count of "UserId: emal": ${emalCount}, Count of "UserId: mpha": ${mphaCount}, Count of "UserId: jcho": ${jchoCount}, Count of "UserId: ahil": ${ahilCount}, Count of "UserId: cpha": ${cphaCount}`;

      // Create a pie chart with all counts
      createPieChart(
        rdelCount,
        ajaiCount,
        jpetCount,
        emalCount,
        mphaCount,
        jchoCount,
        ahilCount,
        cphaCount
      );

      // Create a bar chart with all counts
      createBarChart(
        rdelCount,
        ajaiCount,
        jpetCount,
        emalCount,
        mphaCount,
        jchoCount,
        ahilCount,
        cphaCount
      );
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
      document.getElementById("result").textContent =
        "An error occurred while fetching JSON.";
    });
});

// Function to count occurrences of "UserId" in the JSON data
function countUserIds(data, userIdToCount) {
  // Initialize the count
  let count = 0;

  // Recursively search for "UserId" in the JSON data
  function searchForUserId(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        searchForUserId(obj[key]);
      } else if (key === "UserId" && obj[key] === userIdToCount) {
        count++;
      }
    }
  }

  // Start the search from the "data" array
  if (Array.isArray(data.data)) {
    for (const item of data.data) {
      searchForUserId(item);
    }
  }

  return count;
}

// Function to create a pie chart with multiple counts
function createPieChart(
  rdelCount,
  ajaiCount,
  jpetCount,
  emalCount,
  mphaCount,
  jchoCount,
  ahilCount,
  cphaCount
) {
  const ctx = document.getElementById("myPieChart").getContext("2d");

  // Define the data for the pie chart
  const data = {
    labels: [
      "UserId: rdel",
      "UserId: ajai",
      "UserId: jpet",
      "UserId: emal",
      "UserId: mpha",
      "UserId: jcho",
      "UserId: ahil",
      "UserId: cpha",
    ],
    datasets: [
      {
        data: [
          rdelCount,
          ajaiCount,
          jpetCount,
          emalCount,
          mphaCount,
          jchoCount,
          ahilCount,
          cphaCount,
        ], // Counts of rdel, ajai, jpet, and other users
        backgroundColor: [
          "#FF5733",
          "#3498db",
          "#FFCC29",
          "#00cc99",
          "#cf1ab0",
          "#1acf41",
          "#90c6e8",
          "#fff200",
        ], // Colors for the slices
      },
    ],
  };

  // Create the pie chart
  const myPieChart = new Chart(ctx, {
    type: "pie",
    data: data,
  });
}

// Function to create a bar chart with multiple counts
function createBarChart(
  rdelCount,
  ajaiCount,
  jpetCount,
  emalCount,
  mphaCount,
  jchoCount,
  ahilCount,
  cphaCount
) {
  const ctx = document.getElementById("myBarChart").getContext("2d");

  // Define the data for the bar chart
  const data = {
    labels: [
      "UserId: rdel",
      "UserId: ajai",
      "UserId: jpet",
      "UserId: emal",
      "UserId: mpha",
      "UserId: jcho",
      "UserId: ahil",
      "UserId: cpha",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          rdelCount,
          ajaiCount,
          jpetCount,
          emalCount,
          mphaCount,
          jchoCount,
          ahilCount,
          cphaCount,
        ],
        backgroundColor: [
          "#FF5733",
          "#3498db",
          "#FFCC29",
          "#00cc99",
          "#cf1ab0",
          "#1acf41",
          "#90c6e8",
          "#fff200",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Create the bar chart
  const myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
  });
}
