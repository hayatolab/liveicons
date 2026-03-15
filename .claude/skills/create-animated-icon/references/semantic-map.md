# Semantic Motion Map

Full mapping of icon semantic meaning → animation pattern used in liveicons.
Use this to pick the right motion before writing an `AnimationDef`.

## Navigation

| Icon | Semantic | Motion | Properties | Transition |
|------|----------|--------|-----------|------------|
| arrow-right | Go forward | Nudge right | `x: [0, 4, 0]` | spring stiffness:400 |
| arrow-left | Go back | Nudge left | `x: [0, -4, 0]` | spring stiffness:400 |
| arrow-up | Scroll/expand | Nudge up | `y: [0, -4, 0]` | spring stiffness:400 |
| arrow-down | Scroll/collapse | Nudge down | `y: [0, 4, 0]` | spring stiffness:400 |
| chevron-right | Expand/next | Small nudge right | `x: [0, 3, 0]` | spring stiffness:400 |
| chevron-down | Dropdown | Small nudge down | `y: [0, 3, 0]` | spring stiffness:400 |
| home | Homepage | Slight bounce | `y: [0, -2, 0]` | spring stiffness:300 |
| menu | Open drawer | Expand | `scaleX: [1, 1.1, 1]` | spring stiffness:300 |

## Actions

| Icon | Semantic | Motion | Properties | Transition |
|------|----------|--------|-----------|------------|
| search | Find/lookup | Circular sweep | `rotate: [0, -15, 0]` | spring stiffness:300 |
| user | Profile | Subtle bob | `y: [0, -2, 0]` | spring stiffness:200 |
| settings | Configure | Quarter spin | `rotate: 90` | spring stiffness:200 damping:20 |
| trash | Destructive action | Warning shake | `rotate: [0, -8, 8, -4, 0]` | tween 0.4s easeInOut |
| pencil | Edit | Write nudge | `rotate: [0, -10, 0]` | spring stiffness:300 |
| plus | Add/create | Scale pop | `scale: [1, 1.15, 1], rotate: [0, 90, 0]` | spring stiffness:400 |
| send | Submit message | Launch right | `x: [0, 6, 0], y: [0, -6, 0]` | spring stiffness:400 |
| mail | Email | Wobble | `rotate: [0, -8, 8, 0]` | tween 0.5s |
| lock | Security | Lock click | `scaleY: [1, 0.85, 1]` | spring stiffness:500 |
| eye | Show/reveal | Blink | `scaleY: [1, 0.1, 1]` | tween 0.3s |
| download | Save file | Bounce down | `y: [0, 4, 0]` | spring stiffness:400 |
| upload | Push file | Bounce up | `y: [0, -4, 0]` | spring stiffness:400 |
| share | Distribute | Radiate out | `scale: [1, 1.1, 1], opacity: [1, 0.7, 1]` | tween 0.5s |
| copy | Duplicate | Stack nudge | `y: [0, -2, 0], x: [0, 2, 0]` | spring stiffness:400 |
| sun | Light theme | Rotate rays | `rotate: 45` | spring stiffness:150 damping:15 |
| moon | Dark theme | Arc swing | `rotate: -20` | spring stiffness:150 damping:15 |

## Feedback

| Icon | Semantic | Motion | Properties | Transition |
|------|----------|--------|-----------|------------|
| bell | Notification | Ring shake | `rotate: [0, -12, 12, -8, 8, -4, 0]` | tween 0.5s easeInOut |
| heart | Like/love | Heartbeat | `scale: [1, 1.3, 1, 1.15, 1]` | tween 0.5s easeInOut |
| star | Rating/fave | Pop + tilt | `scale: [1, 1.2, 1], rotate: [0, 15, -15, 0]` | tween 0.5s easeInOut |
| check | Confirm/done | Draw in | `pathLength: [0, 1], opacity: [0, 1], scale: [0.6, 1]` | path target, tween 0.4s |
| x | Close/dismiss | Spin close | `rotate: 90, scale: [1, 1.1, 1]` | spring stiffness:300 |
| alert-circle | Warning | Pulse | `scale: [1, 1.05, 1]` | tween 0.4s |
| info | Information | Bounce | `y: [0, -2, 0]` | spring stiffness:400 |
| zap | Fast/energy | Flash | `opacity: [1, 0.4, 1, 0.6, 1], scale: [1, 1.1, 1]` | tween 0.5s |

## Media

| Icon | Semantic | Motion | Properties | Transition |
|------|----------|--------|-----------|------------|
| loader | Loading | Spin 360 | `rotate: 360` | tween 1s linear, **loop mode** |
| refresh-cw | Reload/sync | Spin 360 | `rotate: 360` | spring stiffness:200 |
| play | Start | Nudge right | `x: [0, 3, 0]` | spring stiffness:400 |
| pause | Hold | Pulse | `scale: [1, 1.05, 1]` | tween 0.3s |
| volume-2 | Audio | Ripple out | `scale: [1, 1.08, 1]` | tween 0.5s |

---

## Motion Principles

### Signal ↔ Motion mapping

| Signal | Motion | Why |
|--------|--------|-----|
| Destructive (trash, x) | Shake/wiggle | Danger warning — hesitate before acting |
| Confirmation (check) | Draw-in | Success — feels earned |
| Navigation (arrows) | Directional nudge | Points where you'll go |
| Status/state change (settings, sun, moon) | Rotate to state | Shows transformation |
| Continuous process (loader) | Spin loop | Infinite = still working |
| Excitement (star, heart) | Scale pop | Dopamine micro-interaction |
| Alert (bell, zap) | Shake/flash | Urgency |

### Amplitude guidelines

| Icon size | Max rotation | Max translate | Max scale |
|-----------|-------------|---------------|-----------|
| 16px | ±8° | 2px | 1.1x |
| 24px (default) | ±15° | 4px | 1.2x |
| 32px+ | ±20° | 6px | 1.15x |

Larger icons = smaller amplitude. Oversized motion on big icons feels unstable.

### Ease selection

| Effect | Ease |
|--------|------|
| Icon enters/appears | `"easeOut"` |
| Icon leaves/disappears | `"easeIn"` |
| Looping / oscillation | `"easeInOut"` |
| Mechanical spin | `"linear"` |
| Snappy click | spring |
