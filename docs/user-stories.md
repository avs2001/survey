# 📋 SmartList – Refined User Stories (v2)
*UX-Aligned Edition*

---

## US001 – Create a Shared Grocery List

### As a...
Household coordinator

### I want to...
create and own a new grocery list

### So that...
I can collaborate with family members in one shared place

#### Description
Users should be able to create a named list using a clear, single-field form. The “invite user” flow must be contextual, with clear feedback for success or invalid emails. UX should prevent unintentional list duplication.

#### Acceptance Criteria
- AC1: List creation is accessible via a floating action button (FAB) with "New List"
- AC2: Invite flow supports inline validation for email format
- AC3: Confirmation message and status chip shown for pending invites

#### Priority
High

#### Dependencies
- Authentication
- Accessible form patterns
- Email notification system

---

## US002 – Synchronize Shared List in Real Time

### As a...
Household member

### I want to...
see changes to the shared list appear instantly

### So that...
I can stay in sync with my family

#### Description
All list changes should auto-refresh the UI smoothly without disrupting current view/focus. Feedback should show which items were recently changed or added.

#### Acceptance Criteria
- AC1: Visual cue (e.g., soft highlight or toast) appears for 2 seconds when another user modifies an item
- AC2: Name of user and time (e.g., “added by Alex · 2s ago”) optionally visible

#### Priority
High

---

## US003 – View Who Made Each List Change

### As a...
User of a shared list

### I want to...
see which user added or edited each item

### So that...
I can coordinate better and avoid confusion

#### Acceptance Criteria
- AC1: Each item includes a contextual badge or sub-label with contributor name
- AC2: UI allows expanding item row to reveal timestamp and full edit info

#### Priority
Medium

#### UX Notes
- Use avatars or initials for contributors to reduce text clutter
- Tooltip on hover/tap for timestamp

---

## US004 – Use the List Offline

### As a...
Shopper

### I want to...
access and modify the list without internet

### So that...
I can shop even if the signal is poor

#### Description
Offline state must be clearly indicated (e.g., banner or icon), with UI elements visibly still operable. Changes made offline should feel native.

#### Acceptance Criteria
- AC1: Offline mode banner appears persistently but unobtrusively
- AC2: UI shows “Saved offline” or “Sync pending” chip for any changes made
- AC3: Attempting disallowed network actions shows a toast or disabled state

#### Priority
High

---

## US005 – Automatically Sync Offline Changes

### As a...
User returning online

### I want to...
have my offline changes automatically synchronized

### So that...
the list reflects all updates for others

#### Acceptance Criteria
- AC1: App syncs automatically without needing user input
- AC2: UI shows a brief “Changes synced” toast or icon update
- AC3: In case of sync failure, an error banner is displayed and retried automatically

#### Priority
High

---

## US006 – Suggest Frequently Bought Items

### As a...
Frequent list user

### I want to...
get suggestions based on past purchases

### So that...
I don’t have to type repetitive items

#### UX Additions
- Suggestions appear inline as chips or dropdown under the input field
- First 3 suggestions are auto-focused for quick keyboard selection

#### Priority
Medium

---

## US007 – Use One-Tap “Quick Add”

### As a...
User

### I want to...
add commonly used items with one tap

### So that...
I can speed up my workflow

#### Acceptance Criteria
- AC1: Frequently used items are shown as horizontally scrollable chips
- AC2: Tap interaction provides visual feedback (e.g., brief bounce or check)

#### Priority
Medium

#### UX Notes
- Quick Add section should be visually distinct but collapsible

---

## US008 – Save and Reuse List Templates

### As a...
Household planner

### I want to...
save and reuse list templates

### So that...
I don’t have to recreate the same list each week

#### Acceptance Criteria
- AC1: I can name templates clearly when saving
- AC2: Template preview includes item count and last used date

#### Priority
Medium

#### UX Notes
- Show “Apply Template” confirmation dialog to prevent overwrites

---

## US009 – Auto-Categorize Items

### As a...
Shopper

### I want to...
have items automatically grouped by category

### So that...
I can shop faster in-store

#### Acceptance Criteria
- AC1: Each item appears under collapsible category headers
- AC2: Misclassified items can be re-assigned via inline dropdown

#### Priority
High

#### UX Notes
- Category icons improve scanability (e.g., 🥦 for Produce)

---

## US010 – Reorder Categories Based on Store

### As a...
User

### I want to...
reorder how categories are displayed

### So that...
they match my store’s aisle flow

#### Acceptance Criteria
- AC1: Categories can be dragged and reordered via long-press gesture
- AC2: New order is reflected immediately and saved persistently

#### Priority
Medium

---

## US011 – Enable Simple Mode Interface

### As a...
Less tech-savvy user

### I want to...
enable a simplified interface

### So that...
I can interact with the app more easily

#### Acceptance Criteria
- AC1: “Simple Mode” provides enlarged buttons, fewer options, and a focused layout
- AC2: UI includes toggle switch accessible from profile/settings

#### Priority
High

#### UX Notes
- Simple Mode should pass WCAG AA minimums
- Voice prompts or onboarding overlay encouraged

---

## US012 – Add Items Using Voice

### As a...
Multitasking user

### I want to...
speak item names into the app

### So that...
I can add items hands-free

#### Acceptance Criteria
- AC1: Pressing mic button starts input with feedback (pulse, sound, etc.)
- AC2: Transcription confirmation appears before saving

#### Priority
Low

#### UX Notes
- Respect OS-level permissions; fallback to text input with message if blocked

---

## US013 – Get Email Updates on List Changes

### As a...
List member

### I want to...
receive email updates when changes are made

### So that...
I’m kept in the loop

#### Acceptance Criteria
- AC1: Email content uses clean, scannable layout with item summary
- AC2: Users can configure opt-out or frequency in notification preferences

#### Priority
Medium

---

## US014 – Scheduled Email Reminders

### As a...
Planner

### I want to...
get reminder emails before I usually shop

### So that...
I remember to review the list

#### Acceptance Criteria
- AC1: I can pick one or more reminder days from a calendar-style picker
- AC2: Reminders are personalized (e.g., “Your weekly list is ready!”)

#### Priority
Medium

---

## US015 – Add Estimated Prices to Items

### As a...
User tracking spend

### I want to...
enter prices per item

### So that...
I can estimate my shopping cost

#### Acceptance Criteria
- AC1: Item row includes a price input field (numeric with locale support)
- AC2: Entry is optional but clearly visible if used

#### Priority
Medium

#### UX Notes
- Currency formatting and localization should be respected (e.g., €, $)

---

## US016 – See Estimated Total Cost

### As a...
User

### I want to...
see the current total cost of my list

### So that...
I know how much I’m likely to spend

#### Acceptance Criteria
- AC1: Running total is pinned in the header/footer as a fixed element
- AC2: Updates dynamically as prices are modified

#### Priority
Medium

---

## US017 – Receive Budget Warning

### As a...
Budget-conscious user

### I want to...
get alerted if my list total exceeds a set budget

### So that...
I can reduce my spend

#### Acceptance Criteria
- AC1: When total exceeds my set budget, a visual alert is shown (e.g., red bar or banner)
- AC2: Budget cap is editable in list settings

#### Priority
Medium

#### UX Notes
- Alert should be clear but non-intrusive; avoid modal interruptions
