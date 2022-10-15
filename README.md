
<h2>Pet Clinic: Spring-Boot-ReactJS-Full-Stack-App</h2>


This project consists of two applications: one is a Spring Boot Rest API , here called "backend" and another is a ReactJS application, called "frontend".

Service-oriented platform focusing on a client management system for veterinary clinics, to which, next to employees, clients can also log in with restricted access, to see details about the treatments of their pets.



<h2>Applications</h2>


<h3>- Spring Boot Backend</h3>

Spring Boot Web Java backend application that exposes a REST API to manage clients and their pets. The secured endpoints can only be accessed if an access token (JWT) is provided.
The application stores its data in a Postgres database.


<h3>- React Frontend</h3>

ReactJS frontend application where employees can perform CRUD operations on clients, on their pets and pets' treatments. Clients can log in with a restricted access, to see information about their pets.
In order to access the application, employee/client must login using his/her username and password. 



<h2>Clone the repository:</h2>

<pre>git clone https://github.com/angela-klmn/pet-clinic-spring-boot-react.git
