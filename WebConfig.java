
@Configuration
public class WebConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true); // 쿠키 포함 요청 허용
        config.setAllowedOriginPatterns(Arrays.asList("http://localhost:5173")); // 동적 도메인 허용 가능 (보다 유연)
        config.setAllowedHeaders(Arrays.asList("*")); // 모든 헤더 허용
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // 메서드 허용
        config.addExposedHeader("Authorization"); // 클라이언트가 이 헤더를 읽을 수 있게

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // 모든 요청에 적용

        return new CorsFilter(source);
    }
}
