const baseline = {
  apAll: 21.69,
  apC: 33.25,
  apD: 16.09,
  apDp: 24.61,
};

const resultData = {
  omni: [
    { framework: "G-DINO", apAll: 21.69, apC: 33.25, apD: 16.09, apDp: 24.61, baseline: true },
    { framework: "LED + Qwen2-0.5B", apAll: 27.90, apC: 33.93, apD: 23.70, apDp: 36.24 },
    { framework: "LED + InternLM2-1.8B", apAll: 27.87, apC: 33.44, apD: 23.90, apDp: 36.13 },
    { framework: "LED + InternLM2.5-7B", apAll: 26.33, apC: 32.03, apD: 22.36, apDp: 34.34 },
    { framework: "LED + Qwen2.5-0.5B", apAll: 28.03, apC: 33.98, apD: 23.78, apDp: 36.45 },
    { framework: "LED + Vicuna-7B v1.5", apAll: 26.56, apC: 33.26, apD: 22.24, apDp: 34.12 },
  ],
  refcoco: [
    { method: "G-DINO", refEval: 48.0, refA: 54.8, refB: 41.5, plusEval: 48.5, plusA: 53.0, plusB: 44.1, gEval: 66.2, gTest: 66.4, baseline: true },
    { method: "LED + Qwen2-0.5B", refEval: 51.3, refA: 58.6, refB: 43.4, plusEval: 50.8, plusA: 56.0, plusB: 45.3, gEval: 70.2, gTest: 70.5 },
    { method: "LED + InternLM2.5-7B", refEval: 52.4, refA: 59.8, refB: 45.1, plusEval: 51.8, plusA: 57.2, plusB: 46.8, gEval: 71.2, gTest: 71.4 },
  ],
  d3: [
    { method: "G-DINO", full: 20.7, pres: 20.1, abs: 22.5, color: 8.9, material: 9.9, negation: 23.8, position: 23.8, relationship: 27.2, baseline: true },
    { method: "G-DINO + LED", full: 21.8, pres: 21.7, abs: 23.6, color: 11.1, material: 10.1, negation: 23.8, position: 23.7, relationship: 30.9 },
  ],
  adapters: [
    { framework: "G-DINO", apAll: 21.69, apC: 33.25, apD: 16.09, baseline: true },
    { framework: "Arch. I", apAll: 22.57, apC: 33.80, apD: 16.95, note: "Full cross-attention fusion" },
    { framework: "Arch. II", apAll: 24.52, apC: 31.05, apD: 20.26, note: "Conv-based prompt projection" },
    { framework: "Arch. III", apAll: 24.63, apC: 32.07, apD: 19.99, note: "Early decoder injection" },
    { framework: "Arch. IV", apAll: 25.98, apC: 33.89, apD: 21.06, note: "Text-free adaptation" },
  ],
  synthetic: [
    { method: "GLIP-T", apAll: 19.3, apD: 16.4, family: "Detector" },
    { method: "NEG-Text", apAll: 22.2, apD: 18.8, family: "Synthetic data" },
    { method: "DesCo", apAll: 23.8, apD: 21.0, family: "Synthetic data" },
    { method: "LED + InternVL2-1B", apAll: 24.8, apD: 24.7, family: "Knowledge fusion" },
  ],
  replacement: [
    { method: "G-DINO-Pre", ap5095: 31.23, ap50: 44.37, ap75: 34.09 },
    { method: "G-DINO-COCO SFT", ap5095: 57.23, ap50: 73.27, ap75: 63.18 },
    { method: "SwinTiny-BERT", ap5095: 41.97, ap50: 57.45, ap75: 45.85 },
    { method: "LLaVA-L8", ap5095: 24.19, ap50: 39.47, ap75: 24.94 },
    { method: "InternVL2-L2", ap5095: 38.28, ap50: 55.25, ap75: 41.18 },
    { method: "InternVL2-L8", ap5095: 42.64, ap50: 63.77, ap75: 44.92 },
  ],
  efficiency: [
    { component: "G-DINO", params: 172, gflops: 412, baseline: true },
    { component: "LED overhead", params: 58, gflops: 36 },
    { component: "Adapter", params: 2.2, gflops: 2.0 },
    { component: "Qwen2-0.5B 2L", params: 56, gflops: 34 },
  ],
  sota: [
    { model: "OmDet", group: "mllm", params: 610, gflops: 640, apD: 13.3, apDp: 19.5 },
    { model: "ROD-MLLM", group: "mllm", params: 7700, gflops: 8200, apD: 25.3, apDp: 30.9 },
    { model: "Qwen3VL-2B", group: "mllm", params: 2000, gflops: 3600, apD: 4.3, apDp: 4.6 },
    { model: "InternVL3-8B", group: "mllm", params: 8100, gflops: 8470, apD: 5.8, apDp: 6.7 },
    { model: "InternVL3-78B", group: "mllm", params: 78400, gflops: 18400, apD: 19.6, apDp: 24.7 },
    { model: "GLIP-T", group: "detector", params: 232, gflops: 434, apD: 16.4, apDp: 25.8 },
    { model: "GLIP + LED", group: "led", params: 290, gflops: 472, apD: 24.7, apDp: 36.8 },
    { model: "G-DINO", group: "detector", params: 172, gflops: 412, apD: 16.1, apDp: 24.6 },
    { model: "G-DINO + LED", group: "led", params: 230, gflops: 448, apD: 23.7, apDp: 36.2 },
    { model: "FIBER-B", group: "detector", params: 239, gflops: 437, apD: 22.3, apDp: 34.8 },
    { model: "FIBER-B + LED", group: "led", params: 297, gflops: 475, apD: 27.4, apDp: 41.4 },
  ],
};

