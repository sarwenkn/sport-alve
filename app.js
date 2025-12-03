// ==== BASIC DATA STRUCTURES ====

// Exercise library for Step 2 (visuals + how-to)
const exerciseLibrary = {
  squat: {
    name: "Bodyweight Squat",
    image: "assets/img/squat.png",
    videoUrl: "https://www.youtube.com/embed/l83R5PblSMA",
    steps: [
      "Stand with feet about shoulder-width apart.",
      "Keep chest up and core tight.",
      "Push hips back and bend knees as if sitting.",
      "Go down until thighs are near parallel if comfortable.",
      "Drive through your heels to stand back up."
    ],
    mistakes: [
      "Knees collapsing inward.",
      "Heels lifting from the floor.",
      "Rounding the lower back at the bottom."
    ]
  },
  pushup: {
    name: "Push-up",
    image: "assets/img/pushup.jpeg",
    videoUrl: "https://www.youtube.com/embed/WDIpL0pjun0",
    steps: [
      "Place hands slightly wider than shoulder-width.",
      "Keep body in a straight line from head to heels.",
      "Lower chest towards the floor with control.",
      "Push back up while keeping core braced."
    ],
    mistakes: [
      "Hips sagging or piking up.",
      "Elbows flaring too far out.",
      "Neck dropping instead of staying neutral."
    ]
  },
  plank: {
    name: "Plank",
    image: "assets/img/plank.png",
    videoUrl: "https://www.youtube.com/embed/pvIjsG5Svck",
    steps: [
      "Start on elbows directly under shoulders.",
      "Extend legs back and brace your core.",
      "Keep a straight line from head to heels.",
      "Hold while breathing steadily."
    ],
    mistakes: [
      "Hips too high or sagging.",
      "Looking up or dropping the head.",
      "Holding breath instead of breathing."
    ]
  },
  lunge: {
    name: "Lunge",
    image: "assets/img/lunge.png",
    videoUrl: "https://www.youtube.com/embed/tQNktxPkSeE",
    steps: [
      "Stand tall, step one foot forward.",
      "Bend both knees to about 90 degrees.",
      "Keep front knee above ankle, not past toes.",
      "Push through front heel to return to standing."
    ],
    mistakes: [
      "Front knee collapsing inward.",
      "Torso leaning too far forward.",
      "Feet placed too narrow causing instability."
    ]
  }
};

// Posture tips for Step 4 AI-style analysis
const postureTips = {
  squat: {
    base: "For a solid squat, focus on a neutral spine, knees tracking over toes and full-foot contact on the ground.",
    kneesIn: "Your knees may be collapsing inward. Try pushing them slightly out and strengthening your glutes.",
    roundedBack: "Watch out for a rounded lower back. Brace your core, keep chest up and avoid going deeper than you can control.",
    hipsHigh: "If hips are too high, you might not be bending knees enough. Sit back and down, not just forward.",
    shouldersForward: "Keep shoulders stacked over mid-foot, not excessively forward.",
    pain: "If you feel pain, reduce depth, lighten the load and consult a professional."
  },
  pushup: {
    base: "For a strong push-up, maintain a straight line from head to heels and control the lowering phase.",
    kneesIn: "",
    roundedBack: "",
    hipsHigh: "Hips too high will turn it into more of a pike. Squeeze glutes and keep your body straight.",
    shouldersForward: "Don’t let shoulders shrug toward your ears. Pack them down and back slightly.",
    pain: "Joint pain during push-ups may mean you need to regress to incline push-ups or adjust hand position."
  },
  plank: {
    base: "In a good plank, your ears, shoulders, hips, knees and ankles form a straight line.",
    hipsHigh: "If hips are too high, you reduce core challenge. Lower them until your body forms a straight line.",
    roundedBack: "Avoid rounding upper back too much. Imagine reaching your sternum forward slightly.",
    shouldersForward: "Shoulders stacked over elbows. Avoid sliding too far forward.",
    pain: "If you feel pain, shorten the hold time and check for excessive arching or rounding."
  },
  lunge: {
    base: "In a stable lunge, your knees bend to around 90° and stay aligned with your toes.",
    kneesIn: "Knees going inward is common. Focus on pushing the knee outward in line with middle toes.",
    roundedBack: "Keep chest open and spine neutral, not collapsing forward.",
    hipsHigh: "If you barely bend the knees, reduce stride length and sit down into the movement.",
    shouldersForward: "",
    pain: "If pain appears in the knee, reduce depth and check knee-over-ankle alignment."
  }
};

