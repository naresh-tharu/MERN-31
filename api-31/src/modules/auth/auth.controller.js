class AuthController {
  register = (req, res, next) => {
    try {
      let data = req.body;
      console.log(data);
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
    } catch (exception) {
      console.log(exception);
    }
  };
  getLoggedInUser = (req, res, next) => {};
  forgetPassword = (req, res, next) => {
    try {
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
