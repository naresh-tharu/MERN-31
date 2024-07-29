import Joi from 'joi'
class AuthController {
  register = (req, res, next) => {
    try {
      //name, email, password, phone,  address, role
      let data = req.body;
      const registerDTO = Joi.object({
        name:Joi.string().min(2).max(50).required(),
        email:Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$"
)),
        confirm_password: Joi.ref('password'),
        phone:Joi.string(),
        address:Joi.string(),
        role:Joi.string().regex(/^(seller|customer)$/).default("customer").required()
      });

      
      res.json({
        result: data,
        message: "User registered successfully",
        status: "REGISTERED_SUCCESS",
        meta: null,
      });
      
    } catch (exception) {
      console.log(exception);
    }
  };

  activateRegisteredUser = (req, res, next) => {
    try {
    } catch (exception) {
      console.log(exception);
    }
  };
  login = (req, res, next) => {
    try {
      /*TODO: Receive email and password as a body payload in json parse
      - validate if email or password is empty
          --> return error from next({}) mentioning if email not provided or password not provided.
      - if validation is passed
          ---> return success with message to the client    
      
      */
    } catch (exception) {
      console.log(exception);
    }
  };
  getLoggedInUser = (req, res, next) => {};
  forgetPassword = (req, res, next) => {
    try {
      /**
       * TODO: Logic
       * --> email receive
       *        -- validation
       *                --> get user
       *                      --> reset-token
       *                              --> email send to client
       *                                      --> response to client
       */
    } catch (exception) {
      console.log(exception);
    }
  };
  resetPassword = (req, res, next) => {
    try {
    } catch (exception) {
      console.log(exception);
    }
  };
  logout = (req, res, next) => {};
}
const authCtrl = new AuthController();
export default authCtrl;
