import tl = require('azure-pipelines-task-lib/task');
const { execSync } = require('child_process');
const fs = require('fs');

async function run() {
    try {
        const webAddress: string = tl.getInput('webaddress', true);
        console.log(`The website we'll be checking is "${webAddress}"`)

        if (webAddress == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        try {
            execSync(`npm install -g --engine-strict hint`, {stdio: `inherit`});
        } catch (ex)
        {
            console.log(`Uncaught exception installing webhint!: ${ex}`);
        }

        try {
            execSync(`hint ${webAddress}`, {stdio: `inherit`});
        } catch (ex)
        {
            console.log(`Uncaught exception running webhint!: ${ex}`);
        }
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();