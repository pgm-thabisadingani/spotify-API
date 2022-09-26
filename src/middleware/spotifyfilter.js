export default (req, res, next) => {

  if (req.method){

    // if (req.method === 'GET' && true){
    //   next();
    //     } else {
    //   //Return a response immediately
    //   res.status(400).json({ message: "Bad request" });
    // }
      next();
    }

}