import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Poppins ({
  subsets:
  ["latin"],
  weight: [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  ]
}
)

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* Award Badge */}
      <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No 1 Task Management
      </div>

      {/* Headings */}
      <h1 className={cn("text-3xl md:text-6xl text-neutral-800 mb-4", textFont.className)}>
        Taskello helps teams move
      </h1>
      <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-md w-fit">
        work forward.
      </div>

      {/* Description */}
      <p className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl", textFont.className)}>
        Collaborate, manage projects, and reach new productivity peaks.
        From high-rises to the home office, the way your team works is unique—
        accomplish it all with Taskify.
      </p>

      {/* CTA Button */}
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskello for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;