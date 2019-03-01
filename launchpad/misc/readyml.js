/*jshint esversion: 6 */


/*
 * TODO:
 */

var jsyaml = require("js-yaml");
var fs = require("fs");
var path = require("path");

var sls_file = "<path-to-serverless.yml>";

function import_functions(serverless_yml, relative_url) {
    folder = path.dirname(serverless_yml);
    result = {};
    yaml_data = jsyaml.load(fs.readFileSync(serverless_yml));
    Object.keys(yaml_data.functions).forEach(name => {
        var api_data = yaml_data.functions[name];
        current_api = {};
        var lambda_file = api_data.handler;
        var relative_path = lambda_file.toString().split(".").slice(0, -1).join(".") + ".js";
        var method = lambda_file.toString().split(".").slice(-1)[0];
        console.log(`relative path: ${relative_path}, method: ${method}`);
        current_api.handler = path.resolve(folder, relative_path);
        current_api.method = method;
        current_api.package = api_data.package;
        current_api.url = relative_url + "/" + name;
        result[name] = current_api;
    });
    return result;
}

if (fs.existsSync(sls_file)) {
    ret = import_functions(sls_file, "/mfp_api/v1");
    console.log(JSON.stringify(ret, null, 2));
} else {
    console.error(`serverless yml file (${sls_file}) is not a valid file`);
}