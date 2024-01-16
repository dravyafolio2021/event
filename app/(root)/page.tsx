import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" bg-priamry-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2  2xl:gap-0">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Event, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helofu tups from 3,168+ mentors in world class
              companies with our global community
            </p>
            <Button
              size="lg"
              asChild
              className="w-full lg:rounded-full sm:w-fit"
            >
              <Link href="#events">Explore</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            width={1000}
            height={1000}
            alt="shravya"
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] "
          />
        </div>

        <section id="events">
          <h2 className="">THoushands Of Events</h2>
          <div className="">
            Search 
            Category Filter will be added
          </div>
        </section>
      </section>
    </>
  );
}
