

@RestController
@RequestMapping("/api/users")
//@CrossOrigin(origins = "http://localhost:5173")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody SignupRequest request) {
        System.out.println("회원가입 요청: " + request);
        String result = signupService.registerUser(request);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/check-userid")
    public ResponseEntity<Boolean> checkUsername(@RequestParam String userid) {
        boolean isDuplicate = signupService.isUseridDuplicate(userid); // 아이디 중복 체크
        return ResponseEntity.ok(isDuplicate);
    }
    // 닉네임 중복 확인
    @GetMapping("/check-nickname")
    public ResponseEntity<Boolean> checkNickname(@RequestParam String nickname) {
        boolean isDuplicate = signupService.isNicknameDuplicate(nickname);
        return ResponseEntity.ok(isDuplicate);
    }
}
