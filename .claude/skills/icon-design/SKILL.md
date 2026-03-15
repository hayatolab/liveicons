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
| Notification | `BellIcon` | `"hover"` or `"click"` |
| Success / confirm | `CheckIcon` | `"once"` or `"click"` |
| Close / dismiss | `XIcon` | `"click"` |
| Loading | `LoaderIcon` | `"loop"` |
| Search | `SearchIcon` | `"hover"` |
| Settings | `SettingsIcon` | `"hover"` |
| Delete | `TrashIcon` | `"hover"` |
| Edit | `PencilIcon` | `"hover"` |
| Download | `DownloadIcon` | `"click"` |
| Upload | `UploadIcon` | `"click"` |
| Share | `ShareIcon` | `"click"` |
| Copy | `CopyIcon` | `"click"` |
| Send / submit | `SendIcon` | `"click"` |
| Like / love | `HeartIcon` | `"click"` |
| Bookmark | `BookmarkIcon` | `"click"` |
| Star / rate | `StarIcon` | `"click"` |
| Navigate → | `ArrowRightIcon` | `"hover"` |
| Navigate ← | `ArrowLeftIcon` | `"hover"` |
| Expand up | `ArrowUpIcon` | `"hover"` |
| Collapse down | `ArrowDownIcon` | `"hover"` |
| Next / pagination | `ChevronRightIcon` | `"hover"` |
| Dropdown | `ChevronDownIcon` | `"hover"` |
| Home | `HomeIcon` | `"hover"` |
| Menu / drawer | `MenuIcon` | `"click"` |
| User / profile | `UserIcon` | `"hover"` |
| Security / auth | `LockIcon` | `"click"` |
| Show / hide | `EyeIcon` | `"click"` |
| Dark mode | `MoonIcon` | `"click"` |
| Light mode | `SunIcon` | `"click"` |
| Warning | `AlertCircleIcon` | `"loop"` or `"hover"` |
| Info | `InfoIcon` | `"hover"` |
| Energy / speed | `ZapIcon` | `"hover"` |
| Refresh / reload | `RefreshCwIcon` | `"click"` |
| Add / create | `PlusIcon` | `"click"` |
| Email | `MailIcon` | `"hover"` |
| Volume | `Volume2Icon` | `"hover"` |

---

## animate Mode Decision

```
Does the user click to trigger it? → "click"
Does it activate on hover/focus?   → "hover"
Is it a loading/spinner state?     → "loop"
Is it a one-time success badge?    → "once"
Dense list / decorative?           → false
```

Key rules:
- **Never** use `"loop"` on HeartIcon, StarIcon, CheckIcon — looping these is anxious
- **Always** use `"loop"` for LoaderIcon — that's its only correct mode
- `"hover"` for navigation icons (arrows, chevrons, home, menu)
- `"click"` for action icons (send, copy, download, delete confirm)

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
<button><SendIcon animate="click" size={18} /> Send</button>
```

### Loading state
```tsx
import { LoaderIcon } from 'liveicons/react'
{isLoading && <LoaderIcon animate="loop" size={20} />}
```

### Theme toggle
```tsx
import { SunIcon, MoonIcon } from 'liveicons/react'
{isDark ? <SunIcon animate="click" size={20} /> : <MoonIcon animate="click" size={20} />}
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
- `references/semantic-map.md` — motion patterns by icon category
