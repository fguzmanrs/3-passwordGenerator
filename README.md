# Password Generator

This application generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. 

## User Story

AS AN employee with access to sensitive data
I WANT to generate a random password that meets certain criteria
SO THAT I can create a strong password of greater security

## Business Context
For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

## Generator proceeds as follows:

* The user will be prompted to choose from the following password criteria:

    - Length (must be between 8 and 128 characters)
    - Character type: Special characters, Numeric characters, Lowercase characters, Uppercase characters

* Once all prompts are answered, the application validates user input and ensures that at least one character type is selected. 

* A password matching the user's selected criteria displays on the page. 

* User has a button option to copy the password to their clipboard.

* Refer to the GIF below for an app demo. 

<!-- ![Password Generator Demo](assets/.gif) -->

Try it out at: https://fguzmanrs.github.io/3-passwordGenerator/

## Future versions to include:

* User will select criteria from a form instead of alert prompts