# Mock Data Tutorial

## Project Overview

This project provides a mock data server using `json-server` to simulate a REST API. The server delivers mock user data stored in `mock_data.json`, making it ideal for front-end development and testing.

## Features

- Serve mock user data as JSON via HTTP requests
- Quick setup using `json-server`
- Customizable mock data in `mock_data.json`

## Prerequisites

- Node.js (version 10 or later)
- npm (Node package manager)

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd mock_data_tutorial
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   npm start
   ```
   This command will start the `json-server` on `http://localhost:8080`.

## Usage

- Access the mock data at `http://localhost:8080/users` to retrieve user information.
- Modify `mock_data.json` to change or add new mock data entries.

## Customization

- **Add New Endpoints:** Modify the `mock_data.json` file to include new sets of data or endpoints as required.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and integerate it with your frontend.

You can perform a CRUD operations but make sure to do it in your copy of the repo and not change the original data.
Learn more about it on https://github.com/typicode/json-server/tree/v0

## Contact

For any questions or issues, please open an issue in the repository or contact the project maintainers.
