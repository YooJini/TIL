// const fs = require('fs');
// const path = require('path');

// const baseDir = __dirname;
// const readmePath = path.join(baseDir, 'README.md');

// // 업데이트할 폴더들을 여기에 추가
// const foldersToTrack = ['diary'];

// // 특정 파일을 제외하고 싶은 경우, 이 배열에 파일 이름을 추가합니다.
// const excludeFiles = ['.gitkeep'];

// function getFiles(srcPath) {
//   const files = fs.readdirSync(srcPath)
//     .filter(file => !excludeFiles.includes(file));
//   return files.map(file => path.join(srcPath, file));
// }

// let newContent = `# TIL

// ✍️ Today I Learning

// `;

// foldersToTrack.forEach(folder => {
//   const folderPath = path.join(baseDir, folder);
//   const files = getFiles(folderPath);
//   if (files.length > 0) {
//     newContent += `### ${folder}\n`;
//     files.forEach(file => {
//       const relativePath = path.relative(baseDir, file);
//       newContent += `- [${path.basename(file)}](${relativePath})\n`;
//     });
//   }
// });

// fs.writeFile(readmePath, newContent, 'utf8', err => {
//   if (err) {
//     console.error('Could not write README file.', err);
//     process.exit(1);
//   }
// });