const postureIssueLabels = {
  kneesIn: "Knees go inward",
  roundedBack: "Rounded / hunched back",
  hipsHigh: "Hips too high",
  shouldersForward: "Shoulders too far forward",
  pain: "I feel pain or pinching"
};

// Injury templates for Step 5
const injuryGuidance = {
  knee: {
    mild: [
      "Reduce running or jumping impact for a few sessions.",
      "Prioritise low-impact cardio like cycling or brisk walking.",
      "Add light quad and glute activation work (e.g. bodyweight squats, bridges) if pain-free."
    ],
    afterExercise: [
      "Check if your volume is increasing too quickly; consider cutting weekly load by ~20%.",
      "Apply simple recovery strategies: gentle stretching, ice/heat if recommended by your doctor.",
      "Monitor swelling or instability; if it increases, seek professional assessment."
    ],
    sharp: [
      "Stop high-load or deep knee-bend activities immediately.",
      "Avoid self-diagnosis; sharp pain can signal more serious issues.",
      "Consult a physiotherapist or sports doctor before continuing intense training."
    ],
    swelling: [
      "Swelling or giving-way of the knee is a red flag.",
      "Minimise weight-bearing impact and avoid pivoting movements.",
      "Seek prompt medical evaluation to rule out ligament or meniscus injury."
    ]
  },
  shoulder: {
    mild: [
      "Reduce overhead pressing volume for a short period.",
      "Emphasise scapular stability exercises and light band work.",
      "Ensure good warm-up for shoulders before upper-body sessions."
    ],
    afterExercise: [
      "Check your pressing technique and range of motion.",
      "Lower the load or use dumbbells to allow more natural shoulder movement.",
      "Use controlled tempo and avoid bouncing at the bottom of the press."
    ],
    sharp: [
      "Avoid painful ranges, especially overhead or behind-the-neck positions.",
      "Do not push through sharp pain; stop the exercise.",
      "Schedule a consultation with a healthcare professional if symptoms persist."
    ],
    swelling: [
      "Significant swelling or visible deformity needs urgent assessment.",
      "Immobilise the area and avoid heavy lifting.",
      "Seek medical help as soon as possible."
    ]
  },
  back: {
    mild: [
      "Reduce heavy spinal loading (e.g. deadlifts, heavy squats) for a while.",
      "Incorporate gentle mobility and core stability exercises.",
      "Focus on neutral spine during daily activities and training."
    ],
    afterExercise: [
      "Check your technique on exercises like deadlifts and rows.",
      "Lower intensity and volume while you rebuild good mechanics.",
      "Include more warm-up sets and lighter practice sets."
    ],
    sharp: [
      "Stop any exercise that triggers sharp low-back pain.",
      "Avoid sudden twisting or heavy lifting until assessed.",
      "Consult a doctor or physiotherapist if pain is intense or radiates to the legs."
    ],
    swelling: [
      "Visible swelling or neurological symptoms (numbness/weakness) are serious.",
      "Avoid heavy loads and impact sports immediately.",
      "Seek medical evaluation promptly."
    ]
  },
  ankle: {
    mild: [
      "Use low-impact cardio while reducing running and jumping volume.",
      "Add balance exercises and calf/foot strengthening when comfortable.",
      "Monitor for any increase in instability or pain."
    ],
    afterExercise: [
      "Ice and elevation can help after intense sessions, if recommended by your doctor.",
      "Review footwear and surface; uneven ground can aggravate symptoms.",
      "Temporarily cut down on direction-change drills."
    ],
    sharp: [
      "Do not continue weight-bearing sport on a sharply painful ankle.",
      "Avoid aggressive stretching in the acute phase.",
      "Seek an assessment for potential ligament injury."
    ],
    swelling: [
      "Swelling, bruising and difficulty weight-bearing can indicate a sprain or fracture.",
      "Use off-loading and support as advised by professionals.",
      "Get checked by a medical professional as soon as you can."
    ]
  }
};

