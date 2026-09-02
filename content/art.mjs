/* Self-contained SVG artwork — no external image dependencies. */

/* ---------- Hero globe ---------- */
export const globe = `
<svg viewBox="0 0 400 400" role="img" aria-label="A stylised globe representing worldwide AI deployments">
  <defs>
    <radialGradient id="gSphere" cx="36%" cy="30%" r="78%">
      <stop offset="0%" stop-color="#8B6BF5"/><stop offset="45%" stop-color="#5C3FD6"/>
      <stop offset="100%" stop-color="#241065"/>
    </radialGradient>
    <radialGradient id="gHalo" cx="50%" cy="50%" r="50%">
      <stop offset="55%" stop-color="rgba(124,58,237,0)"/><stop offset="86%" stop-color="rgba(160,80,240,.34)"/>
      <stop offset="100%" stop-color="rgba(124,58,237,0)"/>
    </radialGradient>
    <linearGradient id="gRing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF3D9A"/><stop offset="50%" stop-color="#A03BE0"/><stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
    <clipPath id="cSphere"><circle cx="200" cy="200" r="132"/></clipPath>
  </defs>

  <circle cx="200" cy="200" r="182" fill="url(#gHalo)"/>
  <g class="globe-spin" style="transform-origin:200px 200px">
    <ellipse cx="200" cy="200" rx="176" ry="66" fill="none" stroke="url(#gRing)" stroke-width="1.4" opacity=".5" transform="rotate(-24 200 200)"/>
    <ellipse cx="200" cy="200" rx="164" ry="150" fill="none" stroke="url(#gRing)" stroke-width="1" opacity=".28" transform="rotate(16 200 200)"/>
    <circle cx="376" cy="200" r="4" fill="#FF3D9A" transform="rotate(-24 200 200)"/>
    <circle cx="24" cy="200" r="3" fill="#38BDF8" transform="rotate(-24 200 200)"/>
  </g>

  <circle cx="200" cy="200" r="132" fill="url(#gSphere)"/>
  <g clip-path="url(#cSphere)" opacity=".55" stroke="#C4B5FD" fill="none" stroke-width=".9">
    <ellipse cx="200" cy="200" rx="132" ry="44"/><ellipse cx="200" cy="200" rx="132" ry="88"/>
    <ellipse cx="200" cy="200" rx="132" ry="122"/>
    <ellipse cx="200" cy="200" rx="44" ry="132"/><ellipse cx="200" cy="200" rx="88" ry="132"/>
    <line x1="200" y1="68" x2="200" y2="332"/><line x1="68" y1="200" x2="332" y2="200"/>
  </g>
  <g clip-path="url(#cSphere)" fill="#DDD6FE" opacity=".82">
    <!-- stylised continents as dot clusters -->
    <g>
      <circle cx="128" cy="146" r="3"/><circle cx="140" cy="138" r="2.6"/><circle cx="152" cy="145" r="3.2"/>
      <circle cx="118" cy="160" r="2.4"/><circle cx="133" cy="162" r="3"/><circle cx="147" cy="158" r="2.2"/>
      <circle cx="126" cy="176" r="2.6"/><circle cx="140" cy="180" r="2.2"/>
      <circle cx="132" cy="196" r="2.4"/><circle cx="128" cy="212" r="2.8"/><circle cx="136" cy="228" r="2.2"/>
      <circle cx="126" cy="244" r="2.4"/>
      <circle cx="196" cy="132" r="2.8"/><circle cx="210" cy="128" r="3.2"/><circle cx="224" cy="134" r="2.4"/>
      <circle cx="204" cy="148" r="2.6"/><circle cx="218" cy="150" r="3"/><circle cx="232" cy="146" r="2.4"/>
      <circle cx="200" cy="166" r="2.4"/><circle cx="214" cy="170" r="2.8"/><circle cx="228" cy="164" r="2.2"/>
      <circle cx="206" cy="186" r="2.6"/><circle cx="220" cy="190" r="2.2"/><circle cx="234" cy="184" r="2.6"/>
      <circle cx="212" cy="206" r="2.4"/><circle cx="226" cy="210" r="2.8"/>
      <circle cx="256" cy="140" r="2.6"/><circle cx="270" cy="146" r="3"/><circle cx="284" cy="140" r="2.4"/>
      <circle cx="262" cy="158" r="2.8"/><circle cx="276" cy="162" r="2.4"/><circle cx="290" cy="156" r="2.6"/>
      <circle cx="268" cy="176" r="2.2"/><circle cx="282" cy="180" r="2.8"/>
      <circle cx="252" cy="236" r="2.6"/><circle cx="266" cy="242" r="3"/><circle cx="278" cy="236" r="2.4"/>
      <circle cx="258" cy="254" r="2.4"/><circle cx="272" cy="258" r="2.6"/>
      <circle cx="160" cy="252" r="2.6"/><circle cx="172" cy="262" r="2.2"/><circle cx="164" cy="272" r="2.4"/>
    </g>
  </g>
  <!-- connection arcs -->
  <g clip-path="url(#cSphere)" fill="none" stroke="#F0ABFC" stroke-width="1.3" opacity=".85">
    <path d="M132 168 Q196 108 268 158"/>
    <path d="M138 222 Q214 268 276 240"/>
    <path d="M212 132 Q286 176 262 246"/>
  </g>
  <g clip-path="url(#cSphere)" fill="#FF7AC0">
    <circle cx="132" cy="168" r="3.4"/><circle cx="268" cy="158" r="3.4"/>
    <circle cx="138" cy="222" r="3.4"/><circle cx="276" cy="240" r="3.4"/>
    <circle cx="212" cy="132" r="3.4"/><circle cx="262" cy="246" r="3.4"/>
  </g>
  <circle cx="200" cy="200" r="132" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"/>
</svg>`;

