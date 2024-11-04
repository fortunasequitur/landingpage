'use client';

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SparklesText from "@/components/magicui/sparkles-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { WorkdeskCard } from "@/components/workdesk-card";
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.04;

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-black bg-green-400 rounded-full p-[2px] shrink-0 mr-2"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PageHome() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Males Buat Mikir Design Canva? Ini Solusi Buat Kamu`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Tentang CANVATRON</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Cocok Untuk</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => ( 
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Apa Aja Isinya?</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                // period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Masih Kurang? Kami Kasih BONUS!</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                // period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  TEMPLATE CANVATRON
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Kepo Sama Desain Template? Kami Kasih Reviewnya
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Berikut Review Template Exclusive Canvatron
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="w-full max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                {id === 0 && 'youtubeId' in project && ( // Gunakan pengecekan tipe
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="450"
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1`}
                      title="YouTube video player"
                      style={{ border: 'none' }} // Ganti frameBorder dengan style
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-md"
                    ></iframe>
                  </div>
                )}
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="techstack">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                TUTORIAL
                </div>
                <h2>
                <SparklesText 
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                text="Cara Pakai CANVATRON"
                />
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Gak Perlu CANVA PRO, Pakai CANVA Biasa Juga Bisa! Berikut Tutorialnya.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.workdesk.map((workdesk, id) => (
                <BlurFade
                  key={workdesk.title}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <WorkdeskCard
                    // tagline={workdesk.tagline}
                    title={workdesk.title}
                    description={workdesk.description}
                    image={workdesk.image}
                    links={workdesk.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2>
              <SparklesText 
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                text="Get in Touch"
                />
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.Telegram.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  with a direct question on telegram
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
      <section id="pricing">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Berapa Sih Harganya?
                </div>
                <h2>
                  <SparklesText 
                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                    text="Ambil Promo Sekarang"
                  />
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  5000+ Template Exclusive + Bonus Harganya Cuma Segini
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="max-w-[400px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="p-6 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Khusus Hari Ini Cuma 25K!</h3>
                <p className="text-xl">Harga Normal <span className="line-through">Rp.199.000</span></p>
                <ul className="mt-4 space-y-2">
                  {[
                    "1x Bayar Untuk Selamanya",
                    "File Aman Tidak Expired",
                    "Tinggal Edit & Export di Canva",
                    "Bonus Akun Canva PRO 3 Bulan",
                    "Bonus Template Konten Planner",
                    "Bonus Marketing Kit Planner",
                    "Gratis Konsultasi Admin CANVATRON"
                  ].map((text, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <CheckIcon />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-center mb-4 mt-4">
                  Rp. 25.000
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Untuk Selamanya
                </div>
                <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 mt-4">
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                      <p>⚡Beli Sekarang⚡</p>
                  </button>
                </Link> 
                <div id="countdown" className="text-center mt-2 text-red-500 font-bold">
                  Promo Khusus Hari Ini!
                </div>
                <div className="flex justify-center mt-4">
                <Image src="/qris.png" alt="QRIS" width={500} height={500} />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                BURUAN BELI SEBELUM KEHABISAN
              </div>
              <h2>
                <SparklesText 
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  text="TESTIMONIAL"
                />
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Banyak Yang Antri Order Buruan Ambil Promonya
                </p>
            </div>
          </BlurFade>
        </div>
        <div className="overflow-hidden relative w-full py-12">
          <div className="flex space-x-4 animate-marquee">
            {/* Duplikat elemen di awal untuk transisi halus */}
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/4.png"
                  alt="Nama Pengguna 2"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/1.png"
                  alt="Nama Pengguna 1"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}  
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 20.05}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/2.png"
                  alt="Nama Pengguna 2"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}
                  />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/3.png"
                  alt="Nama Pengguna 1"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}
                  />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 20.05}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/4.png"
                  alt="Nama Pengguna 2"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}
                />
              </div>
            </BlurFade>
            {/* Duplikat elemen di akhir untuk transisi halus */}
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="p-6 border rounded-lg shadow-md max-w-[400px] mx-auto">
                <Image
                  src="/1.png"
                  alt="Nama Pengguna 1"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  width={400}
                  height={400}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite; /* Perpanjang durasi animasi */
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-66.67%); /* Sesuaikan untuk transisi halus */
          }
        }
      `}</style>
    </main>
  );
}