// ===== UTILITIES =====

function loadProfileFromStorage() {
  try {
    const raw = localStorage.getItem("sportAlveProfile");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveProfileToStorage(profile) {
  localStorage.setItem("sportAlveProfile", JSON.stringify(profile));
}

// ===== MAIN APP =====

document.addEventListener("DOMContentLoaded", () => {
  const startDemoBtn = document.getElementById("start-demo-btn");
  const nextStepBanner = document.getElementById("next-step-banner");
  const quickNavButtons = document.querySelectorAll(".quick-nav .pill-link");

  const profileForm = document.getElementById("profile-form");
  const profileSummaryEl = document.getElementById("profile-summary");

  const sessionTypeEl = document.getElementById("session-type");
  const sessionDurationEl = document.getElementById("session-duration");
  const guidanceBtn = document.getElementById("guidance-btn");
  const guidanceOutput = document.getElementById("guidance-output");
  const beforeList = document.getElementById("before-list");
  const afterList = document.getElementById("after-list");

  const exerciseSelect = document.getElementById("exercise-select");
  const exerciseVisual = document.getElementById("exercise-visual");
  const exerciseImage = document.getElementById("exercise-image");
  const exerciseVideo = document.getElementById("exercise-video");
  const exerciseSteps = document.getElementById("exercise-steps");
  const exerciseMistakes = document.getElementById("exercise-mistakes");

  const generatePlanBtn = document.getElementById("generate-plan-btn");
  const planLoading = document.getElementById("plan-loading");
  const planOutput = document.getElementById("plan-output");
  const planSummary = document.getElementById("plan-summary");
  const planTableWrapper = document.getElementById("plan-table-wrapper");

  const postureExerciseEl = document.getElementById("posture-exercise");
  const postureImageInput = document.getElementById("posture-image-input");
  const posturePreviewWrapper = document.getElementById("posture-preview-wrapper");
  const posturePreview = document.getElementById("posture-preview");
  const analyzePostureBtn = document.getElementById("analyze-posture-btn");
  const postureResult = document.getElementById("posture-result");
  const postureIssuesContainer = document.getElementById("posture-issues-container");

  const injuryAreaEl = document.getElementById("injury-area");
  const injurySeverityEl = document.getElementById("injury-severity");
  const injuryBtn = document.getElementById("injury-btn");
  const injuryOutput = document.getElementById("injury-output");

  // "Multi-page" style navigation: show one section at a time
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("main .section");

  function showSection(id) {
    sections.forEach((sec) => {
      if (sec.id === id) {
        sec.classList.remove("hidden-section");
      } else {
        sec.classList.add("hidden-section");
      }
    });
  }

  function jumpToSection(id) {
    if (!id) return;
    showSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (navLinks && sections.length) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.substring(1);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        jumpToSection(id);
      });
    });
    // Default view
    showSection("hero");
  }

  // Scroll Start Demo => Profile section
  if (startDemoBtn) {
    startDemoBtn.addEventListener("click", () => {
      jumpToSection("profile-section");
    });
  }

  // Load profile if exists
  let profile = loadProfileFromStorage();
  if (profile) {
    fillProfileForm(profileForm, profile);
    renderProfileSummary(profileSummaryEl, profile);
    showNextStepBanner(nextStepBanner);
  }

  // PROFILE FORM SUBMIT
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      profile = getProfileFromForm(profileForm);
      saveProfileToStorage(profile);
      renderProfileSummary(profileSummaryEl, profile);
      showNextStepBanner(nextStepBanner);
      jumpToSection("guidance-section");
      alert("Profile saved. Sport Alve will now personalise suggestions. Next up: session guidance.");
    });
  }

  // GUIDANCE BUTTON
  if (guidanceBtn) {
    guidanceBtn.addEventListener("click", () => {
      const type = sessionTypeEl.value;
      const duration = parseInt(sessionDurationEl.value || "0", 10);

      if (!type || !duration) {
        alert("Please select a session type and duration.");
        return;
      }

      const guidance = buildGuidance(type, duration);
      renderGuidance(guidanceOutput, beforeList, afterList, guidance);
    });
  }

  // EXERCISE SELECT CHANGE (visual)
  if (exerciseSelect) {
    exerciseSelect.addEventListener("change", () => {
      const key = exerciseSelect.value;
      if (!key || !exerciseLibrary[key]) {
        exerciseVisual.classList.add("hidden");
        return;
      }

      const ex = exerciseLibrary[key];
      exerciseVisual.classList.remove("hidden");

      exerciseImage.src = ex.image;
      exerciseImage.alt = ex.name;
      exerciseVideo.src = ex.videoUrl;

      renderList(exerciseSteps, ex.steps);
      renderList(exerciseMistakes, ex.mistakes);
    });
  }

  // PLAN GENERATION
  if (generatePlanBtn) {
    generatePlanBtn.addEventListener("click", () => {
      if (!profile || !profile.age) {
        alert("Please fill and save your profile first.");
        return;
      }

      planOutput.classList.add("hidden");
      planLoading.classList.remove("hidden");

      setTimeout(() => {
        const result = generatePlan(profile);
        planLoading.classList.add("hidden");
        renderPlan(planOutput, planSummary, planTableWrapper, profile, result);
      }, 900);
    });
  }

  // POSTURE IMAGE PREVIEW
  if (postureImageInput) {
    postureImageInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        posturePreviewWrapper.classList.remove("hidden");
        posturePreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Build posture issues when exercise changes
  if (postureExerciseEl && postureIssuesContainer) {
    postureExerciseEl.addEventListener("change", () => {
      buildPostureIssuesUI(postureExerciseEl.value, postureIssuesContainer);
    });
    // initial
    buildPostureIssuesUI(postureExerciseEl.value, postureIssuesContainer);
  }

  // POSTURE ANALYSIS
  if (analyzePostureBtn) {
    analyzePostureBtn.addEventListener("click", () => {
      const exercise = postureExerciseEl.value;
      if (!exercise) {
        alert("Please select the exercise shown in your photo.");
        return;
      }
      const issues = Array.from(
        document.querySelectorAll("#posture-issues-container input[type='checkbox']:checked")
      ).map((cb) => cb.value);

      const analysis = analysePosture(exercise, issues, profile);
      postureResult.classList.remove("hidden");
      postureResult.innerHTML = analysis;
    });
  }

  // INJURY GUIDANCE
  if (injuryBtn) {
    injuryBtn.addEventListener("click", () => {
      const area = injuryAreaEl.value;
      const severity = injurySeverityEl.value;

      if (!area || !severity) {
        alert("Please select both an injured area and severity.");
        return;
      }

      const text = generateInjuryGuidance(profile, area, severity);
      injuryOutput.innerHTML = text;
    });
  }

  if (quickNavButtons && quickNavButtons.length) {
    quickNavButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        jumpToSection(target);
      });
    });
  }
});

