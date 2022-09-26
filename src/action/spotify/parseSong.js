  
/**
 * A song parser to parse the incoming request
 * check if the incoming request are valid
 */

export default (request) => {
  const { songs } = request.body


  // validate if we have a Song in the body
  if (songs == null ) {
    throw new Error('The Song object was not set.');
  }

  // check if we have a title
  if (songs.title === null){
    throw new Error('The song object does not contain a title.');
  } else if (songs.artist === null) {
    throw new Error('The song object does not contain a artist.');
  } else if (songs.uri === null) {
    throw new Error('The song object does not contain a uri.');
  } 


  return songs;
}
