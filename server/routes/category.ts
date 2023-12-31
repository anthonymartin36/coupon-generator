import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCatgories()
    console.log('Calling Categories')
    res.json({ category: categories.map((category) => category) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
