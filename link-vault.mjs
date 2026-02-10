import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;
const vaultPath = process.env.VAULT_PATH ?? process.argv[2];

if (!vaultPath) {
  console.error("Usage: npm run link -- /path/to/vault");
  console.error("   or: VAULT_PATH=/path/to/vault npm run link");
  process.exit(1);
}

const pluginsDir = path.join(vaultPath, ".obsidian", "plugins");
const linkPath = path.join(pluginsDir, "ascii-canvas-obsidian");

fs.mkdirSync(pluginsDir, { recursive: true });
if (fs.existsSync(linkPath)) {
  fs.rmSync(linkPath);
}
fs.symlinkSync(projectRoot, linkPath, "dir");
console.log("Symlink created:", linkPath, "->", projectRoot);
