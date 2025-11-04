# demoblaze-portfolio

1. Nama Proyek:

   DemoBlaze Framework Full-Stack Automation Portfolio (UI, API, Performance)
   
2. Tujuan:

   Membangun Automation Framework E2E yang stabil dengan penggunaan CI/CD dan pengujian Non-Fungsional (K6).
   
3. Komponen Framework:

   a. Cypress (JavaScript/TypeScript),

   b. Page Object Model (POM),

   c. API: Cypress cy.request() & cy.intercept() API Mocking / JSONPlaceholder,

   d. Performance: K6. CI/CD: GitHub Actions

   e. Data-Driven Testing (DDT)

   f. Implementasi BDD

   g. Struktur Test Suite
   
    
4. Strategi Pengujian:

   Menggunakan API Mocking/Stubbing untuk menstabilkan test case UI, untuk menangani Dependensi dan Arsitektur Testing.

5. Instruksi:

   npm install,
   
   npx cypress open,
   
   perintah k6 run
   
  
6. Link ke hasil CI/CD GitHub Actions (Status Badge) dan Test Summary Report (Allure/HTML Report)
7. Fitur Web UI https://www.demoblaze.com/  :
   
   a. Sign up

   b. Log in

   c. Checkout product

   d. Log out


   Excecution :
   <img width="1882" height="892" alt="image" src="https://github.com/user-attachments/assets/e2da5994-4e49-4075-9df5-e0eb571f45bc" />

   

9. Fitur API https://jsonplaceholder.typicode.com/ :

   a. GET	/posts
   
   b. GET	/posts/1

   c. GET	/posts/1/comments

   d. GET	/comments?postId=1

   e. POST	/posts

   f. PUT	/posts/1

   g. PATCH	/posts/1

   h. DELETE	/posts/1
