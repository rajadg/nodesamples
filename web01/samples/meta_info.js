
console.log("running script file: %s", __filename);
console.log("folder location: %s", __dirname);
console.log("process executable: %s", process.execPath);
console.log("version: ", process.version);
console.log("memory used: ", process.memoryUsage());
console.log("platform: %s @ %s", process.platform, process.arch);
console.log("\n\n");

os = require("os");

console.log("os totalmem: %d GB", (os.totalmem()/(0x40000000)).toFixed(2));
console.log("os freemem: %d GB", (os.freemem()/(0x40000000)).toFixed(2));
var dur = os.uptime();
var days = Math.trunc(dur/3600/24);
var hours = Math.trunc(dur/3600) % 24;
var mins = Math.trunc(dur/60) % 60;
console.log("system uptime: %d days %d hrs %d mins", days, hours, mins);

cpus = os.cpus();
console.log("CPU %d Cores, %d GHz => %s", cpus.length, cpus[0]["speed"]/1000, cpus[0]["model"]);
interfaces = os.networkInterfaces();
console.log("network interfaces:")
for (key in interfaces){
    var address = "";
    nw_in = interfaces[key];
    for (index in nw_in){
        var item = nw_in[index];
        if (item["family"] == 'IPv4' || address == "") {
            address =item["address"];
        }
    }
    console.log("\t%s @ %s", key, address);
}
// console.log("network interfaces: ", os.networkInterfaces());

