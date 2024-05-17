export const GET = async () => {
  try {
    //await dbConnect();

    return new Response("Hello World", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something wen wrong", { status: 500 });
  }
};