const metricLabels = {
  apAll: "AP_all",
  apC: "AP_c",
  apD: "AP_d",
  apDp: "AP_dp",
};

const formatNumber = (value, suffix = "") => {
  if (typeof value !== "number") return value;
  const fixed = Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/0$/, "").replace(/\.0$/, "");
  return `${fixed}${suffix}`;
};

const gainText = (value, base) => {
  if (typeof value !== "number" || typeof base !== "number") return "";
  const delta = value - base;
  if (Math.abs(delta) < 0.005) return "±0.00";
  return `${delta > 0 ? "+" : ""}${delta.toFixed(2)}`;
};

function makeTable(rootId, columns, rows, options = {}) {
  const root = document.getElementById(rootId);
  if (!root) return;

  let sortKey = options.defaultSort || columns.find((c) => c.sortable !== false)?.key;
  let sortDirection = options.defaultDirection || "desc";

  const render = () => {
    const sorted = [...rows].sort((a, b) => {
      if (!sortKey) return 0;
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDirection === "asc" ? av - bv : bv - av;
      }
      return sortDirection === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });

    const caption = options.caption ? `<caption>${options.caption}</caption>` : "";
    const header = columns.map((col) => {
      const active = sortKey === col.key ? (sortDirection === "asc" ? " ↑" : " ↓") : "";
      return `<th class="${col.sortable === false ? "no-sort" : ""}" data-key="${col.key}">${col.label}${active}</th>`;
    }).join("");

    const body = sorted.map((row) => {
      const cells = columns.map((col) => {
        const raw = row[col.key];
        const html = col.render ? col.render(raw, row) : raw;
        const numeric = typeof raw === "number" ? " numeric" : "";
        return `<td class="${numeric}">${html}</td>`;
      }).join("");
      return `<tr>${cells}</tr>`;
    }).join("");

    root.innerHTML = `<table>${caption}<thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>`;
    root.querySelectorAll("th:not(.no-sort)").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.getAttribute("data-key");
        if (sortKey === key) {
          sortDirection = sortDirection === "asc" ? "desc" : "asc";
        } else {
          sortKey = key;
          sortDirection = typeof rows[0]?.[key] === "number" ? "desc" : "asc";
        }
        render();
      });
    });
  };

  render();
}

function renderBars(rootId, rows, metric, options = {}) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const max = Math.max(...rows.map((row) => row[metric] || 0));
  root.innerHTML = rows.map((row) => {
    const width = max ? ((row[metric] || 0) / max) * 100 : 0;
    const value = formatNumber(row[metric]);
    return `<div class="bar-item ${row.baseline ? "baseline" : ""}">
      <div class="bar-name">${row.framework || row.method}</div>
      <div class="bar-track"><span class="bar-fill" data-width="${width.toFixed(1)}"></span></div>
      <div class="bar-value">${value}</div>
    </div>`;
  }).join("");
  requestAnimationFrame(() => {
    root.querySelectorAll(".bar-fill").forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  });
}

function renderEfficiencyBreakdown() {
  const root = document.getElementById("efficiency-breakdown");
  if (!root) return;
  const overhead = resultData.efficiency.find((row) => row.component === "LED overhead");
  const components = resultData.efficiency.filter((row) => !row.baseline && row.component !== "LED overhead");
  root.innerHTML = components.map((row) => {
    const width = overhead ? (row.gflops / overhead.gflops) * 100 : 0;
    return `<div class="breakdown-row">
      <div class="breakdown-label">${row.component}</div>
      <div class="breakdown-track"><span class="breakdown-fill" data-width="${width.toFixed(1)}"></span></div>
      <div class="breakdown-value">${formatNumber(row.gflops)}G</div>
    </div>`;
  }).join("");
  requestAnimationFrame(() => {
    root.querySelectorAll(".breakdown-fill").forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  });
}

