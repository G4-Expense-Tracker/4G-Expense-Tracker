import express from "express";
const router = express.Router();

router.get('/list', (req, res) => {

})

router.get('/:categoryId/list', (req, res) => {

})

router.post('/new', (req, res) => {

})

router.get('/:expenseId/view', (req, res) => {
    
})

router.post('/:expenseId/edit', (req, res) => {

})

router.post('/:expenseId/delete', (req, res) => {

})

router.get('/:categoryId/:startDate/:endDate/total', (req, res) => {
    
})

router.get('/:categoryId/comparison', (req, res) => {
    
})

router.get('/:startDate/:endDate/total', (req, res) => {
    
})

export default router;