/* =============================================
   DANIEL ESSHAK — PORTFOLIO v5.1
   script.js — Performance + Scroll Hint
   ============================================= */
'use strict';

const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

/* ══════════════════════════════════════════════
   TRANSLATIONS  (EN / AR)
══════════════════════════════════════════════ */
const LANG = {
  en: {
    'nav.about':'About','nav.qena':'Qena','nav.story':'Story',
    'nav.projects':'Projects','nav.music':'Music','nav.experience':'Experience',
    'nav.honors':'Honors','nav.contact':'Contact','nav.translate':'عربي',
    'hero.tagline.0':'Engineer','hero.tagline.1':'Musician','hero.tagline.2':'Builder',
    'hero.sub':'Computer Science & AI · 13 Years of Music · Qena, Egypt',
    'hero.cta.work':'View My Work','hero.cta.contact':'Get in Touch',
    'about.manifesto':'I\'m a technologist and musician who cares about <em>making tools that give people back their time</em>, connecting cultures through sound, and architecting paths forward when resources are lean.',
    'about.value.0':'RIGOROUS','about.value.1':'RESOURCEFUL','about.value.2':'RHYTHMIC','about.value.3':'RESILIENT',
    'about.stat.gpa':'GPA','about.stat.music':'Music','about.stat.code':'Lines of Code','about.stat.lives':'Lives Reached',
    'about.tw.0':'Growing up in Qena, Upper Egypt, I built my path with two classmates, one laptop, and lessons downloaded overnight through a phone hotspot. Limitations became my creative curriculum.',
    'about.tw.1':'My parents: a veterinarian with 21 years of government service and a pulmonologist who built her own clinic from scratch. They showed me that leadership is not about volume. It\'s about showing up, quietly, at the exact second someone needs you.',
    'about.tw.2':'Today I write code, play drums for thousands, and lead teams through crises. All from the same philosophy: "I don\'t need the solo. I want the song to work."',
    'story.label':'The Architecture of Resilience',
    'story.title':'From Qena<br/>to the World',
    'story.quote':'"Resilience is not merely surviving; it is architecting a path forward when resources are lean."',
    'story.tl.0.title':'No local tech programs',
    'story.tl.0.desc':'Formed a coding group with two classmates and one shared laptop. Downloaded lessons overnight via phone hotspot.',
    'story.tl.1.title':'Lockdown → 600+ hours of learning',
    'story.tl.1.desc':'5–6 hours daily self-study. 15 online courses. 70+ coding challenges. 1,000+ hours on piano.',
    'story.tl.2.title':'Built platforms from scratch',
    'story.tl.2.desc':'No marketing team, no studio, no incubator: just discipline, a laptop, and a vision.',
    'story.tl.3.title':'12,000+ handwritten exercises',
    'story.tl.3.desc':'Across five Cambridge subjects, averaging 96% without a tutor.',
    'projects.label':'Technical Stewardship','projects.title':'Selected Work','projects.sub':'Things that shouldn\'t work but do.',
    'projects.medicyle.role':'Co-Founder & Lead Developer',
    'projects.medicyle.desc':'AI-powered medication redistribution platform. Simplified pharmacist handoffs. Reduced waste by 30%.',
    'projects.metric.lines':'Lines of code','projects.metric.users':'Users tested','projects.metric.waste':'Waste cut',
    'projects.zoom.name':'Zoom Attendance Analyzer','projects.zoom.role':'Developer: Personal Project',
    'projects.zoom.desc':'Scrapes attendance, flags absences, resolves duplicates. Built for a teacher drowning in logs.',
    'projects.zoom.metric':'Hours saved/year','projects.sunbright.name':'Sun Bright Marketplace',
    'projects.sunbright.role':'Full Stack Developer',
    'projects.sunbright.desc':'Digital marketplace for Upper Egypt farmers. 60+ users before any marketing.',
    'projects.tedx.role':'Head IT Committee',
    'projects.tedx.desc':'Led 16-member IT team. 2 websites, 2,000+ registrations. 70% efficiency gain.',
    'projects.gouda.name':'Dr. Gouda\'s Math Portal','projects.gouda.role':'Designer & Developer',
    'projects.gouda.desc':'Educational portal for a mathematics teacher: clean, accessible, beautiful.',
    'music.label':'The Rhythm of Discipline','music.title':'13 Years of Rhythm',
    'music.quote':'"The drummer is the unseen leader. If I lose focus, the entire performance collapses."',
    'music.piano.title':'Piano','music.drums.title':'Drums','music.prod.title':'Production',
    'music.piano.f0':'Self-taught via traditional Arabic hymnody','music.piano.f1':'1,000+ total practice hours',
    'music.piano.f2':'200+ pieces mastered','music.piano.f3':'Invited to perform at the Opera House',
    'music.piano.f4':'Mentored 10 beginners','music.drums.f0':'500+ services across 30+ cities',
    'music.drums.f1':'12 hymns produced','music.drums.f2':'20,000+ keynote audience',
    'music.drums.f3':'First instrument: drum pad at age 9','music.prod.f1':'Multi-track recording & mixing',
    'music.prod.f2':'Digital mastering','music.m0':'SoundCloud Streams','music.m1':'Total Audience',
    'music.m2':'Hymns Produced','music.m3':'Live Services',
    'exp.label':'Navigational Leadership','exp.title':'Experience',
    'exp.0.role':'Co-Founder & Lead Developer','exp.0.desc':'Building AI that redistributes hope.',
    'exp.1.role':'Head IT Committee','exp.1.desc':'Managing the digital heartbeat of ideas.',
    'exp.2.role':'Full Stack Developer','exp.2.desc':'3,000+ lines, 60+ users, 40% trade boost.',
    'exp.3.role':'Worship Musician','exp.3.desc':'500+ services, 30+ cities.',
    'exp.4.role':'Math Club Leader','exp.4.desc':'Led 20+ peers, improved scores 20%.',
    'exp.5.role':'Community Volunteer','exp.5.desc':'70+ homeless fed, 100+ elderly supported.',
    'honors.label':'Recognition','honors.title':'Honors & Awards',
    'testi.label':'Voices of Trust','testi.title':'What They Say',
    'testi.q0':'Few students manage to leave such a consistent impression, but Dani has always stood out for his curiosity, determination, and resilience.',
    'testi.n0':'School Principal',
    'testi.q1':'Daniel has consistently redefined student leadership within our community through a unique blend of technical expertise, grit, and remarkable empathy.',
    'testi.q2':'His ability to bridge the age gap, maintaining technical authority among older peers, speaks to emotional intelligence rarely seen in high school.',
    'testi.q3':'Dani does not boast about his achievements; he lets his actions speak. This quiet confidence will serve him well.',
    'edu.label':'Credentials','edu.title':'Education',
    'edu.grad':'Expected Graduation: June 2026 (Early, Grade 11)',
    'edu.lang0':'Arabic: Native','edu.lang1':'English: C1','edu.lang2':'French: Conv.',
    'edu.applying':'Applying Fall 2026',
    'edu.s0':'Mathematics','edu.s1':'Biology','edu.s2':'Chemistry','edu.s3':'Physics','edu.s4':'Arabic',
    'contact.label':'Let\'s Connect','contact.title':'The Song Needs<br/>More Voices',
    'contact.sub':'Seeking Fall 2026 university opportunities. Open to research collaborations, mentorship, and conversations about technology and music.',
    'contact.email.label':'Email','contact.phone.label':'Phone / WhatsApp',
    'contact.location.label':'Location','contact.location':'Qena, Egypt',
    'form.name':'Your Name','form.email':'Your Email','form.subject':'Subject',
    'form.message':'Message','form.submit':'Send Message','form.sending':'Sending…',
    'form.success':'Message sent! I\'ll get back to you soon.',
    'form.error':'Something went wrong. Email me directly:',
    'qena.label':'Upper Egypt','qena.title':'قنا / Qena',
    'qena.desc':'A governorate of 3.3 million on the Nile\'s west bank. 700 km south of Cairo. Home to the Temple of Hathor, the fertile Nile valley, and the quiet determination that shaped Daniel\'s path.',
    'qena.quote':'"Every limitation Qena gave me, I turned into an architecture."',
    'qena.fact.population':'Population','qena.fact.cairo':'From Cairo',
    'qena.fact.history':'Years of History','qena.fact.builder':'Young Architect',
    'qena.note':'Where the Nile bends south, and a builder was born.',
    'footer.tagline':'Engineer. Musician. Builder.',
    'footer.seek':'Currently seeking Fall 2026 university opportunities',
    'footer.quote':'"The rhythm will find you."',

    // Scroll hints per section
    '_hint.hero':         'Discover his story ↓',
    '_hint.about':        'See where it all began ↓',
    '_hint.qena':         'Explore his projects ↓',
    '_hint.story':        'Hear the music ↓',
    '_hint.projects':     'Dive into 13 years of rhythm ↓',
    '_hint.music':        'View his experience ↓',
    '_hint.experience':   'See his achievements ↓',
    '_hint.honors':       'Read what they say ↓',
    '_hint.testimonials': 'Check his education ↓',
    '_hint.education':    'Contact Daniel, build together ↓',
  },

  ar: {
    'nav.about':'عن دانيال','nav.qena':'قنا','nav.story':'القصة',
    'nav.projects':'المشاريع','nav.music':'الموسيقى','nav.experience':'الخبرات',
    'nav.honors':'الجوائز','nav.contact':'تواصل','nav.translate':'English',
    'hero.tagline.0':'مهندس','hero.tagline.1':'موسيقي','hero.tagline.2':'بانٍ',
    'hero.sub':'علوم الحاسوب والذكاء الاصطناعي · ١٣ عاماً من الموسيقى · قنا، مصر',
    'hero.cta.work':'أعمالي','hero.cta.contact':'تواصل معي',
    'about.manifesto':'أنا مهندس برمجيات وموسيقي مهتم بـ<em>بناء أدوات تُعيد للناس وقتهم</em>، أربط الثقافات من خلال الصوت، وأرسم طرقاً للأمام حين تشحّ الموارد.',
    'about.value.0':'دقيق','about.value.1':'مبدع','about.value.2':'إيقاعي','about.value.3':'صامد',
    'about.stat.gpa':'المعدل','about.stat.music':'موسيقى','about.stat.code':'سطور كود','about.stat.lives':'حياة أثّرت',
    'about.tw.0':'نشأتُ في قنا بصعيد مصر، وبنيتُ مساري مع زميلَين، وحاسوب واحد، ودروس تُحمَّل ليلاً عبر هاتف. القيود صارت منهجي الإبداعي.',
    'about.tw.1':'والداي: طبيب بيطري بـ٢١ عاماً في الخدمة الحكومية، وطبيبة رئة بنت عيادتها من الصثفر. علّماني أن القيادة ليست في رفع الصوت، بل في الحضور الهادئ في اللحظة المناسبة.',
    'about.tw.2':'اليوم أكتب الكود، وأعزف الطبول لآلاف، وأقود فِرقاً في الأزمات. كل ذلك من فلسفة واحدة: "لا أريد الجزء المنفرد. أريد أن تنجح الأغنية."',
    'story.label':'هندسة الصمود','story.title':'من قنا<br/>إلى العالم',
    'story.quote':'"الصمود ليس مجرد البقاء؛ بل هو رسم طريق للأمام حين تشحّ الموارد."',
    'story.tl.0.title':'لا برامج تقنية محلية',
    'story.tl.0.desc':'أسّست مجموعة برمجية مع زميلَين وحاسوب واحد، نُحمِّل الدروس ليلاً عبر هاتف.',
    'story.tl.1.title':'الإغلاق ← أكثر من ٦٠٠ ساعة تعلم',
    'story.tl.1.desc':'٥-٦ ساعات دراسة ذاتية يومياً. ١٥ دورة إلكترونية. أكثر من ١٠٠٠ ساعة على البيانو.',
    'story.tl.2.title':'بناء منصات من الصفر',
    'story.tl.2.desc':'بلا فريق تسويق ولا استوديو ولا حاضنة: فقط انضباط وحاسوب ورؤية.',
    'story.tl.3.title':'أكثر من ١٢٠٠٠ تمرين بخط اليد',
    'story.tl.3.desc':'في خمس مواد كامبريدج بمعدل ٩٦٪ بلا مدرس خاص.',
    'projects.label':'الإشراف التقني','projects.title':'أبرز الأعمال','projects.sub':'أشياء لم تُبنَ لتنجح — لكنها تنجح.',
    'projects.medicyle.role':'مؤسس مشارك ومطوّر رئيسي',
    'projects.medicyle.desc':'منصة إعادة توزيع الدواء بالذكاء الاصطناعي. تُبسّط تسليم الصيدليات وتُقلل الهدر بنسبة ٣٠٪.',
    'projects.metric.lines':'سطر كود','projects.metric.users':'مستخدم جرّبه','projects.metric.waste':'تقليل الهدر',
    'projects.zoom.name':'محلّل حضور زووم','projects.zoom.role':'مطوّر: مشروع شخصي',
    'projects.zoom.desc':'يسحب بيانات الحضور ويُبلّغ عن الغياب. بُني لمعلم غارق في السجلات.',
    'projects.zoom.metric':'ساعة مُوفَّرة/سنة','projects.sunbright.name':'سوق صن برايت',
    'projects.sunbright.role':'مطوّر متكامل',
    'projects.sunbright.desc':'سوق رقمي يربط مزارعي صعيد مصر. أكثر من ٦٠ مستخدماً قبل أي تسويق.',
    'projects.tedx.role':'رئيس لجنة تقنية المعلومات',
    'projects.tedx.desc':'قيادة فريق IT من ١٦ عضواً. موقعان، أكثر من ٢٠٠٠ تسجيل.',
    'projects.gouda.name':'بوابة الرياضيات','projects.gouda.role':'مصمم ومطوّر',
    'projects.gouda.desc':'بوابة تعليمية لمدرس رياضيات: نظيفة، سهلة الوصول، جميلة التصميم.',
    'music.label':'إيقاع الانضباط','music.title':'١٣ عاماً من الإيقاع',
    'music.quote':'"الطبّال هو القائد الخفيّ. إن فقدتُ تركيزي، انهار العرض كلّه."',
    'music.piano.title':'بيانو','music.drums.title':'طبول','music.prod.title':'إنتاج موسيقي',
    'music.piano.f0':'تعلّمتُ ذاتياً عبر التراتيل العربية','music.piano.f1':'أكثر من ١٠٠٠ ساعة تدريب',
    'music.piano.f2':'أكثر من ٢٠٠ مقطوعة','music.piano.f3':'مدعو للأداء في دار الأوبرا',
    'music.piano.f4':'أشرفتُ على تعليم ١٠ مبتدئين','music.drums.f0':'أكثر من ٥٠٠ خدمة في ٣٠+ مدينة',
    'music.drums.f1':'١٢ ترنيمة مُنتَجة','music.drums.f2':'جمهور يتجاوز ٢٠ ألف',
    'music.drums.f3':'أول آلة: طبل صغير في سن التاسعة','music.prod.f1':'تسجيل وخلط متعدد المسارات',
    'music.prod.f2':'إتقان رقمي وتوليف صوتي','music.m0':'استماعة SoundCloud','music.m1':'إجمالي الجمهور',
    'music.m2':'ترنيمة مُنتَجة','music.m3':'خدمة مباشرة',
    'exp.label':'القيادة والخبرات','exp.title':'الخبرات',
    'exp.0.role':'مؤسس مشارك ومطوّر رئيسي','exp.0.desc':'بناء ذكاء اصطناعي يُعيد توزيع الأمل.',
    'exp.1.role':'رئيس لجنة تقنية المعلومات','exp.1.desc':'إدارة النبضة الرقمية للأفكار.',
    'exp.2.role':'مطوّر متكامل','exp.2.desc':'٣٠٠٠+ سطر، ٦٠+ مستخدم، ارتفاع ٤٠٪.',
    'exp.3.role':'موسيقي عبادة','exp.3.desc':'٥٠٠+ خدمة، ٣٠+ مدينة.',
    'exp.4.role':'قائد نادي الرياضيات','exp.4.desc':'قيادة ٢٠+ زميل، تحسين ٢٠٪.',
    'exp.5.role':'متطوع مجتمعي','exp.5.desc':'٧٠+ شخص تمّ إطعامه، ١٠٠+ مسنّ.',
    'honors.label':'التكريمات','honors.title':'الجوائز والتكريمات',
    'testi.label':'أصوات الثقة','testi.title':'ماذا يقولون',
    'testi.q0':'قلّة من الطلاب يتركون انطباعاً متسقاً عبر السنين، لكن داني تميّز دائماً بفضوله وعزيمته وصموده.',
    'testi.n0':'مدير المدرسة',
    'testi.q1':'أعاد دانيال تعريف القيادة الطلابية من خلال مزيج فريد من الخبرة التقنية والقوة والتعاطف.',
    'testi.q2':'قدرته على ردم الهوّة العمرية تدلّ على ذكاء عاطفي ونضج نادرَين في طالب بالمرحلة الثانوية.',
    'testi.q3':'لا يتباهى داني بإنجازاته؛ يدع أفعاله تتكلم. هذه الثقة الهادئة ستخدمه طويلاً.',
    'edu.label':'الشهادات','edu.title':'التعليم',
    'edu.grad':'التخرج المتوقع: يونيو ٢٠٢٦ (مبكر، الصف الحادي عشر)',
    'edu.lang0':'العربية: اللغة الأم','edu.lang1':'الإنجليزية: مستوى C1','edu.lang2':'الفرنسية: محادثة',
    'edu.applying':'التقديم خريف ٢٠٢٦',
    'edu.s0':'الرياضيات','edu.s1':'الأحياء','edu.s2':'الكيمياء','edu.s3':'الفيزياء','edu.s4':'اللغة العربية',
    'contact.label':'تواصل معي','contact.title':'الأغنية تحتاج<br/>مزيداً من الأصوات',
    'contact.sub':'أبحث عن فرص جامعية لخريف ٢٠٢٦. منفتح على التعاون البحثي والإرشاد والحوارات حول التكنولوجيا والموسيقى.',
    'contact.email.label':'البريد الإلكتروني','contact.phone.label':'الهاتف / واتساب',
    'contact.location.label':'الموقع','contact.location':'قنا، مصر',
    'form.name':'اسمك','form.email':'بريدك الإلكتروني','form.subject':'الموضوع',
    'form.message':'الرسالة','form.submit':'إرسال الرسالة','form.sending':'جاري الإرسال…',
    'form.success':'تم الإرسال! سأردّ عليك قريباً.',
    'form.error':'حدث خطأ. راسلني مباشرة على:',
    'qena.label':'صعيد مصر','qena.title':'قنا',
    'qena.desc':'محافظة يسكنها ٣.٣ مليون نسمة على الضفة الغربية للنيل. تبعد ٧٠٠ كم جنوب القاهرة. موطن معبد الربة حتحور ووادي النيل الخصيب.',
    'qena.quote':'"كل قيد أعطتني إيّاه قنا، حوّلتُه إلى هندسة."',
    'qena.fact.population':'النفوس','qena.fact.cairo':'من القاهرة',
    'qena.fact.history':'عام من التاريخ','qena.fact.builder':'بانٍ شاب',
    'qena.note':'حيث ينحني النيل جنوباً، ويولد البانون.',
    'footer.tagline':'مهندس. موسيقي. بانٍ.',
    'footer.seek':'أبحث عن فرص جامعية لخريف ٢٠٢٦',
    'footer.quote':'"الإيقاع سيجدك."',
 
    '_hint.hero':         'اكتشف قصته ↓',
    '_hint.about':        'شاهد من أين بدأ ↓',
    '_hint.qena':         'استعرض مشاريعه ↓',
    '_hint.story':        'اسمع الموسيقى ↓',
    '_hint.projects':     '١٣ عاماً من الإيقاع ↓',
    '_hint.music':        'شاهد خبراته ↓',
    '_hint.experience':   'اقرأ إنجازاته ↓',
    '_hint.honors':       'ماذا يقولون ↓',
    '_hint.testimonials': 'تعليمه ↓',
    '_hint.education':    'تواصل مع دانيال، ابنوا معاً ↓',
  }
};

