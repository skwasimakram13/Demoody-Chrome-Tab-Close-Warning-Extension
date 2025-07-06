
# Demoody Chrome Close Warning Extension

This Chrome extension opens a pinned tab on startup that warns you before closing Chrome. It ensures you don't accidentally quit Chrome while working, it will prevent accidental close of chrome.

## 🔧 Features
- Automatically opens a pinned tab on Chrome startup.
- Shows a warning when trying to close Chrome, once you've interacted with the tab.
- Lightweight and privacy-friendly (no data collection).

## 📁 Folder Structure

```
close-warning-extension/
├── manifest.json
├── background.js
├── warning.html
├── warn.js
├── icon-16.png
├── icon-48.png
└── icon-128.png
```

## ⚙️ Installation Steps

1. Download or clone this folder to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle at the top right).
4. Click **"Load unpacked"** and select the `close-warning-extension/` folder.
5. Chrome will open a pinned tab with the warning page.
6. Click or move your mouse inside the tab to activate the close protection.

## 🧠 How It Works

Due to Chrome security policies, the warning (`beforeunload`) only works **after a real user interaction**, such as a click, key press, or mouse move.

Once armed, you'll see a message saying:
> 🔒 Warning armed

This means the tab will now show a confirmation popup if you try to close Chrome.

## 📌 Notes

- This extension does **not** collect or transmit any data.
- The warning only works when the tab is **open and armed by interaction**.
- Works best if kept pinned.

## 🛡️ Permissions

- `tabs`: Needed to create a pinned tab when the extension installs or Chrome starts.

---

## Badges
[![trophy](https://github-profile-trophy.vercel.app/?username=ryo-ma)](https://github.com/ryo-ma/github-profile-trophy)

---

## Author
**Develope By** - [Sk Wasim Akram](https://github.com/skwasimakram13)

- 👨‍💻 All of my projects are available at [https://skwasimakram.com](https://skwasimakram.com)

- 📝 I regularly write articles on [https://blog.skwasimakram.com](https://blog.skwasimakram.com)

- 📫 How to reach me **hello@skwasimakram.com**

- 🧑‍💻 Google Developer Profile [https://g.dev/skwasimakram](https://g.dev/skwasimakram)

- 📲 LinkedIn [https://www.linkedin.com/in/sk-wasim-akram](https://www.linkedin.com/in/sk-wasim-akram)

---

## 🤝 Contribution

Pull requests, feature suggestions, and bug reports are welcome.

---

## 📄 License

This project is under the [MIT License](LICENSE).


---

© 2025 Close Warning Extension — Developed for safety-conscious users!
