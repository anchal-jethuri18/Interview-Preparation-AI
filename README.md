# Interview Preparation AI

An AI-powered web app that generates personalized interview questions and answers based on role and experience.

## ⭐ Features

- User authentication 
- AI-generated questions and answers using the Gemini API
- Pin and save important questions
- Expand questions for detailed explanations
- Responsive UI built with Tailwind CSS

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** Google Gemini API
  

## 📸 Screenshots

### Home Page
![Home Page](<Screenshot Home.png>)

### Interview Questions - 1
![Interview Questions 1](<Screenshot questions 1.png>)

### Interview Questions - 2
![Interview Questions 2](<Screenshot questions 2.png>)

 

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/anchal-jethuri18/Interview-Preparation-AI.git
cd Interview-Preparation-AI
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add the required environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

Replace the example values with your own credentials. Never upload your actual secrets to GitHub.

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal from the project root and run:

```bash
cd frontend/interview-prep-ai
npm install
```

Create a frontend `.env` file if required by your application and configure the backend API URL using the environment variable name expected by your code.

Start the frontend:

```bash
npm run dev
```

### 4. Open the Application

Open the local URL displayed in your frontend terminal, usually:

`http://localhost:5173`
## 👩‍💻 Author

Anchal Jethuri

- GitHub: https://github.com/anchal-jethuri18
