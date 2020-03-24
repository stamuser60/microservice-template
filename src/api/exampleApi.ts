import { Router } from 'express';

const router = Router();

/**
 * More docs
 *
 * @swagger
 * /api/v1/test-route/{username}:
 *  get:
 *   tags:
 *    - System
 *   description: Example of defining swagger docs
 *   parameters:
 *    - name: username
 *      description: Some string
 *      type: string
 *      in: path
 *      required: false
 *   produces:
 *    - application/json
 *   responses:
 *    200:
 *      description: OK
 *    401:
 *      description: Unauthorized
 */
router.get('/test-route/:username', async (req, res) => {
  const { username } = req.params;
  console.log(username);
  res.send({ username });
});

export default router;
