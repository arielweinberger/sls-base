async function createAuction(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from https://codingly.io' }),
  };
}

export const handler = createAuction;