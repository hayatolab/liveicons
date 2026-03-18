# Custom Icon Animations Plan

## Objetivo

Criar animações SVG custom para cada ícone, onde a animação é feita sob medida para a estrutura de paths do ícone — não apenas tremidas genéricas no SVG inteiro.

## Filosofia

Cada ícone tem uma anatomia de paths única. A animação deve explorar essa anatomia:
- **trash**: a tampa ABRE, os traços internos se revelam via stroke draw
- **bell**: o badalo balança independente do sino
- **eye**: a pupila se move, a pálpebra pisca
- **mail**: o flap do envelope abre
- **sun**: os raios rotacionam enquanto o centro pulsa
- **clock**: os ponteiros giram

Técnicas SVG disponíveis :
- **Path Drawing**: `pathLength` + `stroke-dashoffset` → efeito de desenho
- **Path-specific transforms**: animar paths individuais com `target: "path"` + `pathIndex`
- **Staggered animation**: `target: "group"` + `staggerChildren` → paths animam em sequência
- **Morph**: animar atributo `d` entre dois estados de path

## Workflow por ícone

Para cada ícone:

1. **Analisar o SVG** — Abrir `icons/lucide/<name>.svg`, contar paths, entender o que cada path desenha
2. **Escolher o target** — `"path"` (partes específicas) ou `"group"` (stagger entre todas)
3. **Desenhar a animação** — Definir variants `normal` e `animate` com propriedades que façam sentido para aquele path específico
4. **Implementar** — Criar/atualizar `scripts/animations/<name>.ts`
5. **Gerar e validar** — `pnpm generate --icon <name> && pnpm validate`
6. **Testar** — `pnpm dev` → localhost:3001, verificar hover

## Regras

- Nunca usar `normal: {}` (estado vazio)
- Preferir `target: "path"` sobre `target: "svg"` quando o ícone tem 2+ paths com partes visualmente distintas
- Para ícones de 1 path só, usar `target: "path"` com `pathLength` (draw-in) ou `target: "svg"` com transform semântico
- Duração max: 0.4s para UI, 0.6s para feedback, 1s para loops
- Não adicionar `repeat: Infinity` — o template injeta automaticamente no loop mode

## Ícones — Prioridade 1 (Core UI — 20 ícones)

### 1. trash-2
- **Paths**: 5 (tine esquerdo, tine direito, corpo, handle, arco do handle)
- **Animação**: path 4 (arco) sobe com translateY enquanto path 0,1 (tines) fazem draw-in com pathLength
- **Target**: `"path"`, pathIndex: [4] para o arco, ou `"group"` com stagger

### 2. bell
- **Paths**: 2 (badalo interno, sino externo)
- **Animação**: path 0 (badalo) rotate oscilante independente, path 1 (sino) leve sway
- **Target**: `"path"`, pathIndex: [0]

### 3. eye
- **Paths**: 1 path (contorno) + 1 circle (pupila)
- **Animação**: circle (pupila) translateX lado a lado como "olhando", path (contorno) scaleY para piscar
- **Target**: `"group"` com animações diferenciadas, ou `"path"` no circle

### 4. lock
- **Paths**: 1 rect (corpo) + 1 path (arco/shackle)
- **Animação**: path (arco) translateY para cima simulando destravar
- **Target**: `"path"`, pathIndex do arco

### 5. mail
- **Paths**: 1 path (flap triangular) + 1 rect (corpo envelope)
- **Animação**: path 0 (flap) rotateX simulando abertura do envelope
- **Target**: `"path"`, pathIndex: [0]

### 6. search
- **Paths**: 1 path (handle) + 1 circle (lente)
- **Animação**: circle (lente) scale pulse + path (handle) leve rotate
- **Target**: `"group"` com stagger

### 7. settings
- **Paths**: 1 path (gear teeth) + 1 circle (center)
- **Animação**: path 0 (gear) rotate contínuo, circle fica parado
- **Target**: `"path"`, pathIndex: [0]

### 8. check
- **Paths**: 1 path (checkmark line)
- **Animação**: pathLength draw-in [0→1] com opacity [0→1]
- **Target**: `"path"`, pathIndex: [0]
- **Nota**: já implementado e protegido, manter

### 9. heart
- **Paths**: 1 path
- **Animação**: scale heartbeat assimétrico [1, 1.3, 1, 1.15, 1]
- **Target**: `"svg"` (path único, transform faz sentido)
- **Nota**: já implementado e protegido, manter

### 10. plus
- **Paths**: 2 (linha horizontal, linha vertical)
- **Animação**: path 1 (vertical) draw-in com pathLength, path 0 (horizontal) já visível
- **Target**: `"path"`, pathIndex: [1]

