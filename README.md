**Chat Application**

**Project Overview**
This is a simple chat application built to allow users to communicate with each other. The project was created in a short timeframe (two days) and serves as a code sample for technical review. The application includes a login page, real-time chat functionality, and theming options (dark mode and light mode).

**Technologies Used**
React (version 18.3)
React Router DOM: For handling navigation.
Supabase: Used for authentication, user data management, and real-time subscriptions.
Tailwind CSS: For styling.
Shadcn/ui: For styling.
Zod: For form validation.
React Query: For data fetching.
Vite: For building the project.
TypeScript: For type safety.
React Hook Form: For managing form state.

**Features**
- Login Functionality: Users can log in with validation.
- Real-Time Chat: Users can chat with each other and receive real-time updates.
- Theming: Option to switch between dark mode and light mode.
- Toast Notifications: Using Sonar to display various notifications.

**Setup Instructions**
1. Clone the repository:
```bash
git clone https://github.com/VolodymyrDubnytskyi/chatApp.git
```
2. Navigate to the project directory:
```bash
cd chat
```
3. Install dependencies:
```bash
npm install
```
4. Set up the environment:
You'll need the local environment variables, which can be shared via private chat.

**Running the Application**
To run the application locally, use the following command:
```bash
npm run dev
```

**Deployment**
The application is deployed on Vercel and can be accessed [here](https://chat-pqw3czkn0-volodymyrdubnytskyis-projects.vercel.app/).

**Login Information**
To log in to the application, use the following credentials:
- Login: test@niepodam.pl
- Password: 123456789

**Known Issues and Limitations**
- The project is not fully completed due to time constraints.
- Certain features, like video chat, are not implemented.

**Additional Notes**
- Supabase was used for simplicity and speed of development.
- Shadcn/ui allows component control within the project directory.
- React Router was chosen for its advanced features like loaders and outlets.
- TypeScript ensures type safety throughout the project.
- Zod provides efficient validation for forms.
- React Query was used for its excellent data fetching and caching capabilities.
- The primary purpose of this project is to showcase the coding practices and skills, not necessarily to provide a fully functional application.