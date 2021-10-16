import React, { useState, useEffect } from 'react';
import './Main.css';

function Main(props) {

  const rankingData = ["성남체육관", "압구정체육관", "신사체육관"];
  const [ranking, setRanking] = useState(rankingData[0]);

  const Ranking = () => {
    useEffect(() => {
      const id = setInterval(() => {
        let tmp = rankingData.indexOf(ranking);
        let changeIndex = rankingData.length - 1 === tmp 
        ? 0 
        : tmp + 1;
        setRanking(rankingData[changeIndex]);
      }, 3000);
      return () => clearInterval(id);
    }, []);

    return <h1> {rankingData.indexOf(ranking)}. {ranking}</h1>;
  };

  return(
      <>
        <div className="search">
          <div className="main_img"></div>
          <div className="main_search">
            <input placeholder="지역명 / 체육관명을 검색해주세요!"/>
          </div>
        </div>

        <div>
          <h2 className="main_title">HOT 체육관!</h2>
          <div className="main_rank">
            <Ranking />
          </div>
        </div>

        <div>
          <h2 className="main_title">접속 위치 주변 체육관</h2>
        </div>

        <div>
          <div className="main_box_group">
            <div className="main_box">체육관</div>
            <div className="main_box">체육관</div>
            <div className="main_box">체육관</div>
          </div>
          <div className="main_box_group">
            <div className="main_box">체육관</div>
            <div className="main_box">체육관</div>
            <div className="main_box">체육관</div>
          </div>
        </div>

        <div className="main_reservation">
          <div className="main_reservation_text1">
            그곳이 어디든 그곳이 몇시던
          </div>
          <div className="main_reservation_text2">
            언제 어디서든! SPANG!
          </div>
        </div>

        <div className="main_twobox">
          <div className="main_community">
            <div className="main_community_title">커뮤니티 새글</div>
            <div className="main_squre">
              {
                [1,2,3,4].map(function(a, i){
                  return (
                    <div className="main_community_content">
                      <text className="main_community_content_title"> {props.communityTitle[i]}</text>
                      <text className="main_community_content_time">{i + 1}분 전</text>
                      <div className="main_line"></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="main_notice">
            <div className="main_notice_title">공지사항</div>
            <div className="main_squre">
              {
                [1,2,3,4].map(function(a, i){
                  return (
                    <div className="main_notice_content">
                      <text className="main_notice_content_title"> {props.notice[i]}</text>
                      <text className="main_notice_content_time">{i + 1}분 전</text>
                      <div className="main_line"></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Main;