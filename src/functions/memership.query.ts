import { Membership } from "@/types/membership.type";
import axios from "./axios";
import React from "react";

export async function getAllMebreships(
  state: React.Dispatch<React.SetStateAction<Membership[]>>
): Promise<void> {
  try {
    const query = await axios.get("/membership");
    if ("error" in query.data) throw new Error(query.data.error);
    const data: Membership[] = query.data;
    console.log(data);
    
    state(data);
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
  }
}