function renderScatter() {
  const root = document.getElementById("efficiency-scatter");
  if (!root) return;
  const rows = resultData.sota;
  const minX = 350;
  const maxX = 18500;
  const minY = 3;
  const maxY = 29;
  const padX = 9;
  const padY = 10;

  const xPos = (x) => {
    const logMin = Math.log10(minX);
    const logMax = Math.log10(maxX);
    const t = (Math.log10(x) - logMin) / (logMax - logMin);
    return padX + t * (100 - padX * 2);
  };
  const yPos = (y) => {
    const t = (y - minY) / (maxY - minY);
    return padY + t * (100 - padY * 2);
  };
  const radius = (params) => Math.max(18, Math.min(50, 12 + Math.sqrt(params) / 4.7));

  const points = rows.map((row) => {
    const size = radius(row.params);
    const left = xPos(row.gflops);
    const bottom = yPos(row.apD);
    const short = row.model.includes("LED") ? "LED" : row.model.split(/[ -]/)[0].slice(0, 4);
    return `<div class="scatter-point ${row.group}" style="left:${left}%; bottom:${bottom}%; width:${size}px; height:${size}px;" title="${row.model}: ${row.gflops}G, AP_d ${row.apD}">${short}</div>
      <div class="scatter-label" style="left:calc(${left}% + 14px); bottom:calc(${bottom}% + 12px);">
        <strong>${row.model}</strong><br>${formatNumber(row.gflops)}G · AP_d ${formatNumber(row.apD)} · ${formatNumber(row.params)}M
      </div>`;
  }).join("");

  root.innerHTML = `${points}<div class="scatter-axis x">GFLOPs, log scale →</div><div class="scatter-axis y">AP_d →</div>`;
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navAnchors)
    .map((anchor) => document.querySelector(anchor.getAttribute("href")))
    .filter(Boolean);
  const onScroll = () => {
    const y = window.scrollY + 140;
    let current = null;
    for (const section of sections) {
      if (section.offsetTop <= y) current = section;
    }
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle("active", current && anchor.getAttribute("href") === `#${current.id}`);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initTabs() {
  const buttons = document.querySelectorAll("[data-result-tab]");
  const panels = document.querySelectorAll("[data-result-panel]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.resultTab;
      buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.resultPanel === target));
    });
  });
}

function initCopy() {
  const copyButton = document.querySelector(".copy-btn[data-copy]");
  if (!copyButton) return;
  copyButton.addEventListener("click", async () => {
    const target = document.querySelector(copyButton.getAttribute("data-copy"));
    if (!target) return;
    const original = copyButton.textContent;
    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      copyButton.textContent = "Copied";
      setTimeout(() => (copyButton.textContent = original), 1300);
    } catch (error) {
      const range = document.createRange();
      range.selectNode(target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      copyButton.textContent = "Copied";
      setTimeout(() => (copyButton.textContent = original), 1300);
    }
  });
}

function initOmniMetricSwitch() {
  const buttons = document.querySelectorAll("[data-omni-metric]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const metric = button.dataset.omniMetric;
      buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
      renderBars("omni-bars", resultData.omni, metric);
    });
  });
}

