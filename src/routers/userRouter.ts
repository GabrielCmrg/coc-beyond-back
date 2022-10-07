import { Router } from 'express';

import { validationMiddlewares } from '../middlewares';
import { userSchemas } from '../schemas';
import { userController } from '../controllers';

const userRouter: Router = Router();

userRouter.post(
  '/signup',
  validationMiddlewares.validateBody(userSchemas.signupSchema),
  userController.registerNewUser,
);

export default userRouter;
