# React and Node.js App with Docker

This is a simple example of a React and Node.js app with Docker integration.

## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/giftmbanda/accenture.git

2. Install dependencies and run accenture-web:

   ```bash
   cd accenture-web
   docker build -t accenture-web .
   docker run -p 8080:80 accenture-web


3. Install dependencies and run accenture-api:

   ```bash
   cd accenture-api
   docker-compose up
