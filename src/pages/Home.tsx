import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import Header from "../components/Header"



export default function Home() {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetch("https://api.github.com/users/kumakou")
      .then((res) =>
        res.json()
      )
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])

  return (
    
    <div className="profile">
      {data !== null ? (
        <>
          <Header />
          <img src={data.avatar_url} className="profile-image-data" />
          <div className="profile-text-data">
            <h2>{data.login}</h2>
            <div>
              <p>フォロワー:{data.followers}人</p>
              <p>フォロー:{data.following}人</p>
            </div>
          </div>
          <div className="url">
            <a href={data.html_url}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" />
            </a>
          </div>
        </>
      ) : (
        <>
          <img src="https://i.stack.imgur.com/frlIf.png" className="profile-image-data" />
          <div className="profile-text-data">
            <h2>None</h2>
            <p>フォロワー:0人</p>
            <p>フォロー:0人</p>
          </div>
        </>
      )}
    </div>
  )
}
