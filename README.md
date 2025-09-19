# Github User Acitivity CLI

  ## Table of Content
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Project Details](#ProjectDetails)

## Installation
1. Make sure you have Node.js installed. (To download Node.js: [Node.js Official Site](https://nodejs.org))
2. Git (VCS) operations
    ```
    git clone https://github.com/faikmermer/Github-user-activity-cli.git

4. Install the dependencies - Devdependencies and ts.config:
   ```bash
   npm init -y
   npm install typescript ts-node @types-node --save--dev
   npx tsc --init
   ```
5. Compilier and Run
   * Debugger
   ```
   npx tsc
   node --inspect-brk dist/index.ts list
   ```
   * Run without Debug
   ```
   # U should configure the bin setting in the package.json file.
   { bin : github-activity}
   github-activity <username>
   Output:
   - Pushed 3 commits to kamranahmedse/developer-roadmap
   - Opened a new issue in kamranahmedse/developer-roadmap
   - Starred kamranahmedse/developer-roadmap
   ```


## Contributing
Contributions are welcome! To contribute to the project, follow these steps:

1.  Fork the Project
3.  Create your Feature Branch (`git checkout -b feature-name`)
4.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5.  Push to the Branch (`git push origin feature-name`)
6.  Open a Pull Request

## License
Distributed under the Unlicense License.

## Project Details
https://roadmap.sh/projects/task-tracker
