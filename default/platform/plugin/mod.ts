export async function getPostcodeFromVenueId(venueId: string): Promise<string> {
  const EVENTBRITE_TOKEN = "5FUCODO3UX7LKLZGTGEQ";

  try {
    const response = await fetch(`https://www.eventbriteapi.com/v3/venues/${venueId}/?token=${EVENTBRITE_TOKEN}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error(`Failed to fetch venue ${venueId}: ${response.status}`);
      return "fetch_failed";  // Returning a fallback value for error handling
    }

    const data = await response.json();

    // Return postcode or fallback if not found
    return data?.address?.postal_code || "no_postcode_found";

  } catch (error) {
    console.error(`Error fetching venue ${venueId}:`, error);
    return "error";  // Return a fallback for errors
  }
}
