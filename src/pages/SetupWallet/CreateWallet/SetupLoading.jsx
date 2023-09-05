import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

function SetupLoading() {
  const navigate = useNavigate();

  setTimeout(() => navigate("/setup-wallet/seed-phrase"), 500);

  return (
    <div className="relative h-[600px] text-center p-10">
      <img src={Logo} alt="logo" className="mx-auto" />
      <h3 className="text-center text-2xl mb-10">
        Your Wallet
        <br /> is being created...
      </h3>

      <p className="text-xs font-medium">
        Please be patient, your wallet is being <br /> created and will be ready
        <br />
        at any moment...
      </p>
    </div>
  );
}

export default SetupLoading;
