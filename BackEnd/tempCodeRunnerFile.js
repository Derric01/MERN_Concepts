
app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})