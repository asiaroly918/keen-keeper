# KeenKeeper 🤝

KeenKeeper is a personal relationship management (CRM) web application designed to help users maintain and nurture meaningful connections with friends, family, and mentors. It tracks contact frequency, shows relationship statuses (On-track, Almost Due, Overdue), and helps users stay consistent with their social circles.

## 🚀 Live Demo
Check out the live application here: [KeenKeeper Live Link](https://asiaroly918.github.io/b13-a7-keen-keeper/)

---

## ✨ Features

- **Interactive Dashboard:** View a comprehensive grid of 12 default friends with their profiles, current relationship statuses, and tags.
- **Dynamic Friend Details:** Click on any friend's card to view their complete profile, detailed relationship metrics, and quick action steps.
- **Add Friend Form (`/add-friend`):** Easily add new contacts with customized names, emails, photos, tags, and contact goals (weekly, bi-weekly, monthly).
- **Persistent Global Layout:** A beautifully designed sticky Navigation Bar and a dark-green Footer that persist seamlessly across all pages.
- **Quick Check-In Actions:** Log calls, text messages, or meetups directly from a friend's profile.
- **Fully Responsive Design:** Crafted with a clean, modern aesthetic utilizing Tailwind CSS, fully optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend Library:** React.js (built with Vite)
- **Routing:** React Router DOM (Declarative client-side routing)
- **Styling:** Tailwind CSS (using the official `@tailwindcss/vite` plugin)
- **Icons:** SVG-based responsive iconography

---

## 📂 Folder Structure

```text
src/
├── components/
│   └── shared/
│       ├── AddFriend.jsx             # Component for adding new contacts
│       ├── Friendship Analytics.jsx  # Analytics overview page
│       ├── Navbar.jsx                # Global navigation bar
│       └── Timeline.jsx              # Connection history timeline
├── layout/
│   ├── FriendsDetail.jsx             # Individual friend profile page
│   └── Rootlayout.jsx                # Main layout wrapper (Navbar, Outlet, Footer)
├── main.jsx                          # Main routing & application entrypoint
├── index.css                         # Tailwind CSS global styles
└── public/
    └── friends.json                  # Local JSON database with 12 friend profiles