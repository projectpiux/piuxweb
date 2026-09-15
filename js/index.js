 const BOOT_LINES = [
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'GRUB Multiboot1 — magic <span class="t-hl">0x1BADB002</span> validated' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'BootX entry point reached — kernel ELF loaded' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Entering <span class="t-hi">kernel_main()</span>' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Framebuffer: <span class="t-hi">1280×720</span> @ 32bpp from Multiboot info struct' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Bitmap font loaded — text grid calculated from FB dimensions' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'RAMFS initialized' },
    { tag: '[ INFO ]', cls: 't-info', msg: 'Probing ATA primary IDE channel...' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'ext2 filesystem detected — superblock verified' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'ext2 mounted at <span class="t-hl">/dev/hda</span>' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'PS/2 keyboard driver ready (QWERTY + Shift)' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'PS/2 mouse driver ready — pointer, focus, scroll active' },
    { tag: '[ INFO ]', cls: 't-info', msg: 'First-boot marker found — skipping installer' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Authentication: loading <span class="t-hl">/.config/passwd</span>' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Login verified — SHA-256 hash match' },
    { tag: '[  OK  ]', cls: 't-ok',   msg: 'Starting <span class="t-hi">pWM</span> — software double buffer enabled' },
  ];

  const termBody = document.getElementById('termBody');
  let idx = 0;

  function nextLine() {
    if (idx >= BOOT_LINES.length) {
      const prompt = document.createElement('div');
      prompt.className = 'term-prompt show';
      prompt.style.marginTop = '6px';
      prompt.innerHTML = `<span class="pr-user">user</span><span class="pr-sep">@</span><span class="pr-user">piux</span><span class="pr-sep">&gt;</span>&nbsp;<span class="cursor"></span>`;
      termBody.appendChild(prompt);
      return;
    }
    const { tag, cls, msg } = BOOT_LINES[idx];
    const el = document.createElement('div');
    el.className = 't-line';
    el.innerHTML = `<span class="${cls}">${tag}</span><span class="t-txt">${msg}</span>`;
    termBody.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    idx++;
    setTimeout(nextLine, 110 + Math.random() * 80);
  }

  setTimeout(nextLine, 600);


  const ITEMS = [
    'NASM + C', 'GPLv3', 'i386 32-bit', 'GRUB Multiboot1',
    'Framebuffer 1280×720', 'pWM Tiled WM', 'ext2 Filesystem',
    'ATA PIO Driver', 'PS/2 Keyboard & Mouse', 'SHA-256 Auth',
    'Rolling Release', 'RAMFS Fallback', 'Software Double Buffer',
    'Built from Scratch', 'DOOM port someday 💀'
  ];

  const track = document.getElementById('stripTrack');
  const doubled = [...ITEMS, ...ITEMS];
  track.innerHTML = doubled
    .map(s => `<span class="strip-item"><span class="dot">✦</span>${s}</span>`)
    .join('');