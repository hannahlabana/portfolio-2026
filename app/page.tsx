import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/24/solid'
import Script from "next/script";


export default function Home() {
  

  return (
    <>
      <Script id="fade-up-observer" strategy="afterInteractive">
        {`
          const elements = document.querySelectorAll(".fade-up");

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.15 }
          );

          elements.forEach(el => observer.observe(el));
        `}
      </Script>


      <Script id="heart-cursor" strategy="afterInteractive">
        {`
          var colours=['#f00','#f06','#f0f','#f6f','#f39','#f9c'];
          var minisize=16;
          var maxisize=28;
          var hearts=66;
          var over_or_under="over";

          var x=ox=400;
          var y=oy=300;
          var swide=800;
          var shigh=600;
          var sleft=sdown=0;
          var herz=[], herzx=[], herzy=[], herzs=[];
          var kiss=false;

          function addRVLoadEvent(funky){
            var oldonload=window.onload;
            window.onload=typeof oldonload!='function'
              ? funky
              : function(){oldonload();funky();}
          }

          addRVLoadEvent(mwah);

          function mwah(){
            for (var i=0;i<hearts;i++){
              var heart=document.createElement("div");
              heart.style.position="absolute";
              heart.style.visibility="hidden";
              heart.style.zIndex=(over_or_under=="over")?"1001":"0";
              heart.style.color=colours[i%colours.length];
              heart.style.pointerEvents="none";
              heart.style.opacity=0.75;
              heart.appendChild(document.createTextNode("♥"));
              document.body.appendChild(heart);
              herz[i]=heart;
              herzy[i]=false;
            }
            set_scroll();
            set_width();
            herzle();
          }

          function herzle(){
            if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1){
              ox=x; oy=y;
              for (var c=0;c<hearts;c++){
                if (!herzy[c]){
                  herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
                  herz[c].style.top=(herzy[c]=y-minisize)+"px";
                  herz[c].style.fontSize=minisize+"px";
                  herz[c].style.visibility="visible";
                  herzs[c]=minisize;
                  break;
                }
              }
            }
            for (c=0;c<hearts;c++) if (herzy[c]) blow_me_a_kiss(c);
            setTimeout(herzle,40);
          }

          document.onmousemove=function(e){
            x=e.pageX; y=e.pageY;
          };

          function blow_me_a_kiss(i){
            herzy[i]-=herzs[i]/minisize+i%2;
            herzx[i]+=(i%5-2)/5;
            if (herzy[i]<sdown-herzs[i]){
              herz[i].style.visibility="hidden";
              herzy[i]=false;
            } else {
              herz[i].style.top=herzy[i]+"px";
              herz[i].style.left=herzx[i]+"px";
            }
          }

          window.onresize=set_width;
          function set_width(){
            swide=window.innerWidth;
            shigh=window.innerHeight;
          }

          window.onscroll=set_scroll;
          function set_scroll(){
            sdown=window.pageYOffset;
            sleft=window.pageXOffset;
          }
        `}
      </Script>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Pixelify+Sans:wght@400..700&display=swap');
          :root {
            color-scheme: light;
          }


          * {
            forced-color-adjust: none;
          }

          body {
            overflow-x: hidden;
            background-color: white;
            color: #9270A8;
          }

          .fade-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .fade-up.show {
            opacity: 1;
            transform: translateY(0);
          }

          .inter {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
          }

          .pixelify-sans {
            font-family: "Pixelify Sans", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
          }

          @keyframes bounceFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .bounce {
            animation: bounceFloat 1s ease-in-out infinite;
          }
        `}
      </style>

    <div className="absolute -z-10 w-1/4 h-1/4 rounded-full bg-gradient-to-br from-[#FFE2F0] to-white blur-3xl opacity-100 top-140 right-1/4" />
    <div className="absolute -z-10 w-1/4 h-1/4 rounded-full bg-gradient-to-br from-[#FFE2F0] to-white blur-3xl opacity-100 top-350 left-1/4" />
    <div className="absolute -z-10 w-1/4 h-1/4 rounded-full bg-gradient-to-br from-[#FFE2F0] to-white blur-3xl opacity-100 top-600 right-2/7" />
    <section id="home" className="fade-up h-full w-full flex justify-center relative">
      <div className="border-pink-100 border-4 h-full w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-4 sm:my-8 md:my-16 mx-2 sm:mx-0">

        {/* HEADER */}
        <div>
          <div className="flex justify-center bg-gradient-to-t from-[#FFE2F0] to-white p-2 sm:p-3">
            <h1 className="pixelify-sans font-bold text-xl sm:text-2xl text-[#9270A8]">hannah's portfolio ✿</h1>
          </div>
          <div className="flex justify-center bg-gradient-to-t from-[#FFE2F0] to-white p-1 gap-4 sm:gap-8">
            <Link href="#home" className="pixelify-sans font-bold text-base sm:text-xl text-[#CBB2DB]">home</Link>
            <Link href="#projects" className="pixelify-sans font-bold text-base sm:text-xl text-[#CBB2DB]">projects</Link>
            <Link href="#about" className="pixelify-sans font-bold text-base sm:text-xl text-[#CBB2DB]">about me</Link>
          </div>

          {/* HEADER BODY */}
          <div className="flex justify-center flex-col pt-8 sm:pt-12 items-center px-4">
            <Image 
              src="/assets/hana.jpg"
              width={250}
              height={500}
              alt="picture of hannah"
              className="rounded-full w-40 h-40 sm:w-[250px] sm:h-[250px] object-cover"
            />
            <h1 className="pixelify-sans bounce font-bold text-2xl sm:text-3xl text-[#9270A8] pt-6 sm:pt-8">welcome !</h1>
            <p className="inter text-sm sm:text-base text-[#9270A8] pt-3 sm:pt-4 w-72 text-center px-4">i'm hannah and i currently work as a database developer</p>
            <p className="inter text-sm sm:text-base text-[#9270A8] pt-2 w-72 text-center px-4">i also love doing ui design and frontend development</p>

            <h1 className="pixelify-sans font-bold text-lg sm:text-xl text-[#9270A8] pt-8 sm:pt-12">connect with me .✦ ݁˖</h1>
            <div className="text-[#9270A8] flex flex-row gap-2 pt-2 text-sm sm:text-base"><EnvelopeIcon className="w-4"/><Link href="https://mail.google.com/mail/?view=cm&to=hannahruth.labana@gmail.com">email</Link></div>
            <div className="text-[#9270A8] flex flex-row gap-2 pt-1 text-sm sm:text-base"><LinkIcon className="w-4"/><Link href="https://github.com/hannahlabana">github</Link></div>
            <div className="text-[#9270A8] flex flex-row gap-2 pt-1 text-sm sm:text-base"><ArrowTopRightOnSquareIcon className="w-4"/><Link href="https://www.linkedin.com/in/hannahlabana/">linkedin</Link></div>
          
            <p className="text-[#9270A8] text-lg sm:text-xl mt-8 sm:mt-10">───── ⋆⋅☆⋅⋆ ─────</p>
          </div>
        </div>
        {/* ABOUT ME */}
        <section id="about" className="fade-up flex justify-center flex-col items-center mt-2 px-6 sm:px-12 md:px-16">
          <h1 className="pixelify-sans font-bold text-xl sm:text-2xl text-[#9270A8] pt-6 sm:pt-8">˚ʚ♡ɞ˚ about me ˚ʚ♡ɞ˚</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full mt-4">
            <div className="w-full md:w-3/6 order-2 md:order-1">
                <p className="inter text-xs sm:text-sm text-[#9270A8] pt-2 sm:pt-4 text-center md:text-right">With 6 years of being involved in graphic design in academic organizations, I was able to smoothly transition into UI/UX design as I navigated by college program in BS Computer Science from the University of San Carlos.</p>
                <p className="inter text-xs sm:text-sm text-[#9270A8] pt-2 sm:pt-4 text-center md:text-right">In my 4 years of academic projects, I was able to transform designs into interactive and functioning websites through coding. With frontend and database development, I grew a passion for problem-solving.</p>
            </div>
            <Image 
              src="/assets/hana-1.jpg"
              width={250}
              height={250}
              alt="picture of hannah"
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-[250px] md:h-[250px] object-cover order-1 md:order-2"
            />
          </div>
          <div className="border-pink-100 border-4 min-h-44 w-full rounded-xl mt-6 sm:mt-10 p-4 bg-gradient-to-t from-[#FFE2F0] to-white">
            <h1 className="pixelify-sans font-bold text-lg sm:text-xl text-[#9270A8] text-center">technologies</h1>
            <div className="flex flex-col sm:flex-row w-full inter text-xs sm:text-sm text-[#9270A8] justify-between px-8 sm:px-12 md:px-24 py-2 gap-2 sm:gap-0">
              <ul className="list-disc">
                <li>figma</li>
                <li>tailwind</li>
                <li>bootstrap</li>
                <li>next.js</li>
                <li>vue.js</li>
              </ul>
              <ul className="list-disc">
                <li>sql</li>
                <li>redgate</li>
                <li>graphql</li>
                <li>azure</li>
                <li>C</li>
              </ul>
              <ul className="list-disc">
                <li>n8n</li>
                <li>playwright</li>
                <li>asp.net</li>
                <li>jira</li>
                <li>photoshop</li>
              </ul>
            </div>
          </div>
          <h1 className="pixelify-sans font-bold text-lg sm:text-xl text-[#9270A8] text-center mt-6 sm:mt-10">experience</h1>
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-2 gap-1 sm:gap-0">
              <div>
                <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">database developer</p>
                <p className="inter text-xs sm:text-sm text-[#CBB2DB]">Epicor Software Sweden AB</p>
              </div>

              <p className="inter text-xs sm:text-sm text-[#9270A8] sm:mt-1">
                December 2024 – Present
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-2 gap-1 sm:gap-0">
              <div>
                <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">teaching faculty</p>
                <p className="inter text-xs sm:text-sm text-[#CBB2DB]">University of San Carlos</p>
              </div>

              <p className="inter text-xs sm:text-sm text-[#9270A8] sm:mt-1">
                January 2025 – July 2025
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
              <div>
                <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8] w-full sm:w-2/3 leading-tight">associate software engineer</p>
                <p className="inter text-xs sm:text-sm text-[#CBB2DB]">Accenture Philippines</p>
              </div>

              <p className="inter text-xs sm:text-sm text-[#9270A8] sm:mt-1">
                August 2024 – December 2024
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
              <div>
                <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8] w-full sm:w-2/3 leading-tight">frontend developer intern</p>
                <p className="inter text-xs sm:text-sm text-[#CBB2DB]">LoPhils, Inc.</p>
              </div>

              <p className="inter text-xs sm:text-sm text-[#9270A8] sm:mt-1">
                September 2023 – February 2024
              </p>
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <section id="projects" className="fade-up flex justify-center flex-col items-center mt-2 h-full w-full pb-8">
          <h1 className="pixelify-sans font-bold text-xl sm:text-2xl text-[#9270A8] pt-6 sm:pt-8">˚ ☆ projects ☆</h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center w-full h-full px-4 sm:px-8 py-6 sm:py-8 gap-6 sm:gap-x-8 sm:gap-y-4">
            {/* TRIPPER */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
               <Image src="/assets/tripper.jpg" alt="tripper" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">tripper app</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">n8n, next.js</p>
                </div>
                <Link href="https://tripper-app-seven.vercel.app/" target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  link
                </Link>
              </div>
            </div>
            {/* TAGU MENU */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
                <Image src="/assets/tagumenu.jpg" alt="tagu menu" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">tagu menu</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">next.js</p>
                </div>

                <Link href="http://tagu-menu.vercel.app/" target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  link
                </Link>
              </div>
            </div>
            {/* AUR MARKETING */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
                <Image src="/assets/aurmarketing.jpg" alt="aur marketing" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">aur marketing</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">next.js</p>
                </div>

                <Link href="https://aurmarketing.vercel.app/" target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  link
                </Link>
              </div>
            </div>
            {/* KICKS FOR KINGS */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
                <Image src="/assets/kicksforkings.png" alt="kicks for kings" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">kicks for kings</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">figma</p>
                </div>

                <Link href='https://www.figma.com/proto/Uogn0veCmfvbCpBg8B9OGd/Kicks-for-Kings-(Online-Shop)?node-id=3-2&t=K6f9B2rCOaxXft7h-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2' target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  mockup
                </Link>
              </div>
            </div>
            {/* MASTERBOARD */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
                <Image src="/assets/masterboard.png" alt="masterboard" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">masterboard cms</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">figma</p>
                </div>

                <Link href="https://www.figma.com/proto/eZMZ634OLPByH7Rtw0WnmB/Masterboard-(CMS)?node-id=141-7865&t=dibtm6s1fKNwNcsy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=141%3A7865" target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  mockup
                </Link>
              </div>
            </div>
            {/* TEA PARADISE */}
            <div className="w-full sm:w-4/9 h-full">
              <div className="border-pink-100 border-4 w-full bg-gradient-to-t from-[#FFE2F0] to-white rounded-xl p-4">
                <Image src="/assets/tea-paradise.png" alt="tea paradise" width={400} height={200} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="pixelify-sans font-bold text-base sm:text-lg text-[#9270A8]">tea paradise</p>
                  <p className="inter text-xs sm:text-sm text-[#CBB2DB]">figma</p>
                </div>

                <Link href="https://www.figma.com/design/E4U1xNtx4RNATInbfZ4H09/Tea-Paradise?node-id=0-1&t=O7duVnWKSbt2e9xB-1" target="_blank" className="inter text-xs sm:text-sm text-[#9270A8] mt-1">
                  mockup
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>

    </>
  );
}