let currentLang = 'en';

/* ── Apply translation ────────────────────── */
function applyTranslation(lang) {
  const dict = LANG[lang];
  if (!dict) return;
  currentLang = lang;

  $$('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  $$('[data-i18n-html]').forEach(el => {
    const v = dict[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  $$('[data-i18n-tw]').forEach(el => {
    const v = dict[el.dataset.i18nTw];
    if (v !== undefined) {
      el.dataset.tw = v;
      if (el.querySelector('.tw-char')) {
        el.innerHTML = v; // instant show if already animated
      }
    }
  });

  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  const lbl = $('#translateLabel');
  if (lbl && dict['nav.translate']) lbl.textContent = dict['nav.translate'];

  // Reset typewriter if needed
  const wrap = $('#aboutTypewriter');
  if (wrap && wrap.dataset.twDone === 'true') {
    wrap.dataset.twDone = 'false';
    $$('.tw-para', wrap).forEach(p => {
      p.innerHTML = '';
      [...(p.dataset.tw || '')].forEach(ch => {
        const s = document.createElement('span');
        s.className = 'tw-char'; s.textContent = ch;
        p.appendChild(s);
      });
    });
    $$('.tw-char', wrap).forEach(c => { c.style.opacity = '1'; c.style.animationPlayState = 'running'; });
  }
}

/* ══════════════════════════════════════════════
   1. LOADER + CURTAINS
══════════════════════════════════════════════ */
(function initLoader() {
  const loader     = $('#loader');
  const bar        = $('#loaderBar');
  const arabicWrap = $('#loaderArabic');
  const arabicEl   = $('#loaderArabicText');
  const ldrCursor  = $('#loaderCursor');
  const curtainL   = $('#curtainLeft');
  const curtainR   = $('#curtainRight');

  document.body.style.overflow = 'hidden';
  setTimeout(() => { if (bar) bar.style.width = '100%'; }, 120);

  let typingDone = false, siteReady = false;

  setTimeout(() => {
    if (arabicWrap) arabicWrap.classList.add('visible');
    const ARABIC = 'من قنا إلى العالم';
    let i = 0;
    if (arabicEl) arabicEl.textContent = '';
    const iv = setInterval(() => {
      if (i >= ARABIC.length) { clearInterval(iv); typingDone = true; tryHide(); return; }
      if (arabicEl) arabicEl.textContent += ARABIC[i++];
    }, 78);
  }, 1000);

  const t0 = Date.now();
  function onLoad() {
    const extra = Math.max(0, 2400 - (Date.now() - t0));
    setTimeout(() => { siteReady = true; tryHide(); }, extra);
  }
  if (document.readyState === 'complete') onLoad();
  else { window.addEventListener('load', onLoad); setTimeout(onLoad, 5000); }

  function tryHide() {
    if (!siteReady || !typingDone) return;
    setTimeout(() => { if (ldrCursor) { ldrCursor.style.animation = 'none'; ldrCursor.style.opacity = '0'; } }, 350);
    setTimeout(() => {
      if (loader) loader.classList.add('hidden');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (curtainL) curtainL.classList.add('open');
        if (curtainR) curtainR.classList.add('open');
        setTimeout(() => { curtainL && curtainL.remove(); curtainR && curtainR.remove(); }, 1500);
        onSiteReady();
      }, 140);
    }, 780);
  }
})();