### 11. x
- **Paths**: 2 (diagonal ↘, diagonal ↗)
- **Animação**: ambos paths draw-in com stagger, ou rotate 90 do grupo
- **Target**: `"group"` com staggerChildren

### 12. menu
- **Paths**: 3 (linha top, middle, bottom)
- **Animação**: path 0 e 2 translateY em direção ao center (squeeze), path 1 scaleX shrink
- **Target**: `"group"` com stagger ou `"path"` individual

### 13. download
- **Paths**: 3 (stem vertical, container, chevron)
- **Animação**: path 0 (stem) + path 2 (chevron) translateY bounce down, path 1 (container) fica parado
- **Target**: `"path"`, pathIndex: [0, 2]

### 14. upload
- **Paths**: 3 (chevron up, stem, container)
- **Animação**: path 0 (chevron) + path 1 (stem) translateY bounce up
- **Target**: `"path"`, pathIndex: [0, 1]

### 15. copy
- **Paths**: 1 rect + 1 path
- **Animação**: path 0 (back square) fica, rect (front) translateX+Y slight offset e volta — efeito "duplicando"
- **Target**: `"path"`, pathIndex: [0]

### 16. sun
- **Paths**: 1 circle (centro) + 8 paths (raios)
- **Animação**: paths 1-8 (raios) rotate como grupo, circle 0 (centro) scale pulse
- **Target**: `"group"` — o grupo inteiro roda, ou `"path"` nos raios

### 17. moon
- **Paths**: 1 path (crescente)
- **Animação**: path draw-in com pathLength, ou rotate arc swing
- **Target**: `"path"`, pathIndex: [0] com pathLength

### 18. clock
- **Paths**: 1 circle (face) + 1 path (ponteiros)
- **Animação**: path (ponteiros) rotate tick — gira em steps
- **Target**: `"path"`, pathIndex do path dos ponteiros

### 19. wifi
- **Paths**: 4 (dot + 3 arcos)
- **Animação**: arcos aparecem em stagger (draw-in sequencial do menor para o maior)
- **Target**: `"group"` com staggerChildren + pathLength draw-in

### 20. volume-2
- **Paths**: 3 (speaker + 2 wave arcs)
- **Animação**: waves pulse outward com stagger — path 1 (inner wave) primeiro, path 2 (outer wave) depois
- **Target**: `"group"` com staggerChildren

## Ícones — Prioridade 2 (Common UI — 25 ícones)

### 21. star
- **Paths**: 1 path
- **Animação**: path draw-in com pathLength (estrela se desenha) + scale pop no final
- **Target**: `"path"`, pathIndex: [0]

### 22. bookmark
- **Paths**: 1 path
- **Animação**: path draw-in top→bottom
- **Target**: `"path"`, pathIndex: [0]

### 23. calendar
- **Paths**: 2 paths (tabs) + 1 rect (body)
- **Animação**: tabs (paths 0,1) bounce up, body fica
- **Target**: `"path"`, pathIndex: [0, 1]

### 24. folder
- **Paths**: 1 path
- **Animação**: path draw-in ou scaleY open (como pasta abrindo)
- **Target**: `"path"` ou `"svg"`

### 25. file
- **Paths**: 2 (body + corner fold)
- **Animação**: path 1 (fold) rotate como página virando
- **Target**: `"path"`, pathIndex: [1]

### 26. image
- **Paths**: 1 rect + 1 circle + 1 path (mountain)
- **Animação**: path (mountain) draw-in, circle (sun) scale pop
- **Target**: `"group"` com stagger

### 27. camera
- **Paths**: 1 path (body) + 1 circle (lens)
- **Animação**: circle (lens) scale [1, 0.8, 1] como shutter click
- **Target**: `"path"` no circle

### 28. shield
- **Paths**: 1 path
- **Animação**: path draw-in (shield se desenha de cima pra baixo)
- **Target**: `"path"`, pathIndex: [0]

### 29. key
- **Paths**: path + circles
- **Animação**: rotate do grupo inteiro como "girando a chave"
- **Target**: `"svg"` rotate [0, -45, 0]

### 30. unlock
- **Paths**: 2 paths + circle
- **Animação**: path 0 (shackle) translateY up — cadeado abrindo
- **Target**: `"path"`, pathIndex: [0]

### 31. send
- **Paths**: 2 (plane body + trajectory)
- **Animação**: grupo translate diagonal (launch) com path 1 draw-in (trail aparecendo)
- **Target**: `"group"`

