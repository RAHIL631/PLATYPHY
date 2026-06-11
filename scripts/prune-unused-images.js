import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_ASSETS_DIR = path.join(__dirname, 'src/frontend/public/assets/generated');
const ASSETS_CONFIG_FILE = path.join(__dirname, 'src/frontend/src/config/assets.ts');

async function prune() {
    if (!fs.existsSync(GENERATED_ASSETS_DIR)) {
        console.log('No generated assets directory found. Skipping prune.');
        return;
    }

    const configContent = fs.readFileSync(ASSETS_CONFIG_FILE, 'utf-8');
    const filesOnDisk = fs.readdirSync(GENERATED_ASSETS_DIR);

    let prunedCount = 0;

    for (const file of filesOnDisk) {
        if (file === '.gitignore' || file === '.gitkeep') continue;

        // Check if the filename exists anywhere in the config file
        // Using simple string inclusion as the config uses the path relative to public/
        if (!configContent.includes(file)) {
            const filePath = path.join(GENERATED_ASSETS_DIR, file);
            fs.unlinkSync(filePath);
            console.log(`Pruned unused asset: ${file}`);
            prunedCount++;
        }
    }

    console.log(`Pruning complete. Removed ${prunedCount} unused assets.`);
}

prune().catch(console.error);
