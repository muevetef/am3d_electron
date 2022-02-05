const fs = require('fs')
const path = require('path')

const countFilesRecursively = () => {
    const directory ='/media/toni/82E85F92E85F8379/Am3D-win32-x64/models'
    const filesInDirectory = fs.readdirSync(directory);
    
    for (const file of filesInDirectory) {
      const absolute = path.join(directory, file);
      const filesInDirectory2 = fs.readdirSync(absolute);
        if(filesInDirectory2.length != 10)
         console.log(absolute, /* filesInDirectory2 */)
      
    }
  };

  countFilesRecursively()