/* ══════════════════════════════════════════════
   5. LANGUAGE DROPDOWN
══════════════════════════════════════════════ */
(function initTranslate() {
  const dropdown    = $('#langDropdown');
  const trigger     = $('#langTrigger');
  const menu        = $('#langMenu');
  const triggerLbl  = $('#langTriggerLabel');
  if (!dropdown || !trigger || !menu) return;

  function openMenu()  { menu.classList.add('open');  trigger.setAttribute('aria-expanded','true'); }
  function closeMenu() { menu.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); }
  function toggleMenu(){ menu.classList.contains('open') ? closeMenu() : openMenu(); }

  trigger.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', () => closeMenu());
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  $$('.lang-option', menu).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      applyTranslation(lang);
      updateScrollHint(true);
      // Update active class
      $$('.lang-option', menu).forEach(b => b.classList.remove('lang-option--active'));
      btn.classList.add('lang-option--active');
      // Update trigger label
      if (triggerLbl) triggerLbl.textContent = lang === 'ar' ? 'ع' : 'EN';
      closeMenu();
    });
  });
})();

/* ══════════════════════════════════════════════
   2. CURSOR  (disabled on touch devices)
══════════════════════════════════════════════ */
(function initCursor() {
  if (isTouch()) return;
  const cursor = $('#cursor');
  const follow = $('#cursorFollower');
  if (!cursor || !follow) return;

  let mx = -200, my = -200, fx = -200, fy = -200, af = null;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    // Move dot immediately via transform (GPU only, no layout)
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  }, { passive: true });

  function loop() {
    fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
    follow.style.left = fx + 'px'; follow.style.top = fy + 'px';
    af = requestAnimationFrame(loop);
  }
  loop();

  const HOVER = 'a,button,.project-card,.music-card,.honor-card,.stat,.value-item,.testi-btn,.qf-item';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER)) { cursor.classList.add('hovered'); follow.classList.add('hovered'); }
  }, { passive: true });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER)) { cursor.classList.remove('hovered'); follow.classList.remove('hovered'); }
  }, { passive: true });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; follow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; follow.style.opacity = ''; });
})();

