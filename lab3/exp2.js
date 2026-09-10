import http from 'http'
import * as t from './exp2/teams.js'
import parseUrl from 'url'

const sendJSON = (res, statusCode, data) => {
    res.writeHead(statusCode, { "content-type": "application/json"})
    res.end(data === "undefined" ? "":JSON.stringify(data))
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

    const { pathname, query } = parseUrl(req.url, true)
    const { method } = req
    console.log('pathname: ', pathname)
    console.log('query: ', query)
    console.log('Method: ', method)

    if(pathname === '/api/vi/teams' && method === 'GET') {
        const{ total } = query
        let teams = t.getAllTeams()
        return sendJSON(res, 200, teams)
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(5000, ()=>{console.log("SIH server is running on http://localhost:5000")})