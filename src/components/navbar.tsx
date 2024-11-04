import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center justify-center px-1">
        <Link
          href="https://wa.me/6281290640894" // Ganti dengan nomor WhatsApp admin
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.106 1.523 5.843L0 24l6.318-1.523A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.95 0-3.77-.5-5.355-1.375l-.375-.225-3.75.9.9-3.75-.225-.375A10.5 10.5 0 1112 22.5zm5.25-7.5c-.225-.125-1.35-.675-1.55-.75-.2-.075-.35-.125-.5.125-.15.25-.575.75-.7.9-.125.15-.25.175-.475.05-.225-.125-.95-.35-1.8-1.1-.675-.6-1.125-1.35-1.25-1.575-.125-.225-.013-.35.1-.475.1-.1.225-.25.35-.375.125-.125.175-.225.25-.375.075-.15.025-.275-.025-.375-.05-.1-.5-1.2-.675-1.625-.175-.425-.35-.375-.5-.375-.125 0-.275-.025-.425-.025s-.375.05-.575.275c-.2.225-.75.725-.75 1.775s.775 2.05.875 2.2c.1.125 1.525 2.35 3.7 3.3.525.225.925.35 1.225.45.515.175.975.15 1.35.1.425-.05 1.35-.55 1.55-1.075.2-.525.2-.975.15-1.075-.05-.1-.2-.15-.425-.275z" />
          </svg>
          Beli Sekarang Juga
        </Link>
      </Dock>
    </div>
  );
}
