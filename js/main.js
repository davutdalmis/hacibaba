/* =========================================================
   Hacı Baba Salihli - site betiği
   İşletme bilgilerini ve menüyü yalnızca bu dosyanın başından
   güncellemeniz yeterli. Sayfadaki ilgili yerler otomatik dolar.
   ========================================================= */

const SITE = {
  // Telefon ve WhatsApp: Instagram profilinden (@hacibabacafe)
  phone: "0507 835 78 57",
  // Başında 90 olacak şekilde, boşluksuz
  whatsapp: "905078357857",
  // GÜNCELLEYİN: açık adres (Instagram'da yazmıyor)
  address: "Salihli, Manisa",
  instagram: "https://www.instagram.com/hacibabacafe/",
  instagramHandle: "@hacibabacafe",
  // Haritada aranacak metin (açık adres girilirse daha isabetli olur)
  mapQuery: "Hacıbaba Cafe Salihli Manisa",
  // GÜNCELLEYİN: çalışma saatleri (0 = Pazar). Boş kalırsa "bizi arayın" yazar.
  // Ör. { day: "Pazartesi", d: 1, time: "08:00 - 22:00" },
  hours: [],
};

// Fiyat göstermek için ürüne price ekleyin. Ör. price: "450 ₺"
// img: assets/img içindeki dosya adı ya da "real/..." ile assets/real içindeki dosya
const MENU = [
  { cat: "pasta", name: "Çikolatalı Yaş Pasta", desc: "Çikolatalı pandispanya, bol ganaj ve çikolata kreması.", img: "p-cikolata", badge: "Favori" },
  { cat: "pasta", name: "Frambuazlı Dilim Pasta", desc: "Hafif krema, taze frambuaz ve yumuşacık kat.", img: "p-dilim" },
  { cat: "pasta", name: "Katlı Dilim Pasta", desc: "Kahveli krema ve kakao ile kat kat lezzet.", img: "p-katli-dilim" },
  { cat: "pasta", name: "Islak Brownie", desc: "İçi akışkan, üstü sıcak çikolata soslu.", img: "p-brownie" },
  { cat: "pasta", name: "Meyveli Tartolet", desc: "Çıtır tart hamuru, pastacı kreması ve mevsim meyveleri.", img: "p-tartolet" },
  { cat: "pasta", name: "Çilekli Kup", desc: "Sütlü krema ve taze çilek, bardakta hafif tatlı.", img: "p-kup" },
  { cat: "pasta", name: "Limonlu Tart", desc: "Ekşi-tatlı limon kreması, üzeri yakılmış beze.", img: "p-tart" },
  { cat: "pasta", name: "Kremalı Kekler", desc: "Kutlamalar için tek kişilik süslü kekler.", img: "p-cupcake2", badge: "Parti" },

  { cat: "borek", name: "Tereyağlı Poğaça", desc: "Sabahları fırından sıcak, peynirli ve sade seçenekler.", img: "b-pogaca", badge: "Sabah" },
  { cat: "borek", name: "Su Böreği", desc: "İnce açılmış katlar, bol peynir ve tereyağı.", img: "b-firin" },
  { cat: "borek", name: "Kol Böreği", desc: "Patatesli, ıspanaklı veya kıymalı; çıtır kenarlı.", img: "b-kruvasan" },
  { cat: "borek", name: "Tahıllı Simit ve Ekmek", desc: "Tam tahıllı, susamlı, kahvaltıya eşlik eden lezzetler.", img: "b-ekmek" },

  { cat: "yemek", name: "Günün Çorbası", desc: "Mercimek, ezogelin, yayla... Her gün bir başka çorba.", img: "y-corba" },
  { cat: "yemek", name: "Tereyağlı Pilav", desc: "Tane tane pirinç pilavı, yanında mevsim turşusu.", img: "y-pilav" },
  { cat: "yemek", name: "Izgara Tabağı", desc: "Közlenmiş sebzeler, bulgur pilavı ve yeşillik ile.", img: "y-izgara" },
  { cat: "yemek", name: "Tavuk Dürüm", desc: "Marine tavuk, taze sebze ve özel sos.", img: "y-durum" },
  { cat: "yemek", name: "Tavuk Salatası", desc: "Izgara tavuk, mevsim yeşillikleri ve yumurta.", img: "y-salata", badge: "Hafif" },
  { cat: "yemek", name: "Çoban Salata", desc: "Domates, salatalık, biber, soğan ve zeytinyağı.", img: "y-salata2" },
  { cat: "yemek", name: "Şiş Köfte Tabağı", desc: "Izgara şiş köfte, patates kızartması, közlenmiş domates ve biber, lavaş.", img: "real/sis-kofte", badge: "Yeni" },

  { cat: "kahvalti", name: "Serpme Kahvaltı", desc: "Peynirler, zeytinler, reçeller, bal-kaymak, sıcaklar ve taze sebzelerle dolu sofra.", img: "real/serpme-kahvalti" },
  { cat: "kahvalti", name: "Karpuz ve Nane", desc: "Karpuzun ferahlığı, nanenin dokunuşu. Buz gibi, katmanlı serinletici.", img: "real/karpuz-nane" },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- İşletme bilgilerini sayfaya yerleştir ---------- */
function fillSiteInfo() {
  const telHref = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
  const values = {
    phone: SITE.phone,
    address: SITE.address,
    instagramHandle: SITE.instagramHandle,
  };
  const links = {
    phoneLink: telHref,
    waLink: `https://wa.me/${SITE.whatsapp}`,
    instagramLink: SITE.instagram,
    mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`,
  };

  $$("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key in values) el.textContent = values[key];
    else if (key in links) el.href = links[key];
    else if (key === "mapEmbed") el.src = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=16&output=embed`;
  });

  const today = new Date().getDay();
  $("#hours").innerHTML = !SITE.hours.length
    ? "Güncel saatler için bizi arayın"
    : SITE.hours
    .map((h) => `<div class="${h.d === today ? "is-today" : ""}"><span>${h.day}</span><span>${h.time}</span></div>`)
    .join("");

  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Header ve mobil menü ---------- */
function initHeader() {
  const header = $(".header");
  const burger = $("#burger");
  const nav = $("#nav");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const close = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", close));

  // Görünen bölüme göre menüde aktif bağlantı
  const links = $$('a[href^="#"]:not(.btn)', nav);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((a) => {
    const sec = $(a.getAttribute("href"));
    if (sec) io.observe(sec);
  });
}

/* ---------- Video kontrolü ---------- */
function initVideo() {
  const video = $("#heroVideo");
  const btn = $("#videoToggle");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setPaused = (paused) => {
    btn.classList.toggle("is-paused", paused);
    btn.setAttribute("aria-label", paused ? "Videoyu oynat" : "Videoyu durdur");
  };

  if (reduce) { video.pause(); video.removeAttribute("autoplay"); setPaused(true); }

  btn.addEventListener("click", () => {
    if (video.paused) { video.play(); setPaused(false); }
    else { video.pause(); setPaused(true); }
  });

  // Hikaye bölümündeki video, ekrana yaklaşınca yüklenir
  const lazy = $("[data-lazy-video]");
  if (lazy && !reduce) {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      $$("source", lazy).forEach((s) => (s.src = s.dataset.src));
      lazy.load();
      lazy.play().catch(() => {});
      io.disconnect();
    }, { rootMargin: "200px" });
    io.observe(lazy);
  }
}

