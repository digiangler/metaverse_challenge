import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current:${user?.getUsername()})`
    );
    if (!username) return;
    setUserData({
      username,
    });
  };

  return (
    <div className="absolute text-sm top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className=" hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
