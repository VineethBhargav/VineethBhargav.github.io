
1. create your GitHub account
   if you have one, proceed with it!
   I already had this  https://github.com/VineethBhargav?tab=repositories so, I thought my future website can live at:
   https://vineethbhargav.github.io => Note: this site is not yet there! we will create in future
 Let's make one architecture decision. This is something many people regret not thinking about early.
I recommend having **two repositories**.

Repository 1
' ' 'VineethBhargav.github.io ' ' '

This will be your **website**.
It contains:
- Homepage
- About
- Portfolio
- Knowledge Hub
- Search
---
Repository 2
' ' knowledge-base ' '
This contains all your notes:
Physical Design/
Travel/
History/
Fitness/
Health/
AI/
Books/
Why two?
Because years later, if you ever redesign your website, your notes remain completely separate and safe. It's a cleaner, more scalable setup.

## Step 1: Install Node.js (LTS)

Go to the official Node.js website and install the **LTS** version.

During installation:

- ✔ Leave all settings at their defaults.
- ✔ Make sure npm is installed (it is by default).
- download The `.msi` installer (don't choose zip):
- Automatically installs Node.js and npm.
- Adds Node.js to your system PATH.
- Is much easier to update later.
- Is the standard installation method for Windows
- Continue the installation process with default settings and after proceeding for some time! you will see note like below (****CANCEL THEM or Close the window as we don't require them for our website building! if you want to install , press any key and wait until completion of installation****)

###This script will install Python and the Visual Studio Build Tools, necessary to compile Node.js native modules. Note that Chocolatey and required Windows updates will also be installed. This will require about 7 GiB of free disk space, plus any space necessary to install Windows updates. This will take a while to run. Please close all open programs for the duration of the installation. If the installation fails, please ensure Windows is fully updated, reboot your computer and try to run this again. This script can be found in the Start menu under Node.js. You can close this window to stop now. Detailed instructions to install these tools manually are available at https://github.com/nodejs/node-gyp#on-windows Press any key to continue . . .

These will get installed if you continue the above downloads (these are not actually required):
- ✅ Python 3.14
- ✅ Visual Studio 2026 Build Tools
- ✅ Visual Studio C++ Tools
- ✅ Microsoft Visual Studio Installer
- ✅ Chocolatey
- ✅ Visual C++ Redistributables

-Then
 👉 I recommend restarting your PC if you installed above all packages [if not installed ,no issue].
This ensures:
- Node.js is fully registered.
- PATH variables are refreshed.
- Visual C++ runtime is correctly loaded.
- Future installations (Git, Quartz, etc.) won't have issues

# After restarting

We'll verify Node.js with below in command prompt:

```
node -v
npm -v
```

Then we'll continue.
---

## Step 2: Install Git

Download Git for Windows and install it.

I installed:
 https://github.com/git-for-windows/git/releases/download/v2.55.0.windows.3/Git-2.55.0.3-64-bit.exe from https://git-scm.com/install/windows 
start installing! 

![[Pasted image 20260730002623.png|277]]

if you see this , change it to VS Code if already there! or keep notepad or notepad++
then

![[Pasted image 20260730003003.png|282]]

I recommend changing it.

Instead of:
- ⚪ **Let Git decide** (currently uses `master`)
Choose:
- ✅ **Override the default branch name for new repositories**
- Leave the text as:

```
main
```
**Note**: for remaining which I haven't added pictures, the default installation options are fine.


1. Restart your PC (to complete the Node.js environment setup).
2. Verify:
    
    ```
    node -v
    npm -v
    git --version
    ```
    
3. Create the GitHub repository:
    
    ```
    VineethBhargav.github.io
    ```
    
1. Install Quartz

## Commands

git clone https://github.com/jackyzha0/quartz.git .

npm install

npx quartz create

npx quartz build --serve

## Problems

- npm couldn't determine executable
- Solution:
  - Clone repository first
  - Then install packages

## Notes

Always run commands from Website folder..
1. See your website running on your computer.

RVBC_REALM ├── Knowledge ✅ ├── Website ← We'll initialize Quartz here ├── Assets ├── Projects ├── Archive └── Templates

Write notes in Obsidian ↓ Quartz converts them ↓ GitHub Pages publishes them ↓ https://vineethbhargav.github.io

cd "C:\Users\rvbce\OneDrive\Documents\RVBC_REALM\Website"

if u type cd ! it gives the current directory

then give below 3 in order! after 3rd command, it asks some questions...see the pics below!

git clone https://github.com/jackyzha0/quartz.git .

npm install

npx quartz create

![[Pasted image 20260730172449.png|697]]
![[Pasted image 20260730172712.png]]  proceed with Default
next: change to Symlink an existing folder for below
![[Pasted image 20260730172754.png]]
So: we Knowledge ← Your Obsidian vault ✍️ │ │ │ └─────────────┐ │ │ (Symlink) ├── Website │ │ └── content ─────┘

- ✅ Write notes only in **Knowledge**
- ✅ Quartz reads those notes directly
- ✅ No duplicate files
- ✅ No manual copying
- ✅ Perfect for GitHub Pages
- What folder do you want to symlink?
-
- C:\Users\rvbce\OneDrive\Documents\RVBC_REALM\Knowledge
![[Pasted image 20260730173220.png]]

Enter the base URL for your Quartz site (e.g. mysite.github.io/quartz)

vineethbhargav.github.io

npx quartz build --serve  

as you are already did cd to "" Website " folder we created ! and did symlink to knowledge folder!
if u do "dir content" in command prompt!  it shows all directories inside knowlede folder

** Note: ** if u give npx quartz build --serve , then changed or created file externally in website/knowledge folder, it will end! u need to create through obsidian only

then it gives link properly
![[Pasted image 20260730174245.png]]
I saw error when I opened the link `http://localhost:8080`
because  Quartz built that page, but there is **no `index.md`**, so when you visit `http://localhost:8080`, it doesn't know what to show as the homepage.

Create a new note [index in obsidian and write content! that is what ypu are seeing in the index page right now] in the **root of your Knowledge vault** (not inside any folder).

## Step 3: Install VS Code

If you don't already have it, install Visual Studio Code.

note : tick all the below options!
![[Pasted image 20260730175154.png|289]]
code --version

Open the Website folder in VS Code

in command prompt:

cd C:\Users\rvbce\OneDrive\Documents\RVBC_REALM\Website

code .

VS Code will open your Quartz project.

make changes in

quartz.config.yaml
quartz.config.default.yaml
quartz.ts
## Step 4: Install Obsidian

![[Pasted image 20260730170424.png|213]]

RVBC_REALM ├── Knowledge ├── Website ├── Assets ├── Projects ├── Archive └── Templates

I created above directoreis in Documents folder
easy way:
cd "C:\Users\rvbce\OneDrive\Documents" mkdir RVBC_REALM cd RVBC_REALM 
mkdir Knowledge Website Assets Projects Archive Templates
and in knowlede  folder mkdir "00 Home" "01 Physical Design" "02 AI & Technology" "03 Career" "04 Learning" "05 Health & Fitness" "06 Travel" "07 History" "08 Projects" "09 Daily Notes" "10 Media" "99 Templates"
Then give vaultname if u want !
![[Pasted image 20260730171027.png|281]]
> **Conflicting file sync service detected**

This is only warning you that **if you use Obsidian Sync and OneDrive together**, they can conflict.

Since we're **not planning to use Obsidian Sync**, and we're only using **OneDrive** for backup, **you can safely ignore this warning**.
click highlighted area -> manage_vaults ->open folder as vault  [if extra folder created when you gave vault name! ]

![[Pasted image 20260730171434.png|137]]


Write notes in Obsidian ↓ Quartz converts them ↓ GitHub Pages publishes them ↓ https://vineethbhargav.github.io

Troubleshooting

• Created a nested RVBC_WORLD vault ❌
• Fixed by opening Knowledge as the vault ✅

• Forgot index.md ❌
• Quartz showed 404
• Created index.md
• Fixed ✅

• Accidentally created New Text Document.txt ❌
• Quartz rebuild failed
• Deleted it
• Fixed ✅


####
Obsidian
(Write Notes)
      │
      ▼
Knowledge Folder
      │
      ▼
Quartz
(Build Website)
      │
      ▼
Generated Static Site
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Pages
      │
      ▼
https://vineethbhargav.github.io


- **Knowledge** – Stores all Markdown notes.
- **Website** – Contains the Quartz source code.
- **Quartz** – Converts Markdown into a static website.
- **Git** – Tracks every change.
- **GitHub** – Stores the project online.
- **GitHub Pages** – Hosts the final website.

