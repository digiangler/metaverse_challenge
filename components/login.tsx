import Image from "next/image";

function login() {
  return (
    <div className="relative bg-black">
      <h1>I am the login screen</h1>
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
        {/* Digi-Angler logo */}
        <Image
          className="object-cover rounded-full"
          src="https://github.com/digiangler.png"
          height={200}
          width={200}
        />
        {/* Login button */}
        <button className="p-5 font-bold bg-yellow-500 rounded-lg animate-pulse">
          Login yo the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default login;
