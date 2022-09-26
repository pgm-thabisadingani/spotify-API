/**
 * Creating Authentication middleware
 */


 export default (req, resp, next) => {
  const isAuth = true; // here you can use Session Tokens or JSON Web Tokens
  if(isAuth) next();
  else resp.status(401).json({ error: "User is not authorized to call the Spotify API." });
}
