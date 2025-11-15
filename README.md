# Siddharth's Portfolio

A clean and modern full-stack web developer portfolio showcasing projects, skills, and a responsive UI. Built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Resend** for email handling.

---

## 🚀 Tech Stack

* **Frontend**: Next.js, React.js, Tailwind CSS, Framer Motion
* **Backend**: Next.js API Routes, Resend (email service)
* **UI Components**: Shadcn UI, React Icons
* **Deployment**: Vercel

---


## ✨ Features

### **1. Fully Responsive UI**

* Modern layout with Tailwind CSS
* Mobile-first design

### **2. Smooth Animations**

* Page transitions and section animations powered by **Framer Motion**

### **3. Contact Form with Email Support**

* User messages delivered directly using **Resend API**
* One email templates:

  * **ContactNotification** (sent to owner)

### **4. Clean Code & Folder Structure**

* Easy to navigate
* Organized into components, API routes, and email templates

---

## 📬 Contact Form Setup

Add environment variables in `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxx
TO_EMAIL=youremail@gmail.com
FROM_NAME="Siddharth Portfolio"
```

The API route uses Resend + React Email:

* Sends you a styled email with user info
* Sends user a confirmation email (free plan: only to your own email)

---

## 🛠 Running Locally

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open project:

```
http://localhost:3000
```

---

## 🔗 Deployment

Recommended: **Vercel**

* Auto-optimized for Next.js
* Environment variables supported

Deploy with one click:

```
vercel
```

---

## 🧑‍💻 About Me

Full-stack web developer skilled in building end-to-end modern web applications. Passionate about clean UI, smooth UX, and scalable backend systems.

---

## 📞 Contact

* Email: [siddharthprusty93@gmail.com](mailto:youremail@example.com)
* GitHub: [https://github.com/Siddarth474](https://github.com/yourusername)
* Portfolio: [https://siddharth-portfolio-lilac.vercel.app/home](https://yourportfolio.com)

---

Made with ❤️ using Next.js & React
