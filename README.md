# **ARTIFY – A Creative Artwork Showcase Platform**



Artify is a modern, responsive, and feature-rich artwork-sharing platform where artists can upload their creative works, explore galleries, appreciate artworks, and connect through creativity.  

The platform maintains a clean UI, smooth UX, and efficient CRUD operations using React, Firebase Authentication, and MongoDB.



---



## 🚀 **Live Demo**

🔗 **Live Website:** https://assignment-10-firebase-522b0.web.app/

🔗 **Client Repository:** https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-10



---



## 📌 **Features Overview**



### 🎨 **Artwork System**

- Upload artworks with image, title, category, medium, description, dimensions, price, and visibility.  

- Update and delete artworks inside **My Gallery**.  

- View details of each artwork with full descriptions and artist info.  

- Like button with MongoDB `$inc` for increasing like count.  

- Add artworks to **Favorites** and manage them easily.



### 🔐 **Authentication**

- Email & Password Login  

- Google Login/Signup  

- Protected Routes (Add Artwork, My Gallery, Favorites)  

- No redirect issue after reload  

- Password validation (uppercase, lowercase & min 6 chars)



### 🔎 **Explore Artworks**

- Displays all **public** artworks  

- Search artworks by *title* or *artist*  

- Filter artworks by *category*  

- Sort artworks by most recent (MongoDB `sort()` + `limit()`)



### 🏠 **Home Page**

- Hero Banner/Slider with Swiper  

- Featured artworks section (latest 6 items)  

- Additional sections  

  - **Top Artists of the Week**  

  - **Community Highlights**



### ⚙️ **Extra Functionalities**

- Theme Toggle (dark/light mode) stored in `localStorage`  

- Loading spinner while fetching data  

- Custom alerts using **React Toastify** & **SweetAlert2**  

- Attractive UI animations (react-awesome-reveal)  

- Integrated libraries:  

  - **React Simple Typewriter**  

  - **React Tooltip**  

- 404 Page without navbar/footer  

- Super clean navbar with profile hover logout



---



## 🛠️ **Tech Stack**



### **Frontend**

- React 19  

- React Router 7  

- Tailwind CSS 4  

- Swiper  

- React Icons  

- React Toastify  

- SweetAlert2



### **Backend**

- Node.js  

- Express.js  

- MongoDB



### **Authentication**

- Firebase Authentication



### **Hosting**

- Client: Netlify  

- Server: Vercel



---



## 📦 **Dependencies Used**



```json

"dependencies": {

  "@tailwindcss/vite": "^4.1.17",

  "firebase": "^12.5.0",

  "react": "^19.1.1",

  "react-awesome-reveal": "^4.3.1",

  "react-dom": "^19.1.1",

  "react-icons": "^5.5.0",

  "react-router": "^7.9.5",

  "react-simple-typewriter": "^5.0.1",

  "react-toastify": "^11.0.5",

  "sweetalert2": "^11.26.3",

  "swiper": "^12.0.3",

  "tailwindcss": "^4.1.17"

}

```



---



## 🧪 **Project Setup & Run Locally**



Follow the steps below to run the project on your local machine.



### **Clone the repo and install dependencies:**

```bash

git clone https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-10.git

cd ASSIGNMENT-10

npm install

```

### Start Development Server

```bash

npm run dev

```

### **Create a .env file in the project root**

```env

VITE_apiKey=

VITE_authDomain=

VITE_projectId=

VITE_storageBucket=

VITE_messagingSenderId=

VITE_appId=

```


