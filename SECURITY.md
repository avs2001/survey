# Security Policy

## Reporting a Vulnerability
If you discover a security issue, please report it privately.
- Email: [security@example.com](mailto:security@example.com)
- Include detailed steps to reproduce the issue.
- We will respond as quickly as possible and keep you informed.

## Security Best Practices for Contributors
- Do **not** log sensitive data such as questionnaire responses or personal information.
- Do **not** commit secrets (API keys, tokens, credentials) to the repository.
- Sanitize all user input in forms.
- Escape dynamic content in templates where applicable.
- Use Angular's built-in security features like `DomSanitizer` and `HttpClient` security options.
- Follow the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) guidelines.

## Secure Coding Guidelines
- Use strict TypeScript types.
- Use Angular signals and control flow safely.
- Validate all data before submitting.
- Avoid unsafe `innerHTML` or `bypassSecurityTrust` methods unless absolutely necessary.
- Validate and sanitize video links and file uploads.
- Enforce file type and size restrictions on `file_upload` questions.

## Dependency Management
- Keep dependencies up to date.
- Regularly audit dependencies for known vulnerabilities using `npm audit`.
- Prefer well-maintained libraries.
- Do not introduce unverified third-party dependencies.

## Data Handling Guidelines
- Treat questionnaire responses as sensitive data.
- Ensure API endpoints are protected and require authentication.
- Use HTTPS for all network communication.
- Minimize data exposure in logs and error messages.

## Post-Vulnerability Process
- Confirmed vulnerabilities will be fixed promptly.
- After a patch is released, we will publicly disclose the issue and resolution.
- Please test security fixes after they are deployed and report any regressions.

## Contact
For any security questions or concerns, email us at [security@example.com](mailto:security@example.com).