/* ---------- Doğum günü listesi ---------- */
function initRail() {
  const rail = $("#rail");
  $$("[data-rail]").forEach((b) =>
    b.addEventListener("click", () => {
      const card = rail.firstElementChild;
      const step = card.getBoundingClientRect().width + 24;
      rail.scrollBy({ left: step * Number(b.dataset.rail), behavior: "smooth" });
    })
  );

  // "Bu tasarımı iste" butonu sayfadaki formda modeli seçer
  $$("[data-pick]").forEach((b) =>
    b.addEventListener("click", () => {
      const model = $("#siparis .js-model");
      model.value = b.dataset.pick;
      model.dispatchEvent(new Event("change", { bubbles: true }));
      $("#siparis").scrollIntoView({ behavior: "smooth" });
    })
  );
}

/* ---------- Menü ---------- */
function renderMenu(filter = "all") {
  const grid = $("#menuGrid");
  grid.innerHTML = MENU.filter((m) => filter === "all" || m.cat === filter)
    .map((m, i) => `
      <article class="item" style="animation-delay:${Math.min(i, 8) * 40}ms">
        <div class="item__img">
          <img src="assets/${m.img.includes("/") ? m.img : "img/" + m.img}.jpg" alt="${m.name}" loading="lazy">
          ${m.badge ? `<span class="item__badge">${m.badge}</span>` : ""}
        </div>
        <div class="item__body">
          <div class="item__row">
            <h3>${m.name}</h3>
            <span class="item__price">${m.price || ""}</span>
          </div>
          <p>${m.desc}</p>
        </div>
      </article>`)
    .join("");
}

