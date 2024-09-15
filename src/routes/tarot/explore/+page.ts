import { TarotDataAPI } from '$lib/utils/TarotDataAPI' 
export async function load({ fetch }) {
  const api = new TarotDataAPI()
 try {
  const response = await fetch(api.domain + api.paths.cards);
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
 }
}