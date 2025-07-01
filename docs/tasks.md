# ✅ SmartList – Developer Task Breakdown (Angular + Firebase)
*Each section aligns with a UX-v2 user story*

---

## US001 – Create a Shared Grocery List

- [ ] Design `NewListFormComponent` (standalone, reactive form)
- [ ] Implement list creation logic (service + Firestore integration)
- [ ] Create `InviteUserComponent` with inline email validation
- [ ] Trigger confirmation UI (status chip, toast)
- [ ] Configure Firestore rules for list ownership + permissions
- [ ] Create Firestore index: `lists > members[]`

---

## US002 – Synchronize Shared List in Real Time

- [ ] Add real-time Firestore listeners to `ShoppingListService`
- [ ] Use Angular Signals to update list UI reactively
- [ ] Show visual cue (highlight or toast) when item is added/updated
- [ ] Display user attribution (`addedBy`) and time metadata

---

## US003 – View Who Made Each List Change

- [ ] Extend `ListItem` model with `createdBy`, `updatedAt`
- [ ] Add sub-label or badge in list UI to display contributor
- [ ] Implement expandable/collapsible item detail view
- [ ] Add tooltip or modal to reveal timestamp on demand

---

## US004 – Use the List Offline

- [ ] Implement offline caching using IndexedDB (via `@ngx-pwa/local-storage` or custom wrapper)
- [ ] Design offline status banner (top banner or footer)
- [ ] Add “saved offline” or “sync pending” badges to local changes
- [ ] Disable network-dependent actions gracefully

---

## US005 – Automatically Sync Offline Changes

- [ ] Implement queue system for offline list changes
- [ ] Create background sync logic triggered by reconnect event
- [ ] Show toast or icon badge on successful sync
- [ ] Show error banner with auto-retry if sync fails

---

## US006 – Suggest Frequently Bought Items

- [ ] Create `ItemSuggestionService` with local frequency tracking
- [ ] Add chips or dropdown under item input field
- [ ] Autofocus top 3 suggestions for keyboard/touch navigation
- [ ] Track additions for future ML upgrade (server-side suggestion model)

---

## US007 – Use One-Tap “Quick Add”

- [ ] Build `QuickAddComponent` using horizontal scrollable chips
- [ ] Style visual feedback (bounce/checkmark) on tap
- [ ] Store user favorites per profile in Firestore or localStorage
- [ ] Add toggle/fold behavior for collapsible Quick Add panel

---

## US008 – Save and Reuse List Templates

- [ ] Add `TemplateService` to save/restore lists
- [ ] Implement template metadata (name, item count, last used)
- [ ] Create confirmation dialog before applying templates
- [ ] Build template browser UI

---

## US009 – Auto-Categorize Items

- [ ] Add keyword-to-category mapping service
- [ ] Assign categories at item creation (default logic)
- [ ] Display items in grouped collapsible sections (use `@for`)
- [ ] Allow inline dropdown to reassign category

---

## US010 – Reorder Categories Based on Store

- [ ] Create drag-and-drop UI for category reorder (use Angular CDK)
- [ ] Persist user-defined order per list in Firestore
- [ ] Reflect new order in display immediately

---

## US011 – Enable Simple Mode Interface

- [ ] Create `SimpleModeService` to manage UI mode toggle
- [ ] Build alternate UI component variants (buttons, layout)
- [ ] Add toggle in user settings/profile
- [ ] Ensure Simple Mode complies with WCAG AA (contrast, size)

---

## US012 – Add Items Using Voice

- [ ] Integrate Web Speech API for voice recognition
- [ ] Create mic button with permission handling
- [ ] Add UI feedback during recording (pulse/sound)
- [ ] Show transcribed text before confirming item add
- [ ] Handle fallback when voice input is blocked

---

## US013 – Get Email Updates on List Changes

- [ ] Create Firebase Function to trigger on list change
- [ ] Integrate with email provider (e.g., SendGrid, Mailgun)
- [ ] Format summary emails (item changes, contributor names)
- [ ] Add per-user notification preferences to Firestore

---

## US014 – Scheduled Email Reminders

- [ ] Build reminder scheduling UI (calendar day-picker)
- [ ] Store reminder config per user
- [ ] Create scheduled Firebase Function (Cloud Scheduler)
- [ ] Format personalized reminder email content

---

## US015 – Add Estimated Prices to Items

- [ ] Add optional `price` field to item model
- [ ] Update item form to accept numeric input (locale-aware)
- [ ] Format price based on user locale/currency
- [ ] Validate input range (min: 0)

---

## US016 – See Estimated Total Cost

- [ ] Create `totalEstimate` computed signal (sum of item prices)
- [ ] Add fixed position footer or header display
- [ ] Auto-update on item or price change
- [ ] Test with full and empty list states

---

## US017 – Receive Budget Warning

- [ ] Add `budgetCap` field to list metadata
- [ ] Compare `totalEstimate` against budget
- [ ] Show visual banner or red border when exceeded
- [ ] Allow user to edit budget cap in list settings
