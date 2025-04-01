import React from "react";
import "./MyPage.css"; // 별도의 CSS 파일로 스타일링을 분리합니다.
import { useNavigate } from "react-router-dom";


const MyPage = () => {

  const [imageSrc, setImageSrc] = useState("src/pit/comm.jpg"); // 기본 이미지 경로

  const showChangePassword = () => {
    // 비밀번호 변경 로직
    console.log("비밀번호 변경");
  };

  const showChangeDob = () => {
    // 생년월일 수정 로직
    console.log("생년월일 수정");
  };

  const showChangeAddress = () => {
    // 주소 변경 로직
    console.log("주소 변경");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // 선택한 이미지를 미리보기로 표시
      };
      reader.readAsDataURL(file); // 파일 읽기
    }
  };

  // 아이콘 클릭 시 파일 선택 다이얼로그 열기
  const handleIconClick = () => {
    document.getElementById("file-input").click();
  };

  // const navigate = useNavigate();
  const deleteAccount = () => {
    // 회원 탈퇴 로직
    const confirmDelete = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirmDelete) {
      // 탈퇴 로직 실행 (예: 서버에 탈퇴 요청)
      console.log("회원 탈퇴");

      // 탈퇴 완료 후 메시지 표시 및 메인 화면으로 돌아가기
      alert("탈퇴되셨습니다.");
      
      // 메인 화면으로 이동 (여기서는 '/'가 메인 페이지로 가정)
      // navigate('/');
    } else {
      console.log("회원 탈퇴 취소");
    }
    };

  return (
    <div className="mypage-total-box">
      <div className="mypage-box-h1">
        <h1 className="mypage-h1">My Page</h1>
      </div>
      <section className="mypage-box-section">
        <div className="mypage-box">
          <div className="mypage-img-box-box">
          <img className="mypage-img-icon" src="src/pit/img icon2.png" alt="아이콘" onClick={handleIconClick} />
            <div className="mypage-img-box">
              <img className="mypage-img" src="src/pit/comm.jpg" alt="사진" />

            </div>
            <p className="mypage-img-box-p">비비빅 님! 환영합니다!</p>
          </div>
          <hr className="mypage-hr-1" />
          <div className="mypage-p-box">
            <p className="mypage-p">아이디 : hotdog</p>
          </div>
          <hr className="mypage-hr" />
          <div className="mypage-pwd-box">
            <p className="mypage-p-pwd">
              비밀번호 : 12344
              <button className="mypage-btn-pwd" onClick={showChangePassword}>
                비밀번호 변경
              </button>
            </p>
          </div>
          <hr className="mypage-hr" />
          <p className="mypage-p-bri">
            생년월일 : 2025-03-28
            <button className="mypage-btn-bri" onClick={showChangeDob}>
              생년월일 변경
            </button>
          </p>
          <hr className="mypage-hr" />
          <p className="mypage-p-adr">
            주소 : 부산 부산진구 양정동 쩐다빌라 204호
            <button className="mypage-btn-adr" onClick={showChangeAddress}>
              주소 변경
            </button>
          </p>
          <div className="mypage-bye-box">
            <button className="mypage-btn-bye" onClick={deleteAccount}>
              회원 탈퇴
            </button>
          </div>
        </div>
        <div className="mypage-posts-box">
          {/* <div className="empty-box"></div> */}
          <div className="mypage-posts">
            <h2 className="mypage-h2">내가 쓴 글</h2>
            <div className="mypage-posts-list">
              ...
              {/* 내가 쓴 글 리스트가 동적으로 여기에 표시됨 */}
            </div>
          </div>
          <hr className="mypage-hr2" />
          <div className="mypage-comments">
            <h2 className="mypage-h2">내가 쓴 댓글</h2>
            <div className="mypage-comments-list">
              ...
              {/* 내가 쓴 댓글 리스트가 동적으로 여기에 표시됨 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