function showNextStepBanner(bannerEl) {
  const banner = bannerEl || document.getElementById("next-step-banner");
  if (banner) {
    banner.classList.remove("hidden");
  }
}

// ===== PROFILE HELPERS =====

function getProfileFromForm(form) {
  const name = form.querySelector("#name").value.trim();
  const age = parseInt(form.querySelector("#age").value || "0", 10);
  const sex = form.querySelector("#sex").value;
  const level = form.querySelector("#level").value;
  const goal = form.querySelector("#goal").value;
  const daysPerWeek = parseInt(form.querySelector("#days-per-week").value || "0", 10);

  return { name, age, sex, level, goal, daysPerWeek };
}

function fillProfileForm(form, profile) {
  form.querySelector("#name").value = profile.name || "";
  form.querySelector("#age").value = profile.age || "";
  form.querySelector("#sex").value = profile.sex || "";
  form.querySelector("#level").value = profile.level || "";
  form.querySelector("#goal").value = profile.goal || "";
  form.querySelector("#days-per-week").value = profile.daysPerWeek || "";
}

function renderProfileSummary(el, profile) {
  if (!profile || !profile.age) {
    el.textContent = "No profile yet. Fill in the form and I’ll personalise everything for you.";
    return;
  }

  const goalText = {
    general_fitness: "general fitness",
    fat_loss: "fat loss and conditioning",
    muscle_gain: "muscle gain and strength",
    running: "running performance",
    football: "football performance",
    other_sport: "sport-specific performance"
  }[profile.goal] || "your fitness";

  const namePart = profile.name ? `${profile.name}, ` : "";

  el.innerHTML = `
    <p><strong>Sport Alve view:</strong></p>
    <p>You are <strong>${namePart}${profile.age}</strong> years old, training as a
    <strong>${profile.level}</strong> athlete with a main focus on
    <strong>${goalText}</strong>.</p>
    <p>You have about <strong>${profile.daysPerWeek} day(s)</strong> per week to train.
    The plan will aim for safe but effective progression.</p>
  `;
}