function initTables() {
  makeTable("omni-table", [
    { key: "framework", label: "Framework" },
    { key: "apAll", label: "AP_all", render: (value, row) => `${formatNumber(value)} <span class="${row.baseline ? "" : "gain"}">${row.baseline ? "" : gainText(value, baseline.apAll)}</span>` },
    { key: "apC", label: "AP_c", render: (value, row) => `${formatNumber(value)} <span class="${row.baseline ? "" : value >= baseline.apC ? "gain" : "loss"}">${row.baseline ? "" : gainText(value, baseline.apC)}</span>` },
    { key: "apD", label: "AP_d", render: (value, row) => `${formatNumber(value)} <span class="${row.baseline ? "" : "gain"}">${row.baseline ? "" : gainText(value, baseline.apD)}</span>` },
    { key: "apDp", label: "AP_dp", render: (value, row) => `${formatNumber(value)} <span class="${row.baseline ? "" : "gain"}">${row.baseline ? "" : gainText(value, baseline.apDp)}</span>` },
  ], resultData.omni, { defaultSort: "apAll" });

  const refBase = resultData.refcoco[0];
  makeTable("refcoco-table", [
    { key: "method", label: "Method" },
    { key: "refEval", label: "RefCOCO eval", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.refEval)}</span>`}` },
    { key: "refA", label: "RefCOCO test A", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.refA)}</span>`}` },
    { key: "refB", label: "RefCOCO test B", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.refB)}</span>`}` },
    { key: "plusEval", label: "RefCOCO+ eval", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.plusEval)}</span>`}` },
    { key: "plusA", label: "RefCOCO+ test A", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.plusA)}</span>`}` },
    { key: "plusB", label: "RefCOCO+ test B", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.plusB)}</span>`}` },
    { key: "gEval", label: "RefCOCOg eval", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.gEval)}</span>`}` },
    { key: "gTest", label: "RefCOCOg test", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, refBase.gTest)}</span>`}` },
  ], resultData.refcoco, { defaultSort: "gTest" });

  const d3Base = resultData.d3[0];
  makeTable("d3-table", [
    { key: "method", label: "Method" },
    ...["full", "pres", "abs", "color", "material", "negation", "position", "relationship"].map((key) => ({
      key,
      label: key === "pres" ? "D3 Pres" : key === "abs" ? "D3 Abs" : key,
      render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="${v >= d3Base[key] ? "gain" : "loss"}">${gainText(v, d3Base[key])}</span>`}`,
    })),
  ], resultData.d3, { defaultSort: "relationship" });

  makeTable("adapter-table", [
    { key: "framework", label: "Framework" },
    { key: "note", label: "Design", sortable: false, render: (v) => v || "Baseline detector" },
    { key: "apAll", label: "AP_all", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, resultData.adapters[0].apAll)}</span>`}` },
    { key: "apC", label: "AP_c", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="${v >= resultData.adapters[0].apC ? "gain" : "loss"}">${gainText(v, resultData.adapters[0].apC)}</span>`}` },
    { key: "apD", label: "AP_d", render: (v, r) => `${formatNumber(v)} ${r.baseline ? "" : `<span class="gain">${gainText(v, resultData.adapters[0].apD)}</span>`}` },
  ], resultData.adapters, { defaultSort: "apAll" });

  makeTable("synthetic-table", [
    { key: "method", label: "Method" },
    { key: "family", label: "Family" },
    { key: "apAll", label: "AP_all", render: (v, r) => `${formatNumber(v)}${r.method.includes("LED") ? " <span class=\"best\">best</span>" : ""}` },
    { key: "apD", label: "AP_d", render: (v, r) => `${formatNumber(v)}${r.method.includes("LED") ? " <span class=\"best\">best</span>" : ""}` },
  ], resultData.synthetic, { defaultSort: "apD" });

  makeTable("replacement-table", [
    { key: "method", label: "Method" },
    { key: "ap5095", label: "AP_50:95" },
    { key: "ap50", label: "AP_50" },
    { key: "ap75", label: "AP_75" },
  ], resultData.replacement, { defaultSort: "ap5095" });

  makeTable("efficiency-table", [
    { key: "component", label: "Component" },
    { key: "params", label: "Params", render: (v, r) => `${r.baseline ? "" : "+"}${formatNumber(v)}M` },
    { key: "gflops", label: "GFLOPs", render: (v, r) => `${r.baseline ? "" : "+"}${formatNumber(v)}G` },
  ], resultData.efficiency, { defaultSort: "gflops" });

  makeTable("sota-table", [
    { key: "model", label: "Model" },
    { key: "params", label: "Params", render: (v) => v >= 1000 ? `${formatNumber(v / 1000)}B` : `${formatNumber(v)}M` },
    { key: "gflops", label: "GFLOPs", render: (v) => v >= 1000 ? `${formatNumber(v / 1000)}T` : `${formatNumber(v)}G` },
    { key: "apD", label: "AP_d", render: (v, r) => `${formatNumber(v)}${r.group === "led" ? " <span class=\"gain\">LED</span>" : ""}` },
    { key: "apDp", label: "AP_dp", render: (v, r) => `${formatNumber(v)}${r.group === "led" ? " <span class=\"gain\">LED</span>" : ""}` },
  ], resultData.sota, { defaultSort: "apDp" });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTabs();
  initCopy();
  initOmniMetricSwitch();
  initTables();
  renderBars("omni-bars", resultData.omni, "apAll");
  renderBars("adapter-bars", resultData.adapters, "apAll");
  renderEfficiencyBreakdown();
  renderScatter();
});
