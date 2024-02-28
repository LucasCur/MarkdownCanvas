# Markdown Canvas

This is a simple Markdown editor built with Node.js, Express, and Markdown-it. It allows users to write Markdown text and see the rendered HTML output in real-time.

## Installation

Make sure you have Node.js and npm installed on your system. If not, you can download and install them from [here](https://nodejs.org/).

1. Clone the repository:

   ```bash
   git clone https://github.com/LucasCur/MarkdownCanvas.git
   ```

2. Navigate into the project directory:

   ```bash
   cd MarkdownCanvas
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node index.js
   ```

By default, the server will run on port 3000. If port 3000 is already in use, the server will automatically choose another available port.

2. Open your web browser and go to `http://localhost:3000` (or the dynamically chosen port if not 3000).

3. You should see a textarea where you can input Markdown text. As you type, the rendered HTML output will appear below in real-time.

## Contributing

Contributions are more than welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and stage them for commit:

   ```bash
   git add .
   ```

4. Commit your changes:

   ```bash
   git commit -m 'Added feature-name'
   ```

5. Push to the branch:

   ```bash
   git push origin feature-name
   ```

6. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/LucasCur/MarkdownCanvas/blob/main/LICENSE) file for details.
