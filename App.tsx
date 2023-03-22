import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Loading } from "./src/components/Loading";
import { NavigateComponent } from "./src/components/NavigateComponent";
import { AuthCarProvider } from "./src/context/AuthCarContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <AuthCarProvider>
      <NavigateComponent />
    </AuthCarProvider>
  );
}
