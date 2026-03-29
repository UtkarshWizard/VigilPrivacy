import logo from "/vigil_privacy_logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="VigilPrivacy Logo"
        className="w-16 sm:w-20 md:w-24"
      />
    </div>
  );
}
