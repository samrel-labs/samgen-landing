(function() {
    'use strict';

    // ========== دیکشنری ==========
    const translations = {
        fa: {
            nav_home: 'خانه',
            nav_story: 'داستان ما',
            nav_purpose: 'هدف',
            nav_team: 'تیم',
            nav_contact: 'تماس',
            hero_badge: '✦ هلدینگ سام‌جن',
            hero_title_1: 'ساختن آینده',
            hero_title_2: 'با سه بال قدرتمند',
            hero_desc: 'SAMGEN متشکل از سه شرکت پیشرو در حوزه‌های نرم‌افزار، بازرگانی و سرمایه‌گذاری است. با هم، آینده‌ای هوشمندتر می‌سازیم.',
            company_rel: 'نرم‌افزار',
            company_mer: 'بازرگانی',
            company_gen: 'سرمایه‌گذاری',
            company_gen_brief: 'مدیریت استراتژیک و سرمایه‌گذاری هوشمند',
            company_rel_brief: 'توسعه‌ی سیستم‌های بزرگ‌مقیاس اجتماعی',
            company_mer_brief: 'واردات، صادرات و برندینگ بین‌المللی',
            hero_cta: 'کشف داستان ما',
            story_label: 'داستان ما',
            story_title: 'چگونه <span class="highlight-samgen">SAMGEN</span> متولد شد',
            story_1_title: '۶ ماه پیش · تولد ایده',
            story_1_desc: 'با یک ایده ساده در یک کافه شروع شد: ترکیب تخصص نرم‌افزار، تجارت و سرمایه‌گذاری.',
            story_2_title: '۴ ماه پیش · تشکیل SAMREL',
            story_2_desc: 'اولین گام با تأسیس شرکت نرم‌افزاری SAMREL در حوزه فناوری‌های اجتماعی.',
            story_3_title: '۲ ماه پیش · تولد SAMMER',
            story_3_desc: 'گسترش به حوزه بازرگانی بین‌المللی با تأسیس SAMMER.',
            story_4_title: 'امروز · هلدینگ SAMGEN',
            story_4_desc: 'ادغام سه مجموعه در یک هلدینگ قدرتمند برای هدایت هم‌افزایی.',
            stat_years: 'سال تجربه',
            stat_companies: 'شرکت زیرمجموعه',
            stat_projects: 'پروژه موفق',
            purpose_label: 'چرا وجود داریم',
            purpose_title: 'هدف و انگیزه ما',
            purpose_1_title: 'هم‌افزایی',
            purpose_1_desc: 'با ترکیب توانایی‌های سه حوزه، ارزشی بزرگتر از جمع اجزا خلق می‌کنیم.',
            purpose_2_title: 'تأثیر جهانی',
            purpose_2_desc: 'از بازارهای محلی تا شبکه‌های بین‌المللی، مرزها را برای رشد کسب‌وکارها کنار می‌زنیم.',
            purpose_3_title: 'نوآوری پایدار',
            purpose_3_desc: 'با نگاهی به آینده، فناوری و تجارت را برای ساختن دنیایی هوشمندتر ترکیب می‌کنیم.',
            purpose_4_title: 'اعتماد و شفافیت',
            purpose_4_desc: 'پایه‌ی تمام روابط ما بر اعتماد، صداقت و تعهد به ارزش‌های انسانی استوار است.',
            team_label: 'هیئت مدیره',
            team_title: 'معماران <span class="highlight-samgen">SAMGEN</span>',
            contact_label: 'ارتباط با ما',
            contact_title: 'با ما در تماس باشید',
            contact_address_label: 'آدرس',
            contact_address_value: 'تهران، خیابان گیشا، خیابان فاضل شمال، کوچه فرزین پلاک 5',
            contact_phone_label: 'تلفن',
            contact_email_label: 'ایمیل',
            contact_hours_label: 'ساعات کاری',
            contact_hours_value: 'شنبه تا چهارشنبه ۹ تا ۱۷',
            form_name: 'نام و نام خانوادگی',
            form_email: 'ایمیل',
            form_subject: 'موضوع',
            form_message: 'پیام شما...',
            form_submit: 'ارسال پیام',
            footer_tagline: 'سه بال، یک پرواز',
            footer_text: 'تمامی حقوق برای هلدینگ سام‌جن محفوظ است.',
            footer_credit: 'ساخته شده با ❤️ توسط SAMREL',
            gen_meaning: '<strong>SAM</strong> نام ثابت هلدینگ و <strong>GEN</strong> مخفف سه مفهوم قدرتمند است: <strong>Genesis</strong> (آغاز)، <strong>Generate</strong> (تولید) و <strong>Generation</strong> (نسل). ما در سام‌جن به دنبال آفرینش ارزش‌های پایدار و نسل‌های جدید از نوآوری هستیم.'
        },
        en: {
            nav_home: 'Home',
            nav_story: 'Our Story',
            nav_purpose: 'Purpose',
            nav_team: 'Team',
            nav_contact: 'Contact',
            hero_badge: '✦ SAMGEN Holding',
            hero_title_1: 'Building the Future',
            hero_title_2: 'With Three Powerful Wings',
            hero_desc: 'SAMGEN consists of three leading companies in software, trading, and investment. Together, we build a smarter future.',
            company_rel: 'Software',
            company_mer: 'Trading',
            company_gen: 'Investment',
            company_gen_brief: 'Strategic management & smart investment',
            company_rel_brief: 'Large-scale social software development',
            company_mer_brief: 'Import, export & international branding',
            hero_cta: 'Discover Our Story',
            story_label: 'Our Story',
            story_title: 'How <span class="highlight-samgen">SAMGEN</span> Was Born',
            story_1_title: '6 months ago · The Idea',
            story_1_desc: 'Started with a simple idea in a café: combining software expertise, trade, and investment.',
            story_2_title: '4 months ago · SAMREL Founded',
            story_2_desc: 'The first step with the establishment of SAMREL software company in social technologies.',
            story_3_title: '2 months ago · SAMMER Born',
            story_3_desc: 'Expanding into international trade with the founding of SAMMER.',
            story_4_title: 'Today · SAMGEN Holding',
            story_4_desc: 'Merging three entities into a powerful holding to drive synergy.',
            stat_years: 'Years Experience',
            stat_companies: 'Subsidiaries',
            stat_projects: 'Successful Projects',
            purpose_label: 'Why We Exist',
            purpose_title: 'Our Purpose & Motivation',
            purpose_1_title: 'Synergy',
            purpose_1_desc: 'By combining three domains, we create value greater than the sum of parts.',
            purpose_2_title: 'Global Impact',
            purpose_2_desc: 'From local markets to international networks, we remove boundaries for growth.',
            purpose_3_title: 'Sustainable Innovation',
            purpose_3_desc: 'Looking to the future, we combine technology and trade to build a smarter world.',
            purpose_4_title: 'Trust & Transparency',
            purpose_4_desc: 'Our relationships are built on trust, honesty, and commitment to human values.',
            team_label: 'Board of Directors',
            team_title: 'The Architects of <span class="highlight-samgen">SAMGEN</span>',
            contact_label: 'Contact Us',
            contact_title: 'Get in Touch',
            contact_address_label: 'Address',
            contact_address_value: 'Tehran, Gisha St., Fazel-e-Shomali St., Farzin Alley, No. 5',
            contact_phone_label: 'Phone',
            contact_email_label: 'Email',
            contact_hours_label: 'Working Hours',
            contact_hours_value: 'Sat to Wed 9 AM - 5 PM',
            form_name: 'Full Name',
            form_email: 'Email',
            form_subject: 'Subject',
            form_message: 'Your Message...',
            form_submit: 'Send Message',
            footer_tagline: 'Three Wings, One Flight',
            footer_text: 'All rights reserved for SAMGEN Holding.',
            footer_credit: 'Built with ❤️ by SAMREL',
            gen_meaning: '<strong>SAM</strong> is the fixed holding name and <strong>GEN</strong> stands for three powerful concepts: <strong>Genesis</strong>, <strong>Generate</strong>, and <strong>Generation</strong>. At SAMGEN, we aim to create sustainable value and new generations of innovation.'
        }
    };

    // ========== داده‌های تیم (دو زبانه) ==========
    const teamData = {
        fa: [
            { name: 'سعید علیدوست', role: 'بنیان‌گذار و مدیرعامل', bio: 'بیش از ۱۵ سال تجربه در مدیریت استراتژیک، سرمایه‌گذاری و توسعه کسب‌وکار.', initial: 'س', image: 'team/saeedalidoost.png' },
            { name: 'سبحان علیدوست', role: 'عضو هیئت مدیره', bio: 'کارشناس ارشد مدیریت مالی با سابقه درخشان در بانک‌داری و سرمایه‌گذاری.', initial: 'س', image: 'team/sobhanalidoost.png' },
            { name: 'فاطمه علیدوست', role: 'عضو هیئت مدیره', bio: 'متخصص حقوق تجارت و قراردادهای بین‌المللی با ۱۲ سال تجربه.', initial: 'ف', image: 'team/saraalidoost.png' },
            { name: 'سام سبزعلیان', role: 'مدیر بازرگانی', bio: 'کارشناس ارشد بازرگانی بین‌المللی و توسعه بازارهای جهانی.', initial: 'س', image: 'team/samalidoost.png' },
            { name: 'سودا سبزعلیان', role: 'مدیر مالی', bio: 'متخصص مدیریت مالی، بودجه‌ریزی و کنترل هزینه‌ها در شرکت‌های بزرگ.', initial: 'س', image: 'team/sevdaalidoost.png' },
            { name: 'نازنین سبزعلیان', role: 'مدیر فناوری اطلاعات', bio: 'متخصص معماری سیستم‌های بزرگ‌مقیاس و فناوری‌های ابری با ۱۰ سال سابقه.', initial: 'ن', image: 'team/nazisabzaliyan.png' }
        ],
        en: [
            { name: 'Saeed Alidoost', role: 'Founder & CEO', bio: 'Over 15 years of experience in strategic management, investment, and business development.', initial: 'S', image: 'team/saeedalidoost.png' },
            { name: 'Sobhan Alidoost', role: 'Board Member', bio: 'Expert in financial management with a distinguished background in banking and investment.', initial: 'S', image: 'team/sobhanalidoost.png' },
            { name: 'Fatemeh Alidoost', role: 'Board Member', bio: 'Specialist in commercial law and international contracts with 12 years of experience.', initial: 'F', image: 'team/saraalidoost.png' },
            { name: 'Sam Sabzaliyan', role: 'Commercial Manager', bio: 'Expert in international trade and global market development.', initial: 'S', image: 'team/samalidoost.png' },
            { name: 'Sevda Sabzaliyan', role: 'Financial Manager', bio: 'Specialist in financial management, budgeting, and cost control in large enterprises.', initial: 'S', image: 'team/sevdaalidoost.png' },
            { name: 'Nazanin Sabzaliyan', role: 'IT Manager', bio: 'Expert in large-scale system architecture and cloud technologies with 10 years of experience.', initial: 'N', image: 'team/nazisabzaliyan.png' }
        ]
    };

    // ========== متغیرها ==========
    let currentLang = 'fa';
    let currentTheme = 'light';
    let teamSliderIndex = 0;
    let teamAutoSlide = null;
    const TEAM_GAP = 30;

    // ========== عناصر DOM ==========
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const html = document.documentElement;
    const allI18n = document.querySelectorAll('[data-i18n]');
    const allPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    const teamTrack = document.getElementById('teamTrack');
    const prevTeam = document.getElementById('prevTeam');
    const nextTeam = document.getElementById('nextTeam');

    // ========== توابع ==========
    function setTheme(theme) {
        currentTheme = theme;
        html.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('samgen-theme', theme);
    }

    function toggleTheme() {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    }
	
	// ---------- به‌روزرسانی دکمه‌های اسلایدر ----------
    function updateSliderButtons(lang) {
        const isRtl = lang === 'fa';
        if (prevTeam && nextTeam) {
            prevTeam.innerHTML = isRtl ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-chevron-left"></i>';
            nextTeam.innerHTML = isRtl ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        allI18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        allPlaceholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        langLabel.textContent = lang === 'fa' ? 'فا' : 'EN';
        html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        html.setAttribute('lang', lang);
        localStorage.setItem('samgen-lang', lang);

        // به‌روزرسانی دکمه‌های اسلایدر
        updateSliderButtons(lang);

        buildTeamSlider(lang);
        teamSliderIndex = teamData[lang].length;
        updateTeamSlider();
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'fa' ? 'en' : 'fa');
    }

    function toggleMenu() {
        navLinks.classList.toggle('open');
    }

    // ========== ساخت اسلایدر تیم ==========
    function buildTeamSlider(lang) {
        const data = teamData[lang] || teamData.fa;
        const items = [...data, ...data, ...data];
        teamTrack.innerHTML = '';
        teamTrack.style.transition = 'none';
        items.forEach(member => {
            const div = document.createElement('div');
            div.className = 'team-member-card';
            div.innerHTML = `
                <div class="team-avatar"><img src="${member.image}" alt="${member.initial}" class="company-logo" onerror="this.style.display='none'"></div>
                <h3>${member.name}</h3>
                <span class="role">${member.role}</span>
                <p class="bio">${member.bio}</p>
            `;
            teamTrack.appendChild(div);
        });
        setTimeout(() => {
            teamTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 50);
        teamSliderIndex = data.length;
        updateTeamSlider();
        startTeamAutoSlide();
    }

    // ========== به‌روزرسانی اسلایدر ==========
    function updateTeamSlider() {
        const data = teamData[currentLang] || teamData.fa;
        const totalItems = data.length;
        const itemWidth = 260 + TEAM_GAP;
        
        const offset = teamSliderIndex * itemWidth;
        const isRtl = html.dir === 'rtl';
        
        teamTrack.style.transform = isRtl ? `translateX(${offset}px)` : `translateX(-${offset}px)`;
        
        if (teamSliderIndex >= totalItems * 2) {
            setTimeout(() => {
                teamTrack.style.transition = 'none';
                teamSliderIndex = totalItems;
                const newOffset = teamSliderIndex * itemWidth;
                teamTrack.style.transform = isRtl ? `translateX(${newOffset}px)` : `translateX(-${newOffset}px)`;
                setTimeout(() => {
                    teamTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            }, 600);
        }
        if (teamSliderIndex < totalItems) {
            setTimeout(() => {
                teamTrack.style.transition = 'none';
                teamSliderIndex = totalItems * 2 - 1;
                const newOffset = teamSliderIndex * itemWidth;
                teamTrack.style.transform = isRtl ? `translateX(${newOffset}px)` : `translateX(-${newOffset}px)`;
                setTimeout(() => {
                    teamTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            }, 600);
        }
    }

    // ========== حرکت بعدی/قبلی با پشتیبانی RTL ==========
    function nextTeamSlide() {
        const isRtl = html.dir === 'rtl';
        if (isRtl) {
            teamSliderIndex--;
        } else {
            teamSliderIndex++;
        }
        updateTeamSlider();
    }

    function prevTeamSlide() {
        const isRtl = html.dir === 'rtl';
        if (isRtl) {
            teamSliderIndex++;
        } else {
            teamSliderIndex--;
        }
        updateTeamSlider();
    }

    function startTeamAutoSlide() {
        if (teamAutoSlide) clearInterval(teamAutoSlide);
        teamAutoSlide = setInterval(nextTeamSlide, 3000);
    }

    function setupTeamHover() {
        const container = document.querySelector('.team-slider-container');
        if (!container) return;
        container.addEventListener('mouseenter', () => {
            if (teamAutoSlide) clearInterval(teamAutoSlide);
        });
        container.addEventListener('mouseleave', () => {
            startTeamAutoSlide();
        });
    }

    // ========== شمارنده‌ها ==========
    function animateCounter(element, target, suffix = '', duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(start) + suffix;
        }, 16);
    }

    function setupCounters() {
        const section = document.getElementById('story');
        if (!section) return;
        let counted = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    animateCounter(document.getElementById('statYears'), 1, '+', 1500);
                    animateCounter(document.getElementById('statCompanies'), 3, '', 1500);
                    animateCounter(document.getElementById('statProjects'), 7, '+', 2000);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(section);
    }

    function setupBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function setupTimelineAnimation() {
        const timeline = document.querySelector('.story-timeline');
        if (!timeline) return;
        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.3}s`;
        });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => item.classList.add('visible'), index * 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(timeline);
    }

    function setupFadeIn() {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    }

    function setupActiveNav() {
        const links = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });
        sections.forEach(section => observer.observe(section));
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                navLinks.classList.remove('open');
            });
        });
    }

    function setupTeamControls() {
        if (prevTeam) {
            prevTeam.addEventListener('click', () => {
                if (teamAutoSlide) clearInterval(teamAutoSlide);
                prevTeamSlide();
                startTeamAutoSlide();
            });
        }
        if (nextTeam) {
            nextTeam.addEventListener('click', () => {
                if (teamAutoSlide) clearInterval(teamAutoSlide);
                nextTeamSlide();
                startTeamAutoSlide();
            });
        }
    }

    // ========== بارگذاری اولیه ==========
    function init() {
        const savedTheme = localStorage.getItem('samgen-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }

        const savedLang = localStorage.getItem('samgen-lang');
        if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
            applyLanguage(savedLang);
        } else {
            applyLanguage('fa');
        }

        themeToggle.addEventListener('click', toggleTheme);
        langToggle.addEventListener('click', toggleLanguage);
        hamburger.addEventListener('click', toggleMenu);

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });

        buildTeamSlider(currentLang);
        setupTeamControls();
        setupTeamHover();
        setupCounters();
        setupBackToTop();
        setupTimelineAnimation();
        setupFadeIn();
        setupActiveNav();

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLang === 'fa' ? 'پیام شما با موفقیت ارسال شد!' : 'Your message was sent successfully!');
            this.reset();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
