import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Download, GraduationCap, Users, BookOpen, MessageCircle, Home, Info, Building, Library, FileText, Phone } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'organizations', 'resources', 'cv-guide', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const organizations = [
    {
      id: 'syrian-youth',
      name: 'أكاديمية تجمع الشباب السوري',
      description: 'منصة تعليمية شاملة تقدم دورات متنوعة وبرامج تطوير المهارات',
      programs: [
        { name: 'منصة كورسيرا', description: 'أكثر من 13000 كورس مجاني', link: 'https://www.coursera.org/' },
        { name: 'منصة بابل لتعلم اللغات', description: 'تعلم اللغات بطريقة تفاعلية', link: 'https://www.duolingo.com/' },
        { name: 'امتحان دولينجو الإنجليزي', description: 'اختبار معتمد للغة الإنجليزية', link: 'https://www.duolingo.com/' },
        { name: 'برامج المينى دبلوما', description: 'برامج تخصصية قصيرة المدى', link: 'https://academy.syrian-youth.org/mini-diploma/' }
      ],
      socialLinks: {
        website: 'https://academy.syrian-youth.org/',
        facebook: 'https://www.facebook.com/syr.youth',
        instagram: 'https://www.instagram.com/syr.youth',
        telegram: 'https://t.me/syryouth',
        twitter: 'https://twitter.com/Syria_youth'
      }
    },
    {
      id: 'edu-syria',
      name: 'EDU-SYRIA',
      description: 'برنامج تعليمي يهدف إلى دعم الطلاب السوريين في الحصول على التعليم العالي',
      programs: [
        { name: 'برنامج منح البكالوريوس (BSP)', description: 'منح دراسية للحصول على درجة البكالوريوس', link: 'http://edu-syria.eu/ar/' },
        { name: 'برنامج المنح المهنية (VESP)', description: 'برامج تدريب مهني متخصصة', link: 'http://edu-syria.eu/ar/' },
        { name: 'برنامج منح الدراسات العليا (GSSP)', description: 'منح للماجستير والدكتوراه', link: 'http://edu-syria.eu/ar/' },
        { name: 'برنامج منحة الدبلوم التعليمي (TCSP)', description: 'دبلوم في التعليم والتدريس', link: 'http://edu-syria.eu/ar/' }
      ],
      socialLinks: {
        website: 'http://edu-syria.eu/ar/',
        facebook: 'https://www.facebook.com/EDUSYRIA',
        instagram: 'https://www.instagram.com/edu_syria/',
        linkedin: 'https://www.linkedin.com/company/edu-syria/',
        twitter: 'https://twitter.com/edu_syria'
      }
    },
    {
      id: 'wusc',
      name: 'WUSC',
      description: 'برنامج الطلاب اللاجئين في كندا - فرصة للدراسة والاستقرار',
      programs: [
        { name: 'برنامج الطلاب اللاجئين', description: 'منح دراسية كاملة في الجامعات الكندية', link: 'https://srp.wusc.ca/' },
        { name: 'الدعم الأكاديمي', description: 'مساعدة في التكيف الأكاديمي والثقافي', link: 'https://srp.wusc.ca/students/' }
      ],
      socialLinks: {
        website: 'https://srp.wusc.ca/',
        facebook: 'https://www.facebook.com/share/1AKqvQNejp/',
        instagram: 'https://www.instagram.com/wusc_eumc/',
        linkedin: 'https://www.linkedin.com/company/world-university-service-of-canada-wusc---eumc-',
        twitter: 'https://twitter.com/WorldUniService'
      }
    },
    {
      id: 'chevening',
      name: 'Chevening',
      description: 'منح الحكومة البريطانية للدراسات العليا في المملكة المتحدة',
      programs: [
        { name: 'منح الماجستير', description: 'منح كاملة لدراسة الماجستير في بريطانيا', link: 'https://www.chevening.org/' },
        { name: 'التقديم للمنحة', description: 'عملية التقديم والمتطلبات', link: 'https://www.chevening.org/apply/' }
      ],
      socialLinks: {
        website: 'https://www.chevening.org/',
        facebook: 'https://www.facebook.com/cheveningfcdo',
        instagram: 'https://www.instagram.com/cheveningfcdo',
        linkedin: 'https://linkedin.com/school/cheveningfcdo',
        twitter: 'https://twitter.com/CheveningFCDO'
      }
    },
    {
      id: 'uopeople',
      name: 'University of the People',
      description: 'جامعة مجانية معتمدة أمريكياً تقدم منح خاصة للاجئين السوريين',
      programs: [
        { name: 'منح اللاجئين السوريين', description: 'برنامج منح مخصص للطلاب السوريين', link: 'https://www.uopeople.edu/' }
      ],
      socialLinks: {
        website: 'https://www.uopeople.edu/',
        facebook: 'https://www.facebook.com/UoPeople',
        instagram: 'https://www.instagram.com/uopeople.official/',
        linkedin: 'https://www.linkedin.com/school/university-of-the-people/',
        twitter: 'https://x.com/UoPeople'
      }
    }
  ];

  const educationalResources = [
    {
      id: 'google-certificates',
      name: 'شهادات Google المهنية',
      description: 'شهادات معتمدة من Google في مختلف المجالات',
      link: 'https://www.coursera.org/google-career-certificates?utm_source=google&utm_medium=institutions&utm_campaign=sou--direct__med--none-direct__cam--gwgsite__con--null__ter--null',
      socialLinks: {
        facebook: 'https://www.facebook.com/GoogleArabia',
        instagram: 'https://www.instagram.com/googlearabia/',
        linkedin: 'https://www.linkedin.com/showcase/grow-with-google',
        twitter: 'https://twitter.com/GoogleArabia',
        youtube: 'https://www.youtube.com/@maharat'
      }
    },
    {
      id: 'for9a',
      name: 'منصة فرصة',
      description: 'منصة عربية للفرص التعليمية والمهنية',
      link: 'https://www.for9a.com/',
      socialLinks: {
        facebook: 'https://www.facebook.com/for9a',
        instagram: 'https://www.instagram.com/for9acom/',
        telegram: 'https://t.me/forsadotco',
        twitter: 'https://x.com/FOR9Acom',
        app: 'https://play.google.com/store/apps/details?id=com.for9a.androidfor9a&hl=en'
      }
    },
    {
      id: 'edraak',
      name: 'Edraak - إدراك',
      description: 'منصة تعليمية عربية مجانية',
      link: 'https://www.edraak.org/',
      socialLinks: {
        facebook: 'https://www.facebook.com/edraakorg/',
        instagram: 'https://www.instagram.com/edraakorg/',
        linkedin: 'https://www.linkedin.com/company/edraak/',
        twitter: 'https://x.com/edraak'
      }
    },
    {
      id: 'efe-jordan',
      name: 'مؤسسة التعليم لأجل التوظيف',
      description: 'برامج تدريبية مهنية للشباب',
      link: 'https://efejordan.org/ar/about-education-for-employment/',
      socialLinks: {
        website: 'https://efejordan.org/ar/join-our-programs/#top',
        facebook: 'https://www.facebook.com/EFEJor/',
        instagram: 'https://instagram.com/efe.jordan?igshid=1meeiocddyvz2',
        linkedin: 'https://www.linkedin.com/in/efe-jordan-864407112',
        twitter: 'https://twitter.com/EFE_jor?s=12'
      }
    }
  ];

  const onlinePlatforms = [
    { name: 'Coursera', description: 'دورات من جامعات وشركات عالمية مرموقة', link: 'https://www.coursera.org/' },
    { name: 'edX', description: 'منصة تعليمية من جامعة هارفارد و MIT', link: 'https://www.edx.org/' },
    { name: 'Udemy', description: 'آلاف الدورات في مختلف المجالات', link: 'https://www.udemy.com/' },
    { name: 'FutureLearn', description: 'منصة تعليمية بريطانية من جامعات مرموقة', link: 'https://www.futurelearn.com/' },
    { name: 'Khan Academy', description: 'منصة تعليمية مجانية للتعليم الأساسي', link: 'https://www.khanacademy.org/' }
  ];

  const languagePlatforms = [
    { name: 'Duolingo', description: 'تطبيق مجاني لتعلم اللغات بطريقة تفاعلية', link: 'https://www.duolingo.com/' },
    { name: 'Babbel', description: 'تطبيق لتعلم اللغات بطريقة عملية ومتقدمة', link: 'https://www.babbel.com/' },
    { name: 'Rosetta Stone', description: 'برنامج معروف عالمياً لتعلم اللغات', link: 'https://www.rosettastone.com/' },
    { name: 'Memrise', description: 'تعلم اللغات باستخدام تقنيات الذاكرة', link: 'https://www.memrise.com/' }
  ];

  const youtubeChannels = [
    { name: 'BBC Learning English', subscribers: '6.45M', description: 'الإنجليزية البريطانية المعيارة', link: 'https://www.youtube.com/@bbclearningenglish' },
    { name: 'English with Lucy', subscribers: '5.8M', description: 'الإنجليزية البريطانية والنحو', link: 'https://www.youtube.com/@EnglishwithLucy' },
    { name: "Rachel's English", subscribers: '2.8M', description: 'النطق الأمريكي الدقيق', link: 'https://www.youtube.com/@RachelsEnglish' },
    { name: 'TED', subscribers: '35M+', description: 'محاضرات علمية وثقافية وإنسانية', link: 'https://www.youtube.com/@TED' },
    { name: 'National Geographic', subscribers: '22M+', description: 'العلوم والطبيعة والثقافة', link: 'https://www.youtube.com/@NatGeo' },
    { name: 'VOA Learning English', subscribers: '1.8M', description: 'الإنجليزية الأمريكية المبسطة', link: 'https://www.youtube.com/@voalearningenglish' }
  ];

  const freelancePlatforms = [
    { name: 'مستقل', type: 'عربية', description: 'منصة عربية للعمل الحر', link: 'https://mostaql.com/' },
    { name: 'خمسات', type: 'عربية', description: 'بيع وشراء الخدمات المصغرة', link: 'https://khamsat.com/' },
    { name: 'Upwork', type: 'عالمية', description: 'أكبر منصة للعمل الحر عالمياً', link: 'https://www.upwork.com/' },
    { name: 'Freelancer', type: 'عالمية', description: 'منصة عالمية للمستقلين', link: 'https://www.freelancer.com/' },
    { name: 'Fiverr', type: 'عالمية', description: 'منصة عالمية للخدمات', link: 'https://www.fiverr.com/' }
  ];

  const universityTemplates = [
    { name: 'جامعة هارفارد', description: 'دليل شامل لإنشاء السيرة الذاتية وخطاب التغطية', link: 'https://careerservices.fas.harvard.edu/channels/create-a-resume-cv-or-cover-letter' },
    { name: 'جامعة ييل', description: 'نماذج متنوعة للسيرة الذاتية حسب التخصص', link: 'https://ocs.yale.edu/resources/ocs-resume-template' },
    { name: 'معهد MIT', description: 'نماذج سيرة ذاتية أكاديمية متقدمة للسيرة الذاتية الأكاديمية', link: 'https://capd.mit.edu/resources/cvs' },
    { name: 'جامعة برينستون', description: 'دليل بناء السيرة الذاتية الأكاديمية', link: 'https://careerdevelopment.princeton.edu/guides/resume-cv-cover-letter-perspective-statement/building-your-cv-guide-graduate-students' },
    { name: 'جامعة ستانفورد', description: 'ربط المهارات بخطط التوظيف', link: 'https://careered.stanford.edu/jobs-internships/resumes-cover-letters' }
  ];

  const facebookPages = [
    { name: 'جامعة الزرقاء', link: 'https://www.facebook.com/share/16nQNhr6VT/' },
    { name: 'الفنار للإعلام', link: 'https://www.facebook.com/share/158bN5sffp/' },
    { name: 'UNHCR', link: 'https://www.facebook.com/CPFJO?mibextid=ZbWKwL' },
    { name: 'DAAD Jordan', link: 'https://www.facebook.com/share/1B7pvNuPEn/' },
    { name: 'spark', link: 'https://www.facebook.com/share/1Ez2uSZtWf/' },
    { name: 'dot. JORDAN', link: 'https://www.facebook.com/share/1C9CeWvcMa/' },
    { name: 'LTUC', link: 'https://www.facebook.com/share/16gu9WyJZF/' }
  ];

  const personalityTests = [
    { name: 'TRUITY', description: 'اختبارات شخصية موثوقة', link: 'https://www.truity.com/test/type-finder-personality-test-new' },
    { name: '16Personalities', description: 'اختبار الشخصيات الـ16', link: 'https://www.16personalities.com/ar' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img src="/logo.png" alt="شعار المبادرة" className="h-10 w-10" />
              <span className="text-xl font-bold text-green-800">شباب الأزرق يتعلمون</span>
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              {[
                { id: 'home', label: 'الرئيسية', icon: Home },
                { id: 'about', label: 'عن المبادرة', icon: Info },
                { id: 'organizations', label: 'المنظمات التعليمية', icon: Building },
                { id: 'resources', label: 'الموارد التعليمية', icon: Library },
                { id: 'cv-guide', label: 'دليل السيرة الذاتية', icon: FileText },
                { id: 'contact', label: 'التواصل', icon: Phone }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-green-700 bg-green-100'
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src="/logo.png" alt="شعار المبادرة" className="h-32 w-32 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              دليل المستقبل
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-6">
              شباب الأزرق يتعلمون
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              مبادرة شبابية نابعة من تجربة واقعية ومعايشة شخصية للحواجز التي قد تحول دون وصول
              الشباب إلى فرص التعليم والتطوير
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('organizations')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Users size={20} />
                <span>استكشف المنظمات</span>
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <BookOpen size={20} />
                <span>الموارد التعليمية</span>
              </button>
              <a
                href="https://drive.google.com/drive/folders/18rJiYk4Bau-y-dN77QApckdjv8zgJLnV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Download size={20} />
                <span>تحميل الدليل</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">عن المبادرة</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-6">رؤية المبادرة</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                من منطلق الإيمان العميق بأن التعليم هو الركيزة الأساسية لبناء مستقبل مشرق، وأن
                لكل شاب وشابة الحق في التعلم بغض النظر عن ظروفهم المادية أو الجغرافية، جاءت
                هذه المبادرة لتكون وسيلة تمكين وإلهام.
              </p>
              <p className="text-gray-700 leading-relaxed">
                لا يقتصر مفهوم التعليم في هذه المبادرة على المسار الأكاديمي التقليدي فحسب، بل يتسع ليشمل عالماً متنوعاً من المنصات الرقمية، والدورات التدريبية، والمسارات التعليمية البديلة، والفرص التطوعية التي تُثري الخبرات وتُسهم في بناء شخصية شابة واعية وفعالة.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  ☀️
                </div>
                <h4 className="font-bold text-yellow-800 mb-2">الشمس</h4>
                <p className="text-sm text-yellow-700">نور العلم الذي يشق ظلام الظروف ويمنح الشباب طاقة جديدة للمضي نحو المستقبل</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  🌳
                </div>
                <h4 className="font-bold text-green-800 mb-2">الشجرة</h4>
                <p className="text-sm text-green-700">تمثل الشباب الذين ينمون بالمعرفة والتعليم ويثمرون لصالح مجتمعهم</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  💚
                </div>
                <h4 className="font-bold text-green-800 mb-2">الأخضر</h4>
                <p className="text-sm text-green-700">لون الحياة والنمو والقدرة على التجدّد رغم ندرة الموارد</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  💛
                </div>
                <h4 className="font-bold text-yellow-800 mb-2">الأصفر</h4>
                <p className="text-sm text-yellow-700">لون الأمل والضوء، يذكر بأن التعليم شعاع لا ينطفئ مهما كانت البيئة قاحلة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">المنظمات والمبادرات التعليمية</h2>
          
          <div className="grid gap-8">
            {organizations.map((org) => (
              <div key={org.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">{org.name}</h3>
                      <p className="text-gray-600">{org.description}</p>
                    </div>
                    <button
                      onClick={() => toggleCard(org.id)}
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      {expandedCards[org.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>
                  
                  {expandedCards[org.id] && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">البرامج والخدمات:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {org.programs.map((program, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-medium text-green-700 mb-2">{program.name}</h5>
                              <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                              <a
                                href={program.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                              >
                                <span>زيارة البرنامج</span>
                                <ExternalLink size={14} className="mr-1" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">روابط التواصل:</h4>
                        <div className="flex flex-wrap gap-3">
                          {Object.entries(org.socialLinks).map(([platform, link]) => (
                            <a
                              key={platform}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                            >
                              <span className="capitalize">
                                {platform === 'website' ? 'الموقع الرسمي' :
                                 platform === 'facebook' ? 'فيسبوك' :
                                 platform === 'instagram' ? 'إنستغرام' :
                                 platform === 'linkedin' ? 'لينكد إن' :
                                 platform === 'twitter' ? 'تويتر' :
                                 platform === 'telegram' ? 'تليغرام' : platform}
                              </span>
                              <ExternalLink size={14} className="mr-1" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">الموارد التعليمية</h2>
          
          {/* Main Educational Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">المنصات والمبادرات الرئيسية</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationalResources.map((resource) => (
                <div key={resource.id} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="font-bold text-green-800 mb-3">{resource.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      <span>زيارة المنصة</span>
                      <ExternalLink size={14} className="mr-1" />
                    </a>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(resource.socialLinks).map(([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                        >
                          {platform === 'facebook' ? 'فيسبوك' :
                           platform === 'instagram' ? 'إنستغرام' :
                           platform === 'linkedin' ? 'لينكد إن' :
                           platform === 'twitter' ? 'تويتر' :
                           platform === 'telegram' ? 'تليغرام' :
                           platform === 'youtube' ? 'يوتيوب' :
                           platform === 'app' ? 'التطبيق' :
                           platform === 'website' ? 'الموقع' : platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Learning Platforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">منصات التعلم الإلكتروني العالمية</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {onlinePlatforms.map((platform, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-blue-800 mb-2">{platform.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <span>زيارة المنصة</span>
                    <ExternalLink size={14} className="mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Language Learning Platforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">منصات تعلم اللغات</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languagePlatforms.map((platform, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-purple-800 mb-2">{platform.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm"
                  >
                    <span>زيارة المنصة</span>
                    <ExternalLink size={14} className="mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Channels */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">قنوات يوتيوب لتعلم اللغة الإنجليزية</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeChannels.map((channel, index) => (
                <div key={index} className="bg-red-50 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-red-800">{channel.name}</h4>
                    <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">{channel.subscribers}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm"
                  >
                    <span>زيارة القناة</span>
                    <ExternalLink size={14} className="mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Freelance Platforms */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">منصات العمل عن بُعد</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {freelancePlatforms.map((platform, index) => (
                <div key={index} className={`rounded-lg p-4 text-center hover:shadow-lg transition-shadow ${
                  platform.type === 'عربية' ? 'bg-green-50' : 'bg-orange-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-bold ${platform.type === 'عربية' ? 'text-green-800' : 'text-orange-800'}`}>
                      {platform.name}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      platform.type === 'عربية' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'
                    }`}>
                      {platform.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm ${
                      platform.type === 'عربية' ? 'text-green-600 hover:text-green-800' : 'text-orange-600 hover:text-orange-800'
                    }`}
                  >
                    <span>زيارة المنصة</span>
                    <ExternalLink size={14} className="mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Guide Section */}
      <section id="cv-guide" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">دليل السيرة الذاتية الأكاديمية</h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              دليل شامل لكتابة سيرة ذاتية أكاديمية احترافية مع نماذج من أفضل الجامعات العالمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-6">أهمية السيرة الذاتية الأكاديمية</h3>
              <p className="text-gray-700 mb-6">
                السيرة الذاتية الأكاديمية وثيقة شاملة تعكس المسار الأكاديمي للطالب
                وإنجازاته. تُستخدم عند التقديم لبرامج الدراسات العليا والمنح الدراسية
                الدولية. إذ تساعد لجان القبول في تقييم المؤهلات الأكاديمية والأنشطة البحثية
                والمهارات المتاحة للطلاب.
              </p>
              
              <h4 className="font-semibold text-green-700 mb-4">المكونات الأساسية:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• المعلومات الشخصية والتواصل</li>
                <li>• التحصيل العلمي والدرجات الأكاديمية</li>
                <li>• الأبحاث والمشاريع الأكاديمية</li>
                <li>• الخبرات العملية والتدريبية</li>
                <li>• الأنشطة اللاصفية والقيادية</li>
                <li>• الجوائز والمنح والتكريمات</li>
                <li>• المهارات اللغوية والتقنية</li>
                <li>• المراجع الأكاديمية</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-6">نصائح مهمة</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-3 text-red-600">ما يجب فعله:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• استخدم تنسيقاً بسيطاً ومرتباً</li>
                  <li>• ركز على الإنجازات وليس المهام</li>
                  <li>• خصص السيرة لكل منحة</li>
                  <li>• راجع السيرة لغوياً ونحوياً</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-600 mb-3">ما يجب تجنبه:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• التصميم المبالغ فيه والألوان الزاهية</li>
                  <li>• سرد الواجبات دون ذكر الإنجازات</li>
                  <li>• استخدام سيرة عامة غير متخصصة</li>
                  <li>• إهمال المراجعة والتدقيق</li>
                </ul>
              </div>
            </div>
          </div>

          {/* University Templates */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">نماذج من الجامعات المرموقة</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {universityTemplates.map((template, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="text-green-600" size={24} />
                  </div>
                  <h4 className="font-bold text-green-800 mb-3">{template.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                  <a
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    <span>زيارة الدليل</span>
                    <ExternalLink size={14} className="mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">التواصل والمتابعة</h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              صفحات مفيدة واختبارات شخصية لمساعدتك في رحلتك التعليمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Facebook Pages */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">صفحات فيسبوك مفيدة</h3>
              <div className="space-y-3">
                {facebookPages.map((page, index) => (
                  <a
                    key={index}
                    href={page.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-medium text-blue-800">{page.name}</span>
                    <ExternalLink size={16} className="text-blue-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Personality Tests */}
            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">اختبارات الشخصية</h3>
              <div className="space-y-4">
                {personalityTests.map((test, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2">{test.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                    <a
                      href={test.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
                    >
                      <span>إجراء الاختبار</span>
                      <ExternalLink size={14} className="mr-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt="شعار المبادرة" className="h-16 w-16 ml-4" />
            <div>
              <h3 className="text-2xl font-bold">شباب الأزرق يتعلمون</h3>
              <p className="text-green-200">AYL - Azraq Youth Learn</p>
            </div>
          </div>
          
          <div className="border-t border-green-700 pt-6">
            <p className="text-green-200 mb-2">
              <strong>إعداد وتأليف وتصميم:</strong> بهاء الدين خالد أبو حمد
            </p>
            <p className="text-green-300 text-sm">
              بكالوريوس في الاقتصاد والعلوم الإدارية - تخصص إدارة الأعمال
            </p>
            <p className="text-green-300 text-sm">
              كاتب ومؤلف في الاقتصاد والعلوم الإدارية - دليل المستقبل: شباب الأزرق يتعلمون
            </p>
            <p className="text-green-200 text-sm mt-4">
              © 2025 جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

