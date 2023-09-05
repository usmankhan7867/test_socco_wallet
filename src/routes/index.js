import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/SetupWallet/Welcome";
import SetupLoading from "../pages/SetupWallet/CreateWallet/SetupLoading";
import SeedPhrase from "../pages/SetupWallet/CreateWallet/SeedPhrase";
import VerifySeedPhrase from "../pages/SetupWallet/CreateWallet/VerifySeedPhrase";
import MainSettings from "../pages/Settings/MainSettings";
import Language from "../pages/Settings/Language";
import SafetyAndPrivacy from "../pages/Settings/SafetyAndPrivacy";
import RecoveryPhrase from "../pages/Settings/SafetyAndPrivacy/RecoveryPhrase";
import About from "../pages/Settings/About";
import Network from "../pages/Settings/Network";
import SetPassword from "../pages/SetupWallet/CreateWallet/SetPassword";
import Send from "../pages/Home/Send";
import Receive from "../pages/Home/Receive";
import Summary from "../pages/Home/Send/Summary";
import Transactions from "../pages/Transactions";
import Gallery from "../pages/Gallery";
import SingleNFT from "../pages/Gallery/SingleNFT";
import SendNFT from "../pages/Gallery/SendNFT";
import SendNFTSummary from "../pages/Gallery/SendNFTSummary";
import ImportSeedPhrase from "../pages/SetupWallet/ImportWallet";

function SetupWalletRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/setup-loading" element={<SetupLoading />} />
      <Route path="/seed-phrase" element={<SeedPhrase />} />
      <Route path="/verify-seed-phrase" element={<VerifySeedPhrase />} />
      {/* import wallet ------------------------------------------ */}
      <Route path="/import-seed-phrase" element={<ImportSeedPhrase />} />
      {/* set password ------------------------------------------- */}
      <Route path="/set-password" element={<SetPassword />} />
    </Routes>
  );
}

function SettingsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainSettings />} />
      <Route path="/language" element={<Language />} />
      <Route path="/about" element={<About />} />
      <Route path="/network" element={<Network />} />
      {/* safty and privacy ------------------------------------- */}
      <Route path="/safty-and-privacy" element={<SafetyAndPrivacy />} />
      <Route
        path="/safty-and-privacy/recovery-phrase"
        element={<RecoveryPhrase />}
      />
    </Routes>
  );
}

function GalleryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/nft" element={<SingleNFT />} />
      <Route path="/nft/send" element={<SendNFT />} />
      <Route path="/nft/send/summary" element={<SendNFTSummary />} />
    </Routes>
  );
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/setup-wallet" />} />
      {/* home -------------------------------------------- */}
      <Route path="/home" element={<Home />} />
      <Route path="/home/send" element={<Send />} />
      <Route path="/home/send/summary" element={<Summary />} />
      <Route path="/home/receive" element={<Receive />} />
      <Route path="/gallery/*" element={<GalleryRoutes />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/setting/*" element={<SettingsRoutes />} />
      <Route path="/setup-wallet/*" element={<SetupWalletRoutes />} />
    </Routes>
  );
}

export default Router;
