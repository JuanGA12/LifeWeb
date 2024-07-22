import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-lg mb-5 md:mb-7 md:text-xl lg:text-xl xl:text-2xl dark:text-life-green self-start">
            BLOG
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
