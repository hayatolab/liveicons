---
name: icon-design
description: Use when the user asks which liveicon to use, what animate mode to set, or how to size icons. Maps UI concepts to specific liveicons + animation modes. Use before create-animated-icon when you need to pick the right icon first.
---

# icon-design (liveicons)

Picks the right liveicon component + animate mode for a given UI concept.

---

## Concept → Component + Mode

| Concept | Component | `animate` |
|---------|-----------|-----------|
| Notification | `BellIcon` | `"on-hover"` or `"on-click"` |
| Success / confirm | `CheckIcon` | `"once"` or `"on-click"` |
| Close / dismiss | `XIcon` | `"on-click"` |
| Loading | `LoaderIcon` | `"loop"` |
| Search | `SearchIcon` | `"on-hover"` |
| Settings | `SettingsIcon` | `"on-hover"` |
| Delete | `TrashIcon` | `"on-hover"` |
| Edit | `PencilIcon` | `"on-hover"` |
| Download | `DownloadIcon` | `"on-click"` |
| Upload | `UploadIcon` | `"on-click"` |
| Share | `ShareIcon` | `"on-click"` |
| Copy | `CopyIcon` | `"on-click"` |
| Send / submit | `SendIcon` | `"on-click"` |
| Like / love | `HeartIcon` | `"on-click"` |
| Bookmark | `BookmarkIcon` | `"on-click"` |
| Star / rate | `StarIcon` | `"on-click"` |
| Navigate → | `ArrowRightIcon` | `"on-hover"` |
| Navigate ← | `ArrowLeftIcon` | `"on-hover"` |
| Expand up | `ArrowUpIcon` | `"on-hover"` |
| Collapse down | `ArrowDownIcon` | `"on-hover"` |
| Next / pagination | `ChevronRightIcon` | `"on-hover"` |
| Dropdown | `ChevronDownIcon` | `"on-hover"` |
| Home | `HomeIcon` | `"on-hover"` |
| Menu / drawer | `MenuIcon` | `"on-click"` |
| User / profile | `UserIcon` | `"on-hover"` |
| Security / auth | `LockIcon` | `"on-click"` |
| Show / hide | `EyeIcon` | `"on-click"` |
| Dark mode | `MoonIcon` | `"on-click"` |
| Light mode | `SunIcon` | `"on-click"` |
| Warning | `AlertCircleIcon` | `"loop"` or `"on-hover"` |
| Info | `InfoIcon` | `"on-hover"` |
| Energy / speed | `ZapIcon` | `"on-hover"` |
| Refresh / reload | `RefreshCwIcon` | `"on-click"` |
| Add / create | `PlusIcon` | `"on-click"` |
| Email | `MailIcon` | `"on-hover"` |
| Volume | `Volume2Icon` | `"on-hover"` |

---

## animate Mode Decision

```
Does the user click to trigger it? → "on-click"
Does it activate on hover/focus?   → "on-hover"
Is it a loading/spinner state?     → "loop"
Is it a one-time success badge?    → "once"
Dense list / decorative?           → false
```

Key rules:
- **Never** use `"loop"` on HeartIcon, StarIcon, CheckIcon — looping these is anxious
- **Always** use `"loop"` for LoaderIcon — that's its only correct mode
- `"on-hover"` for navigation icons (arrows, chevrons, home, menu)
- `"on-click"` for action icons (send, copy, download, delete confirm)

---

## Sizing

| Context | `size` |
|---------|--------|
| Inline with text | `14`–`18` |
| Button | `20` |
| Feature card | `32` |
| Hero / marketing | `48` |
| Decorative large | `64` |

Default is `24`. Animation amplitudes are tuned for 24px.

---

## Source Selection

| Import path | Style |
|-------------|-------|
| `liveicons/react` | Lucide stroke — default |
| `liveicons/react/tabler` | Tabler stroke |
| `liveicons/react/tabler-filled` | Tabler fill |
| `liveicons/react/heroicons` | Heroicons stroke |
| `liveicons/react/heroicons-solid` | Heroicons fill |

Default to Lucide. Switch to `heroicons` for Tailwind-first projects. Never mix stroke and fill in the same section.

---

## Speed

| Speed | Duration | Use for |
|-------|----------|---------|
| `"fast"` | 0.25s | Click/tap feedback |
| `"normal"` | 0.6s | Most icons (default) |
| `"slow"` | 1.2s | Attention-drawing (notifications) |
| `number` | exact | Fine-tuned control |

---

## Patterns

### Button with icon
```tsx
import { SendIcon } from 'liveicons/react'
<button><SendIcon animate="on-click" size={18} /> Send</button>
```

### Loading state
```tsx
import { LoaderIcon } from 'liveicons/react'
{isLoading && <LoaderIcon animate="loop" size={20} />}
```

### Theme toggle
```tsx
import { SunIcon, MoonIcon } from 'liveicons/react'
{isDark ? <SunIcon animate="on-click" size={20} /> : <MoonIcon animate="on-click" size={20} />}
```

### Imperative (programmatic trigger)
```tsx
import { useRef } from 'react'
import { BellIcon } from 'liveicons/react'
import type { LiveIconHandle } from 'liveicons/react'

const ref = useRef<LiveIconHandle>(null)
ref.current?.startAnimation()  // e.g. on new notification
<BellIcon ref={ref} size={20} />
```

---

## Related skills

- `create-animated-icon` — after picking the icon, use this to add a new animation def
- `svg-animation-techniques` — SVG animation theory (path drawing, morphing, transforms) for designing creative animations
- `references/semantic-map.md` — motion patterns by icon category
