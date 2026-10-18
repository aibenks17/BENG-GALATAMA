/* GALATAMA INJECTOR — dibuat oleh Injector Builder (18/10/2026) */
(function () {
  'use strict';
  if (typeof App === 'undefined') { alert('INJECTOR: pasang script ini SETELAH script utama.'); return; }
  const MINGGU = {
  "nama": "",
  "lokasi": {
    "ganti": [
      "COPPER CANYON",
      "ANCIENT JUNGLE",
      "THRONE ROOM",
      "UNDERWATER CITY",
      "FISHERMAN ISLAND",
      "OCEAN",
      "KOHANA",
      "KOHANA VOLCANO",
      "VOLCANIC CAVERN",
      "CORAL REEFS",
      "ESOTERIC DEPTHS",
      "TROPICAL GROVE",
      "CRATER ISLAND",
      "SISYPUS STATUE",
      "TREASURE ROOM",
      "PLANETARY OBSERVATORY",
      "LAVA BASIN",
      "UNDERGROUND CELLAR",
      "SACRED TEMPLE",
      "STINGRAY SHORES",
      "COPPER CANYON MINES",
      "SEWERS",
      "KOHANA LAB",
      "ANCIENT RUIN",
      "PIRATE COVE",
      "PIRATE TREASURE ROOM",
      "CRYSTAL DEPTHS",
      "GLOOMCAP GROTTO",
      "ELEMENTAL ISLAND",
      "WEATHER MACHINE",
      "HALLOWS EVE"
    ],
    "tambah": [],
    "hapus": []
  },
  "mitos": {
    "ganti": [
      "COPPER CANYON",
      "ANCIENT JUNGLE",
      "THRONE ROOM",
      "UNDERWATER CITY",
      "SEWERS",
      "HALLOWS EVE"
    ],
    "tambah": [],
    "hapus": []
  },
  "kotakGlobal": [
    {
      "kategori": "SECRET",
      "label": "Secret (All Maps)",
      "tombol": "Kirim Secret",
      "warna": "purple",
      "nama": [
        "Secret",
        "Secret Mutasi/Big",
        "Secret Big+Shiny",
        "Secret Rata Kanan"
      ],
      "poin": 1
    }
  ],
  "kotakMode": {
    "MEGALODON": [
      {
        "kategori": "MEGALODON",
        "label": "MEGALODON:",
        "tombol": "Kirim Poin",
        "warna": "gold",
        "nama": [
          "MEGALODON Basic",
          "MEGALODON Mutasi/Big",
          "MEGALODON Big Shiny",
          "MEGALODON Rata Kanan"
        ],
        "poin": 4
      }
    ],
    "GLACIAL_SERPENT": [
      {
        "kategori": "GLACIAL SERPENT",
        "label": "GLACIAL SERPENT:",
        "tombol": "Kirim Poin",
        "warna": "gold",
        "nama": [
          "GLACIAL SERPENT Basic",
          "GLACIAL SERPENT Mutasi/Big",
          "GLACIAL SERPENT Big Shiny",
          "GLACIAL SERPENT Rata Kanan"
        ],
        "poin": 4
      }
    ]
  },
  "kotakMitos": [],
  "kotakLokasi": {
    "COPPER CANYON": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (COPPER CANYON)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "SECRET CORE",
        "label": "Core (COPPER CANYON)",
        "tombol": "Kirim Core",
        "warna": "gold",
        "nama": [
          "Core Basic",
          "Core Mutasi",
          "Core Big+Shiny",
          "Core Rata Kanan"
        ],
        "poin": 3
      }
    ],
    "ANCIENT JUNGLE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (ANCIENT JUNGLE)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 RAGNAREX",
        "tombol": "Kirim RAGNAREX",
        "warna": "lime",
        "nama": [
          "RAGNAREX Basic",
          "RAGNAREX Mutasi",
          "RAGNAREX Big+Shiny",
          "RAGNAREX Rata Kanan"
        ],
        "poin": 5
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 THUNDERZILLA",
        "tombol": "Kirim THUNDERZILLA",
        "warna": "lime",
        "nama": [
          "THUNDERZILLA Basic",
          "THUNDERZILLA Mutasi",
          "THUNDERZILLA Big+Shiny",
          "THUNDERZILLA Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "THRONE ROOM": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (THRONE ROOM)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 HYDRA",
        "tombol": "Kirim HYDRA",
        "warna": "lime",
        "nama": [
          "HYDRA Basic",
          "HYDRA Mutasi",
          "HYDRA Big+Shiny",
          "HYDRA Rata Kanan"
        ],
        "poin": 5
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 OVERLORD HYDRA",
        "tombol": "Kirim OVERLORD HYDRA",
        "warna": "lime",
        "nama": [
          "OVERLORD HYDRA Basic",
          "OVERLORD HYDRA Mutasi",
          "OVERLORD HYDRA Big+Shiny",
          "OVERLORD HYDRA Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "UNDERWATER CITY": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (UNDERWATER CITY)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 SEA EATER",
        "tombol": "Kirim SEA EATER",
        "warna": "lime",
        "nama": [
          "SEA EATER Basic",
          "SEA EATER Mutasi",
          "SEA EATER Big+Shiny",
          "SEA EATER Rata Kanan"
        ],
        "poin": 5
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 FLOURIVANE",
        "tombol": "Kirim FLOURIVANE",
        "warna": "lime",
        "nama": [
          "FLOURIVANE Basic",
          "FLOURIVANE Mutasi",
          "FLOURIVANE Big+Shiny",
          "FLOURIVANE Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "FISHERMAN ISLAND": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "OCEAN": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "KOHANA": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 EVERBLOOM",
        "tombol": "Kirim EVERBLOOM",
        "warna": "lime",
        "nama": [
          "EVERBLOOM Basic",
          "EVERBLOOM Mutasi",
          "EVERBLOOM Big+Shiny",
          "EVERBLOOM Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "KOHANA VOLCANO": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "VOLCANIC CAVERN": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "CORAL REEFS": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "ESOTERIC DEPTHS": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "TROPICAL GROVE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "CRATER ISLAND": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 FB 100KG++",
        "tombol": "Kirim FB 100KG++",
        "warna": "lime",
        "nama": [
          "FB 100KG++ Basic",
          "FB 100KG++ Mutasi",
          "FB 100KG++ Big+Shiny",
          "FB 100KG++ Rata Kanan"
        ],
        "poin": 3
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 FB MAXTON",
        "tombol": "Kirim FB MAXTON",
        "warna": "lime",
        "nama": [
          "FB MAXTON Basic",
          "FB MAXTON Mutasi",
          "FB MAXTON Shiny",
          "FB MAXTON Mutasi+Shiny"
        ],
        "poin": 5
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 CRYSTALLINE BEHEMOTH",
        "tombol": "Kirim CRYSTALLINE BEHEMOTH",
        "warna": "lime",
        "nama": [
          "CRYSTALLINE BEHEMOTH Basic",
          "CRYSTALLINE BEHEMOTH Mutasi",
          "CRYSTALLINE BEHEMOTH Big+Shiny",
          "CRYSTALLINE BEHEMOTH Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "SISYPUS STATUE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 PELAGON",
        "tombol": "Kirim PELAGON",
        "warna": "lime",
        "nama": [
          "PELAGON Basic",
          "PELAGON Mutasi",
          "PELAGON Big+Shiny",
          "PELAGON Rata Kanan"
        ],
        "poin": 2,
        "tanpaLencana": true
      }
    ],
    "TREASURE ROOM": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "PLANETARY OBSERVATORY": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 COSMIC SHARK",
        "tombol": "Kirim COSMIC SHARK",
        "warna": "lime",
        "nama": [
          "COSMIC SHARK Basic",
          "COSMIC SHARK Mutasi",
          "COSMIC SHARK Big+Shiny",
          "COSMIC SHARK Rata Kanan"
        ],
        "poin": 2,
        "tanpaLencana": true
      }
    ],
    "LAVA BASIN": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "UNDERGROUND CELLAR": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "SACRED TEMPLE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "STINGRAY SHORES": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "COPPER CANYON MINES": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 CERULEAN DRAGON",
        "tombol": "Kirim CERULEAN DRAGON",
        "warna": "lime",
        "nama": [
          "CERULEAN DRAGON Basic",
          "CERULEAN DRAGON Mutasi",
          "CERULEAN DRAGON Big+Shiny",
          "CERULEAN DRAGON Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "SEWERS": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (SEWERS)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 SEA EATER",
        "tombol": "Kirim SEA EATER",
        "warna": "lime",
        "nama": [
          "SEA EATER Basic",
          "SEA EATER Mutasi",
          "SEA EATER Big+Shiny",
          "SEA EATER Rata Kanan"
        ],
        "poin": 5
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 FLOURIVANE",
        "tombol": "Kirim FLOURIVANE",
        "warna": "lime",
        "nama": [
          "FLOURIVANE Basic",
          "FLOURIVANE Mutasi",
          "FLOURIVANE Big+Shiny",
          "FLOURIVANE Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "KOHANA LAB": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "ANCIENT RUIN": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "PIRATE COVE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "PIRATE TREASURE ROOM": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "CRYSTAL DEPTHS": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "GLOOMCAP GROTTO": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 CRIMSON DREADTUSK",
        "tombol": "Kirim CRIMSON DREADTUSK",
        "warna": "lime",
        "nama": [
          "CRIMSON DREADTUSK Basic",
          "CRIMSON DREADTUSK Mutasi",
          "CRIMSON DREADTUSK Big+Shiny",
          "CRIMSON DREADTUSK Rata Kanan"
        ],
        "poin": 5
      }
    ],
    "ELEMENTAL ISLAND": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      }
    ],
    "WEATHER MACHINE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 WORMFISH",
        "tombol": "Kirim WORMFISH",
        "warna": "lime",
        "nama": [
          "WORMFISH Basic",
          "WORMFISH Mutasi",
          "WORMFISH Big+Shiny",
          "WORMFISH Rata Kanan"
        ],
        "poin": 2,
        "tanpaLencana": true
      }
    ],
    "HALLOWS EVE": [
      {
        "kategori": "SECRET",
        "label": "Secret",
        "tombol": "Kirim Secret",
        "warna": "purple",
        "nama": [
          "Secret",
          "Secret Mutasi/Big",
          "Secret Big+Shiny",
          "Secret Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "MITOS",
        "label": "Mitos (HALLOWS EVE)",
        "tombol": "Kirim Mitos",
        "warna": "gold",
        "nama": [
          "Mitos Basic",
          "Mitos Mutasi",
          "Mitos Big/Shiny",
          "Mitos Rata Kanan"
        ],
        "poin": 1
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 SWEETOOTH GOURD",
        "tombol": "Kirim SWEETOOTH GOURD",
        "warna": "lime",
        "nama": [
          "SWEETOOTH GOURD Basic",
          "SWEETOOTH GOURD Mutasi",
          "SWEETOOTH GOURD Big+Shiny",
          "SWEETOOTH GOURD Rata Kanan"
        ],
        "poin": 2
      },
      {
        "kategori": "FORGOTTEN",
        "label": "🐟 MAWSOLEUM",
        "tombol": "Kirim MAWSOLEUM",
        "warna": "lime",
        "nama": [
          "MAWSOLEUM Basic",
          "MAWSOLEUM Mutasi",
          "MAWSOLEUM Big+Shiny",
          "MAWSOLEUM Rata Kanan"
        ],
        "poin": 5
      }
    ]
  },
  "survival": {
    "lolosKeyword": [
      "SECRET",
      "MITOS",
      "FORGOTTEN"
    ]
  },
  "kustom": null
};

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const WARNA = { purple: 'btn-purple', gold: 'btn-gold', lime: 'btn-lime', pink: 'btn-pink', dark: 'btn-dark' };

  /* ---- 1) Terapkan perubahan daftar lokasi & mitos ke App (in-place) ---- */
  function terapkanDaftar(target, cfg) {
    let hasil = Array.isArray(cfg.ganti) ? cfg.ganti.slice() : target.slice();
    const buang = new Set(cfg.hapus || []);
    hasil = hasil.filter(x => !buang.has(x));
    (cfg.tambah || []).forEach(x => { if (!hasil.includes(x)) hasil.push(x); });
    target.length = 0;
    hasil.forEach(x => target.push(x));
  }
  terapkanDaftar(App.pointRushLocations, MINGGU.lokasi || {});
  terapkanDaftar(App.mitosMaps, MINGGU.mitos || {});

  /* ---- 2) Hitung poin satu tingkat ---- */
  function poinTingkat(poin, idx, isMitos) {
    let p = poin;
    if (p && typeof p === 'object' && !Array.isArray(p)) {
      p = isMitos && p.mitos !== undefined ? p.mitos : (p.normal !== undefined ? p.normal : 0);
    }
    if (Array.isArray(p)) return Number(p[idx]) || 0;
    return (Number(p) || 0) + idx;
  }

  /* ---- 3) Kumpulkan kotak yang berlaku untuk konteks sekarang ---- */
  function kotakBerlaku(ctx) {
    let k = [];
    (MINGGU.kotakGlobal || []).forEach(b => k.push(b));
    if (ctx.mode !== 'SURVIVAL' && ctx.mode !== 'POINT_RUSH') {
      ((MINGGU.kotakMode || {})[ctx.mode] || []).forEach(b => k.push(b));
    }
    if (ctx.isPointRush) {
      const lk = (MINGGU.kotakLokasi || {})[ctx.lokasi] || [];
      // kalau lokasi punya kotak SECRET sendiri, kotak Secret global disembunyikan
      if (lk.some(b => b.kategori === 'SECRET')) k = k.filter(b => b.kategori !== 'SECRET');
      if (ctx.isMitos) (MINGGU.kotakMitos || []).forEach(b => k.push(b));
      lk.forEach(b => k.push(b));
    }
    if (typeof MINGGU.kustom === 'function') {
      try { k = MINGGU.kustom(ctx, k) || k; } catch (e) { console.error('INJECTOR kustom error:', e); }
    }
    return k;
  }

  function buatCtx() {
    const mode = App.state.mode;
    const lokasi = App.state.pointRushLocation;
    const isPointRush = mode === 'POINT_RUSH';
    return { mode, lokasi, isPointRush, isMitos: isPointRush && App.mitosMaps.includes(lokasi) };
  }

  let aktif = [];   // kotak yang sedang tampil (dipakai tombol kirim)

  /* ---- 4) Ganti renderCatchGrid ---- */
  App.renderCatchGrid = function () {
    const wrapper = document.getElementById('dropdownWrapper');
    if (!wrapper) return;

    if (App.state.timer.secondsLeft <= 0) {
      wrapper.innerHTML = `<div style="background:rgba(255,0,85,0.15); border:1px solid var(--pink); padding:10px; border-radius:6px; text-align:center; color:var(--pink); font-weight:900;">
        💥 WAKTU HABIS!<br>INPUT TANGKAPAN DIKUNCI.<br><span style="font-size:8px; color:var(--text-muted); font-weight:normal;">Tekan tombol RESET untuk membuka kunci<\/span>
      <\/div>`;
      return;
    }

    const ctx = buatCtx();
    aktif = kotakBerlaku(ctx).map(b => {
      const tiers = (b.nama || []).map((n, i) => ({ nama: n, poin: poinTingkat(b.poin, i, ctx.isMitos) }));
      return Object.assign({}, b, { _tiers: tiers });
    });

    wrapper.innerHTML = aktif.map((b, i) => {
      const label = esc(String(b.label || b.kategori).replace('{lokasi}', ctx.lokasi));
      const opts = b._tiers.map((t, j) => `<option value="${j}">${esc(t.nama)} (+${t.poin})<\/option>`).join('');
      return `<div class="dropdown-box">
        <label>${label}<\/label>
        <select id="gi_sel_${i}" class="input-field">${opts}<\/select>
        <button class="btn ${WARNA[b.warna] || 'btn-gold'} btn-sm" style="margin-top:3px;" onclick="GalatamaInjector.kirim(${i})">${esc(b.tombol || 'Kirim')}<\/button>
      <\/div>`;
    }).join('');
  };

  /* ---- 5) Ganti renderPointRush (daftar map + badge) ---- */
  App.renderPointRush = function () {
    if (App.state.mode !== 'POINT_RUSH') return;
    const judul = document.querySelector('#pointRushCard .card-title span');
    if (judul) judul.innerText = `SPINWHEEL POINT RUSH (${App.pointRushLocations.length} MAPS)` +
      (MINGGU.nama ? ' · ' + MINGGU.nama : '');

    document.getElementById('spinwheelDisplay').innerText = App.state.pointRushLocation;
    const q = (document.getElementById('searchLocation')?.value || '').toLowerCase();

    const html = App.pointRushLocations
      .map((loc, idx) => ({ loc, idx }))
      .filter(o => !q || o.loc.toLowerCase().includes(q))
      .map(o => {
        const extra = (MINGGU.kotakLokasi || {})[o.loc] || [];
        const hasM = App.mitosMaps.includes(o.loc) ? ' [🔥M]' : '';
        const hasF = extra.some(b => b.kategori === 'FORGOTTEN' && !b.tanpaLencana) ? ' [🐟FG]' : '';
        return `<div class="loc-btn ${App.state.pointRushLocation === o.loc ? 'active' : ''}" onclick="App.setPointRushLocation(App.pointRushLocations[${o.idx}])">${esc(o.loc)}${hasM}${hasF}<\/div>`;
      }).join('');

    document.getElementById('pointRushLocationGrid').innerHTML =
      html || '<div style="grid-column: span 3; text-align:center; color:var(--text-muted); font-size:8px;">Tidak ditemukan<\/div>';
  };

  /* ---- 6) Ganti nextRound (syarat lolos Survival dari config) ---- */
  App.nextRound = function () {
    if (App.state.mode !== 'SURVIVAL') return;
    const kw = ((MINGGU.survival || {}).lolosKeyword || ['SECRET']).map(s => String(s).toUpperCase());
    App.state.participants.forEach(p => {
      if (p.status === 'ACTIVE') {
        const lolos = (p.roundCatches || []).some(c => kw.some(k => String(c).toUpperCase().includes(k)));
        if (!lolos) p.status = 'ELIMINATED';
        p.roundCatches = [];
      }
    });
    if (App.state.survival.round < 5) App.state.survival.round += 1;
    else alert('Survival Mode mencapai Round Akhir (5)!');
    AudioEngine.playAlert(); App.resetTimer(); App.saveStorage(); App.renderAll();
  };

  /* ---- 7) Kalau lokasi tersimpan sudah dihapus minggu ini -> reset ---- */
  const loadAsli = App.loadStorage;
  App.loadStorage = function () {
    loadAsli.apply(App, arguments);
    if (!App.pointRushLocations.includes(App.state.pointRushLocation)) {
      App.state.pointRushLocation = App.pointRushLocations[0] || '';
    }
  };

  /* ---- 8) API publik ---- */
  window.GalatamaInjector = {
    config: MINGGU,

    // dipanggil tombol "Kirim" di tiap kotak
    kirim(i) {
      const b = aktif[i]; if (!b) return;
      const sel = document.getElementById('gi_sel_' + i); if (!sel) return;
      const t = b._tiers[sel.selectedIndex]; if (!t) return;
      App.submitCatch(`[${b.kategori}] ${t.nama}`, t.poin);
    },

    // cek cepat tabel poin untuk lokasi tertentu (ketik di console: GalatamaInjector.cek('KOHANA'))
    cek(lokasi, mode) {
      const m = mode || 'POINT_RUSH';
      const ctx = { mode: m, lokasi, isPointRush: m === 'POINT_RUSH',
                    isMitos: m === 'POINT_RUSH' && App.mitosMaps.includes(lokasi) };
      return kotakBerlaku(ctx).map(b => ({
        kotak: String(b.label || b.kategori).replace('{lokasi}', lokasi),
        tingkat: (b.nama || []).map((n, i) => `${n} (+${poinTingkat(b.poin, i, ctx.isMitos)})`).join(' | ')
      }));
    }
  };
})();
