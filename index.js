import fetch from "node-fetch";

import rl from "readline";
import wget from "wget-improved";

function isset(thing) {
    return typeof thing !== "undefined";
}

let line = rl.createInterface({
    input: process.stdin
});

console.log("Version: ");
line.on("line", async (args) => {
    if (args.trim() === "") {
        return console.log("Invalid Version");
    }
    fetch('https://raw.githubusercontent.com/DRAGKILLS/EskoReleases/master/releases.json')
        .then(res => res.json())
        .then((out) => {
            if (isset(out[args])) {
                let url = 'https://github.com/MCPE357/EskoBE/releases/download/' + args + '/EskoBE.phar';
                let file = 'EskoBE.phar';
                wget.download(url, file);
                console.log("Installed EskoBE");
                // line.close();
                // process.exit(1);
            } else {
                return console.log("Invalid version");
            }
        });
});