/* ---------- Dotted world map ---------- */
function dotGrid() {
  /* Coarse landmass mask expressed as ranges per row (x0-x1 pairs on a 120x54 grid). */
  const rows = {
    8:  [[16,30],[62,84]], 9: [[13,32],[58,90]], 10: [[12,34],[56,94]], 11: [[11,33],[55,96]],
    12: [[12,32],[54,97]], 13: [[13,31],[54,98]], 14: [[14,30],[55,99]], 15: [[15,29],[56,98],[100,104]],
    16: [[16,28],[57,96],[100,106]], 17: [[17,27],[58,94],[101,107]], 18: [[18,27],[57,92],[100,108]],
    19: [[19,28],[56,90],[99,108]], 20: [[20,29],[55,88],[98,107]], 21: [[21,30],[55,86]],
    22: [[22,31],[56,84]], 23: [[23,32],[57,82]], 24: [[24,33],[58,80],[92,102]],
    25: [[25,34],[58,78],[93,104]], 26: [[26,34],[59,77],[94,105]], 27: [[27,35],[59,76],[95,106]],
    28: [[28,36],[60,75],[96,106]], 29: [[29,37],[60,74],[97,105]], 30: [[29,38],[61,73],[98,104]],
    31: [[30,38],[61,72]], 32: [[30,39],[62,71]], 33: [[31,39],[62,70]], 34: [[31,38],[63,70]],
    35: [[31,38],[63,69]], 36: [[30,37],[64,69]], 37: [[30,36],[64,68]], 38: [[29,35],[65,68]],
    39: [[29,34],[104,112]], 40: [[28,33],[105,113]], 41: [[28,32],[105,113]], 42: [[27,31],[106,112]],
    43: [[27,30]], 44: [[26,29]], 45: [[26,28]], 46: [[26,27]],
  };
  let out = '';
  for (const [yStr, ranges] of Object.entries(rows)) {
    const y = Number(yStr);
    for (const [x0, x1] of ranges) {
      for (let x = x0; x <= x1; x++) {
        if ((x + y) % 2 === 1) continue;
        out += `<circle cx="${x * 6.6 + 4}" cy="${y * 6.6 + 4}" r="1.85"/>`;
      }
    }
  }
  return out;
}

