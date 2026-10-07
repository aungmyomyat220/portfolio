"use client";
import {useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {sendMailHook} from '../../../hook/sendMailHook';
const github = 'https://github.com/aungmyomyat220';
const projects = [
 {name:'Lat Htauk Bay Din', image:'mintheinkhalogo.png', category:'WEB APPLICATION', description:['A digital experience for exploring Myanmar astrology.', 'ミャンマーの占いを楽しむためのWebアプリ。'], href:'https://bay-din-app-two.vercel.app'},
 {name:'My Blog', image:'myblog.jpg', category:'CONTENT PLATFORM', description:['A personal space for stories, ideas and learning.', 'ストーリーやアイデア、学びを共有するブログ。'], href:'https://myblog-two-lake.vercel.app'},
 {name:'Chat App', image:'chat.jpg', category:'APPLICATION', description:['A messaging project. Explore my repositories for the source.', 'メッセージアプリのプロジェクト。ソースコードはGitHubでご覧ください。'], href:github},
 {name:'E-commerce', image:'os.jpg', category:'COMMERCE', description:['An online shopping project, from browsing to checkout.', '商品閲覧から購入までのオンラインショッピングプロジェクト。'], href:github}
];
export default function Portfolio() {
 const t = useTranslations('Index');
 const ja = useLocale() === 'jp';
 const [menu, setMenu] = useState(false);
 const [light, setLight] = useState(false);
 const [status, setStatus] = useState('idle');
 const [feedback, setFeedback] = useState('');
 const text = (en, jp) => ja ? jp : en;
 async function submit(event) {
  event.preventDefault(); setStatus('sending'); setFeedback('');
  const form = event.currentTarget;
  try {
   await sendMailHook(Object.fromEntries(new FormData(form)));
   setStatus('success'); setFeedback(text('Message sent. Thank you for reaching out!', 'メッセージを送信しました。ありがとうございます！')); form.reset();
  } catch {setStatus('error'); setFeedback(text('Could not send your message. Please try again later or connect on LinkedIn.', '送信できませんでした。時間をおいて再度お試しいただくか、LinkedInでご連絡ください。'));}
 }
 return <div className={`portfolio ${light ? 'light' : ''}`}>
  <a href="#main" className="skip-link">{text('Skip to content', '本文へ')}</a>
  <header className="navigation"><a className="wordmark" href="#home">amm<span>.</span><small>DEVELOPER</small></a>
   <nav aria-label={text('Main navigation', 'メインナビゲーション')} className={menu ? 'open' : ''}>
    {['Skills','Experience','Projects','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{t(item)}</a>)}
   </nav>
   <div className="nav-actions"><Link href={ja ? '/en' : '/jp'} aria-label={ja ? 'Switch to English' : '日本語に切り替え'}>{ja ? 'EN' : '日本語'}</Link><button onClick={() => setLight(!light)} aria-label={text('Toggle color theme', 'テーマを切り替え')}>{light ? '◐' : '☼'}</button><button className="menu-toggle" aria-expanded={menu} aria-label={text('Toggle menu', 'メニュー')} onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></div>
  </header>
  <main id="main"><section id="home" className="hero wrap">
   <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>{text('CODE. CREATE. KEEP LEARNING.', 'コードを書き、創り、学び続ける。')}</p><p className="intro">{t('intro')} Aung Myo Myat</p><h1>{text('Building digital', 'アイデアを、')}<br/>{text('experiences', 'デジタル体験に')}<br/><em>{text('with purpose.', '変える。')}</em></h1><p className="lede">{text('Full-stack developer connecting thoughtful design with reliable engineering. React, Next.js, Java — and a curiosity that never stops.', 'デザインと確かなエンジニアリングをつなぐフルスタック開発者。React、Next.js、Javaを中心に、学び続けています。')}</p><div className="actions"><a className="button primary" href="#projects">{text('Explore my work', '制作実績を見る')} ↗</a><a className="button" href="https://drive.google.com/file/d/1GCx00ooykx07UB3G2Gh8IrWF90owbMTD/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t('download')} ↓</a></div><div className="social"><a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aung-myo-myat-33b4941a4/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div>
   <div className="hero-art" aria-hidden="true"><div className="orbital"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="cube"><div className="face front">&lt;/&gt;</div><div className="face back">AMM</div><div className="face right">{ }</div><div className="face left">JS</div><div className="face top">+</div><div className="face bottom">→</div></div></div><span className="float-label label-one">Next.js / React</span><span className="float-label label-two">Java / Node.js</span><span className="art-caption">IDEAS → CODE → EXPERIENCE</span></div>
  </section>
  <div className="stack-strip"><div className="wrap">React <span>✳</span> Next.js <span>✳</span> Java <span>✳</span> Node.js <span>✳</span> AWS <span>✳</span> Docker</div></div>
  <section className="wrap section" id="skills"><div className="section-heading"><p className="eyebrow">01 / {t('Skills')}</p><h2>{text('The tools behind', 'アイデアを支える')}<br/><em>{text('the ideas.', '技術。')}</em></h2></div><div className="skill-grid">{[['01','Frontend',['React','Next.js','JavaScript','HTML / CSS']],['02','Backend',['Java','Node.js','PHP','MySQL']],['03','Cloud & tools',['AWS','Docker','Linux','Git']]].map(([n,title,items]) => <article className="skill-card" key={title}><span className="card-number">{n}</span><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>
  <section className="wrap section" id="projects"><div className="section-heading horizontal"><div><p className="eyebrow">02 / {t('Projects')}</p><h2>{text('Selected', '制作')} <em>{text('work.', '実績。')}</em></h2></div><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">{text('All repositories', 'リポジトリ一覧')} ↗</a></div><div className="project-grid">{projects.map((p,i) => <a className="project-card" key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"><div className={`project-image project-${i}`}><Image src={`/image/${p.image}`} alt={p.name} width={600} height={400} sizes="(max-width: 700px) 90vw, 45vw"/><span className="project-arrow">↗</span></div><div className="project-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.description[ja ? 1 : 0]}</p></div></a>)}</div></section>
  <section className="wrap section journey" id="experience"><div><p className="eyebrow">03 / {t('Experience')}</p><h2>{text('Always', '成長を')}<br/><em>{text('evolving.', '続ける。')}</em></h2><Image className="portrait" src="/image/profile.jpg" alt="Aung Myo Myat" width={160} height={160}/></div><div className="timeline">{[
 ['2023 — Present','Web Developer','GIC Myanmar',text('Building engaging, efficient web applications and growing across the full stack.', '使いやすく効率的なWebアプリを開発し、フルスタックの技術を磨いています。')],
 ['2022 — 2023','Quality Assurance Engineer','Qualy Myanmar',text('Testing software with care and a focus on reliable user experiences.', '丁寧なテストを通じて、信頼できるユーザー体験を支えました。')],
 ['2014 — 2020','Information Technology','Mawlamyine Technology University',text('A foundation in computer science, programming and problem solving.', 'コンピューターサイエンス、プログラミング、問題解決の基礎を学びました。')]
 ].map(([date,role,org,desc]) => <article key={date}><small>{date}</small><h3>{role}</h3><span>{org}</span><p>{desc}</p></article>)}</div></section>
  <section className="wrap section contact" id="contact"><div><p className="eyebrow">04 / {t('Contact')}</p><h2>{text('Have an idea?', 'アイデアを、')}<br/><em>{text('Let’s build it.', '一緒に形に。')}</em></h2><p className="lede">{text('Tell me about your project, or just say hello. Great things start with a conversation.', 'プロジェクトのご相談も、ご挨拶もお気軽に。まずはお話ししましょう。')}</p><a className="text-link" href="https://www.linkedin.com/in/aung-myo-myat-33b4941a4/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div><form onSubmit={submit}><label>{text('Your name', 'お名前')}<input name="name" autoComplete="name" required maxLength={100}/></label><label>{text('Email address', 'メールアドレス')}<input name="email" type="email" autoComplete="email" required maxLength={254}/></label><label>{text('What are you thinking?', 'ご相談内容')}<textarea name="content" rows={4} required maxLength={5000}/></label><button className="button primary" disabled={status === 'sending'}>{status === 'sending' ? text('Sending…', '送信中…') : text('Send message ↗', 'メッセージを送信 ↗')}</button><p role="status" className={`feedback ${status}`}>{feedback}</p></form></section>
  </main><footer className="wrap"><a className="wordmark" href="#home">amm<span>.</span></a><span>© {new Date().getFullYear()} Aung Myo Myat</span><a href="#home">{text('Back to top', 'ページ上部へ')} ↑</a></footer>
 </div>;
}
