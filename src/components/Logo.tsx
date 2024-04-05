import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <section className="fixed left-8 h-16 flex justify-center items-center z-50">
      <img src={logo} alt="TaskForge" className="w-10 h-auto" />
    </section>
  );
};

export default Logo;
