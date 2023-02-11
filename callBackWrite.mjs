import * as fs from "node:fs";

fs.writeFile('someFile.txt',"someDataString",function(error){
    if (error) {
        console.log(error);
        return;
    }
});