/* ══════════════════════════════════════════════
   3. NAVIGATION
══════════════════════════════════════════════ */
(function initNav() {
  const nav    = $('#mainNav');
  const toggle = $('#navToggle');
  const links  = $('#navLinks');

  if (!nav) return;

  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    lastY = y;
  }, { passive: true });

  function toggleMenu(force) {
    const open = force !== undefined ? force : !links.classList.contains('open');
    links.classList.toggle('open', open);
    toggle && toggle.classList.toggle('open', open);
    toggle && toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    // Prevent body scroll while mobile menu is open
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle && toggle.addEventListener('click', () => toggleMenu());
  $$('.nav-link').forEach(l => l.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });

  // Active section highlight
  $$('section[id]').forEach(s => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        $$('.nav-link').forEach(l => l.classList.remove('active'));
        const a = $(`.nav-link[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      });
    }, { rootMargin: '-30% 0px -60% 0px' }).observe(s);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) toggleMenu(false);
  }, { passive: true });
})();

/* ══════════════════════════════════════════════
   4. THEME
══════════════════════════════════════════════ */
(function initTheme() {
  const btn   = $('#themeToggle');
  const label = $('#themeModeLabel');
  function update() {
    const dark = !document.body.classList.contains('light-mode');
    if (label) label.textContent = dark ? 'DARK' : 'LIGHT';
  }
  if (localStorage.getItem('de-theme') === 'light') document.body.classList.add('light-mode');
  update();
  btn && btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('de-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    update();
  });
})();



/* ══════════════════════════════════════════════
   6. SCROLL HINT
══════════════════════════════════════════════ */
const SECTION_ORDER = ['hero','about','qena','story','projects','music','experience','honors','testimonials','education'];

let scrollIdleTimer = null;
let currentSectionId = 'hero';

function updateScrollHint(immediate) {
  const dict = LANG[currentLang] || LANG.en;
  const key  = `_hint.${currentSectionId}`;
  const hintEl = $('#scrollHintText');
  if (hintEl && dict[key]) hintEl.textContent = dict[key];
}

function showHint() {
  // Don't show if near bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) return;
  updateScrollHint();
  const hint = $('#scrollHint');
  if (hint) hint.classList.add('visible');
}

function hideHint() {
  const hint = $('#scrollHint');
  if (hint) hint.classList.remove('visible');
}

(function initScrollHint() {
  // Track which section is in view
  SECTION_ORDER.forEach(id => {
    const el = $(`#${id}`);
    if (!el) return;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) currentSectionId = id;
      });
    }, { threshold: 0.3 }).observe(el);
  });

  window.addEventListener('scroll', () => {
    hideHint();
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(showHint, 3800);
  }, { passive: true });

  // Start timer on load
  scrollIdleTimer = setTimeout(showHint, 4500);
})();

