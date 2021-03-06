import axios from "axios"

// API TOKEN IS PUBLIC, PLEASE DON'T ABUSE. IT'S PERMISSIONS ARE READ ONLY. NO ACCESS TO PRIVATE REPOS
const authToken = import.meta.env.VITE_GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN

export async function getGithubData(){
    var response = await axios.get("https://api.github.com/users/andantillon/repos", {
        headers: {
            Authorization: `token ${authToken}`
        }
    })

    let data = []

    response = response.data.filter(repo => (repo.fork === false && repo.stargazers_count >= 1)).sort((a, b) => (a.stargazers_count - b.stargazers_count))

    for(var i=0; i<4; i++){
        data.push({
            name: response[i].full_name.replace(/_/g, "-"),
            url: response[i].html_url,
            stars: response[i].stargazers_count,
            language: response[i].language
        })
    }

    return data

    /*

        ** filter out forked repos
        ** max 4 repos

        return [
                    {
                        name
                        url
                        stars
                        description
                        language
                    }
                ]

    */

}