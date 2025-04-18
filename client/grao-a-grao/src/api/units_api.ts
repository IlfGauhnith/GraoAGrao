import { getAPIUrl, getAuthToken } from "@/util/util";
import { CreateUnitOfMeasureInput, UpdateUnitOfMeasureInput, UnitOfMeasure } from "@/model/items_model";

export async function fetchUnits(): Promise<UnitOfMeasure[]> {
  try {
    const token = getAuthToken();

    const res = await fetch(`${getAPIUrl()}/items/units`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok)
      throw new Error('Error fetching units of measure');

    const data: UnitOfMeasure[] = await res.json();
    return data;

  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function createUnit(unit: CreateUnitOfMeasureInput): Promise<UnitOfMeasure> {
  try {
    const token = getAuthToken();;

    const res = await fetch(`${getAPIUrl()}/items/units`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(unit)
    });

    if (!res.ok)
      throw new Error('Error creating unit of measure');

    const created: UnitOfMeasure = await res.json();
    return created;

  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function updateUnit(unit: UnitOfMeasure): Promise<UnitOfMeasure> {
  try {
    const token = getAuthToken();

    const res = await fetch(`${getAPIUrl()}/items/units`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(unit)
    });

    if (!res.ok)
      throw new Error('Error updating unit of measure');

    const updated: UnitOfMeasure = await res.json();
    return updated;

  } catch (err: any) {
    console.error(err);
    throw err;
  }
}

export async function deleteUnit(id: number): Promise<boolean> {
  try {
    const token = getAuthToken();
    const res = await fetch(`${getAPIUrl()}/items/units/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok)
      throw new Error('Error deleting unit of measure');

    return true;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
}
