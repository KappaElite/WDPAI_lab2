## **Team Member Management Application**

This application allows you to add team members and display a list of added members. It provides a simple interface for managing a team and stores the team data in PostgreSQL database.

### **Features**

#### **Add Team Member Form:**

##### First Name: A text field for entering the first name of the team member.
##### Last Name: A text field for entering the last name of the team member.
##### Role: A dropdown (select) field to specify the member’s role in the team (e.g., Manager, Designer, CTO).
##### Privacy Policy Agreement: A checkbox to confirm acceptance of the privacy policy. This must be checked before submitting the form.
##### Submit Button: Upon clicking, the entered data is submitted, and the member is added to the team list displayed below the form.

#### **Team Members List:**

##### Displays the list of all added team members.
##### The list is stored in PostrgeSQL database
 
#### **Technologies Used:**

##### Frontend: HTML, CSS, JavaScript
##### Backend: Python 
##### Data Storage: PostgreSQL
##### Containerization: Docker is used to containerize the application for consistent deployment across environments.
