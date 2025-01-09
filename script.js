var typed = new Typed(".multiple-text", {
  strings: [
    "FrontEnd Development ",
    "Backend Development",
    "Artificial Intelligence and Machine Learning",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".AboutMe").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function zomato() {
  open("https://github.com/Nagasaidhanya/Zomato_insights_dashboard");
}
function zomatodemo() {
  open("https://app.powerbi.com/view?r=eyJrIjoiOWE0YTIwYWYtYTEwZS00NGUzLWI0MWEtMDc4NTdkOGE2YzQ3IiwidCI6IjE4ODZjNmMwLWRlN2YtNGU0Yi05MTg4LWNmNDJjNDE3ZDk1MiJ9");
}

function object() {
  open("https://github.com/Nagasaidhanya/Streamlit_Object_Detection");
}
function objectdemo() {
  open("https://nagasaidhanya-streamlit-object-dete-object-detection-app-1xchnd.streamlit.app/");
}
function disease() {
  open("https://github.com/Nagasaidhanya/Multiple-Disease-Prediction-Using-Streamlit");
}
function diseaseLive() {
  open("https://nagasaidhanya-multiple-disease-prediction-using-stre-app-dqcd8c.streamlit.app/");
}
function tictactoe() {
  open("https://github.com/Nagasaidhanya/Tic-Tac-Toe");
}

function diet() {
  open("https://github.com/Nagasaidhanya/Diet-and-Workout-Recommendation-Using-Google-Gemini-Pro");
}

function resume() {
  open(
    "https://drive.google.com/file/d/1TnTM9HBIHJUxVlz9z4O1hXh-B3bIx89-/view?usp=sharing"
  );
}
