import LoginContext from "../../context/AuthContext";
import CarContext from "../../context/CarContext";
import DashboardProvider from "../../context/DashboardContext";
import { UserProvider } from "../../context/HeaderContext";
import ProfileProvider from "../../context/ProfileContext";
import RegisterProvider from "../../context/RegisterContext";
import RentProvider from "../../context/RentContext";

const Providers = ({ children }) => {
  return (
    <>
      <LoginContext>
        <RegisterProvider>
          <ProfileProvider>
            <RentProvider>
              <CarContext>
                <DashboardProvider>
                  <UserProvider>{children}</UserProvider>
                </DashboardProvider>
              </CarContext>
            </RentProvider>
          </ProfileProvider>
        </RegisterProvider>
      </LoginContext>
    </>
  );
};

export default Providers;
