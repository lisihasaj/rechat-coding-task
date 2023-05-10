# Rechat frontend coding task

## How to run
1. Clone repository
2. Run `pnpm install` or `npm install`
3. Run `pnpm start` or `npm start`
4. Open `http://localhost:3000/` in browser
5. Run `pnpm test` or `npm test` for running tests
6. Run `pnpm run build` or `npm run build` for building project

This description contains two parts:
1. Task description with user stories
2. Assignment documentation

_______________________________________________________________________________

# 1. Rechat frontend coding task
The goal is to implement an application to manage working tasks. See the __[user stories](#user-stories)__ for the application details to be implemented.

Clone this repository and create a [git bundle](https://git-scm.com/docs/git-bundle) and send it to us when you finished the task. One of the most important topics we want to see, is how you commit your progress. This does not mean every commit has to be perfect.

# User stories
* As a user I can create tasks, so that all tasks for a project can be tracked.
    * Acceptance Criteria:
    * A task must have a title
    * A task must have a long description
    * A task must have the status "ToDo"
* As a user I can change the status of a Task, so that the progress of the project can be tracked.
    * Acceptance Criteria:
    * Only the following status transitions are allowed, see __[state transitions](#state-transitions)__
* As a user I can change the title and long description of a task.
* As a user I will see the history of a Task, so that I can track the history of a task.
    * Acceptance Criteria:
    * The previous and the next value of a change must be tracked

![Diagram](https://plantuml.gitlab-static.net/png/U9nLZi4AmZ0GHE_x5NiM2le31QKNRmhUn4E8YorDCc6J7lht9bLflGmx-vZPJTOuuSEUqZY4QDHuTaEGF4TXQEwn0Hu1jbTuuQoJ4Drt3swQbc_eG5ILYpk7Y-AbaXAj8pTJBEpaO4Tv_e6Qk1wfojhsSIrt249L5YFHOIxnRytc-0yjg_8NlG7BYaJz)

So for example:
- If a task is currently at "toDo" state in can only be changed to "InProgress"
- If a task is currently at "inQA" state in can only be both changed to "Done" or "ToDo"

## Tech Stack
* Implement the app using [React (UI Library)](https://reactjs.org/).
    * [typescript](https://www.typescriptlang.org/) is mandatory
* Create tests cases for your components using React Testing Library (Testing)
* Please stick with React's internal APIs to handle state management (React Context API)
* Prefer function components and hooks over class components
* The application must be primary optimized for mobile devices and must have a optimized layout for desktop.

## Acceptance Criteria
* Test cases is optional
* The app should be working and buildable with no errors.
* There should be individual commits with meaningful commit messages for every user story.
* API Documentation
* It's mandatory to use SVG icons and not PNG images. Icons used in designs can be easily found on flaticon.com


## UI Designs
1. https://ibb.co/N3MWQds
2. https://ibb.co/cX7bp6J
3. https://ibb.co/YNfRbZc
4. https://ibb.co/fChqF46

______________________

# 2. Assignment Documentation

### Application structure (src folder):

App is developed with functional components using new React features, always aiming code reusability and code readability.

```bash
├── components
│   ├── home
│   │   ├── {Home page specific components}
│   ├── ui
│   │   ├── {UI shared components}
│   ├── wrappers
│   │   ├── {Wrappers for margin, animations and functionality}
│   ├── Form.tsx
│   ├── Header.tsx
├── layouts
│   ├── {App layout for pages}
├── lib
│   ├── context
│   │   ├── {Contexts for global state management}
│   ├── hooks
│   │   ├── {Custom hooks}
│   ├── extensions
│   │   ├── {Extensions for gruping helper functions}
│   ├── constants.ts {Constants for shared references}
├── pages
├── router
├── style
├── App.tsx
├── main.tsx
```

### State management
For state management of managing inputs, their values and submitting is used Context API. For managing tasks and their statuses is used useReducer hook.

### Styling
For styling is used tailwind with classnames library for easier classnames management.

### Data fetching and storage
For data storing and data fetching client local storage has been configured and used. NOTE: This is not production ready solution, but for this task it is a sufficient solution to demonstrate the frontend functionality.