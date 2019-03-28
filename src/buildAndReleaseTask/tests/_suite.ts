import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';

describe('Sample task tests', function () {

    before( function() {

    });

    after(() => {

    });

    it('should succeed with simple inputs', function(done: MochaDone) {
        this.timeout(1000);
    
        let testPath = path.join(__dirname, 'success.js');
        let testRunner: ttm.MockTestRunner = new ttm.MockTestRunner(testPath);
        
        testRunner.run();
        console.log(testRunner.succeeded);
        assert.equal(testRunner.succeeded, true, 'should have succeeded');
        assert.equal(testRunner.warningIssues.length, 0, "should have no warnings");
        assert.equal(testRunner.errorIssues.length, 0, "should have no errors");
        console.log(testRunner.stdout);
        assert.equal(testRunner.stdout.indexOf('Found a total of') >= 0, true, "Should display the results.");
        done();
    });

    it('it should fail if no web address target is set', function(done: MochaDone) {
        this.timeout(1000);
    
        let testPath = path.join(__dirname, 'failure.js');
        let testRunner: ttm.MockTestRunner = new ttm.MockTestRunner(testPath);
    
        testRunner.run();
        console.log(testRunner.succeeded);
        assert.equal(testRunner.succeeded, false, 'should have failed');
        assert.equal(testRunner.warningIssues, 0, "should have no warnings");
        assert.equal(testRunner.errorIssues.length, 1, "should have 1 error issue");
        assert.equal(testRunner.errorIssues[0], 'Input required: webaddress', 'error issue output');
        //assert.equal(testRunner.stdout.indexOf('The web address is required.'), -1, "Should not display attempt to run without a web address target.");
    
        done();
    }); 
});