/* ══════════════════════════════════════════════
   7. SMOOTH SCROLL
══════════════════════════════════════════════ */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = $(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
});

/* ══════════════════════════════════════════════
   8. PARTICLES  (reduced, lazy-init)
══════════════════════════════════════════════ */
(function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas) return;

  // Skip particles on low-end / mobile
  const lowEnd = isTouch() || navigator.hardwareConcurrency <= 2;
  if (lowEnd) { canvas.style.display = 'none'; return; }

  const ctx = canvas.getContext('2d', { alpha: true });
  let W = 0, H = 0;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  }, { passive: true });

  class Star {
    constructor() { this.reset(true); }
    reset(rand) {
      this.x = Math.random() * W; this.y = rand ? Math.random() * H : H + 4;
      this.r = Math.random() * 1.0 + 0.2;
      this.vx = (Math.random() - 0.5) * 0.12; this.vy = -(Math.random() * 0.15 + 0.03);
      this.life = 0; this.maxLife = Math.random() * 220 + 120;
      this.alpha = Math.random() * 0.4 + 0.06;
    }
    tick() { this.x += this.vx; this.y += this.vy; this.life++; if (this.life > this.maxLife) this.reset(); }
    draw() {
      const a = this.alpha * Math.sin((this.life / this.maxLife) * Math.PI);
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${a.toFixed(2)})`; ctx.fill();
    }
  }

  const COUNT = 42;
  const stars = Array.from({ length: COUNT }, () => new Star());
  stars.forEach(s => { s.life = Math.floor(Math.random() * s.maxLife); });

  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

  (function loop() {
    if (visible) { ctx.clearRect(0, 0, W, H); stars.forEach(s => { s.tick(); s.draw(); }); }
    requestAnimationFrame(loop);
  })();
})();

/* ══════════════════════════════════════════════
   FORCE REVEAL — elements already in viewport
══════════════════════════════════════════════ */
function forceRevealVisible() {
  const vh = window.innerHeight;
  $$('.section-label,.section-title,.section-sub').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add('vis');
  });
  $$('[data-scroll-reveal]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add('visible');
  });
  $$('.contact-title,.contact-sub,.music-hero-quote,.qena-eyebrow,.qena-title,.qena-desc,.qena-quote,.timeline-item').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) {
      el.classList.add('vis','visible');
      el.style.opacity = '1'; el.style.transform = 'none';
    }
  });
}

/* ══════════════════════════════════════════════
   9. SECTION HEADER REVEALS
══════════════════════════════════════════════ */
(function setupHeaderReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('vis'); io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -30px 0px', threshold: 0.08 });

  $$('.section-label,.section-title,.section-sub').forEach(el => io.observe(el));

  const io2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('vis');
      e.target.style.opacity = '1'; e.target.style.transform = 'none';
      io2.unobserve(e.target);
    });
  }, { threshold: 0.1 });

  $$('.contact-title,.contact-sub,.music-hero-quote,.qena-eyebrow,.qena-title,.qena-desc,.qena-quote').forEach(el => {
    el.style.cssText += 'opacity:0;transition:opacity .5s cubic-bezier(0.22,1,0.36,1) .05s;';
    io2.observe(el);
  });
})();

/* ══════════════════════════════════════════════
   10. GENERIC SCROLL REVEAL
══════════════════════════════════════════════ */
(function setupScrollReveal() {
  const parentMap = new Map();
  $$('[data-scroll-reveal]').forEach(el => {
    const k = el.parentElement;
    if (!parentMap.has(k)) parentMap.set(k, []);
    parentMap.get(k).push(el);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = parentMap.get(el.parentElement) || [el];
      setTimeout(() => el.classList.add('visible'), siblings.indexOf(el) * 70);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -25px 0px', threshold: 0.04 });

  $$('[data-scroll-reveal]').forEach(el => io.observe(el));
})();

/* ══════════════════════════════════════════════
   11. ABOUT MANIFESTO
══════════════════════════════════════════════ */
(function setupManifesto() {
  const el = $('.about-manifesto');
  if (!el) return;
  el.style.cssText += 'opacity:0;transform:translate3d(0,18px,0);transition:opacity .7s cubic-bezier(0.22,1,0.36,1),transform .7s cubic-bezier(0.22,1,0.36,1);';
  new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    el.style.opacity = '1'; el.style.transform = 'none';
  }, { threshold: 0.12 }).observe(el);
})();

/* ══════════════════════════════════════════════
   12. VALUE HOVER
══════════════════════════════════════════════ */
(function setupValueHover() {
  const container = $('.about-values');
  if (!container) return;
  const items = $$('.value-item', container);
  container.addEventListener('mouseover', e => {
    const item = e.target.closest('.value-item');
    if (!item) return;
    items.forEach(o => { o.style.opacity = o === item ? '1' : '0.28'; });
  }, { passive: true });
  container.addEventListener('mouseleave', () => {
    items.forEach(o => { o.style.opacity = ''; });
  }, { passive: true });
})();

/* ══════════════════════════════════════════════
   13. ABOUT TYPEWRITER
══════════════════════════════════════════════ */
(function setupTypewriter() {
  const wrap = $('#aboutTypewriter');
  if (!wrap) return;

  $$('.tw-para', wrap).forEach(p => {
    const text = p.dataset.tw || '';
    p.innerHTML = '';
    [...text].forEach(ch => {
      const s = document.createElement('span');
      s.className = 'tw-char'; s.textContent = ch; p.appendChild(s);
    });
  });

  let triggered = false;
  new IntersectionObserver(([e]) => {
    if (!e.isIntersecting || triggered) return;
    triggered = true;
    runTypewriter();
  }, { threshold: 0.18 }).observe(wrap);

  function runTypewriter() {
    const paras = $$('.tw-para', wrap);
    const cursor = document.createElement('span');
    cursor.className = 'tw-cursor';

    const allChars = [];
    paras.forEach((p, pi) => $$('.tw-char', p).forEach(c => allChars.push({ el: c, pi })));
    if (!allChars.length) return;
    paras[0].appendChild(cursor);

    let idx = 0, curPara = 0;
    const iv = setInterval(() => {
      if (idx >= allChars.length) {
        clearInterval(iv);
        wrap.dataset.twDone = 'true';
        setTimeout(() => cursor.remove(), 1000);
        forceRevealVisible();
        return;
      }
      const { el, pi } = allChars[idx++];
      el.style.animationPlayState = 'running';
      if (pi !== curPara) { curPara = pi; paras[curPara].appendChild(cursor); }
    }, 15);
  }
})();

/* ══════════════════════════════════════════════
   14. COUNTERS
══════════════════════════════════════════════ */
(function setupCounters() {
  function animateCount(el, target, dur, suffix = '') {
    const t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const v = Math.round(easeOutExpo(p) * target);
      if (suffix) { el.textContent = v + suffix; }
      else {
        const small = el.querySelector('small');
        let tn = null; el.childNodes.forEach(n => { if (n.nodeType === 3) tn = n; });
        if (tn) tn.nodeValue = v; else el.insertBefore(document.createTextNode(v), small);
      }
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  $$('.stat').forEach(s => {
    const t = parseInt(s.dataset.count, 10), numEl = s.querySelector('.stat-num');
    if (!numEl || isNaN(t)) return;
    new IntersectionObserver(([e]) => { if (e.isIntersecting) animateCount(numEl, t, 1600); }, { threshold: 0.5 }).observe(s);
  });

  $$('.music-metric').forEach(m => {
    const t = parseInt(m.dataset.count, 10), sfx = m.dataset.suffix || '', valEl = m.querySelector('.mm-val');
    if (!valEl || isNaN(t)) return;
    new IntersectionObserver(([e]) => { if (e.isIntersecting) animateCount(valEl, t, 1400, sfx); }, { threshold: 0.5 }).observe(m);
  });
})();

/* ══════════════════════════════════════════════
   15. SCORE BARS
══════════════════════════════════════════════ */
(function setupScoreBars() {
  const c = $('.edu-scores');
  if (!c) return;
  new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    $$('.score-bar', c).forEach((bar, i) => setTimeout(() => bar.classList.add('animated'), i * 120));
  }, { threshold: 0.25 }).observe(c);
})();

/* ══════════════════════════════════════════════
   16. TESTIMONIALS CAROUSEL
══════════════════════════════════════════════ */
(function setupCarousel() {
  const carousel = $('#testiCarousel');
  if (!carousel) return;
  const slides = $$('.testi-slide'), dotsWrap = $('#testiDots');
  const btnPrev = $('#testiPrev'), btnNext = $('#testiNext');
  const DURATION = 6000;
  let current = 0, rafId = null, tStart = null, paused = false, pausedAt = 0;

  const tw = document.createElement('div'); tw.className = 'testi-timer-wrap';
  const tb = document.createElement('div'); tb.className = 'testi-timer-bar';
  tw.appendChild(tb); carousel.insertBefore(tw, carousel.firstChild);

  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'testi-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i+1}`);
    d.addEventListener('click', () => { goTo(i); reset(); });
    dotsWrap.appendChild(d);
  });

  function getDots() { return $$('.testi-dot', dotsWrap); }

  function goTo(idx) {
    const prev = current;
    current = ((idx % slides.length) + slides.length) % slides.length;
    if (prev === current) return;
    slides[prev].classList.add('leaving'); slides[prev].classList.remove('active');
    setTimeout(() => slides[prev].classList.remove('leaving'), 380);
    slides[current].classList.add('active');
    getDots()[prev].classList.remove('active'); getDots()[current].classList.add('active');
  }

  function runTimer(ts) {
    if (!tStart) tStart = ts;
    const pct = Math.min((ts - tStart) / DURATION, 1);
    tb.style.width = (pct * 100) + '%';
    if (pct >= 1) { goTo(current + 1); reset(); return; }
    rafId = requestAnimationFrame(runTimer);
  }

  function reset() {
    cancelAnimationFrame(rafId); tStart = null; pausedAt = 0;
    tb.style.transition = 'none'; tb.style.width = '0%';
    requestAnimationFrame(() => {
      tb.style.transition = '';
      if (!paused) rafId = requestAnimationFrame(runTimer);
    });
  }

  rafId = requestAnimationFrame(runTimer);
  btnNext && btnNext.addEventListener('click', () => { goTo(current + 1); reset(); });
  btnPrev && btnPrev.addEventListener('click', () => { goTo(current - 1); reset(); });

  carousel.addEventListener('mouseenter', () => { paused = true; cancelAnimationFrame(rafId); pausedAt = performance.now() - (tStart || performance.now()); });
  carousel.addEventListener('mouseleave', () => { paused = false; tStart = performance.now() - pausedAt; rafId = requestAnimationFrame(runTimer); });

  let tx = 0;
  carousel.addEventListener('touchstart', e => { tx = e.touches[0].clientX; paused = true; cancelAnimationFrame(rafId); }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) dx > 0 ? goTo(current - 1) : goTo(current + 1);
    paused = false; reset();
  }, { passive: true });

  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { goTo(current - 1); reset(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); reset(); }
  });
})();

