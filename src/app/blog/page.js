'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const blogInfo = await fetch('/api/getBlogInfo', {
        method: 'POST',
        body: JSON.stringify({ validation: 'x07v' }),
      });
      if (blogInfo.status == 201) {
        const blogInfoJson = await blogInfo.json();
        setBlog(blogInfoJson);
      } else {
        router.push('/error');
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-lg mb-5 md:mb-7 md:text-xl lg:text-xl xl:text-2xl dark:text-life-green self-start">
            BLOG
          </div>
          {blog && (
            <div className="text-sm md:text-base text-justify grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
              <div>
                {blog.parrafo1ES} <br /> <br />
                {blog.parrafo2ES} <br /> <br />
                {blog.parrafo3ES}
              </div>
              <div className="italic mt-4 md:mt-0">
                {blog.parrafo1EN} <br /> <br />
                {blog.parrafo2EN} <br /> <br />
                {blog.parrafo3EN}
              </div>
            </div>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
