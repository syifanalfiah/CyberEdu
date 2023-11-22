import FileSaver from 'file-saver';
import { CyberPrompts } from '../costant';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * CyberPrompts.length);
  const randomPrompt = CyberPrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
