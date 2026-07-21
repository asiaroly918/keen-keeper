# Keen Keeper 🤝

Keen Keeper is a modern React web application built with Vite and Tailwind CSS. It provides visual insights, contact tracking, and analytics to help users maintain meaningful relationships with friends.

---

## 🚀 Features

- **Dashboard & Banner:** Interactive hero overview presenting key stats at a glance.
- **Friends Directory:** Grid layout listing all friends with status indicators and tags.
- **Friendship Analytics:** Visual charts (Bar & Pie Charts via Recharts) displaying contact gaps against user goals and status distribution.
- **Interaction Timeline:** Visual history logging recent interactions and milestones.
- **Detailed Friend Views:** Dedicated route for viewing specific friend profiles.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (`v6/v7`)
- **Charts:** Recharts
- **Icons:** Lucide React / SVG

---

## 📂 Project Structure

```text
keen-keeper/
├── public/
│   ├── favicon.svg
│   ├── friends.json
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── shared/
│   │       ├── AddFriend.jsx
│   │       ├── Banner.jsx
│   │       ├── Footer.jsx
│   │       ├── Friends.jsx
│   │       ├── FriendshipAnalytics.jsx
│   │       ├── Navbar.jsx
│   │       └── Timeline.jsx
│   ├── layout/
│   │   ├── Friendsdetail.jsx
│   │   └── Rootlayout.jsx
│   ├── pages/
│   │   └── homepage/
│   │       └── Homepage.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js