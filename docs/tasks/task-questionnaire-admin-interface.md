# Questionnaire Administration Interface

## Description
Implement an administration interface that allows administrators to build questionnaires dynamically. Administrators must be able to add questions, set the answer type from the supported list, and arrange question order. The interface should provide an overview of existing questions and allow editing or deleting them.

## Preconditions
- Administrator authentication mechanism exists.

## Potential Errors or Edge Cases
- Invalid question configurations when editing multiple questions simultaneously.
- Unexpected loss of data if network requests fail while saving.

## Related Tasks
- [task-mandatory-questions.md](task-mandatory-questions.md)
- [task-question-dependencies.md](task-question-dependencies.md)
- [task-applicant-interface.md](task-applicant-interface.md)
