import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-center justify-center space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <img src="/reddit-icon.png" alt="Reddit Icon" className="w-8 h-8 mx-2" />
          <h1 className="text-xl font-semibold">Reddit Client</h1>
        </div>
        <Separator />
      </div>
    </>
  );
}

/* TODO:
    - Add search bar
    - Add create post button
*/