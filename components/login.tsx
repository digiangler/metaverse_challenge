import Image from "next/image";
import { useMoralis } from "react-moralis";

function login() {
  const { authenticate } = useMoralis();

  return (
    <div className="relative bg-black">
      <h1>I am the login</h1>
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
        <Image
          className="object-cover rounded-full"
          src="https://github.com/digiangler.png"
          height={200}
          width={200}
        />
        <button
          onClick={() => {
            authenticate();
          }}
          className="bg-orange-200 rounded-lg p-5 font-bold animate-pulse "
        >
          Login to the METAVERSE
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
