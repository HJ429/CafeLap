
@Service
public class SignupService {

    @Autowired
    private SignupRes userRepository;
    @Autowired
    private CafeAddressRep cafeAddressRep;

    // ✨ 비밀번호 암호화용 BCrypt 객체 생성
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean isNicknameDuplicate(String nickname) {
        return userRepository.findByNickname(nickname).isPresent();
    }

   public boolean isUseridDuplicate(String userid) {
        return userRepository.findByUserid(userid).isPresent();
    }

    public String registerUser(SignupRequest request) {
        // 아이디 중복 확인
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return "아이디가 이미 존재합니다.";
        }

        // 이메일 중복 확인
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "이메일이 이미 사용 중입니다.";
        }

        // 닉네임 중복 체크
        if (userRepository.findByNickname(request.getNickname()).isPresent()) {
            return "닉네임이 이미 사용 중입니다.";
        }

        // 회원 정보 저장
        Users user = new Users();
        user.setUserid(request.getUserid());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setNickname(request.getNickname());
        // ✨ 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        user.setPassword(encodedPassword); // 암호화된 비밀번호 저장
        user.setUserType(request.getUserType() != null ? request.getUserType() : 0);

        Users savedUser = userRepository.save(user);

        //카페사장 주소 등록 저장
        if (savedUser.getUserType() == 1) {
            CafeAddress cafeAddress = new CafeAddress();
            cafeAddress.setUser(savedUser); // 저장된 유저 연결
            cafeAddress.setPostalCode(request.getPostalCode());
            cafeAddress.setAddress(request.getAddress());
            cafeAddress.setDetailAddress(request.getDetailAddress());

            cafeAddressRep.save(cafeAddress); // 주소 저장 💾
        }

        return "회원가입 성공!";
    }
}
