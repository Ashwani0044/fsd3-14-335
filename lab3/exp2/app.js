import http from 'http'

const server = http.createServer((req,res) => {
    res.end("<h1> SIH Internal Hackathon!</h1>")
})

server.listen(5000, ()=>{console.log("Server is running on http://localhost:5000")})