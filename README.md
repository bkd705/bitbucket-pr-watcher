# Bitbucket PR Watcher

A Node / Typescript application that listens to bitbucket PR webhooks and displays stats about your current PRS on a nice page.

__Displays:__
- Amount of time PR has been open.
- Approval state and amount of approvals.
- If a PR was merged.
- If a PR was declined and why.

### Project Setup

*Requires*
- Node `>= 8.1.4`
- ngrok

1. Fork & Clone repo.
2. `npm install` or `yarn`
3. Run the `start:server` and `start:client` scripts.
4. Run `ngrok http 3000`
5. Setup bitbucket repo with webhooks for all pull request hooks.

### Brief overview

The `http` folder holds all the server side TypeScript, it gets transpiled into the `http/dist` folder which is ignored, and then ran using `nodemon`. The `client` folder holds all the client side TypeScript, it gets transpiled and ran using webpack and webpack-dev-server. 

Ngrok tunnels your localhost server to the web so that you can accept incoming webhooks.