export default function Time(request, response) {
  let currentTime = new Date();
  return response.status(200).json(currentTime);
}
