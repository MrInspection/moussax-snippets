# Moussax Snippets

I got tired of typing the same stuff over and over again. I wanted quick, memorable snippets with abbreviations that
made sense — so I built my own collection.

---

<!-- TOC -->
* [Moussax Snippets](#moussax-snippets)
* [📄 Snippets [11]](#-snippets-11)
* [🧩 Installation](#-installation)
  * [VS Code / Cursor Installation](#vs-code--cursor-installation)
    * [Step 1: Search User Snippets](#step-1-search-user-snippets)
    * [Step 2: Select "Typescript"](#step-2-select-typescript)
    * [Step 3: Add the snippets](#step-3-add-the-snippets)
  * [Jetbrains IDE Installation](#jetbrains-ide-installation)
    * [Step 1: Download the Live Templates](#step-1-download-the-live-templates)
    * [Step 2: Import the settings](#step-2-import-the-settings)
    * [Step 3: Verify the templates](#step-3-verify-the-templates)
* [Snippets Usage](#snippets-usage)
<!-- TOC -->

---

# 📄 Snippets [11]

| Name                   | Prefix  | Description                                                                         |
|------------------------|---------|-------------------------------------------------------------------------------------|
| `component`            | `com`   | Base component boilerplate                                                          |
| `component-with-props` | `comp`  | TypeScript component with `props` type                                              |
| `component-with-base`  | `comb`  | Component with `children` and `className` props (using `cn` utility)                |
| `not-found-page`       | `n404`  | Nextj.js 404 error page layout                                                      |
| `error-page`           | `nerr`  | Next.js Generic error boundary page with reset support                              |
| `next-layout-page`     | `nlay`  | Base layout file with `children` and async `params`                                 |
| `next-loading-page`    | `nloa`  | Loading state page (used in Next.js route loading)                                  |
| `next-page`            | `npag`  | Base page component using `params`                                                  |
| `next-route-handler`   | `nrou`  | API route handler for GET requests using `NextResponse`                             |
| `providers`            | `prov`  | Global provider component with React Query setup (requires `@tanstack/react-query`) |
| `zod-schema`           | `schem` | Create a Zod schema and infer the type (requires zod library)                       |

# 🧩 Installation

## VS Code / Cursor Installation

Grab the snippets zip: [vscode-snippets.zip](snippets/vscode/vscode-snippets.zip) and follow the steps below.

### Step 1: Search User Snippets

![](/assets/vscode-1.png)

### Step 2: Select "Typescript"

![](/assets/vscode-2.png)

### Step 3: Add the snippets

You will right-click and then select "Reveal in Finder" on macOS or "Reveal in Explorer" for Windows

![](/assets/vscode-3.png)

- In the opened folder, drag and drop `vscode-snippets.zip` and extract its **contents**.
- Restart VS Code (if needed).

Now you can drag-n-drop mes files `vscode-snippets` in the same folder as our current file. And voila you have snippets.

---

## Jetbrains IDE Installation

### Step 1: Download the Live Templates

Download the [settings.zip](snippets/jetbrains/settings.zip) file.

### Step 2: Import the settings

- In your JetBrains IDE, go to `File > Manage IDE Settings > Import Settings`.
- Select settings.zip and click OK.

- Restart the IDE when prompted.

![](/assets/jetbrains-1.png)
![](/assets/jetbrains-2.png)

### Step 3: Verify the templates

- Navigate to `File > Settings > Editor > Live Templates`.
- You should see a group named `Moussax React Snippets (Next.js)`.

![](/assets/jetbrains-3.png)

# Snippets Usage

- Open a supported file (`.ts`, `.tsx`).
- Type the snippet prefix (e.g., `com`, `comb`, `n404`).
- Press `Tab` and voilà, snippet code appears.

![](/assets/snippet.png)


