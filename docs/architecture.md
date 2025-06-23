# System Architecture

This section describes the high level architecture for the collaborative shopping list application defined in [SRS](SRS.md). The goal is to deliver a responsive, real-time experience that works across web and mobile devices and continues to function when offline.

## Overview

The system consists of a **frontend application** built as a Progressive Web App (PWA) and a **backend API** that exposes the data model and synchronization services. A persistent database stores all lists, items and user profiles. A notification service delivers reminders to users when items are added or it is time to shop.

## Frontend

- Built with a modern JavaScript framework and packaged as a PWA so it can run in a browser or be installed on mobile.
- Maintains local data in browser storage for offline access.
- Communicates with the backend via the REST endpoints described in the SRS and uses WebSockets for real-time updates.
- Uses push notifications to alert users of list changes.

## Backend

- Implements the REST API from the SRS, providing endpoints for users, lists and items.
- Handles authentication and authorizes requests to ensure users only see their own lists.
- Publishes real-time updates over WebSockets whenever a list changes.
- Stores data in a relational database.
- Sends notifications through an external push service when items are added or reminders are triggered.

## Integration Points

- **Database** – persistent storage for users, lists, items and categories.
- **Push Notification Service** – delivers alerts to clients.
- **Authentication Provider** – verifies user identity for API requests.

The following diagram illustrates the major components and their interactions.

![Architecture Diagram](architecture-diagram.mmd)
