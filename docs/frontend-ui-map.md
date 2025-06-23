# Frontend UI Map

This document lists the main UI screens for the collaborative shopping list application based on the [PRD](PRD.md) and [SRS](SRS.md). For each page we include its purpose and notable subcomponents.

| Page Name | Purpose | Required subcomponents |
|-----------|---------|-----------------------|
| **Authentication** | Allow users to sign up or log in so each household member has an account. | Login form, Signup form, Error display |
| **List Overview** | Display all shopping lists that belong to the logged‑in user and offer creation of new lists. | List preview tiles, Add List button, Offline indicator |
| **List Detail** | Show items in a specific list grouped by category; enable adding, editing or checking off items. | Item List, Category filter, Item form, Suggestion panel, Sync status |
| **Notification Settings** | Manage push notification subscriptions and reminders about shopping or new items. | Notification toggle, Reminder scheduler |
| **App Shell / Layout** | Provide responsive PWA shell with navigation and offline support for all pages. | Header, Navigation menu, Route outlet, Connection status indicator |

