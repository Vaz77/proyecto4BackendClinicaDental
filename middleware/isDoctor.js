const isDoctor = async (req, res, next) => {
  try {

    if (req.roleId === 2) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: 'You do not have permissions',
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

module.exports = isDoctor;



// const isDoctor = async (req, res, next) => {
//   try {
//     console.log("................");
//     console.log(req.roleId);

//     if (req.roleId === 2) {
//       next();
//     } else {
//       return res.status(403).json({
//         success: true,
//         message: "You do not have permissions",
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

// module.exports = isDoctor;

// const isDoctor = async (req, res, next) => {
//     try {
//         if (req.user.role === 'Doctor') {
//         next();
//         } else {
//         return res.status(403).json({
//             success: false,
//             message: "You do not have permissions",
//         });
//         }
//     } catch (error) {
//         return res.status(500).json({
//         success: false,
//         message: "Something went wrong",
//         error: error.message,
//         });
//     }
//     };

//     module.exports = isDoctor;
