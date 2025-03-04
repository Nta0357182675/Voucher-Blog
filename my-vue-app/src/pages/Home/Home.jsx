import React, { useEffect, useState } from "react";
import "../../stylesCss/Home.css"; // Import file CSS
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper
import "swiper/css"; // CSS mặc định của Swiper
import "swiper/css/navigation"; // CSS cho nút điều hướng
import "swiper/css/pagination"; // CSS cho chấm trượt
import { Navigation, Pagination } from "swiper/modules"; // Import module Swiper

const Home = () => {
  // State lưu danh sách game
  const [listSingleGame, setListSingleGame] = useState([]);
  const [listSingleGameTop, setListSingleGameTop] = useState([]);

  // Gọi API lấy dữ liệu game
  const handleApi = async () => {
    try {
      const [gamesRes, gamesTop] = await Promise.all([
        fetch("http://localhost:3000/games").then(res => res.json()),
        fetch("http://localhost:3000/games?_limit=2").then(res => res.json())
      ]);

      setListSingleGame(gamesRes);
      setListSingleGameTop(gamesTop); // Giả sử bạn có state setListUsers để lưu dữ liệu từ API users
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };


  useEffect(() => {
    handleApi();
    return () => { };
  }, []);

  return (
    <>
      <div className="game single-player">
        <h2>Game đơn</h2>

        {/* Bọc danh sách game trong <ul> */}
        <ul className="game-list">
          <Swiper
            modules={[Navigation, Pagination]} // Kích hoạt điều hướng & chấm trượt
            spaceBetween={15} // Giảm khoảng cách giữa các game
            slidesPerView={4} // Hiển thị 4 game trên màn hình lớn
            navigation // Sử dụng mũi tên mặc định của Swiper
          // pagination={{ clickable: true }} // Hiển thị chấm trượt
          >
            {listSingleGame.map((game) => (
              <SwiperSlide key={game.id} className="SwiperSlide">
                <li className="boxgame">
                  <div className="imgName">
                    <img src={game.image} alt={game.name} />
                  </div>
                  <div className="info">
                    <h4>{game.name}</h4>
                    <div className="button">
                      <button className="play">Chơi thử</button>
                      <button className="design">Thiết kế</button>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
      <div className="game Love">
        <h2>Game được ưa chuộng</h2>
        <div className="Game-Content">
          <div className="favorite">
            <div className="imgName">
              <img src="https://i.pinimg.com/736x/7a/f8/b6/7af8b6af3550184e8043da064c9e4c0c.jpg" />
            </div>
            <div className="info">
              <h1>Black Myth Wukong</h1>
              <div className="button">
                <button className="play">Chơi thử</button>
                <button className="design">Thiết kế</button>
              </div>
            </div>
          </div>
          <div className="game-top">
            <ul className="game-list1">
              {listSingleGameTop.map((game) => (
                <li key={game.id} className="boxgame">
                  <div className="imgName">
                    <img src={game.image} alt={game.name} />
                  </div>
                  <div className="info">
                    <h4>{game.name}</h4>
                    <div className="button">
                      <button className="play">Chơi thử</button>
                      <button className="design">Thiết kế</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="game-list2">
              {listSingleGameTop.map((game) => (
                <li key={game.id} className="boxgame">
                  <div className="imgName">
                    <img src={game.image} alt={game.name} />
                  </div>
                  <div className="info">
                    <h4>{game.name}</h4>
                    <div className="button">
                      <button className="play">Chơi thử</button>
                      <button className="design">Thiết kế</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