/* ══════════════════════════════════════════════
   17. HERO PARALLAX  (disabled on mobile)
══════════════════════════════════════════════ */
(function setupParallax() {
  if (isTouch()) return;
  const bgImg    = $('.hero-bg-img');
  const portrait = $('.hero-portrait-frame');
  if (!bgImg) return;
  let raf = false, lastY = 0;
  window.addEventListener('scroll', () => {
    lastY = window.scrollY;
    if (!raf) {
      raf = true;
      requestAnimationFrame(() => {
        const p = clamp(lastY / window.innerHeight, 0, 1);
        bgImg.style.transform = `scale(1.06) translate3d(0,${p * 32}px,0)`;
        if (portrait) portrait.style.transform = `translate3d(0,${p * 12}px,0)`;
        raf = false;
      });
    }
  }, { passive: true });
})();

/* ══════════════════════════════════════════════
   18. PROJECT TILT  (desktop only)
══════════════════════════════════════════════ */
(function setupTilt() {
  if (isTouch()) return;
  $$('.project-card').forEach(card => {
    let inside = false;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const dx = ((e.clientX - r.left) / r.width  - 0.5) * 5;
      const dy = ((e.clientY - r.top)  / r.height - 0.5) * 5;
      if (!inside) { card.style.transition = 'transform .06s ease'; inside = true; }
      card.style.transform = `translate3d(0,-4px,0) rotateX(${-dy}deg) rotateY(${dx}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      inside = false;
      card.style.transition = 'transform .5s cubic-bezier(0.22,1,0.36,1)';
      card.style.transform = '';
    });
  });
})();

/* ══════════════════════════════════════════════
   19. STAGGERED ENTRIES
══════════════════════════════════════════════ */
(function setupStaggered() {
  function stagger(selector, containerSel, delay = 90, opts = { threshold: 0.06 }) {
    const container = containerSel ? $(containerSel) : null;
    const items = container ? $$(selector, container) : $$(selector);
    if (!items.length) return;

    items.forEach(c => {
      c.style.opacity = '0';
      c.style.transform = 'translate3d(0,18px,0)';
      c.style.transition = `opacity .5s cubic-bezier(0.22,1,0.36,1), transform .5s cubic-bezier(0.22,1,0.36,1)`;
    });

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      items.forEach((c, i) => setTimeout(() => { c.style.opacity = '1'; c.style.transform = 'none'; }, i * delay));
    }, opts);

    io.observe(container || items[0]);
  }

  stagger('.music-card', '#music',        100, { threshold: 0.06 });
  stagger('.honor-card', '.honors-grid',  45,  { threshold: 0.04 });

  // Exp items (slide in from left)
  $$('.exp-item').forEach((el, i) => {
    el.style.cssText += 'opacity:0;transform:translate3d(-14px,0,0);transition:opacity .5s cubic-bezier(0.22,1,0.36,1),transform .5s cubic-bezier(0.22,1,0.36,1);';
    new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, i * 60);
    }, { threshold: 0.12 }).observe(el);
  });

  // Footer
  const footer = $('footer');
  if (footer) {
    footer.style.cssText += 'opacity:0;transform:translate3d(0,14px,0);transition:opacity .7s cubic-bezier(0.22,1,0.36,1),transform .7s cubic-bezier(0.22,1,0.36,1);';
    new IntersectionObserver(([e]) => { if (e.isIntersecting) { footer.style.opacity = '1'; footer.style.transform = 'none'; } }, { threshold: 0.04 }).observe(footer);
  }
})();

/* ══════════════════════════════════════════════
   20. CONTACT FORM
══════════════════════════════════════════════ */
(function setupForm() {
  const form = $('#contactForm');
  if (!form) return;
  const btn     = $('#submitBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnSend = btn.querySelector('.btn-sending');
  const success = $('#formSuccess');
  const error   = $('#formError');

  /* ↓ Replace YOUR_FORM_ID with actual Formspree ID after signup */
  const ENDPOINT = 'https://formspree.io/f/mqevebvw';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;
    $$('[required]', form).forEach(el => {
      el.classList.remove('error');
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    });
    if (!valid) return;

    btn.disabled = true;
    btnText.style.display = 'none'; btnSend.style.display = 'inline';
    success.style.display = error.style.display = 'none';

    const payload = {
      name:    $('#contactName').value.trim(),
      email:   $('#contactEmail').value.trim(),
      subject: $('#contactSubject').value.trim(),
      message: $('#contactMessage').value.trim(),
    };

    try {
      if (ENDPOINT.includes('YOUR_FORM_ID')) {
        // Mailto fallback until Formspree is configured
        const s = encodeURIComponent(`[Portfolio] ${payload.subject} — ${payload.name}`);
        const b = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`);
        window.location.href = `mailto:danielesshak25@gmail.com?subject=${s}&body=${b}`;
        success.style.display = 'flex'; form.reset();
      } else {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) { success.style.display = 'flex'; form.reset(); }
        else throw new Error();
      }
    } catch (_) { error.style.display = 'block'; }
    finally { btn.disabled = false; btnText.style.display = 'inline'; btnSend.style.display = 'none'; }
  });

  $$('.form-input', form).forEach(el => el.addEventListener('input', () => el.classList.remove('error')));
})();

/* ══════════════════════════════════════════════
   IMAGE FALLBACK
══════════════════════════════════════════════ */
$$('img').forEach(img => img.addEventListener('error', () => { img.style.opacity = '0'; }));

/* ══════════════════════════════════════════════
   SITE READY
══════════════════════════════════════════════ */
function onSiteReady() {
  requestAnimationFrame(() => {
    forceRevealVisible();
    setTimeout(forceRevealVisible, 350);
  });
}

console.log('%c Daniel Esshak %c من قنا إلى العالم', 'padding:6px 16px;background:#080810;color:#c9a96e;font-size:15px;font-weight:700', 'padding:6px 16px;background:#080810;color:#4a5568;font-size:12px');
