# Glute Studio

A mobile-friendly, single-day beginner leg and glute workout with seven short video demonstrations (5–60 seconds), weight and rep logging, a rest timer, and browser-local workout history.

## Preview

Open `dist/index.html` in a browser, or serve `dist/` using a static web server. Video playback needs an internet connection. The embedded players include original-video fallback links.

## Deploy to Vercel

Import this directory as a Vercel project. The included `vercel.json` sets the output directory to `dist`. No server, database, environment variables, or secrets are required. The build command runs a JavaScript syntax check.

## Data

Workout entries and history live in localStorage in the current browser. They do not sync across browsers or devices. Export history as JSON from the Progress screen for a personal backup. No analytics or account system is included.

## Verification

Checked JavaScript syntax, desktop layout, a 390px-wide mobile layout, logging, set completion, persistence after reload, saving workout history, the rest timer controls, and an embedded video player. The supplied project contains no test workout history; browser data is separate from the source files.

## Workout

Goblet squat, Romanian deadlift, supported split squat, glute bridge, fire hydrant, donkey kick (bent-knee kickback), and standing calf raise. Begin with one set of each exercise and progress to two. The Basics tab explains effort, resistance progression, and recovery.

Video sources are credited beside each player and on the Basics tab. Demonstration loads may differ from the beginner prescriptions. The general training reference is the 2026 ACSM resistance training position stand (https://pubmed.ncbi.nlm.nih.gov/41843416/).