function initMenu() {
  const tabs = $$(".tab");
  const select = (filter) => {
    tabs.forEach((t) => {
      const on = t.dataset.filter === filter;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    renderMenu(filter);
  };
  tabs.forEach((t) => t.addEventListener("click", () => select(t.dataset.filter)));
  // Kategori kartından gelindiyse ilgili sekmeyi aç
  $$("[data-jump]").forEach((a) => a.addEventListener("click", () => select(a.dataset.jump)));
  renderMenu();
}

/* ---------- Sipariş formu (sayfadaki ve penceredeki için ortak) ---------- */
function initOrderForm(form) {
  const date = $(".js-date", form);
  const err = $(".js-error", form);

  const d = new Date();
  d.setDate(d.getDate() + 1);
  date.min = d.toISOString().slice(0, 10);

  const fmtDate = (v) => {
    if (!v) return "-";
    const [y, m, day] = v.split("-");
    return new Date(y, m - 1, day).toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long" });
  };

  const data = () => {
    const f = new FormData(form);
    return {
      Model: f.get("model"),
      Boyut: f.get("size"),
      "İç malzeme": f.get("flavor"),
      Yazı: f.get("text")?.trim() || "-",
      Not: f.get("note")?.trim() || "-",
      Tarih: fmtDate(f.get("date")),
      Teslim: f.get("delivery"),
      Ad: f.get("name")?.trim() || "-",
      Telefon: f.get("phone")?.trim() || "-",
    };
  };

  const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const update = () => {
    const o = data();
    $(".js-summary", form).innerHTML =["Model", "Boyut", "İç malzeme", "Yazı", "Tarih", "Teslim"]
      .map((k) => `<dt>${k}</dt><dd>${escape(o[k])}</dd>`)
      .join("");
  };

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  update();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const required = $$("[required]", form);
    let ok = true;
    required.forEach((el) => {
      const bad = !el.value.trim();
      el.classList.toggle("is-invalid", bad);
      if (bad) ok = false;
    });
    err.hidden = ok;
    if (!ok) { required.find((el) => !el.value.trim()).focus(); return; }

    const o = data();
    const lines = ["Merhaba, pasta siparişi vermek istiyorum.", ""];
    Object.entries(o).forEach(([k, v]) => { if (v !== "-") lines.push(`*${k}:* ${v}`); });
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

/* ---------- Sipariş penceresi ---------- */
function initOrderModal() {
  const modal = $("#orderModal");
  const source = $("#siparis [data-order-form]");

  // Sayfadaki formun kopyası pencereye konur; iki form birbirinden bağımsız çalışır
  const form = source.cloneNode(true);
  $(".modal__body", modal).append(form);
  initOrderForm(form);
  initOrderForm(source);

  const close = () => modal.close();
  $$("[data-open-order]").forEach((a) =>
    a.addEventListener("click", (e) => {
      if (typeof modal.showModal !== "function") return; // eski tarayıcıda bölüme kaydırır
      e.preventDefault();
      $("#nav").classList.remove("is-open");
      $("#burger").setAttribute("aria-expanded", "false");
      modal.showModal();
      document.body.style.overflow = "hidden";
    })
  );
  $(".modal__close", modal).addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  modal.addEventListener("close", () => { document.body.style.overflow = ""; });
}

/* ---------- Gerçek videolar: ekranda görünce oynar ---------- */
function initReels() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videos = $$(".reel video");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) {
        if (!v.src) v.src = v.dataset.src;
        if (!reduce) v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.4 });

  videos.forEach((v) => {
    io.observe(v);
    // Dokununca durdur / oynat
    v.parentElement.addEventListener("click", () => {
      if (!v.src) v.src = v.dataset.src;
      v.paused ? v.play() : v.pause();
    });
  });
}

/* ---------- Galeri büyütme ---------- */
function initLightbox() {
  const box = $("#lightbox");
  const img = $("img", box);
  const items = $$("#gallery .g img");
  let idx = 0;

  const show = (i) => {
    idx = (i + items.length) % items.length;
    img.src = items[idx].src;
    img.alt = items[idx].alt;
  };
  const open = (i) => { show(i); box.hidden = false; document.body.style.overflow = "hidden"; $(".lightbox__close").focus(); };
  const close = () => { box.hidden = true; document.body.style.overflow = ""; items[idx].parentElement.focus(); };

  items.forEach((el, i) => el.parentElement.addEventListener("click", () => open(i)));
  $(".lightbox__close").addEventListener("click", close);
  $(".lightbox__prev").addEventListener("click", () => show(idx - 1));
  $(".lightbox__next").addEventListener("click", () => show(idx + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
}

/* ---------- Kaydırınca beliren öğeler ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
    io.observe(el);
  });
}

fillSiteInfo();
initHeader();
initVideo();
initRail();
initMenu();
initOrderModal();
initReels();
initLightbox();
initReveal();
