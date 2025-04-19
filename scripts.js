// 1. Welcome Alert + Display
let userName = prompt("Welcome! Please enter your full name:");
if (userName) {
  document.getElementById("topName").innerText = "Welcome, " + userName + "!";
}

// 2. Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Both fields are required!");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}
document.getElementById("contactForm")
  .addEventListener("submit", function(e) {
    if (!validateForm()) e.preventDefault();
  });

// 3. Dark Mode Toggle with localStorage
const toggleBtn = document.getElementById("toggleDarkMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// 4. Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // initial call

// 5. Dynamic Courses List
const courses = [
  {
    name: "Machine Learning",
    description: "This course provided a strong foundation in machine learning concepts, covering supervised and unsupervised learning techniques. I worked on projects involving regression, classification, and clustering using Scikit-Learn."
  },
  {
    name: "Programming For Data Analytics 2",
    description: "Through this course, I gained hands-on experience with deep neural networks, convolutional networks (CNNs), and sequence models using TensorFlow and Keras. I applied these concepts to real-world AI applications."
  },
  {
    name: "Cloud Computing",
    description: "This course gave me a strong foundation as I explored different cloud computing concepts, I also had the chance to work on AWS and get an official certification in it."
  },
  { name: 'Web Text & Mining', 
    description: 'Through this course, I explored the techniques of web text mining and data scraping, focusing on extracting valuable insights from online content. Using Python libraries like BeautifulSoup, Scrapy, and NLTK, I built data pipelines to collect, clean, and analyze web-based data for various applications in sentiment analysis, topic modeling, and search engine optimization.' },
  { name: 'Web Systems Development', 
    description: 'This course covered the fundamentals of web systems development, from front-end technologies (HTML, CSS, JavaScript). I developed full-stack applications, focusing on creating responsive user interfaces and connecting them with databases for real-time data processing and retrieval.' },
  { name: 'Operating Systems', 
    description: 'In this course, I gained a deep understanding of operating system architecture, memory management, file systems, and process scheduling. I implemented concepts like multithreading and synchronization in C, and explored how operating systems handle resources and support application execution.' }
];
 
function getRandomCourses() {
  // Shuffle the courses array and pick the first 3 (or however many you want)
  const shuffledCourses = [...courses].sort(() => Math.random() - 0.5);
  return shuffledCourses.slice(0, 3);
}

// Function to render courses
function renderCourses() {
  const container = document.getElementById("dynamicCoursesContainer");
  container.innerHTML = ""; // Clear previous courses
  
  const selectedCourses = getRandomCourses(); // Get random courses

  selectedCourses.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    
    const title = document.createElement("h3");
    title.textContent = course.name;
    courseDiv.appendChild(title);
    
    const description = document.createElement("p");
    description.textContent = course.description;
    courseDiv.appendChild(description);
    
    container.appendChild(courseDiv);
  });
}

// Call the render function to display the initial courses
renderCourses();

// Set an interval to update the courses every 5 seconds (you can change the time)
setInterval(renderCourses, 5000);

// 6. Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
});
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// 7. Modal Functions (assuming your cards call openModal(...))
function openModal(project) {
  // your existing logic...
  document.getElementById('projectModal').style.display = "block";
}
function closeModal() {
  document.getElementById('projectModal').style.display = "none";
}




function openModal(project) {
    let title, description, technologies, challenges, github;

    if (project === 'project1') {
        title = "Arabic Text Diacritization";
        description = "Explored different deep learning and transfer learning models to implement a robust system for restoring diacritics to Arabic text.";
        technologies = "Python, TensorFlow, Keras, HuggingFace, BERT, Arabic NLP";
        challenges = "The challenge was adapting BERT for Arabic text and handling large-scale diacritization tasks.";
        github = "https://github.com/AwsAlhantouli/Arabic-Text-Diacritization";
    }
    if (project === 'project2') {
        title = "Image Classification with DTD";
        description = "Explored and applied various deep learning and transfer learning models to classify textures into 47 unique categories using convolutional neural networks.";
        technologies = "Python, TensorFlow, Keras, CNN, DTD dataset";
        challenges = "Dealing with the complex patterns in the images and tuning the hyperparameters.";
        github = "https://github.com/AwsAlhantouli/DTD-ML";
    }
    if (project === 'project3') {
        title = "Weather Data in Action";
        description = "Managing real-time weather data fetched via an API key, transmitting it through Kafka, processing it within a Spark framework, and showcasing the findings through a user-friendly interface using Streamlit.";
        technologies = "Python, Kafka, Spark, Streamlit, API";
        challenges = "Integrating real-time data streaming and ensuring smooth processing at scale.";
        github = "https://github.com/AwsAlhantouli/Weather-Data-Stream";
    }
    if (project === 'project4') {
        title = "Exploring Deep Learning Models for Garbage Sorting";
        description = "Developed diverse deep learning structures for categorizing garbage, experimenting with methodologies to gauge their responsiveness to parameters, and leveraging transfer learning for optimization.";
        technologies = "Python, TensorFlow, Keras, CNN, Transfer Learning";
        challenges = "Handling the imbalance in the dataset and fine-tuning models for accuracy.";
        github = "https://github.com/AwsAlhantouli/Garbage-Classification";
    }

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalTechnologies').innerText = technologies;
    document.getElementById('modalChallenges').innerText = challenges;
    document.getElementById('modalGitHub').href = github;
    document.getElementById('projectModal').style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}


// 2. Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const alertContainer = document.getElementById("formMessage") || createAlertContainer(form);
  const formData = new FormData(form);

  // Clear previous alerts
  alertContainer.innerHTML = '';
  alertContainer.className = 'alert-container';

  // Get form values
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const message = formData.get('message')?.trim();

  // Validation checks
  let isValid = true;
  const errors = [];

  // Name validation
  if (!name) {
    errors.push("Please enter your name");
    isValid = false;
  }

  // Email validation (using text input but with JS validation)
  if (!email) {
    errors.push("Please enter your email");
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    errors.push("Please enter a valid email address (must contain '@' and '.')");
    isValid = false;
  }

  // Message validation
  if (!message) {
    errors.push("Please enter your message");
    isValid = false;
  }

  if (!isValid) {
    const errorHtml = errors.map(error => `
      <div class="alert error-alert">
        ${error}
      </div>
    `).join('');
    
    alertContainer.innerHTML = errorHtml;
    return;
  }

  // If form is valid
  const successHtml = `
    <div class="alert success-alert">
      Message sent successfully!
    </div>
  `;
  alertContainer.innerHTML = successHtml;
  form.reset();
  
  // Clear success message after 3 seconds
  setTimeout(() => {
    alertContainer.innerHTML = '';
  }, 3000);
});

function createAlertContainer(form) {
  const container = document.createElement('div');
  container.id = 'formMessage';
  container.className = 'alert-container';
  form.appendChild(container);
  return container;
}
