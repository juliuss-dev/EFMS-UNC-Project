import axios from "axios";
export const createInventoryEquipment = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post("/api/maintenanceInventory", data, config);
  return response;
};

export const getEquipments = async () => {
  const response = await axios.get("/api/maintenanceInventory");
  return response;
};
