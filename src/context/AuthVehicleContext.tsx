import { createContext, useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const AuthvehicleContext = createContext({});

export function AuthvehicleProvider({ children }: any) {
  const [plateCar, setPlateCar] = useState(null);
  const [vehiclesData, setVehiclesData] = useState([]);

  const { getItem, setItem } = useAsyncStorage("@fuelGraph:vehicles");

  // useFocusEffect(
  //   useCallback(() => {
  //     hanfleFetchData();
  //   }, [])
  // );
  useEffect(() => {
    hanfleFetchData();
  }, []);

  async function hanfleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setVehiclesData(data);
    console.log(data);
  }

  async function handleNewData(newData:any) {
    const response = await getItem();
    const previData = response ? JSON.parse(response) : [];
    const alreadyExists = previData.filter((item: any) => item.id === plateCar);

    if (alreadyExists.length) {
      const dataFilter = previData.filter((item: any) => item.id !== plateCar);
      console.log("EXISTE", alreadyExists);
    
      const newSupplies = {
        id: alreadyExists[0].id,
        supplies: [newData, ...alreadyExists[0].supplies],
      };

      const data = [...dataFilter, newSupplies];
      await setItem(JSON.stringify(data));
    } else {
      console.log("NÃO EXISTE");
      const newVeicle = {
        id: plateCar,
        supplies: [
          newData,
        ],
      };

      const data = [...previData, newVeicle];
      await setItem(JSON.stringify(data));
    }
    hanfleFetchData();
  }

  return (
    <AuthvehicleContext.Provider
      value={{ plateCar, setPlateCar, getItem, setItem, vehiclesData, handleNewData }}
    >
      {children}
    </AuthvehicleContext.Provider>
  );
}
