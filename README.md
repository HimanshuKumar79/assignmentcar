# Car Search Website in React.js

This project is a car search website built using React.js, focused on desktop-only screens. It allows users to search for cars based on their names and navigate through paginated results. The website displays car cards in rows of three, with six cards visible at a time.

## Features

- Car search functionality based on car names.
- Pagination with next, previous, and numbered pages.
- Display of car cards in rows of three, showing six cards at a time.
- URL changes dynamically to reflect the current page.
- Mock data from a JSON file is used for demonstration.
- Non-responsive design for desktop screens.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory using a command-line interface.
3. Install the necessary dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open a web browser and go to `http://localhost:3000` to access the car search website.

## Components

The project is structured with reusable components to ensure code modularity and maintainability. Key components include:
- **CarSearchPage**: The main page displaying car cards and handling pagination.
- **CarCard**: The component representing each car card.
- **Pagination**: The component responsible for handling pagination controls.

## Data Storage

Mock car data is stored in a JSON file (`cars.json`). The data is structured to mimic real car information, and the application fetches and utilizes this data for display and search functionality.

## Pagination

The pagination component provides functionality to navigate through the paginated results. It includes next, previous, and numbered page buttons, allowing users to explore different pages of car cards.


Thank you for reviewing this project! If you have any questions or suggestions, please feel free to reach out.

