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

  // countFilesRecursively();

  let ntFiles = 0;
  const countFilesRecursively2 = () => {
    const directory =  '/home/toni/Documentos/Am3D/img/right'
    const filesInDirectory = fs.readdirSync(directory);
    
    for (const file of filesInDirectory) {
      const absolute = path.join(directory, file);
      const filesInDirectory2 = fs.readdirSync(absolute);
      
      for (const file2 of filesInDirectory2){ntFiles++;
        const absolute2 = path.join(directory, file, file2);
        const filesInDirectory3 = fs.readdirSync(absolute2);
        if(filesInDirectory3.length != 10)
         console.log(absolute2, filesInDirectory3)
      }
    }
    console.log(ntFiles)
  };
  countFilesRecursively2();

        //countFilesRecursively();
        let stlFiles = [];

        const getFilesRecursively = (directory) => {
          const filesInDirectory = fs.readdirSync(directory);
          for (const file of filesInDirectory) {
            const absolute = path.join(directory, file);
            if (fs.statSync(absolute).isDirectory()) {
              getFilesRecursively(absolute);
            } else {
              if (
                path.extname(absolute) ===
                ".stl" && !path.basename(absolute).includes("-b")
              ) {
                stlFiles.push(absolute);
              }
            }
          }
        };
        getFilesRecursively('/media/toni/82E85F92E85F8379/Am3D-win32-x64/models');
        console.log(stlFiles.length);