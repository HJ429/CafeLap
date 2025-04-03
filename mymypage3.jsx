import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 import
import "./mymypage3.css"; // 스타일시트

const MyPage = () => {
  const [imageSrc, setImageSrc] = useState("src/pit/comm2.jpg"); // 기본 이미지 경로
  const [activeSection, setActiveSection] = useState("profile"); // 기본적으로 프로필 섹션만 보이게 설정

  const showChangePassword = () => {
    console.log("비밀번호 변경");
  };

  const showChangeDob = () => {
    console.log("생년월일 수정");
  };

  const showChangeAddress = () => {
    console.log("주소 변경");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    document.getElementById("file-input").click();
  };

  const deleteAccount = () => {
    const confirmDelete = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirmDelete) {
      console.log("회원 탈퇴");
      alert("탈퇴되셨습니다.");
    } else {
      console.log("회원 탈퇴 취소");
    }
  };

  const toggleSection = (section) => {
    setActiveSection(section); // section 인자를 받아서 상태를 업데이트
};

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen); // 드롭다운 열기/닫기
};

  return (
    <div className="mypage-total-box">
      {/* 사이드바 */}
      <div className="mypage-sidebar">
        <h2 className="mypage-sidebar-title">My Page</h2>
        <ul className="mypage-sidebar-menu">
        <div className="mypage-img-box">
          <img className="mypage-img-2" src={imageSrc} alt="사진" />
          <p className="mypage-wecl-p">비비빅님,</p>
          <h2 className="mypage-wecl-h2">환영합니다 !</h2>
        </div>
        <li><a href="/profile" className="mypage-sidebar-item" onClick={() => toggleSection("profile")}>프로필
          <li><a href="#change-password"> - 비밀번호 변경</a></li>
          <li><a href="#change-password"> - 생년월일 변경</a></li>
          <li><a href="#change-password"> - 주 소 변경</a></li>
          </a></li>
        <li><a href="/posts" className="mypage-sidebar-item" onClick={() => toggleSection("posts-comments")}>내가 쓴 내역</a></li>
        <li><a href="/cafe-list" className="mypage-sidebar-item" onClick={() => toggleSection("cafelist")}>카페정보 수정</a></li>
        </ul>
        <div className="mypage-bye-box">
              <button className="mypage-btn-bye" onClick={deleteAccount}> 회원 탈퇴 </button>
            </div>
      </div>

      {/* 본문 영역 */}
      <div className="mypage-content">
        <section className="mypage-section"  id="profile">
          {activeSection === "profile" && (
            <>
            {/* 왼쪽 부분 */}
              <div className="mypage-box-profile">
                <div className="mypage-img-box-box">
                  <img className="mypage-img" src={imageSrc} alt="사진" />
                  <div className="mypage-img-box">
                  <img className="mypage-img-icon" src="src/pit/img-icon2.png" alt="아이콘" onClick={handleIconClick}/>
                  <input type="file" id="file-input" style={{ display: "none" }} onChange={handleImageChange} />
                </div>
                <p className="mypage-img-box-p">비비빅 님! 환영합니다!</p>
                </div>
            </div>
            {/* 오른쪽 부분 */}
            <div className="mypage-box-profile-2">
              <div className="mypage-p-total-box">
                  <div className="mypage-p-box">
                    <p className="mypage-p">아이디 : hotdog</p>
                  </div>
                  <hr className="mypage-hr" />
                  <div className="mypage-pwd-box">
                    <p className="mypage-p-pwd"> 비밀번호 : 12344 </p>
                  </div>
                  <hr className="mypage-hr" />
                  <div className="mypage-bri-box">
                  <p className="mypage-p-bri">  생년월일 : 2025-03-28 </p>
                  </div>
                  <hr className="mypage-hr" />
                  <div className="mypage-ddr-box">
                    <p className="mypage-p-adr"> 주소 : 부산 부산진구 양정동 쩐다빌라 204호</p>
                  </div>
              </div>
            </div>  
            </>
          )}
        </section>
        

        {activeSection === "posts-comments" && (
          <div className="mypage-posts" id="posts">
            <h2 className="mypage-h2">내가 쓴 글</h2>
            <div className="mypage-posts-list">...</div>
            <hr />
            <h2 className="mypage-h2">내가 쓴 댓글</h2>
            <div className="mypage-comments-list">...</div>
          </div>
        )}

        {activeSection === "cafelist" && (
          <div className="mypage-comments" id="comments">
            <h2 className="mypage-h2">카페 정보</h2>
            <div className="mypage-comments-list">...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
