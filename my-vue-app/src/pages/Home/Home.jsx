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

  // Gọi API lấy dữ liệu game
  const handleApi = async () => {
    try {
      const handleRes = await (await fetch("http://localhost:3001/games")).json();
      setListSingleGame(handleRes);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  useEffect(() => {
    handleApi();
    return () => {};
  }, []);

  return (
    <>
      <div className="game single-player">
        <h2>Game 1 người chơi</h2>

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
              <SwiperSlide key={game.id}>
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
    </>
  );
};

export default Home;