// ===== STEP 2 – GUIDANCE =====

function buildGuidance(type, duration) {
  const before = [];
  const after = [];

  before.push("Check that you feel generally well enough to train.");
  before.push("Drink a bit of water 10–20 minutes before starting.");
  before.push("Do 3–5 minutes of very light movement to wake up the body.");

  if (type === "strength") {
    before.push("Add 5–10 minutes of dynamic warm-up for joints you will use.");
    before.push("Start with at least 1–2 very light warm-up sets.");
    after.push("Do 3–5 minutes of light walking or gentle cycling.");
    after.push("Stretch the main muscle groups you trained for 20–30 seconds each.");
  } else if (type === "cardio") {
    before.push("Begin with 3–5 minutes at an easy pace before going harder.");
    after.push("Gradually slow down for the last 3–5 minutes instead of stopping suddenly.");
    after.push("Hydrate and note how your breathing recovers.");
  } else if (type === "mobility") {
    before.push("Move your joints gently through comfortable ranges first.");
    after.push("Note which movements feel easier or freer at the end.");
  }

  if (duration >= 45) {
    before.push("Ensure you ate a light snack 1–2 hours before, if needed.");
    after.push("Plan a small recovery snack and extra hydration afterwards.");
  }

  return { before, after };
}

function renderGuidance(container, beforeList, afterList, guidance) {
  container.classList.remove("hidden");
  renderList(beforeList, guidance.before);
  renderList(afterList, guidance.after);
}

