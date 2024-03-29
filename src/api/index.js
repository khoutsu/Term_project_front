export async function login({ email, password }) {
  return await fetch("http://api-user66026.se-rmutl.net/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function searchArtworks({ keyword }) {
  return await fetch(
    `http://api-user66026.se-rmutl.net/api/homepage/getArtworks/${keyword}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
