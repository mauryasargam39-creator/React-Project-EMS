const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design homepage",
        description: "Create homepage UI in React",
        date: "2026-03-30",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix navbar bug",
        description: "Resolve mobile view issue",
        date: "2026-03-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API integration",
        description: "Connect frontend with backend",
        date: "2026-03-27",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Login page UI",
        description: "Build login form with validation",
        date: "2026-03-30",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup routing",
        description: "Configure React Router",
        date: "2026-03-29",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create dashboard",
        description: "Basic dashboard layout",
        date: "2026-03-30",
        category: "UI"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API docs",
        description: "Document endpoints",
        date: "2026-03-30",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Test components",
        description: "Unit testing in React",
        date: "2026-03-28",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy build",
        description: "Deploy on server",
        date: "2026-03-27",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize images",
        description: "Compress assets",
        date: "2026-03-30",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "CSS fixes",
        description: "Fix layout issues",
        date: "2026-03-29",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Footer design",
        description: "Create footer section",
        date: "2026-03-28",
        category: "Design"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup project",
        description: "Initialize React app",
        date: "2026-03-30",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Install dependencies",
        description: "Install npm packages",
        date: "2026-03-29",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug fixing",
        description: "Fix console errors",
        date: "2026-03-28",
        category: "Debugging"
      }
    ]
  }
]

const admin = [{
    id: 1,
    email: "admin@example.com",
    password: "123"
}];

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse (localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees, admin)
}