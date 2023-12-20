'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Bar.module.css';
import {
  Instagram,
  Twitter,
  LinkedIn,
  WhatsApp,
  Close,
} from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Bar = () => {
  const pathname = usePathname();
  const items = ['projects', 'about', 'staff', 'services', 'blog', 'clients'];
  const [showBar, setShowBar] = useState(false);

  const [heightx, setHeight] = useState(0);
  const elementRef = useRef(null);

  const router = useRouter();

  const noBarSites = [
    '/site/login',
    '/site/manager',
    '/site/collaborators/editor',
  ];

  useEffect(() => {
    if (!noBarSites.includes(pathname))
      setHeight(elementRef.current.clientHeight);
  }, [elementRef.current]);

  return (
    <>
      {noBarSites.includes(pathname) ? (
        <></>
      ) : (
        <div className="">
          <div
            className={`z-20 w-1/6 md:w-[10%] lg:w-[9%] xl:w-[7%] flex flex-col absolute top-0 ${styles.Header} `}
          >
            <div
              ref={elementRef}
              className={`flex justify-center items-center h-14 md:h-14 lg:h-16 xl:h-20 border-b-2 border-r-2 border-gray-300 cursor-pointer`}
              onClick={() => setShowBar(!showBar)}
              style={{ borderBottom: showBar ? '2px solid #ffffff51' : '' }}
            >
              <img
                src={'/Logo.png'}
                className="dark:hidden w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9"
              />
              <img
                src={'/LogoDark.png'}
                className="hidden dark:block w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
              />
            </div>
            {showBar && (
              <>
                <div
                  className={`overflow-y-hidden md:hidden z-10 h-screen fixed top-0 w-screen bg-white dark:bg-[#131e2f] ${styles.animated}`}
                >
                  <div className="flex flex-col justify-center items-center text-xs md:text-sm xl:text-base h-full w-full">
                    <div
                      className="absolute top-4 right-3 cursor-pointer"
                      onClick={() => {
                        setShowBar(!showBar);
                      }}
                    >
                      <Close />
                    </div>
                    <div className="uppercase">
                      {items.map((item, id) => {
                        return (
                          <div key={id} className="mt-5">
                            <div
                              className={`border-t-2 hover:border-life-green text-center ${
                                pathname.replace('/', '') == item
                                  ? 'border-life-green'
                                  : 'border-black'
                              }`}
                            >
                              <Link
                                className="text-sm"
                                href={'/' + item}
                                onClick={() => {
                                  setTimeout(() => {
                                    setShowBar(!showBar);
                                  }, [500]);
                                }}
                              >
                                {item}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="menu-res mt-32 flex justify-center items-center flex-col w-full">
                      <div className="mb-2">contacto@lifearquitectos.com</div>
                      <div className="mb-2">
                        Av. Coronel Andrés Reyes 550 – Piso 02, San Isidro
                      </div>
                      <div className="flex">
                        <a
                          href="https://www.instagram.com/lifearquitectos"
                          target="_blank"
                          rel="noopener norefer"
                        >
                          <Instagram className="mr-3 cursor-pointer" />
                        </a>
                        <a
                          href="https://x.com/LifeArquitectos"
                          target="_blank"
                          rel="noopener norefer"
                        >
                          <Twitter className="mr-3 cursor-pointer" />
                        </a>
                        <a
                          href="http://www.linkedin.com/in/life-arquitectos-a817ab2a4"
                          target="_blank"
                          rel="noopener norefer"
                        >
                          <LinkedIn className="mr-3 cursor-pointer" />
                        </a>
                        <a
                          href="https://wa.me/51981301126?text=¡Hola! Quisiera más información sobre Life Arquitectos."
                          target="_blank"
                          rel="noopener norefer"
                        >
                          <WhatsApp className="cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`hidden md:block px-3 pt-4 uppercase bg-transparent border-r-2 border-gray-300 ${styles.animated}`}
                  style={{
                    height: `calc(100vh - ${heightx}px)`,
                  }}
                >
                  {items.map((item, id) => {
                    return (
                      <div key={id} className="mt-5">
                        <div
                          className={`border-t-2 hover:border-life-green ${
                            pathname.replace('/', '') == item
                              ? 'border-life-green'
                              : 'border-black'
                          }`}
                        >
                          <Link
                            className="md:text-xs lg:text-sm xl:text-base"
                            href={'/' + item}
                          >
                            {item}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div
            className={`borderCustom z-10 w-screen flex justify-end absolute right-0 top-0 ${styles.Header}`}
          >
            <div
              className={`${
                pathname != '/'
                  ? 'bg-[#ffffff51] dark:bg-[#131e2f]'
                  : 'bg-[#ffffff51] dark:bg-[#ffffff51]'
              }  h-14 md:h-14 lg:h-16 xl:h-20 w-full flex justify-center items-center`}
            >
              {pathname == '/' && (
                <div>
                  <img
                    src={'/LifeArq.png'}
                    className="cursor-pointer w-12 h-6 md:w-14 md:h-8 lg:w-16 lg:h-8 xl:w-20 xl:h-10"
                    onClick={() => router.push('/')}
                  />
                </div>
              )}
              {pathname != '/' && (
                <div className="w-screen flex justify-center">
                  <img
                    src={'/LifeArq.png'}
                    className="dark:hidden cursor-pointer w-12 h-6 md:w-14 md:h-8 lg:w-16 lg:h-8 xl:w-20 xl:h-10"
                    onClick={() => router.push('/')}
                  />
                  <img
                    src={'/LifeArqDark.png'}
                    className="hidden dark:block cursor-pointer w-12 h-6 md:w-14 md:h-8 lg:w-16 lg:h-8 xl:w-20 xl:h-10"
                    onClick={() => router.push('/')}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bar;
