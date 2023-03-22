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

  async function handleNewData() {
    const response = await getItem();
    const previData = response ? JSON.parse(response) : [];
    const alreadyExists = previData.filter((item: any) => item.id === plateCar);

    if (alreadyExists.length) {
      const dataFilter = previData.filter((item: any) => item.id !== plateCar);
      console.log("EXISTE", alreadyExists);
      const newData = {
        id: 1,
        type: "Álcool",
        date: "22-03-2023",
        amountLiters: 10,
        litersValue: 3,
        totalValue: 30,
      };

      const newSupplies = {
        id: alreadyExists[0].id,
        supplies: [newData, ...alreadyExists[0].supplies],
      };

      const data = [...dataFilter, newSupplies];
      await setItem(JSON.stringify(data));
    } else {
      console.log("NÃO EXISTE");
      const newData = {
        id: plateCar,
        supplies: [
          {
            id: 0,
            type: "Gasolina",
            date: "22-03-2023",
            amountLiters: 8,
            litersValue: 4,
            totalValue: 32,
          },
        ],
      };

      const data = [...previData, newData];
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
