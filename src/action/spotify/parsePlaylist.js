  
/**
 * A playlists parser to parse the incoming request
 * check if the incoming request are valid
 */
// if response is POST dont change the created date 
export default (request) => {
  const { playlists } = request.body

  // validate if we have a playlist in the body
  if (playlists == null ) {
    throw new Error('The playlist object was not set.');
  }

  // check if we have a title
  if (playlists.title === null){
    throw new Error('The playlist object does not contain a title.');
  } 

  return playlists;
}