function renderList(ul, items) {
  ul.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// ===== STEP 3 – PLAN GENERATION =====

function generatePlan(profile) {
  const { level, goal, daysPerWeek } = profile;
  const days = daysPerWeek || 3;
  const plan = [];

  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  for (let i = 0; i < days; i++) {
    const dayName = dayNames[i % dayNames.length];
    const session = buildSession(level, goal, i);
    plan.push({
      day: dayName,
      ...session
    });
  }

  return plan;
}

function buildSession(level, goal, index) {
  const isEarlyWeek = index === 0;
  const midWeek = index === 1;
  const lateWeek = index >= 2;

  let title = "Full-body training 💪";
  let mainFocus = "Mix of basic strength and light cardio.";
  let duration = "30–45 min";
  let intensity = "Moderate";
  let hydration = "Sip water before and during. Short stretch and easy breathing work afterwards.";

  if (goal === "fat_loss") {
    if (isEarlyWeek) {
      title = "Full-body strength + cardio finisher 💪🏃";
      mainFocus = "3–4 compound lifts plus 5–10 minutes of moderate cardio at the end.";
      duration = "40–55 min";
      intensity = "Moderate";
      hydration = "Arrive hydrated, small snack 1–2 h before if needed, sip water during and do a cool-down walk.";
    } else if (midWeek) {
      title = "Interval cardio session 🏃‍♂️";
      mainFocus = "Alternating harder and easier bouts of cardio (bike, run, rower, etc.).";
      duration = "25–40 min";
      intensity = "Moderate–high";
      hydration = "Drink a little beforehand and after. If sweating heavily, consider an electrolyte drink.";
    } else {
      title = "Mobility + core recovery 🧘";
      mainFocus = "Gentle mobility for hips/shoulders with 3–4 core exercises.";
      duration = "20–35 min";
      intensity = "Easy";
      hydration = "Normal water intake is usually enough. Focus on relaxed breathing and sleep quality.";
    }
  } else if (goal === "muscle_gain") {
    if (isEarlyWeek) {
      title = "Upper-body strength day 💪";
      mainFocus = "Push and pull exercises, 3–4 sets of 8–12 reps.";
      duration = "45–60 min";
      intensity = "Moderate–high";
      hydration = "Arrive fed, 1–2 h after a meal. Sip water between sets; include a protein-rich meal after.";
    } else if (midWeek) {
      title = "Lower-body strength day 🦵";
      mainFocus = "Squats/hip hinges plus accessory leg work.";
      duration = "45–60 min";
      intensity = "Moderate–high";
      hydration = "Keep water nearby and add a small post-session snack with protein and carbs.";
    } else {
      title = "Full-body pump session 🔁";
      mainFocus = "Lighter weights, higher reps (12–15) with focus on technique.";
      duration = "35–50 min";
      intensity = "Moderate";
      hydration = "Drink to thirst, stretch gently after and avoid very large meals immediately before training.";
    }
  } else if (goal === "running") {
    if (isEarlyWeek) {
      title = "Easy run day 🏃";
      mainFocus = "Continuous easy running at conversational pace.";
      duration = "20–40 min";
      intensity = "Easy–moderate";
      hydration = "Small drink before and after. If hot, sip a bit during as well.";
    } else if (midWeek) {
      title = "Intervals or hill reps ⛰️";
      mainFocus = "Short, faster efforts with equal or slightly longer rest.";
      duration = "25–45 min";
      intensity = "Moderate–high";
      hydration = "Arrive hydrated; consider an electrolyte drink on longer or hotter days.";
    } else {
      title = "Strength + mobility for runners 🧘‍♂️";
      mainFocus = "Glute/hip strength, calf raises and ankle mobility.";
      duration = "25–35 min";
      intensity = "Easy–moderate";
      hydration = "Regular water intake and focus on post-session stretching for calves and hips.";
    }
  } else if (goal === "football") {
    if (isEarlyWeek) {
      title = "Strength + power day ⚡";
      mainFocus = "Lower-body strength with simple jumps if appropriate.";
      duration = "45–60 min";
      intensity = "Moderate–high";
      hydration = "Hydrate across the day, then sip water or sports drink during and after.";
    } else if (midWeek) {
      title = "Conditioning + agility drills 🏃‍♂️";
      mainFocus = "Short direction-change drills and moderate conditioning blocks.";
      duration = "30–45 min";
      intensity = "Moderate–high";
      hydration = "Light meal 2–3 h before, water or isotonic drink around the session.";
    } else {
      title = "Recovery & ball-feel session ⚽";
      mainFocus = "Gentle ball work, light mobility and stretching.";
      duration = "25–40 min";
      intensity = "Easy";
      hydration = "Normal hydration; keep this session comfortable, not exhausting.";
    }
  } else {
    // general fitness / other sport
    if (isEarlyWeek) {
      title = "Full-body strength block 💪";
      mainFocus = "3–5 basic movements covering upper, lower and core.";
      duration = "40–55 min";
      intensity = "Moderate";
      hydration = "Sip water throughout, light snack available if you train longer than 45 minutes.";
    } else if (midWeek) {
      title = "Cardio / conditioning day 🏃";
      mainFocus = "20–40 minutes at easy-to-moderate pace on your preferred modality.";
      duration = "25–40 min";
      intensity = "Easy–moderate";
      hydration = "Drink a glass of water before and after; more if the weather is hot.";
    } else {
      title = "Mobility & core stability 🧘";
      mainFocus = "Gentle stretches plus 3–4 core exercises.";
      duration = "20–30 min";
      intensity = "Easy";
      hydration = "Hydrate normally, focus on controlled breathing and relaxation.";
    }
  }

  if (level === "beginner") {
    mainFocus += " Keep load light to moderate and give yourself extra rest between sets.";
  } else if (level === "advanced") {
    mainFocus += " You can carefully push intensity or volume based on your experience.";
  }

  return { title, mainFocus, duration, intensity, hydration };
}

function renderPlan(planOutput, planSummary, tableWrapper, profile, plan) {
  planOutput.classList.remove("hidden");

  const goalText = {
    general_fitness: "balanced general fitness",
    fat_loss: "fat loss and conditioning",
    muscle_gain: "muscle gain and strength",
    running: "running performance",
    football: "football performance",
    other_sport: "sport performance"
  }[profile.goal] || "your goals";

  const personalisationScore = calculatePersonalisationScore(profile);
  const namePart = profile.name ? `${profile.name}, ` : "";

  planSummary.innerHTML = `
    Based on your profile (for <strong>${namePart}${profile.age}</strong>, level
    <strong>${profile.level}</strong>, goal <strong>${goalText}</strong> and
    <strong>${profile.daysPerWeek}</strong> training day(s) per week),
    this is a simple weekly training structure.<br><br>
    <strong>Personalisation level:</strong> ~${personalisationScore}% (how much the plan uses your inputs).
  `;

  const table = document.createElement("table");
  table.className = "plan-table";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Day</th>
      <th>Session type</th>
      <th>Intensity</th>
      <th>Approx. duration</th>
      <th>Main focus</th>
      <th>Hydration & recovery</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  plan.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.day}</td>
      <td>${row.title}</td>
      <td>${row.intensity}</td>
      <td>${row.duration}</td>
      <td>${row.mainFocus}</td>
      <td>${row.hydration}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  tableWrapper.innerHTML = "";
  tableWrapper.appendChild(table);
}

