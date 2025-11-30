# 🩸🏠 Blood House

[![Template](https://img.shields.io/badge/🗂️%20express--it-blue?style=for-the-badge&logoColor=white)](https://github.com/shaishab316/express-it)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Socket.io](https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Stripe](https://img.shields.io/badge/stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Redis](https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![dotenvx](https://img.shields.io/badge/dotenvx-00D9FF?style=for-the-badge&logo=dotenv&logoColor=white)


## 🚀 Vision
**Blood House** is a decentralized, verified, and hyper-local blood donation ecosystem. It removes logistical barriers, prevents scams, and ensures blood reaches patients instantly using intelligent matching and real-time logistics.

---

## 👥 Core User Roles
The system is built around specific user personas, each with unique dashboards and permissions:

1.  **Donor:** Standard user who gives blood.
2.  **Recipient/Patient:** The person (or family) requesting blood.
3.  **Hospital/Blood Bank:** Organization managing inventory and official requests.
4.  **Verifier:** Trusted agent (Social Worker/NGO) who validates urgent requests.
5.  **Transporter:** Volunteer driver for transporting blood or donors.
6.  **Camp Organizer:** Representative (College/Office) managing donation drives.
7.  **Lab Technician:** Medical staff verifying blood safety.
8.  **Sponsor:** Corporate partner offering rewards/coupons.
9.  **Building Captain:** Local community leader for hyper-local coordination.
10. **Admin:** System administrator.

---

## 🌟 Comprehensive Feature List

### 1. Identity & Security
*   **Multi-Role Auth:** Secure login with Role-Based Access Control (RBAC).
*   **Verification Layer:** Phone number OTP (Twilio) and Email verification to prevent spam.
*   **Digital Donor Card:** Dynamic QR code containing blood type and medical history summary for quick check-in.
*   **Privacy Controls:** Toggle to hide phone number and use in-app proxy chat instead.

### 2. The "Brain" - Intelligent Matching
*   **Geo-Fencing Engine:** Automatically finds donors within `X` km of a request.
*   **Smart Filters:** Excludes donors who donated recently (e.g., < 56 days).
*   **Rare Blood Protocol:** Special high-priority alerts for rare types (e.g., AB-, Bombay).
*   **Eligibility Calculator:** Interactive quiz ("Have you traveled recently?") to determine donor readiness before they leave home.

### 3. Request & Fulfillment Workflow
*   **Dynamic Request Forms:** Upload medical proof (images) directly for validation.
*   **Urgency Levels:** Classify requests as `Planned`, `Urgent`, or `Critical`.
*   **Lifecycle Tracking:** `Pending` -> `Verified` -> `Active` -> `Fulfilled` -> `Closed`.
*   **Doctor e-Sign:** Optional interface for doctors to digitally approve a blood request.

### 4. Trust & Verification (Anti-Scam)
*   **The Verifier Dashboard:** Dedicated UI for social workers to review medical docs and approve requests.
*   **"Verified" Badge:** Visual indicator for requests checked by a human.
*   **Fraud Detection AI:** Auto-flag users with suspicious patterns (e.g., requesting 5 times a week without closing).

### 5. Logistics & "The Last Mile"
*   **Ride-Sharing Integration:** "Book a Ride" button for donors (integrated with Uber/Lyft APIs).
*   **Volunteer Transporter Mode:** Drivers get a route: `Pickup Donor` -> `Drop at Hospital`.
*   **Mobile Blood Van Tracker:** Live GPS map showing location of donation buses.
*   **Secure Handoff:** QR handshake between Donor/Driver/Hospital to ensure the blood packet is tracked.

### 6. The "Swap" Marketplace (Exchange)
*   **Cross-Matching:** Logic to solve "Replacement Donor" policies.
    *   *Scenario:* Patient needs A+, Family has B+. System finds a match with the opposite problem and swaps.
*   **Blood Credit Banking:** "Donate now, withdraw priority later" ledger system for families.

### 7. Community & Gamification
*   **"Blood Journey" Tracker:** Notification timeline: "Your blood reached the lab" -> "Your blood saved a life today."
*   **Leaderboards:**
    *   **Corporate Cup:** Company A vs. Company B.
    *   **College League:** Tracking student donations.
*   **Badges & Milestones:** Awards for "Gallon Club", "First Responder", "Life Saver".
*   **Sponsor Vault:** Unlock real-world coupons (coffee, movies) after verified donations.

### 8. Hospital & Inventory Management
*   **Live Inventory Dashboard:** Real-time view of stock levels (A+: 10 units, O-: 2 units).
*   **Expiry Alerts:** Automated warnings when blood bags are nearing shelf-life end.
*   **Inter-Bank Exchange:** Protocol for hospitals to trade excess stock with nearby clinics to prevent wastage.

### 9. Accessibility & "God Mode"
*   **Disaster Protocol:** Admin switch to "Triage Mode" during earthquakes/floods (Simplified UI, mass alerts).
*   **Voice-First Interface:** "I need blood" voice command parsing for accessibility.
*   **SMS Fallback:** Text-message based registration and alerting for non-smartphone users.
*   **PWA (Progressive Web App):** Full offline support for "My Medical History" and "Emergency Contacts".

### 10. Analytics & Health
*   **Donor Health Log:** Track Hemoglobin, Blood Pressure, and weight over time.
*   **Predictive Analytics:** "Warning: O+ stock usually drops 20% in December. Launch campaign now."
*   **Impact Graph:** Visual tree showing how one donation influenced multiple lives (if split into plasma/platelets).
