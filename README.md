# ASCII Canvas

ASCII-only canvas drawing in Obsidian. Draw with characters in a grid: pencil, shapes, fill, brush, spray, word art, selection and move. Files use `.ascii` extension and can be embedded with `![[file.ascii]]`.

<img width="1008" height="544" alt="Screenshot 2026-02-03 at 16 06 16" src="https://github.com/user-attachments/assets/3819813c-568b-4868-8b5d-e0c4650cfcf2" />


## Installation

Install from Community Plugins in Obsidian (Settings → Community plugins → Browse), or copy `main.js`, `manifest.json`, and `styles.css` into your vault's `.obsidian/plugins/ascii-canvas-obsidian/` folder.

## Usage

- **New canvas:** Command palette → "ASCII Canvas: New ASCII canvas", or click the ribbon icon.
- **Tools:** Pencil, line, rect, diamond, circle, triangle, fill, brush, spray, erase, select, word art. Use the char input for the draw character; for word art, type in the text field then click on the canvas.
- **Undo / Redo:** Toolbar or Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z.
- **Copy / Cut / Paste:** Select with the select tool, then Ctrl/Cmd+C, X, V.
- **Save:** Toolbar button or Ctrl/Cmd+S. Canvas size can be changed in the toolbar (cols x rows).

## Development

```bash
npm install
npm run build
```

Then link to a vault with `npm run link` (if using the link script) or copy `main.js`, `manifest.json`, and `styles.css` into the plugin folder. Use `npm run dev` for watch mode.

## License

MIT
