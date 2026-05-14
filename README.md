# Real-Time Data Visualization Dashboard

A high‑performance analytics dashboard that visualizes live‑streaming data with smooth updates, built with Vue 3, TypeScript, Pinia, ECharts, and Tailwind CSS.

## Live Demo

https://realtime-dashboard-873a.vercel.app/

---

## Setup & Installation

```bash
git clone https://github.com/m-tech-cod/realtime-dashboard
cd realtime-dashboard
npm install
npm run dev
Open http://localhost:5173/

---

## Architecture & State Management

Vue 3 with Composition API and <script setup>
Pinia – centralised store (useDataStore) holding:
points (array of data points)
metrics (current CPU metric)
events (activity feed)
isStreaming (play/pause flag)
Data simulator (dataSimulator.ts) – emits new random points, metrics, and events every second using setInterval.
Data flow: DataSimulator → Pinia Store → Vue components (charts, cards, feed)
All updates are reactive, and components automatically re‑render when the store changes.

---

## Real‑Time Streaming Approach

Simulated real‑time data: the simulator generates a new data point every second.
Efficient updates:
Keeps only the last 100 points for charts (limits memory and rendering work).
Metrics are overwritten with the latest value.
Activity feed keeps the last 50 events, newest first.
Play/Pause control stops the simulator, preventing unnecessary updates.

---

## Rendering Optimizations

Chart components use vue-echarts with autoresize to adapt to container size – no extra re‑renders.
Memoization of ECharts options (computed properties) to avoid re‑creating objects on every tick.
Limit data points to 100 (line/area) and 10 for the bar chart.
Tailwind CSS for layout – no heavy custom CSS, only utility classes.
Dark mode toggling via class="dark" – smooth transition without layout shifts.

---

##  UI & Responsiveness

Fully responsive layout (mobile, tablet, desktop) using Tailwind’s grid and breakpoints.

Dark/light theme persisted in localStorage.

Accessible buttons and semantic HTML.

Smooth hover effects and clean card design.

Component	Description
LineChart	real‑time line chart with area fill
BarChart	last 10 values as vertical bars
AreaChart	area chart for trend visualisation
MetricCards	live metric (CPU usage) with trend arrow
ActivityFeed	scrollable list of recent events/alerts
Controls	Play/Pause button
ThemeToggle	dark/light mode switcher

---

## Trade‑offs & Limitations

Choice	Reason	Impact / Mitigation
Simulated data	No external API needed; self‑contained demo.	Not a real data source – can be easily replaced.
Fixed metrics	Only one metric (CPU Usage) for simplicity.	Easy to extend to multiple metrics.
No WebSocket	setInterval is simpler and sufficient for the requirement.	Not a true push‑based stream, but updates still feel real‑time.
Client‑side only	No backend persistence – data resets on page reload.	Acceptable for a front‑end demo; store could be extended to IndexedDB.
Limited activity types	Only info/warning events.	Enough to demonstrate the feed; extensible.

---

## Testing the Dashboard

1. Run the app – charts start updating automatically.
2. Toggle dark mode – click the sun/moon icon.
3. Pause streaming – the button turns green, data stops.
4.Resume streaming – data flow restarts.
5.Inspect responsive – resize browser or use device toolbar.

---

## Technologies Used
.Vue 3
.TypeScript
.Pinia
.ECharts + vue-echarts
.Tailwind CSS
.Vite

## Author
ALAYDE Malomon Araffath – HNG Internship 2026




