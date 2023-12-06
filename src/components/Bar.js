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
  const items = ['projects', 'about', 'staff', 'services', 'clients'];
  const [showBar, setShowBar] = useState(false);

  const [heightx, setHeight] = useState(0);
  const elementRef = useRef(null);

  const router = useRouter();

  const noBarSites = ['/site/login', '/site/manager'];

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
            className={`z-20  w-1/6 md:w-[10%] lg:w-1/12 flex flex-col absolute top-0 
        ${styles.Header} `}
          >
            <div
              ref={elementRef}
              className={`flex justify-center items-center h-14 md:h-16 lg:h-20 xl:h-24 border-b-2 border-r-2 border-gray-300 cursor-pointer`}
              onClick={() => setShowBar(!showBar)}
              style={{ borderBottom: showBar ? '2px solid transparent' : '' }}
            >
              <img
                src={'/Logo.png'}
                className="dark:hidden w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
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
                        <Instagram className="text-base mr-2 cursor-pointer" />
                        <Twitter className="text-base mr-2 cursor-pointer" />
                        <LinkedIn className="text-base mr-2 cursor-pointer" />
                        <WhatsApp className="text-base cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`hidden md:block px-3 pt-4  uppercase bg-transparent border-r-2 border-gray-300 ${styles.animated}`}
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
            className={`z-10 w-screen flex justify-center absolute right-0 top-0 ${styles.Header}`}
          >
            <div
              className={`${
                pathname != '/'
                  ? 'bg-[#ffffff51] dark:bg-[#131e2f]'
                  : 'bg-[#ffffff51] dark:bg-[#ffffff51]'
              }  border-b-2 h-14 md:h-16 lg:h-20 xl:h-24 border-gray-300 w-full flex justify-center items-center`}
            >
              {pathname == '/' && (
                <div>
                  <img
                    src={'/LifeArq.png'}
                    className="cursor-pointer w-14 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 xl:w-28 xl:h-14"
                    onClick={() => router.push('/')}
                  />
                </div>
              )}
              {pathname != '/' && (
                <>
                  <img
                    src={'/LifeArq.png'}
                    className="dark:hidden cursor-pointer w-14 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 xl:w-28 xl:h-14"
                    onClick={() => router.push('/')}
                  />
                  <img
                    src={'/LifeArqDark.png'}
                    className="hidden dark:block cursor-pointer w-14 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 xl:w-28 xl:h-14"
                    onClick={() => router.push('/')}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bar;
