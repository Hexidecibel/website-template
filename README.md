# Website Template

### Dependencies on Development Machine
- NPM
- NodeJS

### Intro

A simple website template to get going.  Includes some barebones essentials and choice libraries as well as 
a few pages to demonstrate how routing & the decorator works.  

### Setup

- Install NPM
- Install NodeJS
- Navigate to root folder and run `npm install` to install dependencies.  This might take a bit

### Running

You can run ./watch to run the watch script.  This script watches your web application (/src/main/web/**)

### Deployment & Security

Deploy scripts are included.  Deployment assumes that your server is set up with Nginx & Haproxy.  The 
general idea is that it uses rsync to sync the web application with the remote server.  Nginx does not need to
reload when the web page updates so running reload pushes new site that is available immediately.

### SSL & Security

The scripts in the /security/ directory can be used to use Let's Encrypt & Cerbot to generate an SSL cert.  You 
can find good docs online that walk you through setting up Nginx, Haproxy, & using these tools to get SSL going.


#### Template includes
- Webpack (bundles your application)
- React
- Typescript
- Babel (transpiles your typescript)
- ESLint & Prettier (lints/formats your code)l
- Material UI (UI library)
