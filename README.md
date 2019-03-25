# webhint-azure-devops-task
An Azure DevOps task for running webhint (https://webhint.io/) and generating a report.

## This is a rough early version of the Azure DevOps build pipeline task.

[We'll be building this out on stream over the next few weeks at on Twitch](https://twitch.tv/RyannosaurusRex).

### To contribute

You'll need a few things installed to contribute, and having Chocolatey makes this a bit easier to get running.:
- Node.js => `chocolatey install nodejs`
- Python => `chocolatey install python`
- TypeScript => `chocolatey install typescript`

### Running from the command line
To emulate the environment variables set from inside of Azure DevOps, set the following variable on the command line first:

`$env:INPUT_WEBADDRESS="https://www.mywebsite.com"`

You can run the task and test it from the command line with the following line:

`node src/buildAndReleaseTask/index.js`
