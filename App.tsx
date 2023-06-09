import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Loading } from "./src/components/Loading";
import { NavigateComponent } from "./src/components/NavigateComponent";
import { AuthvehicleProvider } from "./src/context/AuthVehicleContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <AuthvehicleProvider>
      <NavigateComponent />
    </AuthvehicleProvider>
  );
}