export const worldMap = `
<svg viewBox="0 0 800 340" role="img" aria-label="World map showing Orbo Flow delivery locations">
  <g fill="#B9B3D8" opacity=".95">${dotGrid()}</g>
</svg>`;

/* ---------- Scene: team collaborating (Who We Help) ---------- */
export const sceneTeam = `
<svg viewBox="0 0 720 620" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A team collaborating around a table with laptops">
  <defs>
    <linearGradient id="tRoom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EDE9FE"/><stop offset="58%" stop-color="#F6F3FF"/><stop offset="100%" stop-color="#FDF2F8"/>
    </linearGradient>
    <linearGradient id="tWin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D7E7FD"/><stop offset="100%" stop-color="#F0F6FF"/>
    </linearGradient>
    <linearGradient id="tTable" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E2C79E"/><stop offset="100%" stop-color="#C2A275"/>
    </linearGradient>
  </defs>
  <rect width="720" height="620" fill="url(#tRoom)"/>
  <g transform="translate(0,132)">

  <!-- window wall -->
  <g>
    <rect x="46" y="28" width="176" height="132" rx="8" fill="url(#tWin)"/>
    <rect x="240" y="28" width="176" height="132" rx="8" fill="url(#tWin)"/>
    <rect x="434" y="28" width="176" height="132" rx="8" fill="url(#tWin)"/>
    <g stroke="#C7D8F5" stroke-width="2.4" opacity=".9">
      <line x1="134" y1="28" x2="134" y2="160"/><line x1="328" y1="28" x2="328" y2="160"/><line x1="522" y1="28" x2="522" y2="160"/>
    </g>
    <g fill="#B7D2F4" opacity=".55">
      <rect x="56" y="118" width="156" height="42" rx="4"/><rect x="250" y="118" width="156" height="42" rx="4"/><rect x="444" y="118" width="156" height="42" rx="4"/>
    </g>
  </g>

  <!-- plant -->
  <g transform="translate(628,196)">
    <path d="M28 76C4 66-4 34 12 12c18 8 28 40 16 64Zm0 0c24-12 30-44 14-64-18 10-24 40-14 64Z" fill="#6FB392"/>
    <path d="M4 76h48l-6 44a8 8 0 0 1-8 7H18a8 8 0 0 1-8-7Z" fill="#E0C4A6"/>
  </g>

  <!-- seated people (torsos are overlapped by the table below) -->
  <g>
    <g><rect x="139" y="164" width="22" height="56" rx="10" fill="#D89C7C"/>
       <circle cx="150" cy="150" r="31" fill="#E7B08D"/>
       <path d="M119 150a31 31 0 0 1 62 0c2-24-13-36-31-36s-33 12-31 36Z" fill="#4A382C"/>
       <path d="M96 306c0-56 24-90 54-90s54 34 54 90Z" fill="#6D7FA8"/></g>
    <g><rect x="277" y="154" width="22" height="62" rx="10" fill="#B87C55"/>
       <circle cx="288" cy="140" r="31" fill="#C98C63"/>
       <path d="M257 142c-3-26 12-40 31-40s34 14 31 40c-4-12-13-20-31-20s-27 8-31 20Z" fill="#2B221B"/>
       <path d="M234 306c0-58 24-92 54-92s54 34 54 92Z" fill="#E3E7F0"/></g>
    <g><rect x="421" y="154" width="22" height="62" rx="10" fill="#E0B393"/>
       <circle cx="432" cy="140" r="31" fill="#F2C6A4"/>
       <path d="M400 146c-3-28 14-44 32-44s35 16 32 44c-5-11-12-19-32-19s-27 8-32 19Z" fill="#8A5A3B"/>
       <path d="M378 306c0-58 24-92 54-92s54 34 54 92Z" fill="#BAC3D7"/></g>
    <g><rect x="559" y="164" width="22" height="56" rx="10" fill="#7C4E33"/>
       <circle cx="570" cy="150" r="31" fill="#8D5A3C"/>
       <path d="M539 150a31 31 0 0 1 62 0c1-26-14-38-31-38s-32 12-31 38Z" fill="#1E1712"/>
       <path d="M516 306c0-56 24-90 54-90s54 34 54 90Z" fill="#8C93AD"/></g>
  </g>

  <!-- table -->
  <ellipse cx="360" cy="336" rx="312" ry="62" fill="url(#tTable)"/>
  <ellipse cx="360" cy="330" rx="312" ry="62" fill="#EBD5B4"/>

  <!-- laptops -->
  <g>
    <path d="M196 316h108l18 26H178z" fill="#DCE0EC"/>
    <rect x="206" y="262" width="88" height="54" rx="5" fill="#FBFCFE" stroke="#C3C8D8" stroke-width="2"/>
    <g fill="#B9A7F7"><rect x="218" y="276" width="56" height="5" rx="2.5"/><rect x="218" y="288" width="40" height="5" rx="2.5"/><rect x="218" y="300" width="48" height="5" rx="2.5"/></g>
    <path d="M420 314h108l18 26H402z" fill="#DCE0EC"/>
    <rect x="430" y="260" width="88" height="54" rx="5" fill="#FBFCFE" stroke="#C3C8D8" stroke-width="2"/>
    <g fill="#B9A7F7"><rect x="442" y="274" width="56" height="5" rx="2.5"/><rect x="442" y="286" width="38" height="5" rx="2.5"/><rect x="442" y="298" width="50" height="5" rx="2.5"/></g>
  </g>

  <!-- cups and notes -->
  <g><rect x="348" y="304" width="26" height="18" rx="3" fill="#fff" stroke="#DDE1EC" stroke-width="1.6"/><ellipse cx="361" cy="322" rx="15" ry="6" fill="#fff"/></g>
  <rect x="592" y="300" width="54" height="34" rx="3" fill="#fff" stroke="#DDE1EC" stroke-width="1.6" transform="rotate(-9 619 317)"/>
  </g>
</svg>`;

