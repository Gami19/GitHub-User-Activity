"use strict";
const userName = process.argv[2];
const main = (username) => {
    console.log(`Hello! ${username}`);
};
if (!userName) {
    console.log("Usage: ts-node src/index.ts <username>");
    process.exit(1);
}
else {
    main(userName);
}
