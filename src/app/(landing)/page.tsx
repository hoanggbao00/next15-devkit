import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const data = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button: {
    text: "Get Started",
    url: "/login",
  },
  testimonial: {
    quote: "Focused strategy, swift delivery",
    author: "John Doe",
    role: "CEO",
    company: "Company",
    avatars: [
      {
        image: "https://shadcnblocks.com/images/block/avatar-1.webp",
        fallback: "AB",
      },
      {
        image: "https://shadcnblocks.com/images/block/avatar-2.webp",
        fallback: "CD",
      },
      {
        image: "https://shadcnblocks.com/images/block/avatar-3.webp",
        fallback: "EF",
      },
    ],
  },
  images: {
    first: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    second: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
    third: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
    fourth: "https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg",
  },
};

const HomePage = () => {
  return (
    <section className="py-12 md:py-20 p-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <div className="flex flex-col gap-4 lg:gap-8">
              <h1 className="max-w-[80%] text-4xl font-semibold leading-tight text-foreground lg:text-5xl xl:text-7xl">
                {data.heading}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground xl:text-2xl">
                {data.description}
              </p>
            </div>
            <div className="my-6 lg:my-10">
              <Button asChild size="lg">
                <a href={data.button.url}>{data.button.text}</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex -space-x-[1.5rem]">
                {data.testimonial.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`relative z-${index + 1}0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}
                  >
                    <AvatarImage src={avatar.image} alt="" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <p className="mb-1 text-sm italic text-muted2-foreground">
                  &quot;{data.testimonial.quote}&quot;
                </p>
                <p className="text-sm font-medium text-muted2-foreground">
                  {data.testimonial.author}, {data.testimonial.role} @
                  {data.testimonial.company}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="w-full max-w-[50rem]">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                  <div className="overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <img
                      src={data.images.first}
                      alt=""
                      className="object-fit h-full w-full object-center"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute left-[5%] top-1/2 w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                      <AspectRatio ratio={1.739130435 / 1}>
                        <img
                          src={data.images.second}
                          alt=""
                          className="size-full object-cover object-center"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute left-[9%] top-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                      <AspectRatio ratio={1.6 / 1}>
                        <img
                          src={data.images.third}
                          alt=""
                          className="size-full object-cover object-center"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="relative left-[50%] top-[12%] w-[70%] max-w-[17.5rem] -translate-x-[50%]">
                      <AspectRatio ratio={0.52 / 1}>
                        <img
                          src="https://shadcnblocks.com/images/block/mockups/phone-1.png"
                          alt=""
                          className="absolute z-20 w-full"
                        />
                        <img
                          src={data.images.fourth}
                          alt=""
                          className="absolute z-10 w-full rounded-[16%]"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
