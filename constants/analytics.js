export const logEvent = (eventName, eventData) => {
  const timestamp = new Date().toISOString();
  console.log(`[Analytics] Event: ${eventName}`, {
    timestamp,
    ...eventData,
  });
  // Here you could also send this data to a server if you have one set up
};