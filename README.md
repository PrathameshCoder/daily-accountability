# 📝 Daily Accountability - Angular Todo App

A modern, feature-rich todo list application built with Angular 19 and styled with a sleek dark theme. Perfect for daily task management and accountability tracking.

![Angular](https://img.shields.io/badge/Angular-19-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- ✅ **Add Tasks** - Create tasks with title and description
- ☑️ **Mark Complete** - Toggle tasks as done/undone with visual feedback
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- 💾 **Persistent Storage** - All tasks saved to localStorage (survives page reload)
- 🧭 **Multi-page Navigation** - Home and About pages with routing
- 🎨 **Modern Dark Theme** - Eye-friendly dark mode with coral accent colors
- ✋ **Form Validation** - Prevents empty task submissions
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository
```bash
git clone [<your-repo-url>](https://github.com/PrathameshCoder/daily-accountability.git)
cd pg-todo-list
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── add-todo/          # Form to add new tasks
│   │   ├── todos/             # Main todo list container
│   │   ├── todo-items/        # Individual todo item component
│   │   └── about/             # About page
│   ├── models/
│   │   └── Todo.ts            # Todo interface/model
│   ├── app.component.*        # Root component with navbar
│   ├── app.routes.ts          # Routing configuration
│   └── app.config.ts          # App configuration
└── styles.css                 # Global styles
```

## 🎨 Color Scheme

- **Navbar:** `#ff6164` (Coral Red)
- **Background:** `#1a1a1a` (Soft Black)
- **Cards:** `#242424` (Dark Gray)
- **Text Primary:** `#e0e0e0` (Light Gray)
- **Text Secondary:** `#a0a0a0` (Medium Gray)
- **Borders:** `#333333` (Dark Gray)

## 🛠️ Built With

- **[Angular 19](https://angular.io/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Programming language
- **Standalone Components** - Modern Angular architecture
- **Reactive Forms** - Form handling with `FormsModule`
- **Angular Router** - Client-side routing
- **LocalStorage API** - Data persistence

## 📚 Key Learnings

- Standalone components architecture (no `NgModule`)
- Component communication with `@Input()` and `@Output()`
- Event emitters and parent-child data flow
- Angular routing with `RouterOutlet` and `RouterLink`
- Form validation and two-way data binding with `[(ngModel)]`
- LocalStorage integration for data persistence
- Modern dark theme design principles

## 🔜 Future Enhancements

- [ ] Edit task inline
- [ ] Filter tasks (All / Active / Completed)
- [ ] "Clear completed" action
- [ ] Sort by date (newest/oldest)
- [ ] Empty state UI
- [ ] Light/dark theme toggle
- [ ] Drag-and-drop reordering
- [ ] Task categories/tags
- [ ] Due dates and reminders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Portfolio: [prathameshgongle.vercel.app](https://prathameshgongle.vercel.app)
- LinkedIn: [linkedin](https://linkedin.com/in/prathamesh-gongle)
- GitHub: [@PrathameshCoder](https://github.com/PrathameshCoder)

## 🙏 Acknowledgments

- Built as a portfolio project to demonstrate Angular skills
- Inspired by modern task management applications
- Thanks to the Angular community for excellent documentation

---

⭐ **Star this repo if you find it helpful!**
