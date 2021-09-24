import jwt from 'jsonwebtoken';

// e.g. user wants to like a post
// click the like button => auth middleware (NEXT) => like controller...

const auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(
                token,
                'test',  // same secret used when creating token
            );

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
