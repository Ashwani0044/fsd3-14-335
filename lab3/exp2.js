import http from 'http'
import * as t from './exp2/teams.js'

const sendJSON = (res, statusCode, data) => {
    res.writeHead(statusCode, { "content-type": "application/json"})
    res.end(data === "indefined" ? "":JSON.stringify(data))
}

const parseJSONBody = (req) => {
    new Promise((resolve, reject) => {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk.toString();
        })
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {})
            } catch(error) {
                reject(error)
            }
        });
    });
};

const server = http.createServer((req,res) => {
    // if(req.url === '/' && req.method == 'GET') {
    //     const teams = t.getAllTeams()
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.write(JSON.stringify(teams))
    //     res.end()
    // } else {
    //     res.statusCode = 404
    // }
})

server.listen(5000, ()=>{console.log("SIH server is running on http://localhost:5000")})