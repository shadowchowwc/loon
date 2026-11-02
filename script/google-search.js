const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>Google</title>

<style>
:root {
  color-scheme: light;
  --bg: #ffffff;
  --search-bg: #f1f3f4;
  --text: #202124;
  --icon: #70757a;
  --logo-brightness: 1;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --bg: #1c1c1e;
    --search-bg: #2c2c2e;
    --text: #d3d3d3;
    --icon: #8e8e93;
    --logo-brightness: 0.85;
  }
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--bg);
}

body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: var(--bg);
  color: var(--text);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Helvetica Neue",
    Arial,
    sans-serif;
}

main {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 18px 12vh;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.logo img {
  display: block;
  width: 180px;
  max-width: 70vw;
  height: auto;
  filter: brightness(var(--logo-brightness));
  pointer-events: none;
  -webkit-user-drag: none;
}

form {
  width: 100%;
  max-width: 584px;
  position: relative;
}

input {
  display: block;
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 30px;
  background: var(--search-bg);
  color: var(--text);
  font-size: 17px;
  padding: 0 60px 0 22px;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
}

input::placeholder {
  color: var(--icon);
}

input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

button {
  position: absolute;
  right: 8px;
  top: 0;
  width: 48px;
  height: 54px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--icon);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

button svg {
  width: 25px;
  height: 25px;
}

@media (max-width: 480px) {
  .logo img {
    width: 180px;
  }

  form {
    max-width: 100%;
  }
}
</style>
</head>

<body>
<main>

  <div class="logo">
    <img
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      alt="Google"
    >
  </div>

  <form
    action="https://www.google.com/search"
    method="GET"
    role="search"
  >
    <input
      type="search"
      name="q"
      aria-label="Google 搜索"
      autocomplete="off"
      enterkeyhint="search"
    >

    <button
      type="submit"
      aria-label="搜索"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="10.8" cy="10.8" r="6.8"/>
        <path d="M16 16l5 5"/>
      </svg>
    </button>
  </form>

</main>
</body>
</html>`;

$done({
  status: 200,
  headers: {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store"
  },
  body: html
});
