import fs, { stat } from 'fs'
import path from 'path';
import extensions, { folders } from './extensions.js';

// Get the directory path from command line arguments
const dirPath = process.argv[2];

if (!dirPath) {
    console.error('Please provide a directory path.');
    process.exit(1);
}

// Resolve the absolute path
const absolutePath = path.resolve(dirPath);

const filesInDirectory = fs.readdirSync(absolutePath, (err, files) => {
    console.log("files", files)
})



extensions.forEach(({ folder }) => {
    const already_exist = fs.existsSync(absolutePath + `\\${folder}`)
    console.log("already exist", already_exist)
    if (!already_exist) {
        try {
            fs.mkdirSync(absolutePath + `\\${folder}`)
            console.log(`created ${folder}`)
        } catch (error) {
            console.log("failed creation", error)

        }

    }

})




filesInDirectory.forEach(filePath => {

    const last_dot_index = filePath.lastIndexOf('.')
    const ext = filePath.slice(last_dot_index, filePath.length)

    for (let i = 0; i < extensions.length; i++) {
        if (extensions[i].ext === ext.toLowerCase()) {
            console.log("matched", absolutePath + '\\' + filePath);
            try {

                fs.renameSync(absolutePath + '\\' + filePath, absolutePath + `\\${extensions[i].folder}\\` + filePath)
                console.log("moved from ", absolutePath + '\\' + filePath, " to ", absolutePath + `\\${extensions[i].folder}\\` + filePath)
            } catch (error) {
                console.log("error moving")
            }
            break;
        }
    }

});


const remainingFilesInDirectory = fs.readdirSync(absolutePath, (err, files) => {
    console.log("files", files)
})

remainingFilesInDirectory.forEach(filePath => {
    const stats = fs.statSync(absolutePath + '\\' + filePath)
    if (stats.isFile()) {

        try {

            fs.renameSync(absolutePath + '\\' + filePath, absolutePath + `\\${folders.OTHERS}\\` + filePath)
            console.log("Other files: moved from ", absolutePath + '\\' + filePath, " to ", absolutePath + `\\${folders.OTHERS}\\` + filePath)
        } catch (error) {
            console.log("error moving")
        }
    } else {
        console.log("folder detected: ", filePath)
    }
})

