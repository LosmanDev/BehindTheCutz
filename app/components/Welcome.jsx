import Link from 'next/link';

export default function Welcome() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-center">
          Welcome
          <br />
          Behind The Cutz
        </h1>

        <h2 className=" text-1xl text-center pb-2">Business Hours</h2>
        <p className="text-sm font-bold">Mon: Closed</p>
        <p className="text-sm font-bold">Tue-Sat: 7am-6pm</p>
        <p className="text-sm pb-3 font-bold">Sun: 7am-3pm</p>
        <a href="tel:7816051426" className="text-md">
          Phone: (781) 605-1426
        </a>
        <a
          href="https://maps.apple.com/?address=509+Main+St%2C+Malden%2C+MA++02148%2C+United+States&auid=16012953759820253414&ll=42.428257%2C-71.066889&lsp=9902&q=Fen+Fen%27s+Barber+Shop&t=m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <address className="text-sm">509 Main St Malden, MA 02148</address>
          </div>
        </a>

        <Link href="/service" className="btn border-primary mt-5 px-16">
          Join waitlist
        </Link>
      </div>
    </>
  );
}
