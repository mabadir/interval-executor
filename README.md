# Node.js TypeScript Command Scheduler

This is a TypeScript application that runs a given command repeatedly at specific intervals. It uses Node.js and TypeScript to spawn new system commands and manage their execution.

## Prerequisites

- Node.js and npm installed on your machine.
- TypeScript installed globally.

You can install TypeScript globally using npm:

```bash
npm install -g typescript
```

## Installation

To install the dependencies, run:

```bash
npm install
```

## Usage

This application takes two arguments: a system command and an interval in minutes.

To run the application:

```bash
ts-node index.ts "<command>" <interval>
```

Replace <command> with the command you want to run and <interval> with the interval in minutes. The command will be executed every <interval> minutes.

### Example

To list the files in your current directory every 5 minutes, you would run:

```bash
ts-node index.ts "ls -l" 5
```

### Error Handling

The application will throw an error if the command or interval arguments are invalid.

## Notes

- The application uses the child_process.spawn method to run the commands. This can be a security risk if you're executing untrusted input. Always ensure the command input is trusted and sanitized.
- The application will run indefinitely until it is manually stopped.
