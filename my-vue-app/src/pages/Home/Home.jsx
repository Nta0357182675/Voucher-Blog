import React, { useEffect, useState } from 'react'
import '../../stylesCss/Home.css';


const Home = () => {

  const [listSingleGame, setListSingleGame] = useState([])
  // call api dữ liệu game
  const handleApi = async () => {
    try {
      const handleRes = await (await fetch('http://localhost:3001/games')).json()
      setListSingleGame(handleRes)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }
  useEffect(() => {
    handleApi();;

    return () => {}; // Dọn dẹp timeout khi component unmount
  }, []);


  return (
    <>
      <div className='game single-player'>
        <h3>Game 1 người chơi</h3>
        <ul>
          {
            listSingleGame.map((game) => {
              return <li key={game.id} className='boxgame'>
                <div className='imgName'><img src={game.image} alt="" /></div>
                <div className='info'>
                  <h4>{game.name}</h4>
                  <div className='button'>
                    <button className='play'>Chơi thử</button>
                    <button className='design'>Thiết kế</button>
                  </div>
                </div>
              </li>
            })
          }
        </ul>
      </div>
      {/* <div className='game multiplayer'></div>
      <div className='favorite game'></div> */}
    </>
  )
}

export default Home