/* ---------- Scene: working from New Zealand ---------- */
export const sceneNZ = `
<svg viewBox="0 0 720 480" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A person working on a laptop at a desk with plants">
  <defs>
    <linearGradient id="nBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDF2F8"/><stop offset="52%" stop-color="#F2EEFE"/><stop offset="100%" stop-color="#E6F7F5"/>
    </linearGradient>
    <linearGradient id="nDesk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F4F1FB"/><stop offset="100%" stop-color="#DCD6EF"/>
    </linearGradient>
  </defs>
  <rect width="720" height="480" fill="url(#nBg)"/>
  <g transform="translate(0,52)">

  <!-- ambient bubbles, kept to the right where the badges sit -->
  <g fill="#FFFFFF" opacity=".55"><circle cx="470" cy="70" r="34"/><circle cx="646" cy="120" r="26"/><circle cx="560" cy="330" r="20"/></g>
  <g fill="#F9A8D4" opacity=".38"><circle cx="608" cy="58" r="18"/><circle cx="700" cy="250" r="24"/></g>
  <g fill="#A5B4FC" opacity=".34"><circle cx="522" cy="150" r="14"/><circle cx="640" cy="330" r="16"/></g>

  <!-- person, anchored to the left third -->
  <g>
    <rect x="180" y="168" width="32" height="70" rx="15" fill="#DCA985"/>
    <circle cx="196" cy="150" r="44" fill="#F0C7A6"/>
    <path d="M152 152c-5-38 19-60 44-60s49 22 44 60c-6-18-17-30-44-30s-38 12-44 30Z" fill="#3A2A22"/>
    <path d="M152 150c-10 22-6 52 8 66-16-4-24-30-16-56Z" fill="#3A2A22"/>
    <path d="M240 150c10 22 6 52-8 66 16-4 24-30 16-56Z" fill="#3A2A22"/>
    <path d="M116 330c0-64 36-104 80-104s80 40 80 104Z" fill="#F3F5FA"/>
    <path d="M122 330c2-42 16-70 38-82l14 26c-14 10-22 30-24 56Z" fill="#E2E7F1"/>
    <path d="M270 330c-2-42-16-70-38-82l-14 26c14 10 22 30 24 56Z" fill="#E2E7F1"/>
  </g>

  <!-- desk -->
  <rect x="40" y="330" width="420" height="16" rx="8" fill="url(#nDesk)"/>

  <!-- laptop -->
  <g>
    <path d="M148 330h96l20 0H128z" fill="#D3D8E6"/>
    <path d="M140 304h112l16 26H124z" fill="#DFE3EE"/>
    <rect x="152" y="248" width="88" height="56" rx="5" fill="#FAFBFE" stroke="#C7CCDD" stroke-width="2"/>
    <g fill="#B9A7F7"><rect x="164" y="262" width="56" height="5" rx="2.5"/><rect x="164" y="274" width="40" height="5" rx="2.5"/><rect x="164" y="286" width="48" height="5" rx="2.5"/></g>
  </g>

  <!-- plant -->
  <g transform="translate(48,244)">
    <path d="M24 62C2 54-6 24 8 4c16 6 26 36 16 58Zm0 0c22-10 28-40 14-58-16 8-22 36-14 58Z" fill="#5FAE86"/>
    <path d="M2 62h44l-5 38a7 7 0 0 1-7 6H14a7 7 0 0 1-7-6Z" fill="#E9D5C4"/>
  </g>

  <!-- mug -->
  <g><rect x="344" y="308" width="24" height="22" rx="3" fill="#fff" stroke="#DDE1EC" stroke-width="1.6"/><path d="M368 314h8a6 6 0 0 1 0 12h-8" fill="none" stroke="#DDE1EC" stroke-width="1.6"/></g>
  </g>
</svg>`;

