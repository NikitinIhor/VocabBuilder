import image_1440 from "../assets/images//1440.png";
import image_1440_2x from "../assets/images/1440@2x.png";
import image_375 from "../assets/images/375.png";
import image_375_2x from "../assets/images/375@2x.png";

import logo_big from "../assets/images/logo-big.png";
import logo from "../assets/images/logo-small.png";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <div
          className="flex items-center gap-4 mb-3 
        md:mb-[140px]
        xl:mb-[64px]"
        >
          <picture>
            <source media="(min-width:768px)" srcSet={logo_big} />
            <img src={logo} alt="logo" />
          </picture>
          <p className="text-lg font-semibold md:text-[22px]">VocabBuilder</p>
        </div>

        <div className="xl:flex xl:pb-[80px]">
          <div className="xl:order-2">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${image_1440} 1x, ${image_1440_2x} 2x`}
              />
              <img
                src={image_375}
                srcSet={`${image_375} 1x, ${image_375_2x} 2x`}
                alt="main image"
                className="mx-auto mb-2 md:hidden xl:block w-[498px]"
              />
            </picture>
            <p className="hidden xl:block xl:mt-5 xl:text-center">
              Word · Translation · Grammar · Progress
            </p>
          </div>
          <div className="xl:order-1">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