### 32. phone
- **Paths**: 1 path
- **Animação**: rotate vibrate rápido [0, -3, 3, -2, 2, 0] — telefone vibrando
- **Target**: `"svg"`

### 33. map-pin
- **Paths**: 1 path (pin) + 1 circle (dot)
- **Animação**: svg translateY [0, -4, 0] com spring bounce — pin "caindo" no mapa
- **Target**: `"svg"` com spring bouncy

### 34. shopping-cart
- **Paths**: 2 circles (rodas) + 1 path (corpo) + 1 path (handle)
- **Animação**: circles (rodas) rotate 360 + body slight translateX — carrinho andando
- **Target**: `"group"`

### 35. gift
- **Paths**: 4-5 (bow, ribbon, box)
- **Animação**: path 0 (bow) scale pop + body shake — presente sendo sacudido
- **Target**: `"path"` no bow, ou `"group"` com stagger

### 36. credit-card
- **Paths**: 1 rect + 1 line
- **Animação**: svg rotateY (flip de cartão) — impossível com SVG 2D, usar scaleX [1, 0, 1] como fake flip
- **Target**: `"svg"` scaleX

### 37. zap
- **Paths**: 1 path
- **Animação**: path draw-in rápido (raio se desenha) + opacity flash
- **Target**: `"path"`, pathIndex: [0] com pathLength + opacity

### 38. loader
- **Paths**: 1 path (12 spokes)
- **Animação**: rotate 360 contínuo linear
- **Target**: `"svg"` — já implementado, manter

### 39. refresh-cw
- **Paths**: 4 (2 arcos + 2 setas)
- **Animação**: grupo rotate 360 com spring
- **Target**: `"svg"` — já implementado, manter

### 40. arrow-right
- **Paths**: 2 (stem + chevron)
- **Animação**: path 1 (chevron) translateX nudge, path 0 (stem) draw-in com pathLength
- **Target**: `"group"` com stagger

### 41. home
- **Paths**: 2 (door detail + roof)
- **Animação**: path 1 (roof) draw-in, path 0 (door) scale pop com delay
- **Target**: `"group"` com stagger

### 42. user
- **Paths**: 1 path (body) + 1 circle (head)
- **Animação**: circle (head) translateY bounce, path (body) fica
- **Target**: `"path"` no circle

### 43. bluetooth
- **Paths**: 1 path
- **Animação**: path draw-in rápido (símbolo se desenha)
- **Target**: `"path"`, pathIndex: [0]

### 44. pencil
- **Paths**: 2 (body + tip accent)
- **Animação**: grupo scribble motion (x/y multi-keyframe) — já tem algo parecido, melhorar com path-level
- **Target**: `"svg"` ou `"group"`

### 45. share
- **Paths**: 1 path complexo
- **Animação**: draw-in com pathLength (rede se desenha)
- **Target**: `"path"`, pathIndex: [0]

## AnimationDef — Exemplos de referência

### Exemplo 1: Path draw-in (check)
```typescript
export const animation: AnimationDef = {
  target: "path",
  pathIndex: [0],
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  },
  transition: { duration: 0.4, ease: "easeInOut" },
  category: "feedback",
};
```

### Exemplo 2: Path-specific transform (lock — shackle abre)
```typescript
export const animation: AnimationDef = {
  target: "path",
  pathIndex: [1], // shackle arc
  variants: {
    normal: { y: 0 },
    animate: { y: [0, -3, 0] },
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
  category: "action",
};
```

### Exemplo 3: Group stagger (wifi — arcos aparecem)
```typescript
export const animation: AnimationDef = {
  target: "group",
  variants: {
    normal: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  },
  transition: {
    staggerChildren: 0.1,
    duration: 0.3,
    ease: "easeOut",
  },
  category: "feedback",
};
```

### Exemplo 4: SVG transform semântico (phone vibra)
```typescript
export const animation: AnimationDef = {
  target: "svg",
  variants: {
    normal: { rotate: 0 },
    animate: { rotate: [0, -3, 3, -2, 2, 0] },
  },
  transition: { duration: 0.3, ease: "easeInOut" },
  category: "feedback",
};
```

## Notas importantes

- O SVG path de cada ícone precisa ter `pathLength="1"` para draw-in funcionar
- O script de geração (`scripts/generate.ts`) já suporta `target: "path"` com `pathIndex` e `target: "group"`
- Verificar a ordem dos paths no SVG antes de definir `pathIndex` — paths são zero-indexed na ordem do documento
- Testar cada animação individualmente no playground antes de avançar
- Usar `pnpm validate` para garantir que o componente gerado está correto