/* ---------- Solution card artwork ---------- */
export function solutionArt(kind) {
  const g = (id, a, b) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${a}"/><stop offset="100%" stop-color="${b}"/></linearGradient>`;
  const map = {
    'ai-agents': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a1', '#8B5CF6', '#4338CA')}</defs>
      <rect x="14" y="24" width="46" height="36" rx="12" fill="url(#a1)"/>
      <circle cx="28" cy="41" r="5" fill="#fff"/><circle cx="46" cy="41" r="5" fill="#fff"/>
      <circle cx="28" cy="42" r="2.2" fill="#312E81"/><circle cx="46" cy="42" r="2.2" fill="#312E81"/>
      <rect x="31" y="51" width="12" height="3.4" rx="1.7" fill="#fff" opacity=".9"/>
      <path d="M37 24v-8" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"/><circle cx="37" cy="13" r="4" fill="#FF3D9A"/>
      <rect x="6" y="34" width="6" height="14" rx="3" fill="#A78BFA"/><rect x="62" y="34" width="6" height="14" rx="3" fill="#A78BFA"/>
      <path d="M60 20h14v11H68l-4 5v-5h-4z" fill="#38BDF8"/></svg>`,
    'ai-automation': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a2', '#6366F1', '#3730A3')}${g('a3', '#A78BFA', '#7C3AED')}</defs>
      <path d="M30 8l4.6 2.7 5.2-1 2.4 4.8 4.8 2.4-1 5.2 2.7 4.6-2.7 4.6 1 5.2-4.8 2.4-2.4 4.8-5.2-1L30 45l-4.6-2.7-5.2 1-2.4-4.8-4.8-2.4 1-5.2L11.3 26 14 21.4l-1-5.2 4.8-2.4 2.4-4.8 5.2 1z" fill="url(#a2)"/>
      <circle cx="30" cy="26" r="7.5" fill="#EEF2FF"/>
      <path d="M55 40l3.2 1.9 3.6-.7 1.7 3.3 3.3 1.7-.7 3.6L68 57l-1.9 3.2.7 3.6-3.3 1.7-1.7 3.3-3.6-.7L55 70l-3.2-1.9-3.6.7-1.7-3.3-3.3-1.7.7-3.6L42 57l1.9-3.2-.7-3.6 3.3-1.7 1.7-3.3 3.6.7z" fill="url(#a3)"/>
      <circle cx="55" cy="57" r="5.4" fill="#F5F3FF"/></svg>`,
    'voice-ai': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a4', '#FF3D9A', '#7C3AED')}</defs>
      <g fill="url(#a4)">
        <rect x="6" y="36" width="5" height="8" rx="2.5"/><rect x="16" y="28" width="5" height="24" rx="2.5"/>
        <rect x="26" y="18" width="5" height="44" rx="2.5"/><rect x="36" y="10" width="5" height="60" rx="2.5"/>
        <rect x="46" y="22" width="5" height="36" rx="2.5"/><rect x="56" y="30" width="5" height="20" rx="2.5"/>
        <rect x="66" y="35" width="5" height="10" rx="2.5"/>
      </g></svg>`,
    'data-analytics': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a5', '#2E7CF6', '#1E40AF')}${g('a6', '#38BDF8', '#0EA5E9')}</defs>
      <path d="M38 38V8a30 30 0 0 1 30 30z" fill="url(#a5)"/>
      <path d="M38 38h30a30 30 0 0 1-30 30z" fill="url(#a6)"/>
      <path d="M38 38 16.8 59.2A30 30 0 0 1 38 8z" fill="#C7D2FE"/>
      <path d="M38 38l-21.2 21.2A30 30 0 0 0 38 68z" fill="#93C5FD"/>
      <path d="M50 66l6-12 6 6 8-18" stroke="#FF3D9A" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M64 42h8v8" stroke="#FF3D9A" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'ai-consulting': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a7', '#FBBF24', '#F59E0B')}</defs>
      <path d="M40 8a22 22 0 0 1 13 39.6c-2.4 1.9-3.8 4.6-3.8 7.4H30.8c0-2.8-1.4-5.5-3.8-7.4A22 22 0 0 1 40 8z" fill="url(#a7)"/>
      <path d="M31 59h18v4a4 4 0 0 1-4 4H35a4 4 0 0 1-4-4z" fill="#D97706"/>
      <rect x="35" y="69" width="10" height="4" rx="2" fill="#B45309"/>
      <g stroke="#FCD34D" stroke-width="3" stroke-linecap="round"><path d="M40 2v-0"/><path d="M12 18l-4-2"/><path d="M68 18l4-2"/><path d="M8 44H3"/><path d="M72 44h5"/></g>
      <path d="M33 40l5 5 10-12" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'integrations': `<svg viewBox="0 0 80 80" class="sol-art" aria-hidden="true"><defs>${g('a8', '#14B8A6', '#0D9488')}${g('a9', '#7C3AED', '#4C1D95')}</defs>
      <path d="M10 14h20v8a5 5 0 0 0 10 0v-8h20v20h-8a5 5 0 0 0 0 10h8v20H40v-8a5 5 0 0 0-10 0v8H10z" fill="url(#a9)" opacity=".18"/>
      <path d="M12 16h18v6a6 6 0 0 0 12 0v-6h16v18h-6a6 6 0 0 0 0 12h6v18H42v-6a6 6 0 0 0-12 0v6H12z" fill="none" stroke="url(#a9)" stroke-width="3"/>
      <circle cx="58" cy="58" r="12" fill="url(#a8)"/>
      <path d="M53 58h10M58 53v10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
  };
  return map[kind] || map['ai-agents'];
}
