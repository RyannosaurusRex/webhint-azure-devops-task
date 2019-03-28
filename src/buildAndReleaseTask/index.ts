import tl = require('azure-pipelines-task-lib/task');
const { execSync } = require('child_process');
const fs = require('fs');

async function run() {
    try {
        console.log('running!');
        const webAddress: string = tl.getInput('webaddress', true);

        console.log(`The website we'll be checking is "${webAddress}"`);

        if (webAddress == '' || webAddress === `undefined`) {
            tl.setResult(tl.TaskResult.Failed, 'The web address is required.');
            return;
        }

        var result = execSync(`npx hint ${webAddress}`, {stdio: 'inherit'});
        console.log(`Logging results: ${result.stdout}`);
        tl.setResult(tl.TaskResult.Succeeded, "Completed successfully.");
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();