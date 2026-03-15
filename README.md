# LiveIcons

Animated icon micro-interactions in 1 line of code.

```bash
npm install liveicons
```

```jsx
import { SearchIcon } from "liveicons/react";

<SearchIcon animate="on-hover" />;
```

---

## Why liveicons

Every React app needs animated icons. Today you pick one of three bad paths:

- **Static icons** — product feels lifeless
- **Manual Framer Motion** — 1–2 hours per icon
- **Lordicon** — heavy runtime, paywall, Lottie JSON lock-in

liveicons solves this: MIT-licensed, copy-paste ready, zero config.

---

## Installation

```bash
npm install liveicons
# or
pnpm add liveicons
# or
yarn add liveicons
```

**Peer dependencies:** React 18+ or 19+

---

## Usage

```jsx
import { SearchIcon, BellIcon, LoaderIcon } from 'liveicons/react'

// Animate on hover (default)
<SearchIcon animate="on-hover" />

// Continuous loop
<LoaderIcon animate="loop" />

// Trigger on click
<BellIcon animate="on-click" />

// Play once on mount
<CheckIcon animate="once" />

// Disabled (static)
<StarIcon animate={false} />
```

### Imperative control

```jsx
import { useRef } from 'react'
import { BellIcon } from 'liveicons/react'
import type { LiveIconHandle } from 'liveicons/react'

function NotificationButton() {
  const iconRef = useRef<LiveIconHandle>(null)

  const notify = () => {
    iconRef.current?.startAnimation()
    setTimeout(() => iconRef.current?.stopAnimation(), 1000)
  }

  return (
    <button onClick={notify}>
      <BellIcon ref={iconRef} animate={false} size={20} />
    </button>
  )
}
```

---

## Props

| Prop          | Type                                                    | Default        | Description                        |
| ------------- | ------------------------------------------------------- | -------------- | ---------------------------------- |
| `animate`     | `"on-hover" \| "on-click" \| "loop" \| "once" \| false` | `"on-hover"`   | Animation trigger                  |
| `speed`       | `"slow" \| "normal" \| "fast" \| number`                | `"normal"`     | Animation speed (number = seconds) |
| `size`        | `number \| string`                                      | `24`           | Width and height in px             |
| `color`       | `string`                                                | `currentColor` | Stroke color                       |
| `strokeWidth` | `number`                                                | `2`            | SVG stroke width                   |
| `className`   | `string`                                                | —              | CSS class on the wrapper `<div>`   |

All native `HTMLDivElement` props are also supported (`style`, `onClick`, `aria-*`, etc.)

---

## Icon catalog

### Navigation

| Component              | Preview       | Tags                       |
| ---------------------- | ------------- | -------------------------- |
| `<HomeIcon />`         | home          | house, homepage, main      |
| `<MenuIcon />`         | menu          | hamburger, sidebar, drawer |
| `<ArrowRightIcon />`   | arrow-right   | forward, next              |
| `<ArrowLeftIcon />`    | arrow-left    | back, previous             |
| `<ArrowUpIcon />`      | arrow-up      | up, scroll, expand         |
| `<ArrowDownIcon />`    | arrow-down    | down, scroll, collapse     |
| `<ChevronRightIcon />` | chevron-right | next, expand, caret        |
| `<ChevronDownIcon />`  | chevron-down  | dropdown, collapse         |

### Actions

| Component          | Preview  | Tags                        |
| ------------------ | -------- | --------------------------- |
| `<SearchIcon />`   | search   | find, lookup, magnifier     |
| `<UserIcon />`     | user     | profile, account, avatar    |
| `<SettingsIcon />` | settings | gear, config, preferences   |
| `<TrashIcon />`    | trash    | delete, remove, bin         |
| `<PencilIcon />`   | pencil   | edit, write, pen, modify    |
| `<PlusIcon />`     | plus     | add, new, create            |
| `<SendIcon />`     | send     | submit, message, deliver    |
| `<MailIcon />`     | mail     | email, message, inbox       |
| `<LockIcon />`     | lock     | secure, password, protected |
| `<EyeIcon />`      | eye      | view, show, preview         |
| `<DownloadIcon />` | download | save, export, get           |
| `<UploadIcon />`   | upload   | push, import, publish       |
| `<ShareIcon />`    | share    | export, social, distribute  |
| `<CopyIcon />`     | copy     | clipboard, duplicate, paste |
| `<SunIcon />`      | sun      | light, day, theme           |
| `<MoonIcon />`     | moon     | dark, night, theme          |

### Feedback

| Component             | Preview      | Tags                       |
| --------------------- | ------------ | -------------------------- |
| `<BellIcon />`        | bell         | notification, alert, ring  |
| `<HeartIcon />`       | heart        | like, love, favorite       |
| `<StarIcon />`        | star         | rating, bookmark, award    |
| `<CheckIcon />`       | check        | done, success, confirm     |
| `<XIcon />`           | x            | close, clear, dismiss      |
| `<AlertCircleIcon />` | alert-circle | warning, error, attention  |
| `<InfoIcon />`        | info         | information, help, tooltip |
| `<ZapIcon />`         | zap          | lightning, fast, energy    |

### Media

| Component           | Preview    | Tags                       |
| ------------------- | ---------- | -------------------------- |
| `<LoaderIcon />`    | loader     | loading, spinner, progress |
| `<RefreshCwIcon />` | refresh-cw | reload, sync, update       |
| `<PlayIcon />`      | play       | start, video, audio        |
| `<PauseIcon />`     | pause      | stop, hold, wait           |
| `<Volume2Icon />`   | volume-2   | audio, sound, speaker      |

---

## Frameworks

| Framework    | Import                   | Status  |
| ------------ | ------------------------ | ------- |
| React 18+    | `from 'liveicons/react'` | ✅ v0.1 |
| React 19     | `from 'liveicons/react'` | ✅ v0.1 |
| Vue 3        | `from 'liveicons/vue'`   | 🗓 v0.2 |
| Vanilla JS   | `from 'liveicons'`       | 🗓 v0.2 |
| React Native | —                        | 🗓 v0.3 |

---

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

**Adding a new icon:**

1. Copy the SVG to `icons/lucide/<name>.svg`
2. Create `scripts/animations/<name>.ts` with variants and transition
3. Run `pnpm generate --icon <name>`
4. Verify with `pnpm validate`
5. Open a PR with a short demo video

**Animation definition example:**

```ts
// scripts/animations/bell.ts
import type { AnimationDef } from "../types";

export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -12, 12, -8, 8, -4, 0] },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
  category: "feedback",
  tags: ["notification", "alert", "ring"],
};
```

---

## License

MIT — see [LICENSE](./LICENSE)

Icons derived from [Lucide](https://lucide.dev) (ISC), [Tabler Icons](https://tabler.io/icons) (MIT), and others.
See [THIRD_PARTY_LICENSES](./THIRD_PARTY_LICENSES) for full attribution.

---

_liveicons · [liveicons.dev](https://liveicons.dev) · [npm](https://www.npmjs.com/package/liveicons) · [GitHub](https://github.com/hayatolab/liveicons)_

---

## Author

**Vinicius Rocha** · [work@hayato.me](mailto:work@hayato.me) · [@hayatolab](https://github.com/hayatolab)
