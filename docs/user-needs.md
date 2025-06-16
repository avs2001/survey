
# User Needs - Questionnaire Administration and Applicant System

## Project Overview

The project consists of two main components:
1. **Administration Interface**  
   Allows administrators to create and manage dynamic questionnaires.
2. **End-user Interface (Applicant)**  
   Enables applicants to complete the defined questionnaires.  
   _Note: Detailed end-user needs are not defined yet._

---

## Administration Interface - User Needs

### Core Functionalities

- **Dynamic Questionnaire Definition**
  - Create and edit questionnaires with multiple questions.
  - Questions can accept:
    - One or multiple predefined answers.
    - Free-text answers (no predefined options).
  - Define whether each question is **mandatory** or **optional**.

- **Dependencies Between Questions**
  - Define logic to **show/hide** questions based on selected answers.
  - Support complex flows by linking multiple questions conditionally.

- **Input Control Types**
  - Select from a predefined list of input controls when defining questions:

### Supported Input Control Types

#### 1. Direct Short Text
- Single-line text input.
- Configure:
  - Minimum and maximum length.

#### 2. Direct Long Text
- Multi-line textarea.
- Configure:
  - Minimum and maximum length.

#### 3. Multiple Choice
- Checkbox list (select one or more options).
- Configure:
  - Minimum number of selections required.
  - Option to allow **manual entry** of additional answers:
    - Manual entry min/max length.

#### 4. Single Choice
- Radio button list (select exactly one option).
- Configure:
  - Whether selecting an option is mandatory.
  - Option to allow **manual entry** of an answer:
    - Manual entry min/max length.

#### 5. Date Input
- Date picker.
- Configure:
  - Mandatory or optional.
  - Minimum and/or maximum acceptable date.

#### 6. File Upload
- Upload file(s).
- Configure:
  - Accepted file types.
  - Maximum file size.
  - Mandatory or optional.

#### 7. Video Link
- Text input for URL linking to a video.
- Configure:
  - Accepted file types (for validation).
  - Mandatory or optional.

---

## Dependencies Example

Example of supported dependency logic:

| Source Question | Source Answer | Target Question | Action |
|-----------------|---------------|-----------------|--------|
| Is your brand currently selling products? | Yes | What product categories does your brand offer? | Show |
| Is your brand currently selling products? | No | What product categories does your brand offer? | Hide |

---

## End-User (Applicant) Interface

**_Not defined yet._**

