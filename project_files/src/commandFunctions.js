// Assume that currentDir is an object representing the current directory
// and args is an array of arguments passed to the command

export const ls = (currentDir, args) => {
    // For simplicity, return a string with the list of items in the current directory
    return Object.keys(currentDir).join(' ');
  };
  
  export const cd = (currentDir, args) => {
    // Assume args[0] is the target directory
    const targetDir = args[0];
    const target = currentDir[targetDir];
    if (target && typeof target === 'object') {
      return target;
    } else {
      return `Directory not found: ${targetDir}`;
    }
  };
  
  export const cat = (currentDir, args) => {
    // Assume args[0] is the file to display
    const targetFile = args[0];
    const content = currentDir[targetFile];
    if (content !== undefined) {
      return content;
    } else {
      return `File not found: ${targetFile}`;
    }
  };
  
  export const rm = (currentDir, args) => {
    // Assume args[0] is the file to remove
    const targetFile = args[0];
    if (currentDir[targetFile] !== undefined) {
      delete currentDir[targetFile];
      return `File removed: ${targetFile}`;
    } else {
      return `File not found: ${targetFile}`;
    }
  };
  