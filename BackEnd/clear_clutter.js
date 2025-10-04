const fs = require("fs");
const path = require("path");

function organizeDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.log("Directory does not exist.");
        return;
    }

    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        if (fs.lstatSync(filePath).isFile()) {
            const ext = path.extname(file).slice(1); // Get extension without dot
            if (!ext) return;
            
            const folderPath = path.join(dirPath, ext);
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            
            const newFilePath = path.join(folderPath, file);
            fs.renameSync(filePath, newFilePath);
            console.log(`Moved: ${file} -> ${newFilePath}`);
        }
    });
    console.log("Organizing completed.");
}

// Replace with the directory path you want to organize
const directoryPath = "./test-folder"; 
organizeDirectory(directoryPath);
