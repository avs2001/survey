The project consists of two parts: an administration part and an end-user (applicant) part.

# Administration

The administrator must be able to dynamically define a questionnaire. The questionnaire is composed of various questions, each with either one or multiple predefined answers, or allowing the user to directly input an answer (meaning that there is no predefined answer).

When defining the questionnaire, the administrator has the option to specify whether a question is mandatory or optional.

When defining the questionnaire, the administrator can set dependencies between questions. Based on the selected option for an answer, new questions may appear in the questionnaire or certain questions may disappear from the questionnaire.

When defining the questionnaire, the administrator can choose the type of interface / input control for the answer from a predefined list.

Here is a list of possible types of interface / input controls for the answer:

### Direct short text type
- It is a text input control for entering short answers. The administrator can set the minimum and maximum length of the answer.


### Direct long text type
- It is a textarea control (accepts multiple lines of text). The administrator can set the minimum and maximum length of the answer.

### Multiple choices type
- It is a checklist control where the user can select one or more answer options. The administrator can set the minimum number of options required for the answer to be considered valid.
- The administrator can allow the user to manually enter an answer if it does not exist in the list or if the user wants to add a complement to the existing selected options, and can also set the minimum and maximum length for this input.

### Single choice type
- It is a radio button list control where the user can select only one answer option. The administrator can set whether selecting an option is mandatory or not.
- The administrator can allow the user to manually enter an answer if it does not exist in the list, and can also set the minimum and maximum length for this input.

### Date input type
- It is a control where the user can enter a valid date. The administrator has the option to specify whether it is mandatory or not, and can also set a minimum and/or maximum acceptable date.

### File upload type
- It is a control where the user can upload a file. The administrator can set the accepted file type, the maximum file size, and whether uploading a file is mandatory or not.

### Video link type
- It is a text input control that accepts a valid URL to a video file. The administrator can set the accepted file type as well as whether providing the link is mandatory or not.

# End-user (applicant)
(not defined yet)