function calculatePersonalisationScore(profile) {
  let score = 60;
  if (profile.level === "beginner" || profile.level === "advanced") score += 8;
  if (profile.goal && profile.goal !== "general_fitness") score += 10;
  if (profile.daysPerWeek >= 3) score += 7;
  if (profile.daysPerWeek >= 5) score += 4;
  if (profile.age < 20 || profile.age > 40) score += 3;
  if (score > 96) score = 96;
  return score;
}

// ===== STEP 4 – POSTURE ISSUES UI + ANALYSIS =====

function buildPostureIssuesUI(exerciseKey, container) {
  if (!container) return;
  container.innerHTML = "";

  if (!exerciseKey) {
    container.innerHTML =
      '<p style="font-size:0.8rem; color:#a0aec0;">Choose an exercise above to see posture checkpoints.</p>';
    return;
  }

  const tips = postureTips[exerciseKey] || {};
  const keys = Object.keys(postureIssueLabels).filter(
    (k) => tips[k] && tips[k].trim() !== ""
  );

  if (!keys.length) {
    container.innerHTML =
      '<p style="font-size:0.8rem; color:#a0aec0;">No specific posture checks configured for this exercise yet.</p>';
    return;
  }

  keys.forEach((key) => {
    const id = `posture-${key}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.value = key;

    const span = document.createElement("span");
    span.textContent = postureIssueLabels[key];

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
}

function analysePosture(exercise, issues, profile) {
  const tips = postureTips[exercise] || {};
  const base = tips.base || "Focus on a stable stance, controlled movement and neutral spinal alignment.";

  const hasIssues = issues && issues.length > 0;

  let baseScore = 95;
  const penalty = (issues ? issues.length : 0) * 15;
  let score = baseScore - penalty;
  if (score < 40) score = 40;

  let statusLabel = "Good";
  if (score < 70) statusLabel = "Needs attention";
  if (score < 50) statusLabel = "High priority to fix";

  const namePart = profile && profile.name ? `${profile.name}, ` : "";

  let html = `
    <strong>Posture analysis for ${namePart}${exercise}</strong>
    <p>Estimated posture quality: <strong>${score}%</strong> – <em>${statusLabel}</em></p>
    <p>${base}</p>
  `;

  if (hasIssues) {
    html += "<p><strong>Potential issues based on what you reported:</strong></p><ul>";
    issues.forEach((issueKey) => {
      const text = tips[issueKey];
      if (text) {
        html += `<li>${text}</li>`;
      }
    });
    html += "</ul>";
  } else {
    html += `
      <p>You didn’t report any issues. If the movement feels smooth, pain-free and controlled,
      your posture is likely acceptable for your current level. Still, keep progressing gradually.</p>
    `;
  }

  html += `
    <p style="margin-top:0.7rem; font-size:0.8rem; color:#a0aec0;">
      This is a simplified educational estimate. It does not analyse the image directly and is not a medical assessment.
      Always prioritise pain-free movement and professional coaching when possible.
    </p>
  `;

  return html;
}

// ===== STEP 5 – INJURY GUIDANCE =====

function generateInjuryGuidance(profile, area, severity) {
  const areaData = injuryGuidance[area];
  if (!areaData) {
    return "<p>Sport Alve does not have guidance for this area yet.</p>";
  }

  let severityKey;
  if (severity === "mild") severityKey = "mild";
  else if (severity === "afterExercise") severityKey = "afterExercise";
  else if (severity === "sharp") severityKey = "sharp";
  else severityKey = "swelling";

  const list = areaData[severityKey] || [];
  const profileText = buildProfileContextForInjury(profile);

  let html = `<p><strong>Profile context:</strong> ${profileText}</p>`;

  if (severityKey === "mild" || severityKey === "afterExercise") {
    html += `<p><strong>Guidance summary:</strong> This pattern looks like a ${
      severityKey === "mild" ? "low" : "moderate"
    }-risk situation, but still worth monitoring.</p>`;
  } else {
    html += `<p><strong>Guidance summary:</strong> This pattern could be higher risk. Please take it seriously.</p>`;
  }

  if (list.length) {
    html += "<ul>";
    list.forEach((item) => {
      html += `<li>${item}</li>`;
    });
    html += "</ul>";
  }

  html += `
    <p style="margin-top:0.6rem; font-size:0.8rem; color:#a0aec0;">
      This automated output is for learning purposes only and is not medical advice.
      If pain, swelling or instability are significant or persistent, consult a qualified healthcare professional.
    </p>
  `;

  return html;
}

function buildProfileContextForInjury(profile) {
  if (!profile || !profile.age) {
    return "No profile available. Guidance is generic.";
  }

  const namePart = profile.name ? `${profile.name}, ` : "";
  const levelText = profile.level || "unspecified level";
  const daysText = profile.daysPerWeek ? `${profile.daysPerWeek} training day(s) per week` : "unknown frequency";

  const goalText = {
    general_fitness: "general fitness",
    fat_loss: "fat loss/conditioning",
    muscle_gain: "muscle gain/strength",
    running: "running performance",
    football: "football performance",
    other_sport: "sport performance"
  }[profile.goal] || "overall progress";

  return `${namePart}~${profile.age} y/o, ${levelText} trainee, aiming for ${goalText} with ${daysText}.`;
}
