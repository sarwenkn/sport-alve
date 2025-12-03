# Sport Alve – Sport + AI + Active

Sport Alve is a web-based fitness assistant that simulates an AI coach to help users plan safer and more effective workouts.

It is designed as an educational prototype for an assignment, focusing on **exercise guidance**, **basic personalisation**, **posture insight** and **simple injury recovery suggestions** (non-medical).

Live demo: **https://sarwenkn.github.io/sport-alve/**

---

## 🎯 Objectives

- Provide step-by-step workout guidance that feels “AI powered”.
- Personalise training plans based on user profile (age, level, goal, days/week).
- Offer clear visual guidance for common exercises.
- Simulate AI posture feedback from an uploaded photo (rule-based, not true CV).
- Give basic, safe injury-recovery suggestions with clear disclaimers.

---

## 🧩 Features

### Step 1 – Profile Setup

Users enter:

- Name
- Age
- Sex
- Experience level (Beginner / Intermediate / Advanced)
- Main goal or sport (general fitness, fat loss, muscle gain, running, football, etc.)
- Training days per week

The app stores this data in `localStorage` and shows an **“AI coach view”** summary that is reused in other steps.

---

### Step 2 – Exercise Guidance

Two parts:

1. **Session Setup**
   - Choose session type (Strength / Cardio / Mobility)
   - Duration (minutes)
   - Generates **before** and **after** exercise guidance:
     - Warm-up ideas
     - Cool-down and stretching
     - Hydration and recovery notes

2. **Exercise Visual Guide**
   - Select exercise: Squat, Push-up, Plank, Lunge
   - Shows:
     - Image of correct posture
     - Embedded YouTube demo video
     - Key steps
     - Common mistakes

All logic is implemented client-side in JavaScript.

---

### Step 3 – AI-Style Training Plan

- Uses the saved profile (age, level, goal, days/week).
- Generates a **weekly schedule table** with:
  - Day
  - Session type (with emojis, e.g. 💪, 🏃, 🧘)
  - Intensity
  - Approximate duration
  - Main focus
  - Hydration & recovery notes
- Includes a “personalisation level” score (%) that indicates how much the plan is adapted to user inputs (rule-based scoring).

The plan is **rule-based**, but presented as an “AI-like” engine for educational purposes.

---

### Step 4 – Posture Insight (Upload + Feedback)

- User selects the exercise (Squat, Push-up, Plank, Lunge).
- Uploads a posture photo (image shown as preview).
- Selects what they *feel or notice*:
  - Knees go inward
  - Rounded/hunched back
  - Hips too high
  - Shoulders too far forward
  - Pain or pinching

The app returns:

- An estimated posture quality percentage.
- A status (Good / Needs attention / High priority to fix).
- Specific tips based on the chosen exercise and issues.
- A disclaimer clearly stating this is **educational only** and does not analyse the image directly.

---

### Step 5 – Injury Recovery Guidance (Educational)

User selects:

- Injured area: Knee / Shoulder / Lower back / Ankle
- Severity/feeling: Mild discomfort, Pain after exercise, Sharp pain, Swelling/instability

Using the profile + area + severity, the app generates:

- A short **profile context** sentence (e.g. age, level, days/week).
- A **guidance summary** (low / moderate / higher-risk pattern).
- A bullet list of general suggestions.

A strong disclaimer explains that this is **not medical advice** and a healthcare professional should be consulted.

---

## 🛠 Tech Stack

- **HTML5** – structure
- **CSS3** – styling (custom, no framework)
- **Vanilla JavaScript** – logic & UI behaviour
- **localStorage** – saving user profile locally
- **GitHub Pages** – static hosting

No backend, no database, no external frameworks required.

---

## 📂 Project Structure

```text
sport-alve/
│ index.html       # Main single-page app structure
│ style.css        # All styles (layout, theme, responsive)
│ app.js           # All client-side logic
│
└──assets/
    ├──logo.png    # Logo used in header
    ├──squat.png   # Exercise images
    ├──pushup.png
    ├──plank.png
    └──lunge.png
