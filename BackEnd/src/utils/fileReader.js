import fs from 'fs/promises';

const readJson = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the file:', err);
    throw new Error('Error reading the file');
  }
};

export { readJson };

