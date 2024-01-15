export const handler = async (event: any) => {

    console.log(event, '1')

    return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }),
  };
}